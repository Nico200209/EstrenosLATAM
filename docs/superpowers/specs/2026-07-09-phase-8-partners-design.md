# Phase 8 — Partners Page Design

## Context

Phases 1–7 (scaffolding, design system, chrome, Homepage, About, Services, Markets) are complete and committed. Phase 8 is the next page in the roadmap (§18 in `CLAUDE.md`): Partners. Per the IA (§21), it presents a "distributor/exhibitor logo grid" and a "partner-selection philosophy blurb." No real partner logos/data exist yet (confirmed with user), so this phase uses the same honest-placeholder pattern already established by Home's `PartnersStrip` and About's `TeamPlaceholder`: generic role/category labels, never invented company names, explicitly captioned as illustrative.

The page needs its own hero-accent identity, distinct from the four already shipped: Home's animated orange bracket, About's static mint bracket, Services' orange 7-node staircase, Markets' real geographic map with broadcast arcs. Partners is about relationship breadth, not data or sequence, so a hub-and-spoke network diagram (orange, per §9's "orange = connection/decision" convention already used by Home/Services) fits and hasn't been used yet.

Copy note: no em dashes, per standing user preference.

## Architecture

New route: `src/app/[locale]/partners/page.tsx`, mirroring About/Services/Markets' pattern (`generateStaticParams`, `setRequestLocale`, `getTranslations("partners")` for the CTA band).

New components under `src/components/sections/`:

- `partners-hero.tsx`, server, same shape as `markets-hero.tsx`/`services-hero.tsx`.
- `partners-network-hub.tsx`, client, the new hero accent.
- `partners-philosophy.tsx`, server, carbon band (mirrors `markets-coordination.tsx`).
- `partners-grid.tsx`, client (scroll-reveal), the categorized placeholder chip grid.

CTA band reuses existing `src/components/shared/cta-section.tsx`.

Content model:

- Add `PartnerCategory` type to `src/types/content.ts`: `{ id: string; labelKey: string; chipKeys: string[] }`, mirroring `Market`'s `countryKeys` convention (array of key strings, not a bare count).
- New `src/content/partners.ts`: 3 categories — `distributors` (4 chips), `exhibitors` (4 chips), `technical-suppliers` (3 chips, ties back to Services' materials/DCP offerings, giving the grid a third category beyond the IA's distributor/exhibitor pair).

Small Home polish: add a "Ver partners"/"View partners" link to `partners-strip.tsx`, matching `MarketTeaser`'s existing link-to-full-page convention now that `/partners` exists. New `home.partners.cta` key.

## Content & Localization

New `partners.*` namespace in both `messages/es.json` and `messages/en.json`:

- `partners.hero.{eyebrow,title,lede}`
- `partners.philosophy.{eyebrow,heading,body}`
- `partners.grid.caption`, `partners.grid.categories.<id>.{label,chips.chip1..chipN}`
- `partners.ctaBand.{heading,subtext,ctaLabel}`

Chip copy is generic role/category labels in the same voice as Home's existing `home.partners.placeholder1..5` (e.g. "Distribuidor Regional", "Cadena Multiplex", "Proveedor de DCP"), never real company names.

## Section Details

**Partners Hero**, eyebrow ("Partners") + `text-h1` title + lede, left-aligned, bone background, `max-w-6xl` container. Decorative accent (`PartnersNetworkHub`) `hidden md:block` from the start (proactive, not retroactive, per the rule established in Phase 6/7).

**Partners Network Hub** (new accent): a central hub node (the brand) with ~7 spokes radiating to smaller outer nodes at varied angles/distances, orange (`primary-500`). Spokes draw in via `pathLength`, staggered outward from the hub; outer nodes fade in as their spoke completes; hub node pulses subtly. Reduced motion: fully drawn, static, no pulse.

**Partners Philosophy**, carbon band, restrained typographic treatment mirroring `MarketsCoordination`: mint eyebrow, `text-h2` heading, `text-body` copy on how partners are evaluated (performance and territory fit, echoing Services' "Selección de Socios" and Pillars' "Conexión Estratégica," written fresh for this page).

**Partners Grid**, client component with scroll-reveal (`staggerContainer`/`fadeInUp`, gated by `useReducedMotionPreference()` — the site-wide convention `TeamPlaceholder` currently lacks; this component follows the convention). Three labeled category groups, each a `flex flex-wrap` row of pill/chip tiles reusing `PillarsRecap`'s style (`border-border bg-bone-200 rounded-full px-4 py-2`), ending in one explicit illustrative caption for the whole grid.

**CTA band**, existing `CTASection`, `variant="carbon"` (grid closes on bone, CTA returns to carbon, mirroring Services' bone→carbon close).

## Testing / Verification

- `npm run build`, `npm run lint`, `npm run typecheck`, `npm run format` all pass clean.
- Confirm `/es/partners` and `/en/partners` both prerender via `generateStaticParams`.
- Visual verification via Playwright screenshots across mobile/tablet-portrait/desktop, both locales.
- Explicit mobile hero-accent collision check against real (multi-line) headline copy.
- Explicit before/after-scroll opacity check on `PartnersGrid`'s staggered reveal.
- Reduced-motion emulation check on the hub-and-spoke accent.
- Confirm no console errors/warnings; confirm nav "Partners" link highlights active state; confirm Home's new link navigates correctly.
