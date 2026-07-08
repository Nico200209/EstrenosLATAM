import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";

import { CTASection } from "@/components/shared/cta-section";
import { Hero } from "@/components/sections/hero";
import { InsightsPreview } from "@/components/sections/insights-preview";
import { MarketTeaser } from "@/components/sections/market-teaser";
import { PartnersStrip } from "@/components/sections/partners-strip";
import { PillarsGrid } from "@/components/sections/pillars-grid";
import { StatsBand } from "@/components/sections/stats-band";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");

  return (
    <>
      <Hero />
      <PillarsGrid />
      <MarketTeaser />
      <StatsBand />
      <PartnersStrip />
      <InsightsPreview />
      <CTASection
        heading={t("ctaBand.heading")}
        subtext={t("ctaBand.subtext")}
        ctaLabel={t("ctaBand.ctaLabel")}
        ctaHref="/contact"
        variant="carbon"
      />
    </>
  );
}
