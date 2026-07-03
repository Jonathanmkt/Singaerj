import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { FaleConosco } from "@/components/FaleConosco";
import { NOTICIAS } from "@/data/site";

export default function Noticias() {
  return (
    <>
      <PageHero
        eyebrow="Ações e novidades"
        title="Notícias"
        subtitle="Acompanhe o trabalho do Singaerj nas ruas do Rio de Janeiro."
      />

      <section className="pb-28">
        <div className="container flex flex-col gap-24">
          {NOTICIAS.map((noticia) => (
            <Reveal key={noticia.slug}>
              <article className="mx-auto max-w-3xl">
                <p className="font-display text-xs font-bold uppercase tracking-[0.35em] text-neon">
                  {noticia.categoria}
                </p>
                <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
                  {noticia.titulo}
                </h2>
                <p className="mt-4 text-lg text-emerald">{noticia.subtitulo}</p>

                <div className="border-gradient lift mt-10 overflow-hidden rounded-3xl">
                  <img
                    src={noticia.imagem}
                    alt={noticia.titulo}
                    loading="lazy"
                    className="w-full object-cover"
                  />
                </div>

                <div className="mt-10 space-y-6">
                  {noticia.paragrafos.map((p) => (
                    <p
                      key={p.slice(0, 40)}
                      className="text-[1.05rem] leading-relaxed text-muted-foreground"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <FaleConosco />
    </>
  );
}
