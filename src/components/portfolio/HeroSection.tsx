import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Info, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import MoreInfoModal from "./MoreInfoModal";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const [isMoreInfoOpen, setIsMoreInfoOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(229,9,20,0.35),_transparent_55%),_radial-gradient(circle_at_80%_20%,_rgba(255,255,255,0.08),_transparent_45%),_linear-gradient(120deg,_#1a1a1a,_#0a0a0a_55%,_#040404)]" />
        <div className="absolute inset-0 hero-mask" />
        <div className="absolute inset-0 vignette" />
        <div className="absolute inset-0 film-grain pointer-events-none" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-28 pb-20">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <p className="text-sm uppercase tracking-[0.4em] text-primary mb-4">Top Pick For Recruiters</p>
            <h1 className="font-display text-6xl md:text-8xl leading-none mb-4">
              ANSH <span className="text-primary">KUMAR</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              Full-stack engineer building scalable, production-grade systems with a focus on performance, security, and reliability.
              <br />
              I design and ship end-to-end platforms used by real users, leveraging modern web technologies and cloud-native architectures.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <a
                href="https://drive.google.com/file/d/1z-6xf_cZYBMz_GR0xxBIUGH_fBk9CjKT/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg"
                >
                  <Play className="w-5 h-5 mr-2" /> View Resume
                </Button>
              </a>
              <Button
                size="lg"
                variant="secondary"
                className="bg-secondary/80 text-foreground px-8 py-6 text-lg"
                onClick={() => setIsMoreInfoOpen(true)}
              >
                <Info className="w-5 h-5 mr-2" /> More Info
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/anshkumar7542"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ansh-kumar111"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:kumaransh76890@gmail.com"
                className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-8 rounded-[2.5rem] bg-primary/20 blur-2xl" />
            <div className="relative rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl max-w-md mx-auto poster-glow rotate-[-2deg]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,_rgba(255,255,255,0.15),_transparent_40%)]" />
              <img
                src="/ansh.png"
                alt="Ansh Kumar"
                className="w-full h-[400px] sm:h-[460px] lg:h-[500px] object-cover object-[center_18%] scale-[1.08]"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 left-6 px-4 py-2 rounded-full bg-black/80 text-xs uppercase tracking-[0.3em] text-white">
              Now Streaming
            </div>
            <div className="absolute -top-6 right-10 px-3 py-2 rounded-full bg-primary text-primary-foreground text-xs font-semibold tracking-[0.2em]">
              TOP 10
            </div>
            <div className="absolute bottom-8 right-6 grid gap-2">
              <div className="px-4 py-2 rounded-lg bg-black/70 text-white text-xs uppercase tracking-[0.2em]">
                Full Stack
              </div>
              <div className="px-4 py-2 rounded-lg bg-black/70 text-white text-xs uppercase tracking-[0.2em]">
                MERN + Cloud
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      <MoreInfoModal isOpen={isMoreInfoOpen} onClose={() => setIsMoreInfoOpen(false)} />
    </section>
  );
};

export default HeroSection;
