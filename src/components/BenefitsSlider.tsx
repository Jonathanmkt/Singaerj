import { useEffect, useRef } from "react";
import { CalendarCheck } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";
import { BENEFICIOS } from "@/data/site";

interface CardProps {
  beneficio: (typeof BENEFICIOS)[number];
  index: number;
  clone?: boolean;
}

function BenefitCard({ beneficio, index, clone }: CardProps) {
  return (
    <div aria-hidden={clone} className="w-[280px] shrink-0 select-none sm:w-[320px]">
      <SpotlightCard className="group/card h-full">
        <article className="flex h-full flex-col">
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src={beneficio.imagem}
              alt={clone ? "" : beneficio.titulo}
              loading="lazy"
              draggable={false}
              className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover/card:scale-110"
            />
            <span className="absolute left-4 top-4 rounded-full bg-deep-1/70 px-3 py-1 font-display text-xs font-semibold text-neon backdrop-blur-md">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <div className="flex flex-1 flex-col p-6">
            <h3 className="font-display text-lg font-bold tracking-tight">
              {beneficio.titulo}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {beneficio.descricao}
            </p>
            <a
              href={beneficio.agendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={clone ? -1 : undefined}
              className="link-slide mt-5 inline-flex w-max items-center gap-2 font-display text-sm font-semibold text-neon"
            >
              <CalendarCheck className="h-4 w-4" />
              Agendar
            </a>
          </div>
        </article>
      </SpotlightCard>
    </div>
  );
}

/**
 * Carrossel de benefícios: movimento contínuo automático + arrastar (click-drag
 * no mouse, swipe no touch). O auto-scroll pausa no hover e durante a interação,
 * e retoma sozinho após um instante de inatividade.
 */
export function BenefitsSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const hover = useRef(false);
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });
  const lastInteract = useRef(0);
  const pos = useRef(0); // posição acumulada em float (scrollLeft arredonda p/ inteiro)

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const speed = 0.5; // px por frame (~30px/s) — deslize sutil e premium
    let raf = 0;

    const loop = () => {
      const idle = performance.now() - lastInteract.current > 900;
      const auto = !reduce && !hover.current && !drag.current.active && idle;

      if (auto) {
        const half = el.scrollWidth / 2;
        pos.current += speed;
        if (half > 0 && pos.current >= half) pos.current -= half;
        el.scrollLeft = pos.current;
      } else {
        // Enquanto pausado (hover/arraste/scroll nativo), acompanha a posição real
        pos.current = el.scrollLeft;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const el = () => trackRef.current;

  const onPointerDown = (e: React.PointerEvent) => {
    lastInteract.current = performance.now();
    if (e.pointerType !== "mouse") return; // touch usa scroll nativo
    const node = el();
    if (!node) return;
    drag.current = {
      active: true,
      startX: e.clientX,
      startScroll: node.scrollLeft,
      moved: false,
    };
    node.setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current.active) return;
    const node = el();
    if (!node) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 4) drag.current.moved = true;
    node.scrollLeft = drag.current.startScroll - dx;
    const half = node.scrollWidth / 2;
    if (node.scrollLeft >= half) {
      node.scrollLeft -= half;
      drag.current.startScroll -= half;
    } else if (node.scrollLeft < 0) {
      node.scrollLeft += half;
      drag.current.startScroll += half;
    }
  };

  const endDrag = () => {
    drag.current.active = false;
    lastInteract.current = performance.now();
  };

  // Impede que um arraste vire clique acidental no "Agendar"
  const onClickCapture = (e: React.MouseEvent) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  };

  return (
    <div className="relative">
      {/* Desvanecimento nas bordas */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent sm:w-16" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent sm:w-16" />

      <div
        ref={trackRef}
        onMouseEnter={() => (hover.current = true)}
        onMouseLeave={() => {
          hover.current = false;
          endDrag();
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onWheel={() => (lastInteract.current = performance.now())}
        onClickCapture={onClickCapture}
        className="no-scrollbar flex cursor-grab gap-5 overflow-x-auto py-2 active:cursor-grabbing"
        style={{ scrollBehavior: "auto" }}
      >
        {BENEFICIOS.map((b, i) => (
          <BenefitCard key={b.titulo} beneficio={b} index={i} />
        ))}
        {BENEFICIOS.map((b, i) => (
          <BenefitCard key={`${b.titulo}-clone`} beneficio={b} index={i} clone />
        ))}
      </div>
    </div>
  );
}
