"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";

import { services } from "@/content/services";
import { SERVICE_ICONS } from "@/content/service-icons";
import { useReducedMotionPreference } from "@/hooks/use-reduced-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function ServicesWorkflow() {
  const t = useTranslations("services");
  const reducedMotion = useReducedMotionPreference();

  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <p className="text-carbon-600 text-body mb-12 max-w-2xl">{t("intro")}</p>
        <motion.ol
          className="flex flex-col"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {services.map((service, index) => {
            const Icon = SERVICE_ICONS[service.id];
            return (
              <motion.li
                key={service.id}
                variants={fadeInUp}
                transition={reducedMotion ? { duration: 0 } : undefined}
                className="border-border flex flex-col gap-3 border-t py-8 last:border-b sm:flex-row sm:gap-8"
              >
                <span className="text-primary-700 text-caption shrink-0 sm:w-12">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-3">
                  <Icon className="text-primary-500 size-6" strokeWidth={1.5} />
                  <h2 className="text-h3 text-carbon-900">{t(`items.${service.labelKey}`)}</h2>
                  <p className="text-body text-carbon-600 max-w-xl">
                    {t(`items.${service.descriptionKey}`)}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </motion.ol>
      </div>
    </section>
  );
}
