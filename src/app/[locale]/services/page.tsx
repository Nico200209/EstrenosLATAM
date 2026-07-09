import { getTranslations, setRequestLocale } from "next-intl/server";

import { ServicesHero } from "@/components/sections/services-hero";
import { ServicesWorkflow } from "@/components/sections/services-workflow";
import { CTASection } from "@/components/shared/cta-section";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services");

  return (
    <>
      <ServicesHero />
      <ServicesWorkflow />
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
