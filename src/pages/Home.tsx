import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, PlayCircle, Scale } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { WordReveal } from "@/components/WordReveal";
import { CountUp } from "@/components/CountUp";
import { Marquee } from "@/components/Marquee";
import { SpotlightCard } from "@/components/SpotlightCard";
import { BenefitsSlider } from "@/components/BenefitsSlider";
import { FaleConosco } from "@/components/FaleConosco";
import { STATS, YOUTUBE_VIDEO_ID } from "@/data/site";

export default function Home() {
  return (
    <>
      {/* ============ HERO — foto do Rio revelada à direita ============ */}
      <section className="relative flex min-h-[78svh] items-center overflow-hidden pb-5 pt-20">
        {/* Foto de fundo, full-bleed, com zoom lento */}
        <div
          aria-hidden
          className="ken-burns absolute inset-0 bg-cover bg-[position:65%_center]"
          style={{ backgroundImage: "url(/images/hero-bg.jpg)" }}
        />

        {/* Camada escura à esquerda que revela a foto progressivamente à direita */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, hsl(var(--deep-1) / 0.97) 0%, hsl(var(--deep-1) / 0.94) 24%, hsl(var(--deep-1) / 0.72) 42%, hsl(var(--deep-1) / 0.28) 62%, transparent 82%)",
          }}
        />
        {/* Vinheta sutil de topo/base — mantém o lado direito limpo */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-deep-1/45 via-transparent to-deep-2/70"
        />

        <div className="container relative">
          <div className="max-w-xl">
            <Reveal delay={0.05} immediate>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-deep-1/50 px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-[0.25em] text-neon backdrop-blur-md">
                <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-neon" />
                Sindicato dos Guardadores · Rio de Janeiro
              </p>
            </Reveal>

            <WordReveal
              as="h1"
              text="Respeito e Confiança desde 1949"
              highlight={[0, 2]}
              delay={0.15}
              immediate
              className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl"
            />

            <Reveal delay={0.5} immediate>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
                A instituição que organiza, protege e representa os guardadores de
                automóveis do Rio de Janeiro há mais de 70 anos.
              </p>
            </Reveal>

            <Reveal delay={0.65} immediate>
              <div className="mt-9 flex flex-wrap items-center gap-6">
                <Link
                  to="/beneficios"
                  className="group inline-flex items-center gap-2 rounded-full bg-neon px-7 py-3.5 font-display text-sm font-semibold text-deep-1 transition-all hover:glow-cream"
                >
                  Conhecer benefícios
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/historia"
                  className="link-slide font-display text-sm font-semibold text-foreground/80"
                >
                  Nossa história
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Marquee
        items={[
          "Respeito e Confiança",
          "Desde 1949",
          "Sistema Rio Rotativo",
          "Saúde e Lazer",
          "Representação legítima",
        ]}
      />

      {/* ============ NÚMEROS ============ */}
      <section className="relative py-24">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-3">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.1}>
                <SpotlightCard>
                  <div className="p-9">
                    <p className="font-display text-5xl font-bold tracking-tight text-foreground md:text-6xl">
                      <CountUp to={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ NOSSA HISTÓRIA — foto da manifestação ============ */}
      <section className="relative overflow-hidden py-24">
        <div className="container">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <img
                src="/images/historia-home.jpg"
                alt="Manifestação coletiva dos guardadores de automóveis do Rio de Janeiro"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-r from-deep-1 via-deep-1/80 to-deep-1/10"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-deep-1/70 to-transparent"
              />

              <div className="relative max-w-xl p-8 py-16 md:p-14 md:py-24">
                <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-neon">
                  Nossa história
                </p>
                <WordReveal
                  as="h2"
                  text="Uma categoria unida há mais de 70 anos"
                  highlight={[1, 2]}
                  delay={0.1}
                  className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight md:text-5xl"
                />
                <Reveal delay={0.3}>
                  <p className="mt-6 max-w-md text-lg leading-relaxed text-foreground/80">
                    Da criação da profissão em 1931 às grandes mobilizações pelas
                    ruas do Rio, os guardadores construíram uma trajetória de
                    respeito, organização e luta pelos seus direitos.
                  </p>
                </Reveal>
                <Reveal delay={0.45}>
                  <Link
                    to="/historia"
                    className="group mt-9 inline-flex items-center gap-2 rounded-full bg-neon px-7 py-3.5 font-display text-sm font-semibold text-deep-1 transition-all hover:glow-cream"
                  >
                    Conhecer a história completa
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Reveal>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ PROGRAMA DE REESTRUTURAÇÃO ============ */}
      <section className="grain relative overflow-hidden py-24">
        <div className="container relative grid items-center gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-neon">
                O que estamos fazendo?
              </p>
            </Reveal>
            <WordReveal
              as="h2"
              text="Iniciamos um Programa de Reestruturação"
              highlight={[2, 4]}
              delay={0.1}
              className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight md:text-5xl"
            />
            <Reveal delay={0.35}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
                Resgatar a autoestima do guardador e a eficiência do Sistema Rio
                Rotativo: esse é o novo momento do Singaerj. Assista e conheça o
                programa.
              </p>
            </Reveal>
            <Reveal delay={0.5}>
              <a
                href={`https://www.youtube.com/watch?v=${YOUTUBE_VIDEO_ID}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-3 font-display text-sm font-semibold text-neon"
              >
                <PlayCircle className="h-7 w-7 transition-transform duration-500 group-hover:scale-110" />
                <span className="link-slide">Assista ao vídeo</span>
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="border-gradient lift relative overflow-hidden rounded-2xl">
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}`}
                  title="Programa de Reestruturação do Singaerj"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ BENEFÍCIOS (preview) ============ */}
      <section className="relative overflow-hidden py-24">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 60% at 0% 50%, hsl(var(--teal) / 0.1) 0%, transparent 60%)",
          }}
        />
        <div className="container relative">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div className="max-w-2xl">
              <Reveal>
                <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-neon">
                  O que oferecemos?
                </p>
              </Reveal>
              <WordReveal
                as="h2"
                text="Benefícios de saúde e lazer para o associado e sua família"
                highlight={[0]}
                delay={0.1}
                className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight md:text-4xl"
              />
            </div>
            <Reveal delay={0.3}>
              <Link
                to="/beneficios"
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-display text-sm font-semibold text-foreground/85 transition-all hover:border-neon/50 hover:text-neon"
              >
                Ver todos
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14">
            <BenefitsSlider />
          </div>
        </div>
      </section>

      {/* ============ LEGISLAÇÃO (faixa) ============ */}
      <section className="relative overflow-hidden border-y border-white/5 bg-deep-1/50 py-20">
        <div className="container grid items-center gap-10 lg:grid-cols-[auto_1fr_auto]">
          <Reveal>
            <span className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-neon/10 text-neon">
              <Scale className="h-9 w-9" />
            </span>
          </Reveal>
          <div>
            <Reveal delay={0.1}>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-neon">
                Legislação
              </p>
            </Reveal>
            <WordReveal
              as="h2"
              text="Uma profissão reconhecida por lei desde 1975"
              highlight={[3, 4, 5, 6]}
              delay={0.15}
              className="mt-3 max-w-2xl font-display text-2xl font-bold leading-tight tracking-tight md:text-3xl"
            />
          </div>
          <Reveal delay={0.3}>
            <Link
              to="/legislacao"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-display text-sm font-semibold text-foreground/85 transition-all hover:border-neon/50 hover:text-neon"
            >
              Conhecer as leis
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      <FaleConosco />
    </>
  );
}
