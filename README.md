# Estrenos LATAM

Bilingual (ES/EN) marketing website for Estrenos LATAM, built with Next.js (App Router), TypeScript, Tailwind CSS v4, next-intl, and shadcn/ui.

**Start here: [`CLAUDE.md`](./CLAUDE.md)** — the project's source of truth (brand philosophy, design system, architecture decisions, roadmap, and current status).

## Getting Started

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) — it redirects to the default locale (`/es`). English is available at `/en`.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run lint` — ESLint
- `npm run typecheck` — TypeScript, no emit
- `npm run format` — Prettier (with Tailwind class sorting)

## Fonts

Public Sans is temporarily loaded via `next/font/google` pending the licensed OTF/WOFF2 files. Upload them to `public/fonts/` and see `CLAUDE.md` §17 for the exact swap-in code.
