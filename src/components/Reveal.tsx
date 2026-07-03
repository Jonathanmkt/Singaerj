import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  blur?: boolean;
  className?: string;
  /** Anima no mount (sempre, inclusive em refresh) em vez de esperar entrar na viewport. */
  immediate?: boolean;
}

/** Entrada suave ao rolar, com desfoque opcional (respeita prefers-reduced-motion). */
export function Reveal({
  children,
  delay = 0,
  y = 32,
  blur = false,
  className,
  immediate = false,
}: RevealProps) {
  const reduced = useReducedMotion();

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

  if (reduced) return <div className={className}>{children}</div>;

  const hidden = { opacity: 0, y, filter: blur ? "blur(10px)" : "none" };
  const visible = { opacity: 1, y: 0, filter: "blur(0px)" };
  const trigger = immediate
    ? { animate: shown ? visible : hidden }
    : { whileInView: visible, viewport: { once: true, margin: "-80px" } as const };

  return (
    <motion.div
      className={className}
      initial={hidden}
      {...trigger}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
