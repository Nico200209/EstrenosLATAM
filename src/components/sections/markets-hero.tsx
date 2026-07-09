import { getTranslations } from "next-intl/server";

import { MarketsTerritoryOutline } from "@/components/sections/markets-territory-outline";

export async function MarketsHero() {
  const t = await getTranslations("markets.hero");

  return (
    <section className="relative overflow-hidden px-6 py-16 md:py-24">
      <div className="pointer-events-none absolute top-1/2 right-0 hidden h-80 w-96 -translate-y-1/2 opacity-40 md:block md:h-[26rem] md:w-[30rem] md:opacity-60">
        <MarketsTerritoryOutline />
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
