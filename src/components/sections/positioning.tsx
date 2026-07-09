"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";

import { useReducedMotionPreference } from "@/hooks/use-reduced-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const STEP_KEYS = ["step1", "step2", "step3"] as const;

export function Positioning() {
  const t = useTranslations("about.positioning");
  const reducedMotion = useReducedMotionPreference();

  return (
    <section className="px-6 py-16 md:py-24">
      <motion.div
        className="mx-auto flex max-w-6xl flex-col gap-12"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.h2
          variants={fadeInUp}
          transition={reducedMotion ? { duration: 0 } : undefined}
          className="text-carbon-900 text-h2 max-w-2xl"
        >
          {t("heading")}
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {STEP_KEYS.map((key, index) => (
            <motion.div
              key={key}
              variants={fadeInUp}
              transition={reducedMotion ? { duration: 0 } : undefined}
              className="flex flex-col gap-3"
            >
              <span className="text-primary-700 text-caption">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-carbon-900 text-body">{t(key)}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          variants={fadeInUp}
          transition={reducedMotion ? { duration: 0 } : undefined}
          className="text-carbon-900 text-h3 max-w-2xl italic"
        >
          {t("emphasis")}
        </motion.p>
      </motion.div>
    </section>
  );
}
