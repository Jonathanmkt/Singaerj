import { Fragment } from "react";

interface MarqueeProps {
  items: string[];
}

/** Faixa infinita de texto — assinatura visual entre seções. */
export function Marquee({ items }: MarqueeProps) {
  const strip = (
    <>
      {items.map((item) => (
        <Fragment key={item}>
          <span className="font-display text-sm font-bold uppercase tracking-[0.35em] text-neon/85">
            {item}
          </span>
          <span aria-hidden className="text-neon/40">
            ✦
          </span>
        </Fragment>
      ))}
    </>
  );

  return (
    <div
      aria-hidden
      className="relative overflow-hidden border-y border-white/5 bg-deep-1/60 py-5"
    >
      <div className="flex w-max animate-marquee items-center gap-10 pr-10 motion-reduce:animate-none">
        <div className="flex items-center gap-10">{strip}</div>
        <div className="flex items-center gap-10">{strip}</div>
      </div>
    </div>
  );
}
