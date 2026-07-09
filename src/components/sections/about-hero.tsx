import { getTranslations } from "next-intl/server";

import {
  ROUTE_FRAME_BOTTOM_ARM,
  ROUTE_FRAME_DOT,
  ROUTE_FRAME_TOP_ARM,
  ROUTE_FRAME_VIEWBOX,
} from "@/lib/route-frame";

/** Static recreation of the logo's angled bracket motif (see CLAUDE.md §8 and src/lib/route-frame.ts) — quieter, static counterpart to Home's animated orange version. */
function QuietRouteFrame() {
  return (
    <svg
      viewBox={ROUTE_FRAME_VIEWBOX}
      fill="none"
      aria-hidden
      className="text-mint-500 h-full w-full"
    >
      <path
        d={ROUTE_FRAME_TOP_ARM}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={ROUTE_FRAME_BOTTOM_ARM}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle {...ROUTE_FRAME_DOT} fill="currentColor" />
    </svg>
  );
}

export async function AboutHero() {
  const t = await getTranslations("about.hero");

  return (
    <section className="relative overflow-hidden px-6 py-16 md:py-24">
      <div className="pointer-events-none absolute top-1/2 right-0 h-64 w-80 -translate-y-1/2 opacity-20 md:h-96 md:w-[30rem] md:opacity-30">
        <QuietRouteFrame />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 text-left">
        <p className="text-primary-700 text-sm font-medium tracking-wide uppercase">
          {t("eyebrow")}
        </p>
        <h1 className="text-carbon-900 text-h1 max-w-3xl text-balance">{t("title")}</h1>
        <p className="text-carbon-600 text-body max-w-xl">{t("lede")}</p>
      </div>
    </section>
  );
}
