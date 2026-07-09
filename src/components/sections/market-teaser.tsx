"use client";

import { useTranslations } from "next-intl";

import { MarketsTerritoryOutline } from "@/components/sections/markets-territory-outline";
import { Link } from "@/i18n/navigation";

export function MarketTeaser() {
  const t = useTranslations("home.marketTeaser");

  return (
    <section className="bg-carbon-900 px-6 py-16 md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex max-w-md flex-col gap-4 text-center lg:text-left">
          <p className="text-mint-500 text-sm font-medium tracking-wide uppercase">
            {t("eyebrow")}
          </p>
          <h2 className="text-h2 text-bone-100">{t("heading")}</h2>
          <p className="text-body text-bone-400">{t("body")}</p>
          <Link
            href="/markets"
            className="text-mint-500 text-small mt-2 font-medium underline-offset-4 hover:underline"
          >
            {t("cta")}
          </Link>
        </div>

        <div className="aspect-[460/320] w-full max-w-md">
          <MarketsTerritoryOutline variant="dark" />
        </div>
      </div>
    </section>
  );
}
