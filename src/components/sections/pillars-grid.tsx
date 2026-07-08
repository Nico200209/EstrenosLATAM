"use client";

import { motion } from "motion/react";
import { BarChart3, Gauge, Globe, Network, Workflow, type LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";

import { pillars } from "@/content/pillars";
import { useReducedMotionPreference } from "@/hooks/use-reduced-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const PILLAR_ICONS: Record<string, LucideIcon> = {
  "operational-execution": Workflow,
  "market-intelligence": BarChart3,
  "cost-efficiency": Gauge,
  "strategic-connection": Network,
  "global-local-translation": Globe,
};

export function PillarsGrid() {
  const t = useTranslations("home.pillars");
  const reducedMotion = useReducedMotionPreference();

  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-carbon-900 text-h2 mb-12 max-w-2xl">{t("heading")}</h2>
        <motion.div
          className="flex flex-wrap justify-center gap-8"
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
                className="border-border flex w-full flex-col gap-4 rounded-xl border p-6 sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)]"
              >
                <Icon className="text-primary-500 size-6" strokeWidth={1.5} />
                <h3 className="text-h3 text-carbon-900">{t(pillar.titleKey)}</h3>
                <p className="text-body text-carbon-600">{t(pillar.descriptionKey)}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
