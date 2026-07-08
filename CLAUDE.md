@AGENTS.md

# Estrenos LATAM — Website CLAUDE.md

This file is the single source of truth for the Estrenos LATAM website project. It is **never pruned** — only appended and updated as the project evolves. Read it fully before starting any session of work, and update it before ending one.

---

## 1. Project Overview

A premium, bilingual (Spanish/English) marketing website for Estrenos LATAM, a strategic-operational partner for audiovisual content distribution across Centroamérica, Panamá, and the Caribbean. The site must read as a serious B2B partner brand (register: Apple / Stripe / Linear / Vercel / Porsche / A24 / Notion) — never as a generic movie-industry site (no popcorn/reel clichés).

Repo is a single Next.js application. Work proceeds in 13 sequential phases (see §18 Roadmap), each ending in a stop-and-review gate with the user before continuing.

## 2. Business Goals

- Win credibility with international studios/distributors evaluating LATAM execution partners.
- Convert qualified visitors (studio execs, distributors, exhibitors) into consultation/contact requests.
- Communicate operational rigor (DCP handling, logistics, cost control) as the brand's true differentiator — not creative/marketing services, which competitors already claim.
- Serve as a living sales asset the founder can send directly to prospects and press.

## 3. Mission

> "Convertir contenido global en resultados reales en Centroamérica, Panamá y el Caribe, mediante estrategias de distribución, selección de socios adecuados y una ejecución operativa precisa — desde la planificación hasta la entrega final en sala."

## 4. Brand Philosophy

Source: `Filosofía de Marca.pdf` (provided by the user; do not delete or paraphrase away from this source — treat it as canonical).

**Razón de ser**: "El contenido no falla en el papel. Falla en la ejecución." Estrenos LATAM exists to guarantee that strategy is _executed_, not just designed.

**Propósito**: Ensure every release reaches the right market, at the right time, with operational execution that maximizes its result.

**Posicionamiento ideal**: A strategic-operational partner that (1) defines strategy, (2) identifies the right partners, (3) controls real execution including DCP and materials. _"Donde otros diseñan o distribuyen, nosotros aseguramos que funcione."_

**5 Pilares de Marca** (seeded in `src/content/pillars.ts`):

1. **Ejecución Operativa de Alto Nivel** — control over DCP, materials, logistics, multi-territory coordination.
2. **Inteligencia de Mercado Real** — decisions from data, direct experience, and country-level knowledge.
3. **Eficiencia y Control de Costos** — optimization from strategy down to micro-costs.
4. **Conexión Estratégica** — access to distributors, exhibitors, and key suppliers per territory.
5. **Traducción Global–Local** — adapting international strategy to local market and operational realities.

**¿Cómo operamos?** (seeded in `src/content/services.ts`): strategic consulting for entry/positioning/launch; distributor partner selection & evaluation; distribution cost optimization; technical/creative materials management; DCP execution & supervision; multi-territory operational coordination; QA on timing/quality/execution; studio-audit readiness.

**Creencias**:

- La ejecución operativa define el resultado final.
- La estrategia sin implementación no tiene impacto.
- Los detalles operativos son donde se pierde o se gana valor.
- La eficiencia no es ahorro: es ventaja competitiva.
- La velocidad y precisión operativa generan resultados.
- El desconocimiento de acuerdos te puede llevar a perder tus derechos.

**Promesa de marca**: "Nos aseguramos de que tu contenido no solo tenga una estrategia correcta, sino que se ejecute de forma eficiente y funcione en cada mercado — técnica, operativa y comercialmente."

## 5. Brand Voice

- **Confident, not flashy.** Declarative sentences. No exclamation points, no hype adjectives ("amazing", "revolutionary").
- **Precise over promotional.** Prefer operational nouns (execution, logistics, DCP, cost control, territory) over marketing nouns (magic, passion, journey).
- **Bilingual parity, not translation-as-afterthought.** Spanish is the primary/default locale (the operational home market); English copy is written to the same standard, not a literal translation.
- **Short paragraphs, large type.** Let whitespace and hierarchy carry authority instead of copy volume.

## 6. Target Audience

1. **Studio/distributor executives** deciding on a LATAM execution partner for a title (primary — the credibility-buyer).
2. **Local distributors/exhibitors** in Centroamérica, Panamá, Caribe considering partnership.
3. **Industry press/researchers** looking for context on regional distribution.
4. **Returning partners** validating credibility before renewing/expanding scope.

