import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Film } from "lucide-react";

interface MoreInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const strengths = [
  "Strong Problem-Solving: Able to break down complex technical challenges into structured, solvable components.",
  "Fast Learner: Quickly adapts to new technologies, frameworks, and systems with minimal ramp-up time.",
  "Ownership Mindset: Takes responsibility for end-to-end delivery and ensures high-quality, production-ready outcomes.",
  "Attention to Code Quality: Focused on clean, maintainable, and scalable code aligned with best engineering practices.",
  "Resilience Under Pressure: Performs effectively in high-expectation environments and tight delivery timelines.",
];

const weaknesses = [
  "Over-Detailing: Sometimes spend extra time refining edge cases and optimizations; actively improving time-boxing to balance speed and quality.",
  "Delegation Hesitation: Tend to take on too much ownership; working on distributing tasks more effectively in team settings.",
];

const hobbies = [
  "Competitive Programming & DSA Practice – Solving algorithmic problems to sharpen logical thinking.",
  "Building Side Projects – Experimenting with new tech stacks and system designs.",
  "Tech Reading & System Design Content – Following engineering blogs, architecture case studies, and best practices.",
  "Fitness & Mindfulness – Maintaining physical and mental discipline to support long-term performance.",
];

const MoreInfoModal = ({ isOpen, onClose }: MoreInfoModalProps) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-6 py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-4xl rounded-2xl border border-border bg-background shadow-2xl overflow-hidden"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="h-52 bg-gradient-to-br from-black via-neutral-900 to-black relative">
              <img
                src="/ansh3.png"
                alt="Ansh Kumar"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                  <Film className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">Now Playing</p>
                  <h3 className="text-3xl font-display text-white">My Storyline</h3>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-8">
              <div>
                <p className="uppercase tracking-[0.2em] text-xs text-muted-foreground mb-4">Strengths</p>
                <div className="space-y-3">
                  {strengths.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex gap-3 items-start"
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                      <p className="text-sm text-foreground/90">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <p className="uppercase tracking-[0.2em] text-xs text-muted-foreground mb-4">Weaknesses</p>
                <div className="space-y-3">
                  {weaknesses.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex gap-3 items-start"
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                      <p className="text-sm text-foreground/90">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <p className="uppercase tracking-[0.2em] text-xs text-muted-foreground mb-4">Hobbies</p>
                <div className="space-y-3">
                  {hobbies.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex gap-3 items-start"
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                      <p className="text-sm text-foreground/90">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 h-10 w-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MoreInfoModal;
