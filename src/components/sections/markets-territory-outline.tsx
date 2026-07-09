"use client";

import { motion } from "motion/react";

import { useReducedMotionPreference } from "@/hooks/use-reduced-motion";
import {
  CONTEXT_COUNTRIES,
  HIGHLIGHTED_COUNTRIES,
  MARKET_HUBS,
  MARKETS_MAP_VIEWBOX,
} from "@/lib/markets-map-data";

/**
 * A real, geographically accurate map (see scripts/generate-markets-map.mjs —
 * Natural Earth boundaries via world-atlas/d3-geo, precomputed to static SVG
 * path data, no map library shipped to the browser) of Central America,
 * Panama, and the Caribbean, with the three covered territories highlighted
 * in mint. Each territory takes a turn "broadcasting" two route lines to the
 * other two simultaneously, then fades, then the next territory's turn
 * begins — showing every territory as a connected hub rather than a single
 * line rotating around a loop. Shared by the Markets hero (bone background)
 * and Home's MarketTeaser (carbon background) via the `variant` prop.
 */
type TerritoryKey = "centralAmerica" | "panama" | "caribbean";

const TERRITORY_GROUPS: {
  key: TerritoryKey;
  paths: (typeof HIGHLIGHTED_COUNTRIES)["panama"];
  delay: number;
}[] = [
  { key: "centralAmerica", paths: HIGHLIGHTED_COUNTRIES.centralAmerica, delay: 0 },
  { key: "panama", paths: HIGHLIGHTED_COUNTRIES.panama, delay: 0.3 },
  { key: "caribbean", paths: HIGHLIGHTED_COUNTRIES.caribbean, delay: 0.6 },
];

const TURNS: { source: TerritoryKey; targets: TerritoryKey[] }[] = [
  { source: "centralAmerica", targets: ["panama", "caribbean"] },
  { source: "panama", targets: ["centralAmerica", "caribbean"] },
  { source: "caribbean", targets: ["centralAmerica", "panama"] },
];

/** Flight-path style arc: control point lifted above the midpoint. */
function arcPath(from: { x: number; y: number }, to: { x: number; y: number }) {
  const midX = (from.x + to.x) / 2;
  const midY = (from.y + to.y) / 2;
  const dist = Math.hypot(to.x - from.x, to.y - from.y);
  const bulge = Math.min(dist * 0.32, 60);
  return `M ${from.x} ${from.y} Q ${midX} ${midY - bulge} ${to.x} ${to.y}`;
}

const CYCLE_SECONDS = 6;
const SLOT = CYCLE_SECONDS / TURNS.length;

const CONTEXT_STYLES = {
  light: { fill: "var(--color-bone-300)", stroke: "var(--color-carbon-300)", opacity: 0.5 },
  dark: { fill: "var(--color-carbon-700)", stroke: "var(--color-carbon-600)", opacity: 0.7 },
};

export function MarketsTerritoryOutline({ variant = "light" }: { variant?: "light" | "dark" }) {
  const reducedMotion = useReducedMotionPreference();
  const contextStyle = CONTEXT_STYLES[variant];

  return (
    <svg viewBox={MARKETS_MAP_VIEWBOX} fill="none" aria-hidden className="h-full w-full">
      <g fill={contextStyle.fill} stroke={contextStyle.stroke} strokeWidth="0.75">
        {CONTEXT_COUNTRIES.map((country) => (
          <path key={country.id} d={country.d} opacity={contextStyle.opacity} />
        ))}
      </g>

      {TURNS.map((turn, turnIndex) => {
        const start = turnIndex * SLOT;
        const draw = start + SLOT * 0.35;
        const holdEnd = start + SLOT * 0.75;
        const fadeEnd = start + SLOT * 0.92;
        const times = [
          0,
          start / CYCLE_SECONDS,
          draw / CYCLE_SECONDS,
          holdEnd / CYCLE_SECONDS,
          fadeEnd / CYCLE_SECONDS,
          1,
        ].map((t) => Math.min(Math.max(t, 0), 1));

        return turn.targets.map((target) => (
          <motion.path
            key={`${turn.source}-${target}`}
            d={arcPath(MARKET_HUBS[turn.source], MARKET_HUBS[target])}
            stroke="var(--color-mint-500)"
            strokeWidth="1.75"
            strokeLinecap="round"
            initial={{ opacity: reducedMotion ? 0.85 : 0, pathLength: reducedMotion ? 1 : 0 }}
            animate={
              reducedMotion
                ? { opacity: 0.85, pathLength: 1 }
                : { opacity: [0, 0, 1, 1, 0, 0], pathLength: [0, 0, 1, 1, 1, 1] }
            }
            transition={
              reducedMotion
                ? { duration: 0 }
                : {
                    duration: CYCLE_SECONDS,
                    times,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
          />
        ));
      })}

      {TERRITORY_GROUPS.map((group) => (
        <g key={group.key}>
          {group.paths.map((country, i) => (
            <motion.path
              key={country.id}
              d={country.d}
              fill="var(--color-mint-500)"
              fillOpacity={0.18}
              stroke="var(--color-mint-500)"
              strokeWidth="1.25"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: reducedMotion ? 1 : 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={
                reducedMotion
                  ? { duration: 0 }
                  : { duration: 1, ease: "easeInOut", delay: group.delay + i * 0.08 }
              }
            />
          ))}
        </g>
      ))}

      {TERRITORY_GROUPS.map((group) => {
        const hub = MARKET_HUBS[group.key];
        return (
          <motion.circle
            key={group.key}
            cx={hub.x}
            cy={hub.y}
            r={4}
            fill="var(--color-mint-500)"
            initial={{ opacity: reducedMotion ? 1 : 0 }}
            animate={reducedMotion ? { opacity: 1 } : { opacity: [0.4, 1, 0.4] }}
            transition={
              reducedMotion
                ? { duration: 0 }
                : {
                    duration: 2.4,
                    ease: "easeInOut",
                    repeat: Infinity,
                    delay: group.delay + 0.8,
                  }
            }
          />
        );
      })}
    </svg>
  );
}
