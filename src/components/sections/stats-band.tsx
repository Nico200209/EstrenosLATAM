"use client";

import { useInView } from "motion/react";
import { useTranslations } from "next-intl";
import { useRef } from "react";

import { useCountUp } from "@/hooks/use-count-up";

const STATS = [
  { id: "yearsOperating", end: 8 },
  { id: "territoriesCovered", end: 12 },
  { id: "titlesExecuted", end: 150 },
  { id: "partnerNetwork", end: 40 },
] as const;

function StatTile({ id, end, inView }: { id: string; end: number; inView: boolean }) {
  const t = useTranslations("home.stats");
  const value = useCountUp({ end, start: inView });

  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <span className="text-carbon-900 text-h1">{value}+</span>
      <span className="text-small text-carbon-600">{t(`${id}.label`)}</span>
    </div>
  );
}

export function StatsBand() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="px-6 py-16 md:py-24">
      <div ref={ref} className="mx-auto grid max-w-6xl grid-cols-2 gap-8 lg:grid-cols-4">
        {STATS.map((stat) => (
          <StatTile key={stat.id} id={stat.id} end={stat.end} inView={inView} />
        ))}
      </div>
    </section>
  );
}
