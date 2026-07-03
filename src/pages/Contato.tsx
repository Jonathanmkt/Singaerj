import { Facebook, Instagram, Youtube, Phone, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { FaleConosco } from "@/components/FaleConosco";
import { SOCIAL, WHATSAPP_URL } from "@/data/site";

export default function Contato() {
  return (
    <>
      <PageHero
        eyebrow="Atendimento e redes"
        title="Contato"
        subtitle="Fale com o Singaerj pelo WhatsApp ou acompanhe o dia a dia do sindicato nas redes sociais."
      />

      <section className="pb-28">
        <div className="container grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "WhatsApp", detail: "(21) 3199-1949", href: WHATSAPP_URL, Icon: Phone },
            { label: "Facebook", detail: "/SINGAERJ1949", href: SOCIAL.facebook, Icon: Facebook },
            { label: "Instagram", detail: "@singaerj", href: SOCIAL.instagram, Icon: Instagram },
            { label: "YouTube", detail: "Canal Singaerj", href: SOCIAL.youtube, Icon: Youtube },
          ].map(({ label, detail, href, Icon }, i) => (
            <Reveal key={label} delay={i * 0.08}>
              <SpotlightCard className="h-full">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col gap-8 p-8"
                >
                  <div className="flex items-start justify-between">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-neon/10 text-neon transition-all duration-500 group-hover:bg-neon group-hover:text-deep-1">
                      <Icon className="h-6 w-6" />
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-neon" />
                  </div>
                  <div>
                    <h2 className="font-display text-lg font-bold tracking-tight">
                      {label}
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground">{detail}</p>
                  </div>
                </a>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      <FaleConosco />
    </>
  );
}
