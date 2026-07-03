import { ExternalLink } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { FaleConosco } from "@/components/FaleConosco";
import { LEGISLACAO } from "@/data/site";

export default function Legislacao() {
  return (
    <>
      <PageHero
        eyebrow="Amparo legal da categoria"
        title="Legislação"
        subtitle="As leis e decretos que oficializam a profissão de Guardador de Automóveis e reconhecem o Singaerj."
      />

      <section className="pb-28">
        <div className="container grid gap-6 lg:grid-cols-3">
          {LEGISLACAO.map((lei, i) => (
            <Reveal key={lei.numero} delay={i * 0.12}>
              <SpotlightCard className="group h-full">
                <article className="flex h-full flex-col">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={lei.imagem}
                      alt={`${lei.categoria} ${lei.numero}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-1/95 via-deep-1/30 to-transparent" />
                    <div className="absolute bottom-5 left-6 right-6">
                      <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-neon">
                        {lei.categoria}
                      </p>
                      <p className="mt-1 font-display text-3xl font-extrabold tracking-tight">
                        {lei.numero}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                      {lei.descricao}
                    </p>
                    <a
                      href={lei.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-slide mt-7 inline-flex w-max items-center gap-2 font-display text-sm font-semibold text-neon"
                    >
                      {lei.linkLabel}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    {lei.observacao && (
                      <p className="mt-3 text-xs text-muted-foreground/70">{lei.observacao}</p>
                    )}
                  </div>
                </article>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      <FaleConosco />
    </>
  );
}
