"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";

import { markets } from "@/content/markets";
import { useReducedMotionPreference } from "@/hooks/use-reduced-motion";
import { Link } from "@/i18n/navigation";

const NODE_POSITIONS: Record<string, { x: number; y: number }> = {
  "central-america": { x: 60, y: 200 },
  panama: { x: 200, y: 80 },
  caribbean: { x: 340, y: 200 },
};

const ROUTE_PATH = "M 60 200 L 200 80 L 340 200";

export function MarketTeaser() {
  const t = useTranslations("home.marketTeaser");
  const reducedMotion = useReducedMotionPreference();

  return (
    <section className="bg-carbon-900 px-6 py-16 md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex max-w-md flex-col gap-4 text-center lg:text-left">
          <p className="text-mint-500 text-sm font-medium tracking-wide uppercase">
            {t("eyebrow")}
          </p>
          <h2 className="text-h2 text-bone-100">{t("heading")}</h2>
          <p className="text-body text-bone-400">{t("body")}</p>
          <Link
            href="/markets"
            className="text-mint-500 text-small mt-2 font-medium underline-offset-4 hover:underline"
          >
            {t("cta")}
          </Link>
        </div>

        <svg viewBox="0 0 400 260" className="h-auto w-full max-w-md" aria-hidden>
          <motion.path
            d={ROUTE_PATH}
            fill="none"
            stroke="var(--color-mint-500)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={reducedMotion ? { duration: 0 } : { duration: 1.4, ease: "easeInOut" }}
          />
          {markets.map((market) => {
            const pos = NODE_POSITIONS[market.id];
            return (
              <g key={market.id}>
                <circle cx={pos.x} cy={pos.y} r={6} fill="var(--color-mint-500)" />
                <text
                  x={pos.x}
                  y={pos.y - 16}
                  textAnchor="middle"
                  className="fill-bone-100 text-[13px] font-medium"
                >
                  {t(market.nameKey)}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </section>
  );
}
