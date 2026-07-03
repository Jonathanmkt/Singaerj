import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface WordRevealProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  delay?: number;
  /** Palavras (1-based não; índices 0-based) que recebem o degradê lima. */
  highlight?: number[];
  /** Anima no mount (sempre, inclusive em refresh) em vez de esperar entrar na viewport. */
  immediate?: boolean;
}

/**
 * Título cinematográfico: cada palavra sobe de um "clip" com stagger,
 * como em sites premiados. Palavras destacadas ganham degradê lima.
 */
export function WordReveal({
  text,
  as: Tag = "h2",
  className,
  delay = 0,
  highlight = [],
  immediate = false,
}: WordRevealProps) {
  const reduced = useReducedMotion();
  const words = text.split(" ");

  // Em modo "immediate", disparamos via mudança de estado pós-mount — assim a
  // animação roda sempre (inclusive em refresh), ignorando o contexto
  // initial={false} do AnimatePresence herdado do App.
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (immediate) {
      const id = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(id);
    }
  }, [immediate]);

  return (
    <Tag className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden className="inline">
        {words.map((word, i) => {
          const trigger = immediate
            ? { animate: shown ? { y: 0 } : { y: "110%" } }
            : {
                whileInView: { y: 0 },
                viewport: { once: true, margin: "-60px" } as const,
              };
          return (
            <span
              key={`${word}-${i}`}
              className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom"
            >
              <motion.span
                className={cn(
                  "inline-block will-change-transform",
                  highlight.includes(i) && "text-gradient-cream"
                )}
                initial={reduced ? false : { y: "110%" }}
                {...trigger}
                transition={{
                  duration: 0.8,
                  delay: delay + i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word}
              </motion.span>
              {i < words.length - 1 && <span>&nbsp;</span>}
            </span>
          );
        })}
      </span>
    </Tag>
  );
}
