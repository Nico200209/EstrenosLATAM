import { getTranslations, setRequestLocale } from "next-intl/server";

import { PartnersGrid } from "@/components/sections/partners-grid";
import { PartnersHero } from "@/components/sections/partners-hero";
import { PartnersPhilosophy } from "@/components/sections/partners-philosophy";
import { CTASection } from "@/components/shared/cta-section";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function PartnersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("partners");

  return (
    <>
      <PartnersHero />
      <PartnersPhilosophy />
      <PartnersGrid />
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
