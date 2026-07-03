import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Lock, MessageCircle } from "lucide-react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { NAV_LINKS, WHATSAPP_URL } from "@/data/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Barra de progresso de leitura no topo
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "glass-strong shadow-2xl shadow-deep-1/60" : "bg-transparent"
      )}
    >
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="absolute inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r from-brand via-neon to-emerald"
      />

      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src="/images/logo.png"
            alt="Singaerj — Sindicato dos Guardadores de Automóveis do Estado do Rio de Janeiro e Região"
            className="h-11 w-auto transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </Link>

        {/* Navegação desktop */}
        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                cn(
                  "link-slide font-display text-[14px] font-medium tracking-tight transition-colors",
                  isActive ? "text-neon" : "text-foreground/65 hover:text-foreground"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}

          <NavLink
            to="/area-restrita"
            aria-label="Área Restrita"
            className={({ isActive }) =>
              cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-full border transition-all",
                isActive
                  ? "border-neon text-neon"
                  : "border-border text-foreground/55 hover:border-neon/50 hover:text-neon"
              )
            }
          >
            <Lock className="h-4 w-4" />
          </NavLink>
        </nav>

        {/* Botão menu mobile */}
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Menu mobile em tela cheia */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="glass-strong fixed inset-0 top-20 lg:hidden"
          >
            <div className="container flex h-full flex-col justify-between py-10">
              <div className="flex flex-col gap-2">
                {[...NAV_LINKS, { label: "Área Restrita", to: "/area-restrita" }].map(
                  (link, i) => (
                    <motion.div
                      key={link.to}
                      initial={{ opacity: 0, x: -28 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.06 * i, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <NavLink
                        to={link.to}
                        end={link.to === "/"}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          cn(
                            "block py-2 font-display text-3xl font-bold tracking-tight",
                            isActive ? "text-neon" : "text-foreground/85"
                          )
                        }
                      >
                        {link.label}
                      </NavLink>
                    </motion.div>
                  )
                )}
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-neon px-8 py-4 font-display font-semibold text-deep-1"
              >
                <MessageCircle className="h-5 w-5" />
                Fale Conosco
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
