import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { WordReveal } from "./WordReveal";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

/** Cabeçalho das páginas internas. */
export function PageHero({ eyebrow, title, subtitle, children }: PageHeroProps) {
  return (
    <section className="grain relative overflow-hidden pb-16 pt-24">
      <div className="container relative">
        <Reveal>
          <p className="inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.3em] text-neon">
            {eyebrow}
          </p>
        </Reveal>
        <WordReveal
          as="h1"
          text={title}
          delay={0.1}
          className="mt-5 font-display text-5xl font-bold tracking-tight md:text-7xl"
        />
        {subtitle && (
          <Reveal delay={0.35}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {subtitle}
            </p>
          </Reveal>
        )}
        {children}
        <div className="hairline mt-14" />
      </div>
    </section>
  );
}
