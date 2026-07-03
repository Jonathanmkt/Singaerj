import { CalendarCheck } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { FaleConosco } from "@/components/FaleConosco";
import { BENEFICIOS, WHATSAPP_URL } from "@/data/site";

export default function Beneficios() {
  return (
    <>
      <PageHero
        eyebrow="Para o associado e sua família"
        title="Benefícios"
        subtitle="Estamos sempre buscando oferecer mais aos nossos associados — saúde, lazer, assessoria e estrutura."
      />

      <section className="pb-28">
        <div className="container grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFICIOS.map((b, i) => (
            <Reveal key={b.titulo} delay={(i % 3) * 0.1}>
              <SpotlightCard className="group h-full">
                <article className="flex h-full flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={b.imagem}
                      alt={b.titulo}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    />
                    <span className="absolute left-5 top-5 rounded-full bg-deep-1/70 px-4 py-1.5 font-display text-xs font-bold tracking-[0.25em] text-neon backdrop-blur-md">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <h2 className="font-display text-xl font-bold tracking-tight">
                      {b.titulo}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {b.descricao}
                    </p>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-slide mt-7 inline-flex w-max items-center gap-2 font-display text-sm font-semibold text-neon"
                    >
                      <CalendarCheck className="h-4 w-4" />
                      Agendar
                    </a>
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
