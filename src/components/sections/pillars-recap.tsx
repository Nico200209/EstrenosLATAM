"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";

import { pillars } from "@/content/pillars";
import { PILLAR_ICONS } from "@/content/pillar-icons";
import { useReducedMotionPreference } from "@/hooks/use-reduced-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function PillarsRecap() {
  const t = useTranslations("about.pillarsRecap");
  const tPillars = useTranslations("home.pillars");
  const reducedMotion = useReducedMotionPreference();

  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-carbon-600 text-small mb-8 font-medium tracking-wide uppercase">
          {t("heading")}
        </h2>
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {pillars.map((pillar) => {
            const Icon = PILLAR_ICONS[pillar.id];
            return (
              <motion.div
                key={pillar.id}
                variants={fadeInUp}
                transition={reducedMotion ? { duration: 0 } : undefined}
                className="border-border bg-bone-200 flex items-center gap-2 rounded-full border px-4 py-2"
              >
                <Icon className="text-primary-500 size-4" strokeWidth={2} />
                <span className="text-carbon-900 text-small font-medium">
                  {tPillars(pillar.titleKey)}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
