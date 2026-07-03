import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { FaleConosco } from "@/components/FaleConosco";
import { HISTORIA } from "@/data/site";
import { cn } from "@/lib/utils";

function FatoCard({
  fato,
  index,
}: {
  fato: (typeof HISTORIA)[number];
  index: number;
}) {
  const [aberto, setAberto] = useState(false);
  const invertido = index % 2 === 1;

  return (
    <div className="relative lg:pl-24">
      {/* Nó da timeline */}
      <span
        aria-hidden
        className="absolute left-[26px] top-2 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-neon bg-deep-2 shadow-[0_0_18px_hsl(var(--neon)/0.6)] lg:block"
      />

      <Reveal>
        <article
          className={cn(
            "grid items-center gap-10 lg:grid-cols-2",
            invertido && "lg:[&>*:first-child]:order-2"
          )}
        >
          <div className="border-gradient lift group overflow-hidden rounded-3xl">
            <img
              src={fato.imagem}
              alt={fato.titulo}
              loading="lazy"
              className="aspect-[16/10] h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
          </div>

          <div>
            <span className="font-display text-6xl font-extrabold leading-none text-neon/15">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
              {fato.titulo}
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">{fato.resumo}</p>

            <AnimatePresence initial={false}>
              {aberto && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  {fato.detalhes.map((p) => (
                    <p
                      key={p.slice(0, 40)}
                      className="mt-4 leading-relaxed text-muted-foreground"
                    >
                      {p}
                    </p>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="button"
              onClick={() => setAberto((v) => !v)}
              className="link-slide mt-7 inline-flex items-center gap-2 font-display text-sm font-semibold text-neon"
            >
              {aberto ? "Ler menos" : "Ler mais"}
              <ChevronDown
                className={cn("h-4 w-4 transition-transform duration-300", aberto && "rotate-180")}
              />
            </button>
          </div>
        </article>
      </Reveal>
    </div>
  );
}

export default function Historia() {
  const trilhoRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  // Linha da timeline que "acende" conforme o scroll
  const { scrollYProgress } = useScroll({
    target: trilhoRef,
    offset: ["start 60%", "end 70%"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <>
      <PageHero
        eyebrow="1931 — hoje"
        title="Nossa História"
        subtitle="Conheça os fatos que construíram mais de 70 anos de respeito e confiança nas ruas do Rio de Janeiro."
      />

      <section className="pb-28">
        <div ref={trilhoRef} className="container relative">
          {/* Trilho vertical da timeline */}
          <div
            aria-hidden
            className="absolute bottom-0 left-[26px] top-0 hidden w-px bg-border lg:block"
          />
          <motion.div
            aria-hidden
            style={reduced ? undefined : { scaleY: lineScale }}
            className="absolute bottom-0 left-[26px] top-0 hidden w-px origin-top bg-gradient-to-b from-neon via-brand to-emerald lg:block"
          />

          <div className="flex flex-col gap-24">
            {HISTORIA.map((fato, i) => (
              <FatoCard key={fato.titulo} fato={fato} index={i} />
            ))}
          </div>
        </div>
      </section>

      <FaleConosco />
    </>
  );
}
