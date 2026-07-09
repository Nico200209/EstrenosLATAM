"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { useReducedMotionPreference } from "@/hooks/use-reduced-motion";
import { Link } from "@/i18n/navigation";
import {
  ROUTE_FRAME_BOTTOM_ARM,
  ROUTE_FRAME_DOT,
  ROUTE_FRAME_TOP_ARM,
  ROUTE_FRAME_VIEWBOX,
} from "@/lib/route-frame";

/** Animated recreation of the logo's angled bracket motif (see CLAUDE.md §8 and src/lib/route-frame.ts). */
function RouteLineMotif() {
  const reducedMotion = useReducedMotionPreference();
  const transition = reducedMotion
    ? { duration: 0 }
    : { duration: 1.4, ease: "easeInOut" as const, delay: 0.2 };

  return (
    <svg
      viewBox={ROUTE_FRAME_VIEWBOX}
      fill="none"
      aria-hidden
      className="text-primary-500 h-full w-full"
    >
      <motion.path
        d={ROUTE_FRAME_TOP_ARM}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={transition}
      />
      <motion.path
        d={ROUTE_FRAME_BOTTOM_ARM}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={transition}
      />
      <motion.circle
        {...ROUTE_FRAME_DOT}
        fill="currentColor"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={reducedMotion ? { duration: 0 } : { duration: 0.4, delay: 1.4 }}
      />
    </svg>
  );
}

export function Hero() {
  const t = useTranslations("home");

  return (
    <section className="relative overflow-hidden px-6 py-12 md:py-16">
      <div className="pointer-events-none absolute top-1/2 right-0 h-80 w-80 -translate-y-1/2 opacity-20 md:h-[32rem] md:w-[32rem] md:opacity-30">
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
