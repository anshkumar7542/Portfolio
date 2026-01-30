import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { MediaRowItem } from "./MediaRow";

interface MediaModalProps {
  item: MediaRowItem | null;
  onClose: () => void;
}

const MediaModal = ({ item, onClose }: MediaModalProps) => {
  useEffect(() => {
    if (!item) return;
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
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-6 py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-3xl rounded-2xl border border-border bg-background shadow-2xl overflow-hidden max-h-[85vh] flex flex-col"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className={`h-56 ${item.gradient} relative`}>
              {item.imageUrl && (
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent" />
              <div className="absolute bottom-5 left-6">
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">{item.subtitle}</p>
                <h3 className="text-3xl font-display text-white">{item.title}</h3>
                <p className="text-sm text-white/70 mt-1">{item.timeline ?? item.meta}</p>
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-6 overflow-y-auto">
              <p className="text-muted-foreground">{item.longDescription ?? item.description}</p>

              {item.highlights && (
                <div>
                  <p className="uppercase tracking-[0.2em] text-xs text-muted-foreground mb-3">Highlights</p>
                  <ul className="space-y-2 text-sm text-foreground/90">
                    {item.highlights.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {item.stack && (
                <div>
                  <p className="uppercase tracking-[0.2em] text-xs text-muted-foreground mb-3">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {item.stack.map((tech) => (
                      <span key={tech} className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {item.links && (
                <div>
                  <p className="uppercase tracking-[0.2em] text-xs text-muted-foreground mb-3">Links</p>
                  <div className="flex flex-wrap gap-3">
                    {item.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
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

export default MediaModal;
