import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface MediaRowItem {
  title: string;
  subtitle: string;
  description: string;
  meta?: string;
  tags?: string[];
  gradient: string;
  href?: string;
  longDescription?: string;
  highlights?: string[];
  timeline?: string;
  stack?: string[];
  links?: { label: string; href: string }[];
  imageUrl?: string;
}

interface MediaRowProps {
  title: string;
  items: MediaRowItem[];
  onItemClick?: (item: MediaRowItem) => void;
  enableWheelScroll?: boolean;
  cardClassName?: string;
  imageClassName?: string;
}

const MediaRow = ({
  title,
  items,
  onItemClick,
  enableWheelScroll,
  cardClassName,
  imageClassName,
}: MediaRowProps) => {
  const rowRef = useRef<HTMLDivElement | null>(null);

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (!enableWheelScroll || !rowRef.current) return;
    if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
      event.preventDefault();
      rowRef.current.scrollLeft += event.deltaY;
    }
  };

  const scrollByAmount = (amount: number) => {
    if (!rowRef.current) return;
    rowRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="py-10 md:py-14">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-4"
        >
          <h2 className="font-display text-3xl md:text-4xl">{title}</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
        </motion.div>

        <div className="row-fade relative">
          <div
            ref={rowRef}
            onWheel={handleWheel}
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth snap-x snap-mandatory"
          >
            {items.map((item, index) => (
              <motion.article
                key={`${item.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`group relative flex-shrink-0 card-hover snap-start ${cardClassName ?? "w-[230px] sm:w-[260px] md:w-[280px]"}`}
              >
                {onItemClick ? (
                  <button
                    type="button"
                    onClick={() => onItemClick(item)}
                    className="block text-left w-full cursor-pointer"
                  >
                    <div
                      className={`relative rounded-lg overflow-hidden border border-border ${item.gradient} ${imageClassName ?? "h-40 md:h-44"}`}
                    >
                      {item.imageUrl && (
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="absolute inset-0 h-full w-full object-cover"
                          loading="lazy"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                          {item.subtitle}
                        </p>
                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      </div>
                    </div>

                    <div className="pt-3 space-y-2">
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                      {item.meta && (
                        <p className="text-xs text-primary font-semibold tracking-[0.2em] uppercase">
                          {item.meta}
                        </p>
                      )}
                      {item.tags && (
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[11px] px-2 py-1 rounded-full bg-secondary text-muted-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </button>
                ) : (
                  <div>
                    <div
                      className={`relative rounded-lg overflow-hidden border border-border ${item.gradient} ${imageClassName ?? "h-40 md:h-44"}`}
                    >
                      {item.imageUrl && (
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="absolute inset-0 h-full w-full object-cover"
                          loading="lazy"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                          {item.subtitle}
                        </p>
                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      </div>
                    </div>

                    <div className="pt-3 space-y-2">
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                      {item.meta && (
                        <p className="text-xs text-primary font-semibold tracking-[0.2em] uppercase">
                          {item.meta}
                        </p>
                      )}
                      {item.tags && (
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[11px] px-2 py-1 rounded-full bg-secondary text-muted-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </motion.article>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollByAmount(-320)}
            className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/70 text-white border border-white/10 hover:bg-black/90 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByAmount(320)}
            className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/70 text-white border border-white/10 hover:bg-black/90 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MediaRow;
