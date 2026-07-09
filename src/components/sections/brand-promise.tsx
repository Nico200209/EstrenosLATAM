"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";

import { useReducedMotionPreference } from "@/hooks/use-reduced-motion";
import { fadeInUp } from "@/lib/motion";

export function BrandPromise() {
  const t = useTranslations("about.brandPromise");
  const reducedMotion = useReducedMotionPreference();

  return (
    <section className="bg-carbon-900 px-6 py-16 md:py-24">
      <motion.p
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        transition={reducedMotion ? { duration: 0 } : undefined}
        className="text-bone-100 text-h2 mx-auto max-w-3xl text-center text-balance"
      >
        {t("quote")}
      </motion.p>
    </section>
  );
}
