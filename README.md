# Singaerj 2.0 — redesign premium

Redesign completo do site do **Singaerj** (Sindicato dos Guardadores de Automóveis do Estado do RJ e Região) sobre o mesmo conteúdo e fotos do projeto `singaerj.org.br`, com direção de arte nova: tema **"Deep Forest"** (verde escuro profundo) e linguagem de site premiado.

## Stack

Vite 5 + React 18 + TypeScript + Tailwind (tokens HSL) + Framer Motion + Lenis + react-router-dom — o mesmo padrão dos sites em `C:\Projetos\SITES`.

## Direção de arte

Paleta alinhada à identidade oficial do app (`C:\Projetos\APPS\app-singaerj\src\app\globals.css`):

| Token | Cor | Uso |
|---|---|---|
| `--deep-1..4` | `#030c0b → #162c28` | camadas de fundo verde-escuro (derivadas do primário) |
| `--brand` | `#0D6759` | verde-escuro primário do app |
| `--cream` | `#EDEBB9` | acento principal / CTAs / destaques |
| `--emerald` | `#329788` | verde médio secundário |
| `--teal` | `#68b6aa` | verde claro terciário |

Tipografia: **Sora** (display, extrabold, uppercase) + **Inter** (texto).

## Assinaturas visuais

- Hero 100svh com **Ken Burns + parallax** e vinheta em camadas sobre a foto aérea do Rio
- **WordReveal**: títulos com palavras subindo de um clip com stagger e destaque em degradê lima
- **SpotlightCard**: cartões com borda em degradê e holofote lima que segue o mouse
- **Marquee** infinito, contadores animados, timeline da História com linha que "acende" no scroll
- Barra de progresso de leitura no header, menu mobile em tela cheia com stagger
- Transições de página (AnimatePresence), grão de filme, palavras-marca gigantes vazadas (`.text-outline`)
- `prefers-reduced-motion` respeitado em todos os efeitos

## Comandos

```bash
npm install
npm run dev      # porta 8083
npm run build    # gera dist/
```

Deploy: mesmo padrão HostGator dos outros sites (`dist/` + `.htaccess` já em `public/`); scripts FTP a criar quando o destino do domínio for definido.
