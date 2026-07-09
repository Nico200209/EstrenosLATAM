"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";

import { useReducedMotionPreference } from "@/hooks/use-reduced-motion";
import { Link } from "@/i18n/navigation";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const PLACEHOLDER_KEYS = [
  "placeholder1",
  "placeholder2",
  "placeholder3",
  "placeholder4",
  "placeholder5",
] as const;

export function PartnersStrip() {
  const t = useTranslations("home.partners");
  const reducedMotion = useReducedMotionPreference();

  return (
    <section className="px-6 py-16 md:py-24">
      <motion.div
        className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.h2
          variants={fadeInUp}
          transition={reducedMotion ? { duration: 0 } : undefined}
          className="text-h2 text-carbon-900"
        >
          {t("heading")}
        </motion.h2>
        <motion.div
          variants={fadeInUp}
          transition={reducedMotion ? { duration: 0 } : undefined}
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
        >
          {PLACEHOLDER_KEYS.map((key) => (
            <span key={key} className="text-h3 text-carbon-400 font-semibold">
              {t(key)}
            </span>
          ))}
        </motion.div>
        <motion.p
          variants={fadeInUp}
          transition={reducedMotion ? { duration: 0 } : undefined}
          className="text-caption text-carbon-500"
        >
          {t("caption")}
        </motion.p>
        <motion.div variants={fadeInUp} transition={reducedMotion ? { duration: 0 } : undefined}>
          <Link
            href="/partners"
            className="text-primary-700 text-small font-medium underline-offset-4 hover:underline"
          >
            {t("cta")}
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
