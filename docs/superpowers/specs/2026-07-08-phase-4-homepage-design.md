# Phase 4 — Homepage Design

## Context

Phases 1–3 (scaffolding, design system, reusable chrome) are complete and approved. Phase 4 is the first real content page: the Homepage, per the roadmap (§18) and information architecture (§21) in `CLAUDE.md`. It's the first page to consume `src/content/{pillars,services,markets}.ts` and to exercise the full design system (type scale, color rules, spacing, Motion variants, reduced-motion hook) end-to-end on real content rather than the Phase 1 placeholder hero.

Two downstream sections referenced by §21 — Partner logos strip and Insights preview — depend on Phases 8 and 9, which don't exist yet. This design includes both now as clearly-placeholder content so the homepage layout is complete and reviewable, to be swapped for real content when those phases land. Similarly, the Market visual is a lightweight teaser here, not the full interactive map (that's Phase 7's job per §25).

## Scope

Build the real Homepage at `src/app/[locale]/page.tsx`, replacing the Phase 1 placeholder hero, with these sections in order: Hero → Pillars grid → Market teaser → Stats/count-up band → Partners strip (placeholder) → Insights preview (placeholder) → CTA band → Footer (already wired in layout).

Out of scope: the real interactive Markets map (Phase 7), real partner logos (Phase 8), real Insights articles (Phase 9), real stats figures (pending user data).

## Architecture

New Server/Client Components under `src/components/sections/` (Server Components by default per coding standards §15; `"use client"` only where Motion/interactivity requires it):

- `hero.tsx` — client (route-line stroke-draw animation, reduced-motion branch)
- `pillars-grid.tsx` — client wrapper for `staggerContainer`/`fadeInUp`, mapping `src/content/pillars.ts`
- `market-teaser.tsx` — client (animated SVG route-lines connecting 3 labeled nodes), mapping `src/content/markets.ts`
- `stats-band.tsx` — client (uses existing `src/hooks/use-count-up.ts`, triggers via `whileInView`)
- `partners-strip.tsx` — server (static placeholder wordmark chips)
- `insights-preview.tsx` — server (3 static placeholder cards using existing `src/components/ui/card.tsx`)

CTA band reuses the existing `src/components/shared/cta-section.tsx` as-is — no new file.

`src/app/[locale]/page.tsx` composes these in sequence, replacing the current placeholder JSX. `generateStaticParams`/`setRequestLocale` wiring stays as-is.

No new types needed — existing `Pillar`/`Market` types (`src/types/content.ts`) and content arrays are reused unmodified.

## Content & Localization

New `home.*` keys added to both `messages/es.json` and `messages/en.json`:

- `home.pillars.<pillarId>.title` / `.description` for all 5 pillars (resolving `titleKey`/`descriptionKey` from `pillars.ts`)
- `home.marketTeaser.{eyebrow,heading,body,cta}` + per-market labels resolving `markets.ts`'s `nameKey`
- `home.stats.<statId>.{value,label}` for 3–4 stat tiles (placeholder numbers, structured for easy future replacement)
- `home.partners.{heading,caption}` + a small static list of placeholder chip labels (generic, non-branded, e.g. "Distribuidor Regional" / "Regional Distributor" — not implying real partner relationships)
- `home.insights.{heading,cta}` + 3 placeholder `{title, excerpt, tag}` entries
- `home.ctaBand.{heading,subtext,ctaLabel}`

Existing `home.hero*` keys are reused for the Hero (already seeded).

## Section Details

**Hero** — Left-aligned at desktop (stacks centered/full-width on mobile), generous right-side whitespace. Eyebrow → `text-display` headline → `text-body` subhead → primary Button-as-Link CTA (existing pattern: `render={<Link/>}` + `nativeButton={false}`, per §17). Background accent: `decorative/frame-gradient-*` bracket motif as a subtle low-opacity SVG stroke-draw animation on mount; static fallback via `useReducedMotionPreference()`.

**Pillars grid** — 5 items, `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` (last row's odd item left-aligns naturally, no spanning hacks). Each card: lucide icon (`size-6`, `strokeWidth={1.5}`, standalone per §12) + `text-h3` title + `text-body` description. Staggered `fadeInUp` via `staggerContainer`, `whileInView`, `viewport={{ once: true, margin: "-80px" }}` per `src/lib/motion.ts` conventions.

**Market teaser** — Carbon-banded section (mint route-lines on carbon, per §9's mint-rationing rule). Three labeled nodes (Centroamérica, Panamá, Caribe) connected by animated route-lines echoing the bracket motif, short supporting copy, text link to `/markets`.

**Stats band** — 3–4 tiles from a small typed array at the top of `stats-band.tsx` (value, label, id), count-up animated via `use-count-up.ts`, triggered once on scroll-into-view. Numbers are explicit placeholders, isolated in one array for trivial future replacement.

**Partners strip** — Static row/wrap of generic placeholder wordmark chips, muted/grayscale, with a small caption clarifying it's illustrative pending real partner data (§28 already flags real logos as a pending input). No motion.

**Insights preview** — 3 placeholder cards (title, excerpt, "Insights" tag) via existing `Card` primitive, linking to `/insights` (route doesn't exist until Phase 9 — acceptable as a forward link).

**CTA band** — Existing `CTASection` component, `variant="carbon"`, new `home.ctaBand.*` copy.

## Testing / Verification

- `npm run build`, `npm run lint`, `npm run typecheck`, `npm run format` all pass clean.
- Visual verification via Playwright screenshots (dev server) at mobile/tablet-portrait/desktop widths, both locales (`/es`, `/en`), confirming: hero animation renders and respects reduced-motion, pillars stagger-in on scroll, market teaser route-lines animate, stats count up once, partners/insights placeholder sections render without implying real data, CTA band links to `/contact`.
- Confirm no console errors/warnings (continuing the Phase 3 practice of checking dev server console).
