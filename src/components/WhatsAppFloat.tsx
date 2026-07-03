import { motion, useReducedMotion } from "framer-motion";
import { WHATSAPP_WAME_URL } from "@/data/site";

/** Ícone flutuante de WhatsApp, fixo no canto inferior direito em todas as páginas. */
export function WhatsAppFloat() {
  const reduced = useReducedMotion();

  return (
    <motion.a
      href={WHATSAPP_WAME_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      initial={reduced ? false : { opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="glow-cream fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-deep-1/60 md:bottom-8 md:right-8"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/50 motion-reduce:hidden" />
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden>
        <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.36.673 4.564 1.84 6.44L4 29l7.73-1.807A11.93 11.93 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.818a9.77 9.77 0 0 1-4.98-1.363l-.357-.212-4.588 1.073 1.096-4.474-.233-.367A9.78 9.78 0 0 1 6.182 15c0-5.418 4.404-9.818 9.822-9.818S25.818 9.582 25.818 15 21.422 24.818 16.004 24.818Zm5.36-7.34c-.293-.147-1.735-.858-2.005-.956-.27-.098-.466-.147-.663.147-.196.294-.759.955-.93 1.152-.171.196-.343.221-.636.074-.293-.147-1.235-.455-2.353-1.452-.87-.775-1.458-1.733-1.629-2.026-.171-.294-.018-.453.129-.6.132-.132.293-.343.44-.514.147-.171.196-.294.294-.49.098-.196.049-.368-.024-.515-.074-.147-.663-1.598-.909-2.19-.24-.575-.483-.497-.663-.507l-.564-.01c-.196 0-.514.074-.784.368-.27.294-1.03 1.006-1.03 2.455 0 1.448 1.055 2.848 1.202 3.045.147.196 2.076 3.17 5.03 4.443.703.303 1.251.484 1.679.62.705.224 1.347.192 1.855.117.566-.085 1.735-.71 1.98-1.394.244-.685.244-1.27.171-1.394-.074-.123-.269-.196-.563-.343Z" />
      </svg>
    </motion.a>
  );
}
