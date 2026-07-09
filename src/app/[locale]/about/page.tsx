import { getTranslations, setRequestLocale } from "next-intl/server";

import { AboutHero } from "@/components/sections/about-hero";
import { BeliefsList } from "@/components/sections/beliefs-list";
import { BrandPromise } from "@/components/sections/brand-promise";
import { MissionStatement } from "@/components/sections/mission-statement";
import { PillarsRecap } from "@/components/sections/pillars-recap";
import { Positioning } from "@/components/sections/positioning";
import { TeamPlaceholder } from "@/components/sections/team-placeholder";
import { CTASection } from "@/components/shared/cta-section";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");

  return (
    <>
      <AboutHero />
      <MissionStatement />
      <Positioning />
      <BeliefsList />
      <PillarsRecap />
      <TeamPlaceholder />
      <BrandPromise />
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