## 7. Design Principles

- Minimal, generous whitespace; every section earns its place.
- Large, confident typography carries most of the visual weight — imagery and color are supporting, not decorative.
- Orange is a decision/action signal (buttons, links, hover, key highlights) — never a background wash.
- Mint is rationed for data, maps, and "growth/precision" moments — overuse would read as generic "success green."
- Motion supports storytelling (reveals, stagger, route-line draws) — it never distracts or delays comprehension.
- No stock movie-reel/popcorn/clapperboard imagery. Visual metaphors come from logistics/network/data: route lines, maps, timelines, workflow diagrams.

## 8. Visual Identity

- **Logo**: angled bracket/frame mark (evokes a widescreen aspect ratio and a directional route) + "Estrenos LATAM" wordmark, with a full stop after "LATAM." Full asset library uploaded 2026-07-08 to `public/images/logo/` (22 PNGs, sorted into 5 families — see `public/images/logo/README.md` for the complete manifest):
  - `lockup/` — wordmark + frame, wide format. **`lockup/black-orange.png` is the primary logo.**
  - `lockup-stacked/` — same lockup, taller format for square placements (social avatars, app listings).
  - `mark/` — frame + "E" letterform, no wordmark. **`mark/black-orange.png` is the favicon/app-icon source.**
  - `bracket/` — frame only, no letterform — pure graphic motif.
  - `decorative/` — gradient (color-to-transparent) bracket, built for the route-line motif below.
- **Motif**: the open-bracket frame doubles as a recurring "route" or "connection" motif — usable as a line-drawing animation motif connecting markets on maps, timelines, or section dividers. The `decorative/frame-gradient-*.png` assets are purpose-built for this (see Phase 2/3 for implementation, e.g. scroll-triggered draw-on or an SVG recreation for animatable stroke-drawing).
- **Photography/graphics direction**: abstract route lines connecting LATAM territories, distribution network diagrams, timeline/workflow visualizations, subtle data visualizations — not lifestyle or cinema-set photography.

## 9. Color System

Brand source hexes: Naranja Vibrante `#FE3A01`, Verde Menta `#25F295`, Blanco Hueso `#F2F4F3`, Negro Carbón `#0C0C0C`.

Expanded into full Tailwind v4 CSS-first scales in `src/app/globals.css` under `@theme`:

| Token              | 500 (base)                  | Usage                                                                |
| ------------------ | --------------------------- | -------------------------------------------------------------------- |
| `primary` (orange) | `#fe3a01`                   | Buttons, links, hover states, highlights — interactive elements only |
| `mint`             | `#25f295`                   | Maps, success states, data viz, growth — used sparingly              |
| `bone`             | `#f2f4f3` (as `bone-100`)   | Primary light background                                             |
| `carbon`           | `#0c0c0c` (as `carbon-900`) | Primary text, dark sections                                          |

Each has a full 50–950 scale (see `globals.css`). shadcn semantic tokens (`--background`, `--foreground`, `--primary`, `--accent`, `--muted`, `--border`, etc.) are wired to these scales rather than shadcn's default neutral OKLCH palette, so `bg-primary`, `text-foreground`, etc. all resolve to brand colors automatically. Direct scale utilities (`bg-primary-50`…`950`, `bg-mint-*`, `bg-bone-*`, `bg-carbon-*`) remain available for one-off needs.

**Rule**: most pages should read as Bone White + Carbon Black, with Orange used only at intentional decision points, and Mint appearing only in maps/data-viz/growth moments — never as a general accent wash.

**Text-contrast rule (WCAG AA audit, Phase 2, 2026-07-08)**: `primary-500` and `mint-500` (the literal brand hexes) only pass AA at the large-text/UI-component threshold (3:1) — correct for buttons, icons, fills, and graphics. For small running **text** on a bone background, step down the scale: orange text needs `primary-700`+ (5.48:1), mint text needs `mint-900`+ (6.04:1). Both hexes pass comfortably as text on carbon backgrounds (13.2:1 / 17.7:1+). Never use `primary-500`/`mint-500` for small body copy on bone. See the live audit at `/[locale]/design-system` (temporary Phase 2 review page, deleted at Phase 3 — see §30).

## 10. Typography

**Font**: Public Sans, self-hosted via `next/font/local` (`src/lib/fonts.ts`), all 9 weights + italics loaded under `--font-sans`.

