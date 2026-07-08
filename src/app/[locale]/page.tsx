import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-8 px-6 py-24 text-center">
      <p className="text-primary-700 text-sm font-medium tracking-wide uppercase">
        {t("heroEyebrow")}
      </p>
      <h1 className="text-carbon-900 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
        {t("heroTitle")}
      </h1>
      <p className="text-carbon-600 max-w-xl text-lg">{t("heroSubtitle")}</p>
      <Link
        href="/contact"
        className="bg-primary-500 text-bone-50 hover:bg-primary-600 inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold transition-colors"
      >
        {t("heroCta")}
      </Link>
      <div className="bg-mint-500 mt-6 h-1 w-16 rounded-full" aria-hidden />
    </div>
  );
}
