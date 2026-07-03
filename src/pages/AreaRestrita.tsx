import { Lock, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { FaleConosco } from "@/components/FaleConosco";
import { AREA_RESTRITA_URL } from "@/data/site";

export default function AreaRestrita() {
  return (
    <>
      <PageHero
        eyebrow="Acesso interno"
        title="Área Restrita"
        subtitle="Espaço exclusivo para as equipes do Singaerj."
      />

      <section className="pb-28">
        <div className="container">
          <Reveal>
            <SpotlightCard className="mx-auto max-w-md">
              <div className="flex flex-col items-center gap-7 p-12 text-center">
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-neon/10 text-neon">
                  <Lock className="h-8 w-8" />
                </span>
                <div>
                  <h2 className="font-display text-2xl font-bold tracking-tight">
                    Encarregado
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Clique abaixo e acesse sua conta.
                  </p>
                </div>
                <a
                  href={AREA_RESTRITA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full bg-neon px-9 py-4 font-display text-sm font-semibold text-deep-1 transition-all hover:glow-cream"
                >
                  Acessar
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1.5" />
                </a>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </section>

      <FaleConosco />
    </>
  );
}
