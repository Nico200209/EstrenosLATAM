"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";

import { useReducedMotionPreference } from "@/hooks/use-reduced-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const BELIEF_KEYS = ["belief1", "belief2", "belief3", "belief4", "belief5", "belief6"] as const;

export function BeliefsList() {
  const t = useTranslations("about.beliefs");
  const reducedMotion = useReducedMotionPreference();

  return (
    <section className="bg-carbon-900 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-bone-100 text-h2 mb-12">{t("heading")}</h2>
        <motion.ul
          className="flex flex-col"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {BELIEF_KEYS.map((key) => (
            <motion.li
              key={key}
              variants={fadeInUp}
              transition={reducedMotion ? { duration: 0 } : undefined}
              className="text-bone-100 text-h3 border-t border-white/15 py-6 font-normal last:border-b"
            >
              {t(key)}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
