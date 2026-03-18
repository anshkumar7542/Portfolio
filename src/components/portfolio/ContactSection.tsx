import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://portfolio-idgh.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error ?? "Failed to send message.");
      }

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Unable to send",
        description: error instanceof Error ? error.message : "Please try again or reach out via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 relative bg-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-10"
        >
          <h2 className="font-display text-4xl md:text-5xl">Get In Touch</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-display text-3xl mb-3">
                Ready To Start The Next <span className="text-primary">Season</span>?
              </h3>
              <p className="text-muted-foreground">
                Let’s collaborate on a high-impact product, internship, or full-time opportunity.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-lg border border-border bg-secondary/60">
                <div className="flex items-center gap-3 mb-3 text-primary">
                  <Mail className="w-5 h-5" />
                  <span className="uppercase tracking-[0.2em] text-xs text-muted-foreground">Email</span>
                </div>
                <p className="text-sm font-medium">kumaransh76890@gmail.com</p>
              </div>
              <div className="p-5 rounded-lg border border-border bg-secondary/60">
                <div className="flex items-center gap-3 mb-3 text-primary">
                  <Phone className="w-5 h-5" />
                  <span className="uppercase tracking-[0.2em] text-xs text-muted-foreground">Phone</span>
                </div>
                <p className="text-sm font-medium">+91 7542037689</p>
              </div>
              <div className="p-5 rounded-lg border border-border bg-secondary/60 sm:col-span-2">
                <div className="flex items-center gap-3 mb-3 text-primary">
                  <MapPin className="w-5 h-5" />
                  <span className="uppercase tracking-[0.2em] text-xs text-muted-foreground">Location</span>
                </div>
                <p className="text-sm font-medium">Jalandhar, Punjab</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/anshkumar7542"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ansh-kumar111"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-secondary/40 border border-border rounded-2xl p-6 md:p-8 glow-red"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-secondary border-border focus:border-primary h-12"
              />
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-secondary border-border focus:border-primary h-12"
              />
              <Textarea
                name="message"
                placeholder="Tell me about your project or role."
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="bg-secondary border-border focus:border-primary resize-none"
              />
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : (
                  <>
                    <Send className="w-5 h-5 mr-2" /> Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
