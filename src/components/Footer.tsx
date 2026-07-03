import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";
import { NAV_LINKS, SOCIAL, WHATSAPP_URL } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-deep-1">
      <div className="container relative grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <img src="/images/logo.png" alt="Singaerj" className="h-12 w-auto" loading="lazy" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Sindicato dos Guardadores de Automóveis do Estado do Rio de Janeiro e
            Região. Respeito e confiança desde 1949.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold text-neon transition-colors hover:text-foreground"
          >
            <MessageCircle className="h-4 w-4" />
            (21) 3199-1949
          </a>
        </div>

        <nav aria-label="Rodapé" className="flex flex-col gap-2.5 md:pt-2">
          <p className="mb-2 font-display text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
            Navegação
          </p>
          {[...NAV_LINKS, { label: "Área Restrita", to: "/area-restrita" }].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="link-slide w-max font-display text-sm font-medium text-foreground/65 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="md:pt-2">
          <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
            Acompanhe
          </p>
          <div className="flex gap-3">
            {[
              { href: SOCIAL.facebook, label: "Facebook", Icon: Facebook },
              { href: SOCIAL.instagram, label: "Instagram", Icon: Instagram },
              { href: SOCIAL.youtube, label: "YouTube", Icon: Youtube },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="lift inline-flex h-12 w-12 items-center justify-center rounded-full border border-border text-foreground/60 hover:border-neon/50 hover:text-neon"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/5 py-6">
        <p className="container text-center text-xs text-muted-foreground">
          Copyright © {new Date().getFullYear()} Singaerj — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