**Scale — finalized Phase 2.** Implemented as named tokens in `src/app/globals.css` `@theme` (`--text-display`, `--text-h1`, … each with a paired line-height and, where relevant, letter-spacing — Tailwind v4 auto-generates the matching `text-{role}` utility). Token values below are the **desktop** size; `display`/`h1`/`h2` are large enough to need a mobile-down override at the call site (convention: mobile-first with a `md:` bump, e.g. `text-[2.75rem] md:text-display`) rather than a second token namespace. `h3`/`body`/`small`/`button`/`caption` don't need the responsive jump.

| Role      | Mobile size/line-height | Desktop token value | Weight  | Tracking                        |
| --------- | ----------------------- | ------------------- | ------- | ------------------------------- |
| `display` | 2.75rem/1.05            | 5.5rem/1.02         | 600     | -0.02em                         |
| `h1`      | 2.25rem/1.1             | 3.5rem/1.08         | 600     | -0.02em                         |
| `h2`      | 1.75rem/1.15            | 2.25rem/1.15        | 600     | -0.01em                         |
| `h3`      | 1.375rem/1.25           | same                | 600     | normal                          |
| `body`    | 1rem/1.6                | 1.125rem/1.6        | 400     | normal                          |
| `small`   | 0.875rem/1.5            | same                | 400–500 | normal                          |
| `button`  | 0.875rem/1.2            | same                | 600     | 0.02em (uppercase eyebrow only) |
| `caption` | 0.75rem/1.4             | same                | 500     | 0.04em                          |

No `<Heading>`/`<Text>` wrapper components exist — these are raw utility classes (`text-display`, `text-h1`, etc.); whether to wrap them in components is a Phase 3+ decision.

## 11. Spacing Rules

Tailwind's default spacing scale (0.25rem/4px increments) is used, but **all layout spacing must land on multiples of 8px** (`2`, `4`, `6`, `8`, `12`, `16`, `20`, `24`…) to keep an 8pt grid. 4px-only utilities (`p-1`, `gap-1`, etc.) are reserved for fine adjustments inside compound components (icon gaps, border alignment), not for section/layout rhythm.

## 12. Animation Guidelines

- Library: **Motion** (`motion` package, formerly Framer Motion).
- Reusable variants live in `src/lib/motion.ts`: `fadeIn`, `fadeInUp`, `fadeInDown`, `slideInLeft`, `slideInRight`, `staggerContainer` (parent), `textReveal` (per-word/char), `scrollReveal` (pair with `whileInView="visible"` + `viewport={{ once: true, margin: "-80px" }}`).
- Route-line-draw, magnetic-buttons, and animated-underlines are intentionally NOT in `motion.ts` — they need concrete geometry/pointer logic tied to a specific component; implement them where first needed (e.g. Hero/Markets in Phase 3/4+).
- Count-up statistics: `src/hooks/use-count-up.ts`.
- Respect `prefers-reduced-motion` via the single shared hook `src/hooks/use-reduced-motion.ts` (`useReducedMotionPreference()`) — every animated component branches its transition through this, never re-implements the media-query check.
- Parallax used sparingly, only where it reinforces depth (e.g., hero background vs. foreground type).
- Animations narrate the brand story (global → local, strategy → execution); they are never decoration for its own sake.

**Icon convention** (lucide-react, documentation only — no wrapper component): default size 16px (`size-4`) inline with small/body text, 20px (`size-5`) inline with h3+, 24px (`size-6`) standalone/decorative. `strokeWidth` 2 default; use `1.5` for standalone icons 24px+. Icons always inherit `currentColor` — never hardcode icon fill/stroke.

**Responsive breakpoints**: Tailwind v4 defaults (`sm:640 md:768 lg:1024 xl:1280 2xl:1536`) — no custom breakpoints added. Revisit only if a specific page genuinely needs one.

## 13. SEO Guidelines

- Semantic HTML and correct heading hierarchy on every page.
- `generateMetadata` per route with locale-aware title/description (see `metadata` namespace in `messages/*.json`).
- OpenGraph + Twitter Card metadata, JSON-LD (`Organization`, `Article` for Insights posts), sitemap.xml + robots.txt, canonical + `hreflang` alternates for `es`/`en`.
- All implemented in Phase 11 — Phase 1 only establishes the locale-routing foundation that SEO metadata will hang off of.

