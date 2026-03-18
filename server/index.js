import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

const messages = [];

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, timestamp: new Date().toISOString() });
});

const resendApiKey = process.env.RESEND_API_KEY;
const mailFrom = process.env.MAIL_FROM;
const mailTo = process.env.MAIL_TO;

const isValidEmail = (value) => /\S+@\S+\.\S+/.test(value);

const sendViaResend = async ({ name, email, message }) => {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: mailFrom,
      to: [mailTo],
      reply_to: email,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Resend request failed: ${response.status} ${errorBody}`);
  }
};

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: "Missing fields." });
  }

  if (!isValidEmail(String(email))) {
    return res.status(400).json({ ok: false, error: "Invalid email address." });
  }

  if (!resendApiKey || !mailFrom || !mailTo) {
    return res.status(500).json({
      ok: false,
      error: "Email service not configured. Set RESEND_API_KEY, MAIL_FROM, and MAIL_TO.",
    });
  }

  const record = {
    id: messages.length + 1,
    name: String(name),
    email: String(email),
    message: String(message),
    receivedAt: new Date().toISOString(),
  };

  try {
    await sendViaResend(record);

    messages.push(record);
    console.log("New portfolio message:", record);
    return res.status(201).json({ ok: true });
  } catch (error) {
    console.error("Email send failed:", error);
    return res.status(500).json({ ok: false, error: "Failed to send email." });
  }
});

app.get("/api/messages", (_req, res) => {
  res.json({ ok: true, data: messages });
});

app.listen(PORT, () => {
  console.log(`Portfolio API running on http://localhost:${PORT}`);
});
