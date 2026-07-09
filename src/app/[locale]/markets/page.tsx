import { getTranslations, setRequestLocale } from "next-intl/server";

import { MarketsCoordination } from "@/components/sections/markets-coordination";
import { MarketsHero } from "@/components/sections/markets-hero";
import { TerritoryProfiles } from "@/components/sections/territory-profiles";
import { CTASection } from "@/components/shared/cta-section";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function MarketsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("markets");

  return (
    <>
      <MarketsHero />
      <TerritoryProfiles />
      <MarketsCoordination />
      <CTASection
        heading={t("ctaBand.heading")}
        subtext={t("ctaBand.subtext")}
        ctaLabel={t("ctaBand.ctaLabel")}
        ctaHref="/contact"
        variant="bone"
      />
    </>
  );
}
