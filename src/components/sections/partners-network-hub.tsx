"use client";

import { motion } from "motion/react";

import { useReducedMotionPreference } from "@/hooks/use-reduced-motion";

const HUB = { x: 170, y: 160 };
const OUTER_COUNT = 7;

const OUTER_NODES = Array.from({ length: OUTER_COUNT }, (_, i) => {
  const angle = (-90 + i * (360 / OUTER_COUNT)) * (Math.PI / 180);
  const radius = 95 + (i % 3) * 15;
  return {
    x: HUB.x + Math.cos(angle) * radius,
    y: HUB.y + Math.sin(angle) * radius,
  };
});

/**
 * Hub-and-spoke network diagram, the Partners page's own visual signature —
 * a central hub (the brand) with spokes radiating out to partner nodes,
 * orange per §9's "orange = connection/decision" convention. Distinct from
 * Home's bracket, About's bracket, Services' staircase, and Markets' map.
 */
export function PartnersNetworkHub() {
  const reducedMotion = useReducedMotionPreference();

  return (
    <svg viewBox="0 0 340 320" fill="none" aria-hidden className="h-full w-full">
      {OUTER_NODES.map((node, i) => (
        <motion.line
          key={i}
          x1={HUB.x}
          y1={HUB.y}
          x2={node.x}
          y2={node.y}
          stroke="var(--color-primary-500)"
          strokeWidth="1.75"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: reducedMotion ? 1 : 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={
            reducedMotion ? { duration: 0 } : { duration: 0.7, ease: "easeInOut", delay: i * 0.12 }
          }
        />
      ))}

      {OUTER_NODES.map((node, i) => (
        <motion.circle
          key={i}
          cx={node.x}
          cy={node.y}
          r={4}
          fill="var(--color-primary-500)"
          initial={{ opacity: reducedMotion ? 1 : 0 }}
          animate={{ opacity: 1 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.3, delay: i * 0.12 + 0.6 }}
        />
      ))}

      <motion.circle
        cx={HUB.x}
        cy={HUB.y}
        r={7}
        fill="var(--color-primary-500)"
        initial={{ opacity: reducedMotion ? 1 : 0 }}
        animate={reducedMotion ? { opacity: 1 } : { opacity: [0.6, 1, 0.6] }}
        transition={
          reducedMotion
            ? { duration: 0 }
            : { duration: 2.4, ease: "easeInOut", repeat: Infinity, delay: 1 }
        }
      />
    </svg>
  );
}
