"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";

import { useReducedMotionPreference } from "@/hooks/use-reduced-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function MissionStatement() {
  const t = useTranslations("about.mission");
  const reducedMotion = useReducedMotionPreference();

  return (
    <section className="px-6 py-16 md:py-24">
      <motion.div
        className="mx-auto flex max-w-4xl flex-col gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.p
          variants={fadeInUp}
          transition={reducedMotion ? { duration: 0 } : undefined}
          className="text-carbon-900 text-h2 max-w-3xl text-balance"
        >
          {t("quote")}
        </motion.p>
        <motion.p
          variants={fadeInUp}
          transition={reducedMotion ? { duration: 0 } : undefined}
          className="text-carbon-600 text-body max-w-2xl"
        >
          {t("body")}
        </motion.p>
      </motion.div>
    </section>
  );
}
