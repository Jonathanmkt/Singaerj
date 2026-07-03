import { ArrowUpRight, UserRound, BadgeCheck } from "lucide-react";
import { Reveal } from "./Reveal";
import { WordReveal } from "./WordReveal";
import { SpotlightCard } from "./SpotlightCard";
import { WHATSAPP_ASSOCIADO, WHATSAPP_CIDADAO } from "@/data/site";

/**
 * CTA final de todas as páginas: o visitante indica o perfil
 * (cidadão ou associado) e cai no WhatsApp do sindicato.
 */
export function FaleConosco() {
  return (
    <section id="fale-conosco" className="grain relative overflow-hidden py-28">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 80% at 50% 100%, hsl(var(--brand) / 0.16) 0%, transparent 65%)",
        }}
      />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-neon">
              Fale conosco
            </p>
          </Reveal>
          <WordReveal
            as="h2"
            text="Comece indicando o seu perfil"
            highlight={[3, 4]}
            delay={0.1}
            className="mt-5 font-display text-4xl font-bold tracking-tight md:text-6xl"
          />
          <Reveal delay={0.3}>
            <p className="mt-5 text-muted-foreground">
              Atendimento direto pelo WhatsApp — (21) 3199-1949.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2">
          {[
            {
              label: "Cidadão",
              desc: "Dúvidas, denúncias e informações sobre o Rio Rotativo.",
              Icon: UserRound,
              href: WHATSAPP_CIDADAO,
              delay: 0.1,
            },
            {
              label: "Associado",
              desc: "Benefícios, agendamentos e atendimento ao guardador.",
              Icon: BadgeCheck,
              href: WHATSAPP_ASSOCIADO,
              delay: 0.22,
            },
          ].map(({ label, desc, Icon, href, delay }) => (
            <Reveal key={label} delay={delay}>
              <SpotlightCard>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col gap-6 p-9"
                >
                  <div className="flex items-start justify-between">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-neon/10 text-neon transition-all duration-500 group-hover:bg-neon group-hover:text-deep-1">
                      <Icon className="h-7 w-7" />
                    </span>
                    <ArrowUpRight className="h-6 w-6 text-muted-foreground transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-neon" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold tracking-tight">
                      {label}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                  </div>
                </a>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
