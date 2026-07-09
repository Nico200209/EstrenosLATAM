# Phase 6 — Services Page Design

## Context

Phases 1–5 (scaffolding, design system, chrome, Homepage, About) are complete and committed. Phase 6 is the next page in the roadmap (§18 in `CLAUDE.md`): Services. Per the information architecture (§21), it presents the 7 "¿Cómo operamos?" offerings as detailed cards/sections, sourced from `src/content/services.ts` (currently only seeded with `id`/`labelKey`, no descriptions) and the one-line seeds already in `CLAUDE.md` §4.

Design decision from review: since the 7 offerings are inherently sequential (strategic consulting → partner selection → cost optimization → materials management → DCP execution → multi-territory coordination → QA), the page presents them as a numbered workflow list rather than a uniform card grid, leaning into the brand's timeline/workflow-diagram visual metaphor (§7) and giving Services its own visual identity distinct from Home's Pillars grid.

Copy note: descriptions are expanded from the existing one-line brand-doc seeds, written in the established voice (confident, precise, no hype). No em dashes, use commas/periods instead, per explicit user instruction (an AI-writing tell to avoid).

## Architecture

New route: `src/app/[locale]/services/page.tsx`, mirroring Home/About's pattern (`generateStaticParams` mapping `routing.locales`, `setRequestLocale(locale)` in the page body, no `generateMetadata` yet per §13/Phase 11).

New components under `src/components/sections/`:
- `services-hero.tsx`, server, same restrained treatment as `about-hero.tsx` (eyebrow, `text-h1`, lede, bone background, no decorative accent, that stays reserved for Home/About/Markets hero moments).
- `services-workflow.tsx`, client (scroll-reveal), the numbered 7-step list.

CTA band reuses existing `src/components/shared/cta-section.tsx`.

Content model changes:
- Extend `Service` type in `src/types/content.ts` with `descriptionKey: string`.
- Add `src/content/service-icons.ts` (same pattern as the existing `src/content/pillar-icons.ts`) mapping each service id to a lucide icon: `strategic-consulting` to `Compass`, `partner-selection` to `Handshake`, `cost-optimization` to `PiggyBank`, `materials-management` to `Package`, `dcp-execution` to `HardDrive`, `multi-territory-coordination` to `Route`, `quality-assurance` to `ClipboardCheck`. Chosen to avoid literal film/reel iconography per §7.

## Content & Localization

New `services.*` namespace in both `messages/es.json` and `messages/en.json`:
- `services.hero.{eyebrow,title,lede}`
- `services.intro`, a short paragraph framing the 7-step sequence
- `services.items.<serviceId>.{title,description}` for all 7 services (title resolves the existing `labelKey` concept; description is new, expanded from CLAUDE.md §4's one-liners)
- `services.ctaBand.{heading,subtext,ctaLabel}`

## Section Details

**Services Hero**, eyebrow ("Servicios"/"Services") + `text-h1` title + lede, left-aligned, bone background, `max-w-6xl` container matching Home/About conventions. No decorative accent.

**Intro**, one short paragraph beneath the hero framing that these 7 steps happen in sequence, operational start to finish.

**Services workflow**, numbered vertical sequence (01 to 07). Each step: number (`text-caption`, primary-700) + icon (lucide, `size-5` to `size-6`) + `text-h3` title + `text-body` description, thin top border rule between steps (echoing `BeliefsList`'s restraint, with icon/number added since these need more anchoring than a belief statement). Staggered `fadeInUp` via `staggerContainer`, `whileInView`, `viewport={{ once: true, margin: "-80px" }}`, the site-wide scroll-reveal convention, gated by `useReducedMotionPreference()`.

**CTA band**, existing `CTASection`, variant alternated appropriately against whatever precedes it (workflow list ends on bone, so CTA likely `variant="carbon"` to close with a dark moment, consistent with Home's pattern).

## Testing / Verification

- `npm run build`, `npm run lint`, `npm run typecheck`, `npm run format` all pass clean.
- Visual verification via Playwright screenshots across mobile/tablet/desktop, both locales (`/es/services`, `/en/services`).
- Explicit before/after-scroll opacity check on the workflow list's staggered items (same check used in Phase 4/5 reviews) to confirm reveal-gated sections start hidden.
- Confirm no console errors/warnings; confirm nav "Servicios"/"Services" link highlights active state correctly.
