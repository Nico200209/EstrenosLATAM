"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";

import { MARKET_HIGHLIGHT_ICONS } from "@/content/market-icons";
import { markets } from "@/content/markets";
import { useReducedMotionPreference } from "@/hooks/use-reduced-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function TerritoryProfiles() {
  const t = useTranslations("markets");
  const tNames = useTranslations("home.marketTeaser");
  const reducedMotion = useReducedMotionPreference();

  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <motion.ol
          className="flex flex-col"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {markets.map((market, index) => (
            <motion.li
              key={market.id}
              variants={fadeInUp}
              transition={reducedMotion ? { duration: 0 } : undefined}
              className="border-border flex flex-col gap-6 border-t py-10 last:border-b"
            >
              <div className="flex flex-col gap-3">
                <span className="text-primary-700 text-caption">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="text-h3 text-carbon-900">{tNames(market.nameKey)}</h2>
                <p className="text-body text-carbon-600 max-w-2xl">
                  {t(`territories.${market.nameKey}.description`)}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-carbon-600 text-small font-medium tracking-wide uppercase">
                  {t(`territories.${market.nameKey}.countriesLabel`)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {market.countryKeys.map((countryKey) => (
                    <span
                      key={countryKey}
                      className="border-border bg-bone-200 text-carbon-900 text-small rounded-full border px-4 py-2 font-medium"
                    >
                      {t(`territories.${market.nameKey}.countries.${countryKey}`)}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                {market.highlightIds.map((highlightId) => {
                  const Icon = MARKET_HIGHLIGHT_ICONS[highlightId];
                  return (
                    <div key={highlightId} className="flex flex-col gap-2">
                      <Icon className="text-primary-500 size-5" strokeWidth={2} />
                      <p className="text-carbon-900 text-small font-medium">
                        {t(`highlightCategories.${highlightId}.label`)}
                      </p>
                      <p className="text-carbon-600 text-small">
                        {t(`territories.${market.nameKey}.highlights.${highlightId}`)}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
