import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

const messages = [];

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, timestamp: new Date().toISOString() });
});

const smtpHost = process.env.SMTP_HOST;
const smtpPort = Number(process.env.SMTP_PORT || 587);
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const mailTo = process.env.MAIL_TO || smtpUser;

const transporter = smtpHost && smtpUser && smtpPass
  ? nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    })
  : null;

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: "Missing fields." });
  }

  if (!transporter || !mailTo) {
    return res.status(500).json({ ok: false, error: "Email service not configured." });
  }

  const record = {
    id: messages.length + 1,
    name: String(name),
    email: String(email),
    message: String(message),
    receivedAt: new Date().toISOString(),
  };

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${smtpUser}>`,
      to: mailTo,
      replyTo: record.email,
      subject: `New message from ${record.name}`,
      text: `Name: ${record.name}\nEmail: ${record.email}\n\n${record.message}`,
    });

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
