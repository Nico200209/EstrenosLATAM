"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { useReducedMotionPreference } from "@/hooks/use-reduced-motion";
import { Link } from "@/i18n/navigation";

/** Open-bracket route-line motif, echoing the logo's angled frame mark (see CLAUDE.md §8). */
function RouteLineMotif() {
  const reducedMotion = useReducedMotionPreference();

  return (
    <svg viewBox="0 0 400 400" fill="none" aria-hidden className="text-primary-500 h-full w-full">
      <motion.path
        d="M 320 40 L 120 40 Q 40 40 40 120 L 40 320"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={
          reducedMotion ? { duration: 0 } : { duration: 1.6, ease: "easeInOut", delay: 0.2 }
        }
      />
    </svg>
  );
}

export function Hero() {
  const t = useTranslations("home");

  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 opacity-20 md:h-96 md:w-96 md:opacity-30">
        <RouteLineMotif />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-8 text-left">
        <p className="text-primary-700 text-sm font-medium tracking-wide uppercase">
          {t("heroEyebrow")}
        </p>
        <h1 className="text-carbon-900 md:text-display max-w-3xl text-[2.75rem] leading-[1.05] font-semibold tracking-[-0.02em] text-balance">
          {t("heroTitle")}
        </h1>
        <p className="text-carbon-600 text-body max-w-xl">{t("heroSubtitle")}</p>
        <Button size="lg" nativeButton={false} render={<Link href="/contact" />}>
          {t("heroCta")}
        </Button>
      </div>
    </section>
  );
}
