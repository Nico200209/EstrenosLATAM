# Phase 7 — Markets Page Design

## Context

Phases 1–6 (scaffolding, design system, chrome, Homepage, About, Services) are complete and committed. Phase 7 is the next page in the roadmap (§18 in `CLAUDE.md`): Markets. Per the information architecture (§21), it presents an "interactive/animated Centroamérica–Panamá–Caribe map, per-territory detail," sourced from `src/content/markets.ts` (currently only `id`/`nameKey`/`region`, no per-territory copy).

The page must be visually distinct from every accent already shipped: Home's animated orange bracket (`Hero`), About's static mint bracket (`QuietRouteFrame`), Services' 7-node ascending staircase (`ServicesStepPath`), and Home's own mint 3-node route-line `MarketTeaser` that links to this very page.

**Revised after user review**: the first pass used abstract, non-representational low-poly silhouettes (no map library installed at the time). User rejected this as "just some random geometrical shapes" and asked for an actually accurate map, with route lines that visibly "hop" from one territory to another rather than a continuous connecting line. `world-atlas` (Natural Earth boundaries) + `d3-geo` + `topojson-client` were added as **devDependencies only**; `scripts/generate-markets-map.mjs` precomputes real country geometry into static SVG path data at `src/lib/markets-map-data.ts`, so no geo library ships to the browser (see CLAUDE.md §17 for the full architecture decision, including why `react-simple-maps` was rejected — its peer deps cap at React 18).

User decisions (confirmed before build):

- Caribbean gets a short representative country list (2 countries), explicitly captioned as illustrative in copy — same honesty pattern as `TeamPlaceholder`/`PartnersStrip`, not implying full regional coverage.
- Each territory profile includes a 3-category operational-highlight sub-grid (network / logistics / intelligence), deliberately **reusing** icons already assigned to the same concepts on Pillars (`Network`, `BarChart3`) and Services (`HardDrive`) rather than inventing a fourth icon vocabulary — reinforces cross-page semantic consistency.

No invented statistics (no fake percentages/counts). Copy stays qualitative/operational per brand voice (§5). No em dashes, per standing user preference.

## Architecture

New route: `src/app/[locale]/markets/page.tsx`, mirroring About/Services' pattern (`generateStaticParams` mapping `routing.locales`, `setRequestLocale(locale)`, `getTranslations("markets")` for the CTA band).

New components under `src/components/sections/`:

- `markets-hero.tsx`, server, same shape as `about-hero.tsx`/`services-hero.tsx` (eyebrow, `text-h1`, lede, bone background), decorative accent `hidden md:block` from the start.
- `markets-territory-outline.tsx`, client, the new hero accent (three abstract territory silhouettes + coordinate grid).
- `territory-profiles.tsx`, client (scroll-reveal), numbered per-territory detail list.
- `markets-coordination.tsx`, server, carbon dark band, typographic only (no diagram, to avoid a 4th map/route graphic on one page).

CTA band reuses existing `src/components/shared/cta-section.tsx`.

Content model changes:

- Extend `Market` type in `src/types/content.ts`: add `countryKeys: string[]` and `highlightIds: MarketHighlightId[]` (new type `MarketHighlightId = "network" | "logistics" | "intelligence"`).
- Populate `src/content/markets.ts`: Central America gets 5 `countryKeys` (Guatemala, Honduras, El Salvador, Nicaragua, Costa Rica — Panama excluded, brand doc treats it separately), Panama gets 1, Caribbean gets 2 (representative, not exhaustive). Add `MARKET_HIGHLIGHT_CATEGORIES` const.
- Add `src/content/market-icons.ts` (same pattern as `pillar-icons.ts`/`service-icons.ts`), reusing `Network`, `HardDrive`, `BarChart3`.

## Content & Localization

New `markets.*` namespace in both `messages/es.json` and `messages/en.json`:

- `markets.hero.{eyebrow,title,lede}`
- `markets.highlightCategories.{network,logistics,intelligence}.label`
- `markets.territories.<nameKey>.{description,countriesLabel,countries.country1..countryN,highlights.{network,logistics,intelligence}}` for `centralAmerica`, `panama`, `caribbean`
- `markets.coordination.{eyebrow,heading,body}`
- `markets.ctaBand.{heading,subtext,ctaLabel}`

Territory _names_ are not duplicated — `TerritoryProfiles` resolves them from the existing `home.marketTeaser.<nameKey>` namespace via a second `useTranslations` call, the same pattern `PillarsRecap` already uses for `home.pillars`.

## Section Details

**Markets Hero**, eyebrow ("Mercados"/"Markets") + `text-h1` title + lede, left-aligned, bone background, `max-w-6xl` container. Decorative accent (`MarketsTerritoryOutline`) positioned absolute top-1/2 right, `hidden md:block` applied proactively (the exact bug class found retroactively in Phase 6 on all three prior heroes).

**Markets Territory Outline** (new accent, revised): a real map — Central America, Panama, and the Caribbean rendered from Natural Earth boundaries (`src/lib/markets-map-data.ts`, generated by `scripts/generate-markets-map.mjs`), with the 8 covered countries filled/stroked mint over faint uncolored neighboring-country context (Mexico, Colombia, Venezuela, Cuba, Jamaica, Haiti, Belize). Each highlighted country draws in via `pathLength` on mount, staggered by territory. Three arcs connect the Central America/Panama/Caribbean hub centroids and animate as sequential "hops" on a shared cycle — one arc draws in, holds, fades out, then the next arc's turn begins — rather than a continuous route line. Reduced motion: all three hops render simultaneously, fully drawn, static.

**Territory Profiles**, numbered vertical sequence (01–03, Central America → Panama → Caribbean), structural precedent from `ServicesWorkflow` (`motion.ol`, `border-t`/`last:border-b`, staggered `fadeInUp`). Each item:

- number badge (`text-caption`, `text-primary-700`)
- territory name (`text-h3`, resolved from `home.marketTeaser.<nameKey>`)
- description paragraph (`text-body`)
- country chip row: `countriesLabel` caption + one pill per `countryKeys` entry, reusing `PillarsRecap`'s chip style (`border-border bg-bone-200 rounded-full px-4 py-2`)
- 3-column highlight sub-grid (`sm:grid-cols-3`): icon (`size-5`, `text-primary-500`) + category label + one-line territory-specific copy, for network/logistics/intelligence

**Markets Coordination**, carbon band (`bg-carbon-900`), mirrors `BeliefsList`/`BrandPromise`'s restrained typographic treatment: mint eyebrow, `text-h2` heading, `text-body` supporting copy on regional coordination. No SVG — the page already has one map-flavored graphic in the hero and Home's teaser already owns the node-and-line device.

**CTA band**, existing `CTASection`, `variant="bone"` (coordination band already closes on carbon, so CTA returns to bone — mirrors About's `BrandPromise` → bone `CTASection` alternation).

## Testing / Verification

- `npm run build`, `npm run lint`, `npm run typecheck`, `npm run format` all pass clean.
- Confirm `/es/markets` and `/en/markets` both prerender via `generateStaticParams`.
- Visual verification via Playwright screenshots across mobile (~375–390px), tablet-portrait (~820–900px, the width that broke Header in Phase 3), tablet-landscape/desktop, both locales.
- Explicit mobile hero-accent collision check against real (multi-line) headline copy in both languages, confirming `hidden md:block` holds.
- Explicit before/after-scroll opacity check on `TerritoryProfiles`' staggered reveal (same check used in Phase 4–6 reviews).
- Reduced-motion emulation check: territory-outline draw-on, pulse dots, and stagger reveals all degrade to static.
- Confirm no console errors/warnings; confirm nav "Mercados"/"Markets" link highlights active state correctly.