## 14. Accessibility Rules

- WCAG AA minimum contrast — full audit run in Phase 2 (2026-07-08), results:
  - `--muted-foreground` was failing AA (`bone-600` on `bone-100/200`, 3.51/3.18:1) — fixed to `bone-700` (5.24/4.75:1).
  - Focus ring (`--ring`) was failing the 3:1 UI-component threshold (`primary-400`, 2.56:1) — fixed to `primary-600` (4.04:1). Applied to `--ring` and `--sidebar-ring`, light and dark.
  - Small orange/mint running text on bone needs the darker `primary-700`+/`mint-900`+ shades, not the base brand hex — see §9's text-contrast rule.
  - Bone-on-carbon and mint-on-carbon pairings all pass comfortably (13–20:1) with no changes needed.
  - Live swatch audit with pass/fail badges: `/[locale]/design-system` (temporary, see §30).
- Full keyboard navigation, visible focus states (shadcn's `--ring` token, now `primary-600`).
- Semantic landmarks, ARIA labels where native semantics are insufficient.
- Every animation has a reduced-motion equivalent (`src/hooks/use-reduced-motion.ts`).
- Accessible, labeled forms: `src/components/ui/{label,form-field}.tsx` wrap Base UI's `Field` primitives (Root/Label/Description/Error) so React Hook Form + Zod forms get accessible wiring (label association, `aria-invalid`, error announcement) without re-deriving it per form.

## 15. Coding Standards

- Next.js App Router, Server Components by default; `"use client"` only where interactivity/state/animation requires it.
- TypeScript strict mode (already enabled in `tsconfig.json`). No `any`; prefer explicit types from `src/types/`.
- Tailwind CSS v4 (CSS-first `@theme` config, no `tailwind.config.ts`) — all design tokens live in `src/app/globals.css`.
- `next-intl` for all user-facing strings — no hardcoded copy in components; content data (lists/ids) lives in `src/content/*.ts` and resolves display strings from `messages/*.json` via translation keys.
- `zod` schemas + `react-hook-form` (`@hookform/resolvers/zod`) for all forms.
- `lucide-react` for icons; `motion` for animation; `clsx` + `tailwind-merge` via the `cn()` helper in `src/lib/utils.ts` (shadcn-provided) for conditional classes.
- No duplicated logic — shared UI goes in `src/components/ui` (shadcn primitives) or `src/components/shared` (cross-page composites); page-specific sections go in `src/components/sections`.
- Prettier (with `prettier-plugin-tailwindcss` for class sorting) is the formatting authority — run `npm run format` before committing.

## 16. Folder Structure

```
src/
  app/
    globals.css              Tailwind v4 theme (@theme: color scales, type scale, shadcn tokens)
    [locale]/
      layout.tsx              Locale root layout (html/body, NextIntlClientProvider, fonts)
      page.tsx                 Home (currently a Phase-1 placeholder; real build in Phase 4)
      (dev)/design-system/     Phase 2 style-guide review page — TEMPORARY, delete at Phase 3 kickoff
      about/                   (Phase 5)
      services/                (Phase 6)
      markets/                 (Phase 7)
      partners/                (Phase 8)
      insights/                (Phase 9)
      contact/                 (Phase 10)
  components/
    ui/                       shadcn/Base UI primitives: button, input, textarea, label, form-field, card
    shared/                   Cross-page composites: Header, Footer, CTASection, LocaleSwitcher (Phase 3)
    sections/                 Page-specific sections: Hero, PillarsGrid, MarketMap, StatsBand… (Phase 4+)
  content/                    Structural placeholder data seeded from the brand doc (pillars.ts, services.ts, markets.ts)
  hooks/
    use-reduced-motion.ts      Shared prefers-reduced-motion check (wraps Motion's useReducedMotion)
    use-count-up.ts            Count-up number animation hook (Home stats band)
  i18n/
    routing.ts                next-intl locale config (es default, en secondary; always-prefixed URLs)
    navigation.ts              Locale-aware Link/redirect/usePathname/useRouter
    request.ts                 next-intl server request config
  lib/
    fonts.ts                   Public Sans font loader (next/font/local, all 9 weights x normal/italic)
    motion.ts                  Reusable Motion variants (fadeIn, staggerContainer, textReveal, etc.)
    utils.ts                   cn() helper (shadcn-provided)
  types/
    content.ts                 Pillar/Service/Market types
  proxy.ts                     next-intl middleware (Next.js 16 "proxy" convention, replaces middleware.ts)
messages/
  es.json                     Spanish copy (default locale)
  en.json                     English copy
public/
  fonts/                       Public Sans WOFF2 files actually served (18 files: 9 weights x normal/italic)
  images/
    logo/                      Logo asset library (22 PNGs, 5 families) — see public/images/logo/README.md
assets/
  fonts-source/                Public Sans OTF/TTF/WOFF originals — reference only, not served (see public/fonts/README.md)
```

## 17. Architecture Decisions

- **Next.js 16 / Tailwind v4 / React 19** were the versions `create-next-app@latest` installed at project start (2026-07-08). `AGENTS.md` (auto-generated, imported at the top of this file) flags that this Next.js version has breaking changes from training-data expectations — check `node_modules/next/dist/docs/` before assuming an older API.
- **`next-intl` v4**, App Router pattern: `src/app/[locale]/layout.tsx` _is_ the root layout (no separate `src/app/layout.tsx`) — this is next-intl's documented pattern since there's only one top-level dynamic segment.
- **Locale strategy**: `es` is the default locale (`localePrefix: "always"`, so both `/es/...` and `/en/...` are explicit — no bare unprefixed route), because the operational home markets (Centroamérica, Panamá, Caribe) are Spanish-speaking; English serves international studio/distributor readers.
- **shadcn/ui** initialized with style `base-nova` (current CLI default), using `@base-ui/react` primitives rather than Radix — this is the current shadcn CLI's default base, not a deliberate choice against Radix; revisit if `base-ui` proves limiting once real components are built in Phase 2/3.
- **`middleware.ts` → `src/proxy.ts`**: Next.js 16 deprecated the `middleware.ts` convention in favor of `proxy.ts` (same export shape). Already migrated to avoid the deprecation warning.
- **Tailwind v4 CSS-first config**: there is no `tailwind.config.ts`; all theme extension (brand color scales) lives in `@theme` blocks inside `src/app/globals.css`. Any future Tailwind plugin config also belongs there, not in a JS/TS config file.

### Typography — Public Sans, self-hosted

Licensed Public Sans files were uploaded to `public/fonts/` on 2026-07-08 (full family: Thin–Black, 9 weights, each with an italic, in woff2/woff/ttf/otf). `src/lib/fonts.ts` uses `next/font/local` and registers all 18 weight/style combinations against the woff2 files (smallest payload, universal browser support) under the single CSS variable `--font-sans`. Every component gets the whole family for free via `font-thin` … `font-black` and `italic` utility classes — no further font work should be needed unless new weights/subsets are requested.

## 18. Roadmap (13 phases, stop-gate after each)

1. **Brand analysis + CLAUDE.md + roadmap + sitemap + user flows + IA + project scaffolding** — ✅ complete.
2. **Design System (typography, spacing, colors, buttons, forms, cards, animation primitives, icons, responsive rules)** — ✅ complete.
3. Reusable UI components (Header, Footer, Nav, LocaleSwitcher, CTASection — the full composite library).
4. Homepage.
5. About.
6. Services.
7. Markets.
8. Partners.
9. Insights / Blog.
10. Contact.
11. SEO.
12. Optimization (performance, Lighthouse, Core Web Vitals).
13. Testing (QA pass across devices, accessibility, cross-browser).

## 19. Sitemap

```
/[locale]                        Home
/[locale]/about                  About (Mission, Philosophy, Team)
/[locale]/services               Services (7 "cómo operamos" offerings)
/[locale]/markets                 Markets (Centroamérica, Panamá, Caribe — interactive map)
/[locale]/partners                Partners (distributor/exhibitor network, logos)
/[locale]/insights                Insights / Blog index
/[locale]/insights/[slug]         Insights article
/[locale]/contact                 Contact (form: React Hook Form + Zod)
/sitemap.xml, /robots.txt         SEO infrastructure (Phase 11)
```

locales: `es` (default), `en`. `localePrefix: "always"` — every route is explicitly prefixed.

## 20. User Flows

1. **Studio/distributor exec evaluating a partner** — Home → Services → Markets → Contact. Conversion action: contact/consultation request.
2. **Journalist/industry researcher** — Home → Insights → Article. Conversion action: none required, but article should link to About/Contact.
3. **Returning partner verifying credibility** — Home → Partners → About. Conversion action: repeat contact via existing relationship, not necessarily the form.

## 21. Information Architecture (component-level, per page — populated further per phase)

- **Home**: Hero (headline + CTA), Pillars grid (5), Market map/network visual, Stats/count-up band, Partner logos strip, Insights preview, CTA band, Footer.
- **About**: Mission/Razón de ser statement, Posicionamiento ideal, Creencias list, (placeholder) team section.
- **Services**: 7 "cómo operamos" offerings as detailed cards/sections.
- **Markets**: Interactive/animated Centroamérica–Panamá–Caribe map, per-territory detail.
- **Partners**: Distributor/exhibitor logo grid, partner-selection philosophy blurb.
- **Insights**: Article index (cards), article template (Phase 9).
- **Contact**: Form (name, email, company, message, locale-aware validation messages) + direct contact info.

## 22. Content Structure & Localization Strategy

- All UI copy lives in `messages/es.json` / `messages/en.json`, organized by route/section namespace (`metadata`, `nav`, `home`, and one namespace per page added as each phase builds it).
- Structural/non-copy data (which pillars exist, which services, which markets) lives in `src/content/*.ts` as typed arrays referencing translation keys — so the _data model_ isn't duplicated per locale, only the _copy_ is.
- `next-intl` `routing.ts` is the single place locale list/default/prefix strategy is defined; `navigation.ts` re-exports locale-aware `Link`/`redirect`/`usePathname`/`useRouter` so raw `next/link` is never used for internal routes.

## 23. Performance Goals

- 95+ Lighthouse across Performance/Accessibility/Best Practices/SEO.
- Server Components by default; minimize `"use client"` boundaries.
- `next/image` for all imagery (AVIF/WebP already enabled in `next.config.ts`), lazy-loaded below the fold.
- Font loading uses `display: "swap"` (already set in `src/lib/fonts.ts`) to avoid render-blocking.
- Code-split heavy client-only pieces (maps, complex animations) via dynamic `import()`.

## 24. Known Decisions

- Public Sans is self-hosted via `next/font/local` from `public/fonts/` (uploaded 2026-07-08); all 9 weights + italics are registered (§17).
- `es` is the default locale; both locales are always URL-prefixed.
- shadcn/ui `base-nova` style (Base UI primitives) accepted as the CLI's current default; not yet stress-tested against project needs.
- Tailwind v4's CSS-first `@theme` approach is used exclusively — no `tailwind.config.ts` will be introduced.
- Brand color scales (50–950) were hand-derived from the 4 source hexes (see `globals.css`); revisit numerically in Phase 2 if any step feels perceptually uneven.

## 25. Future Ideas

- Interactive LATAM map component (Phase 7) could double as a lightweight reusable data-viz primitive for Home's market visual.
- Consider a "route-line" SVG motif library shared between Hero, Markets, and section dividers instead of one-off illustrations per page.
- Insights section could eventually support MDX for richer article authoring — decide in Phase 9.

## 26. Completed Tasks

- Repo scaffolded with Next.js 16 (App Router, TypeScript, Tailwind v4, ESLint, `src/` dir, `@/*` alias).
- Added `next-intl`, `zod`, `react-hook-form`, `@hookform/resolvers`, `motion`, `lucide-react`, `clsx`, `tailwind-merge`, `class-variance-authority`.
- `shadcn/ui` initialized (`components.json`, `src/components/ui/button.tsx`, `src/lib/utils.ts`).
- Prettier + `prettier-plugin-tailwindcss` configured (`.prettierrc.json`, `.prettierignore`).
- Brand color scales (primary/mint/bone/carbon, 50–950) added to `globals.css` `@theme`; shadcn semantic tokens rewired to brand colors for both light and dark mode.
- `next-intl` App Router wiring: `routing.ts`, `navigation.ts`, `request.ts`, `proxy.ts` (Next 16's renamed middleware convention), locale-aware `[locale]/layout.tsx` and `[locale]/page.tsx`.
- `messages/es.json` and `messages/en.json` seeded with `metadata`/`nav`/`home` namespaces.
- `src/content/{pillars,services,markets}.ts` + `src/types/content.ts` seeded from the brand doc's 5 Pilares, 7 Cómo Operamos, and 3 core territories.
- Verified: `npm run build`, `npm run lint`, `npm run typecheck` all pass clean; dev server renders correct localized hero copy at `/es` and `/en`, with `/` redirecting to `/es`.
- Licensed Public Sans font family uploaded to `public/fonts/` (2026-07-08) and wired via `next/font/local` in `src/lib/fonts.ts` — all 9 weights + italics registered; verified in dev server response headers (18 woff2 files preloaded).
- Logo asset library (22 PNGs) uploaded 2026-07-08, visually inspected file-by-file, and sorted into `public/images/logo/{lockup,lockup-stacked,mark,bracket,decorative}/` with a full manifest at `public/images/logo/README.md`. Primary logo: `lockup/black-orange.png`; favicon/app-icon source: `mark/black-orange.png`.
- **Phase 2 — Design System (2026-07-08):**
  - Type scale finalized as 8 named tokens in `globals.css` `@theme` (§10).
  - WCAG AA contrast audit run; fixed `--muted-foreground` (bone-600→bone-700) and `--ring`/`--sidebar-ring` (primary-400→primary-600); added `--color-text-muted` alias; documented the orange/mint small-text contrast rule (§9/§14).
  - Built `src/components/ui/{input,textarea,label,form-field,card}.tsx` — Base UI `Field`/`Input` primitives + cva, following `button.tsx`'s established pattern.
  - Built `src/lib/motion.ts` (8 reusable Motion variants) + `src/hooks/{use-reduced-motion,use-count-up}.ts`.
  - Built temporary review page `src/app/[locale]/(dev)/design-system/` — type scale, color swatches with live pass/fail contrast badges, all Button variants/sizes, form fields with error state, Card, and 3 Motion demos. Verified visually via Playwright screenshots in both locales.
  - Verified: `npm run build`, `npm run lint`, `npm run typecheck`, `npm run format` all pass clean.

## 27. Current Task

Phase 2 complete, pending user review/approval before Phase 3 (reusable UI component library) begins.

## 28. Pending Tasks

- Phase 3: build the full reusable component library (Header, Footer, Nav, LocaleSwitcher, CTASection) — and delete the temporary `(dev)/design-system` route once real pages make review possible without it.
- Phase 4 onward per roadmap (§18).

## 29. Changelog

- **2026-07-08** — Phase 1: project scaffolded, brand analysis documented, CLAUDE.md created, i18n routing established, placeholder home page verified in both locales.
- **2026-07-08** — Public Sans licensed font family uploaded to `public/fonts/` and wired via `next/font/local`, replacing the temporary Google Fonts stand-in.
- **2026-07-08** — Logo asset library (22 PNGs) uploaded, sorted into `public/images/logo/{lockup,lockup-stacked,mark,bracket,decorative}/`, manifest written.
- **2026-07-08** — Phase 2: type scale finalized, WCAG AA color-contrast bugs fixed, Input/Textarea/Label/FormField/Card primitives + Motion variants/hooks built, temporary design-system review page shipped.

## 30. Technical Debt

- shadcn `base-nova`/Base UI primitives are unproven for this project's needs — may need to swap style/base library once real component work starts in Phase 3.
- Hand-derived color scale steps (50–950) are not algorithmically generated — worth a perceptual-uniformity pass (e.g., OKLCH-based generation) if any step looks visually off once real pages are built.
- `src/app/[locale]/(dev)/design-system/` is temporary — delete at Phase 3 kickoff once Header/Footer/Nav make the real pages reviewable without it.
- No automated 8pt-grid spacing enforcement (no lint plugin) — relies on code review; revisit only if spacing drift becomes a recurring issue.

## 31. Questions for Me

1. For the Insights/Blog section (Phase 9): do you want a simple local content source (MDX/JSON in-repo) or a headless CMS integration? Affects Phase 9 architecture decisions.
2. Do you have real partner/distributor logos and market-specific data (e.g., named exhibitors) ready for Phases 7–8, or should those phases proceed with placeholder structure only?
3. Any existing domain/hosting target (Vercel vs. other) that should influence performance/deployment assumptions in Phase 12?

## 32. Improvement Ideas

- Add a `robots`/`sitemap` route stub earlier (even before Phase 11) if you want search engines indexing the placeholder site during development — currently deferred entirely to Phase 11 per the brief's phase boundaries.
- Consider an `og-image` generation route (`next/og`) for dynamic per-page social cards, to be decided during Phase 11.
