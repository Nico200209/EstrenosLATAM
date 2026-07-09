"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";

import { partnerCategories } from "@/content/partners";
import { useReducedMotionPreference } from "@/hooks/use-reduced-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function PartnersGrid() {
  const t = useTranslations("partners.grid");
  const reducedMotion = useReducedMotionPreference();

  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="flex flex-col gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {partnerCategories.map((category) => (
            <div key={category.id} className="flex flex-col gap-4">
              <h2 className="text-carbon-600 text-small font-medium tracking-wide uppercase">
                {t(`categories.${category.labelKey}.label`)}
              </h2>
              <div className="flex flex-wrap gap-3">
                {category.chipKeys.map((chipKey) => (
                  <motion.div
                    key={chipKey}
                    variants={fadeInUp}
                    transition={reducedMotion ? { duration: 0 } : undefined}
                    className="border-border bg-bone-200 rounded-full border px-4 py-2"
                  >
                    <span className="text-carbon-900 text-small font-medium">
                      {t(`categories.${category.labelKey}.chips.${chipKey}`)}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
        <p className="text-caption text-carbon-500 mt-10">{t("caption")}</p>
      </div>
    </section>
  );
}
