# Phase 5 — About Page Design

## Context

Phase 4 (Homepage) is complete and committed. Phase 5 is the next page in the roadmap (§18 in `CLAUDE.md`): About. Per the information architecture (§21), it covers the Mission/Razón de ser statement, Posicionamiento ideal, Creencias list, and a placeholder team section — all sourced from the brand philosophy doc already captured in `CLAUDE.md` §4 (Razón de ser, Propósito, Posicionamiento ideal, Creencias, Promesa de marca).

Decisions made during design review:

- The team section stays a structural placeholder (generic role labels, no real names/photos) — no real team data exists yet.
- The 5 Pilares get a brief condensed recap on About (icon+title chips, no descriptions) even though they're already fully detailed on Home — reinforces they're core to positioning without duplicating the full grid.

Scope: the About page only. No `generateMetadata` yet (Phase 11 owns SEO metadata per §13).

## Architecture

New route: `src/app/[locale]/about/page.tsx`, mirroring `src/app/[locale]/page.tsx`'s pattern (`generateStaticParams` mapping `routing.locales`, `setRequestLocale(locale)` in the page body).

New components under `src/components/sections/`:

- `about-hero.tsx` — server, simple type-led intro (no route-line motif — that visual signature stays reserved for Home/Markets per §8)
- `mission-statement.tsx` — client (scroll-reveal), Razón de ser pull-quote + Propósito paragraph
- `positioning.tsx` — client (scroll-reveal), Posicionamiento ideal as a 3-item numbered list + closing emphasis line
- `beliefs-list.tsx` — client (scroll-reveal), the 6 Creencias as a staggered vertical list with thin top rules (not cards)
- `pillars-recap.tsx` — client (scroll-reveal), condensed icon+title chip strip reusing `src/content/pillars.ts` and the same icon map already defined in `src/components/sections/pillars-grid.tsx` (extracted to a shared module)
- `team-placeholder.tsx` — server, 2 placeholder role cards with initials-style circular avatars (no photos), captioned as illustrative
- `brand-promise.tsx` — client (scroll-reveal), carbon-banded Promesa de marca closing statement, echoing the Market teaser's dark band rhythm from Home

CTA band reuses existing `src/components/shared/cta-section.tsx` — no new file.

All scroll-reveal sections follow the site-wide convention already established on Home (and reinforced during Phase 4 review): `staggerContainer`/`fadeInUp` from `src/lib/motion.ts`, gated by `useReducedMotionPreference()` (`src/hooks/use-reduced-motion.ts`), `whileInView` + `viewport={{ once: true, margin: "-80px" }}`.

## Content & Localization

New `about.*` namespace in both `messages/es.json` and `messages/en.json`:

- `about.hero.{eyebrow,title,lede}`
- `about.mission.{quote,body}` (Razón de ser + Propósito)
- `about.positioning.{heading,step1,step2,step3,emphasis}` (Posicionamiento ideal's 3-part definition + the "Donde otros diseñan..." line)
- `about.beliefs.{heading,belief1..belief6}` (the 6 Creencias from §4)
- `about.pillarsRecap.{heading}` (titles resolve from the existing `home.pillars.<id>.title` keys already seeded in Phase 4 — reused, not duplicated)
- `about.team.{heading,caption,role1,role2}` (placeholder role labels, e.g. "Fundador & CEO" / "Directora de Operaciones")
- `about.brandPromise.{quote}` (Promesa de marca)
- `about.ctaBand.{heading,subtext,ctaLabel}`

## Section Details

**About Hero** — Eyebrow + `text-h1` title + one-line lede, left-aligned, bone background, consistent horizontal margins with Home's sections (`max-w-6xl` container, `px-6`).

**Mission statement** — Razón de ser set large as an editorial pull-quote (`text-h2`-scale), Propósito paragraph below at `max-w-2xl` in `text-body`.

**Positioning** — 3 short numbered steps (define strategy → identify partners → control execution), horizontal on desktop/stacked on mobile, closing with the emphasis line styled distinctly (e.g. italic or `text-h3`).

**Beliefs list** — 6 Creencias as a vertical list, each item with a thin top border rule, staggered reveal — deliberately restrained (no cards/icons) per §5's "confident, not flashy" voice.

**Pillars recap** — Single wrapping row of icon+title chips (reusing `pillars.ts` + shared icon map), small supporting line, visually quieter than Home's full grid (no descriptions, no borders/cards).

**Team placeholder** — 2 role cards, initials-in-circle avatar (CSS-only, no image assets), small caption noting real profiles are coming — same placeholder-honesty pattern as Home's `PartnersStrip`.

**Brand promise** — Carbon-banded section, Promesa de marca quote centered, giving the page a dark closing moment before the CTA band (mirrors Home's `MarketTeaser` band for rhythm).

**CTA band** — Existing `CTASection`, `variant="bone"` (opposite of Home's carbon CTA, to alternate rather than stack two dark bands right after Brand Promise), new `about.ctaBand.*` copy.

## Testing / Verification

- `npm run build`, `npm run lint`, `npm run typecheck`, `npm run format` all pass clean.
- Visual verification via Playwright screenshots (dev server) at mobile/tablet-portrait/desktop widths, both locales (`/es/about`, `/en/about`).
- Explicitly re-run the "check opacity before scroll vs after scroll" script used in the Phase 4 review to confirm every reveal-gated section actually starts hidden (catches the exact inconsistency bug found and fixed last time).
- Confirm no console errors/warnings; confirm nav "Nosotros"/"About" link highlights active state correctly.
