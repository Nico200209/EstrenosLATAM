"use client";

import { motion } from "motion/react";

import { useReducedMotionPreference } from "@/hooks/use-reduced-motion";

const STEPS = 7;
const START_X = 20;
const START_Y = 260;
const END_X = 360;
const END_Y = 40;
const STEP_DX = (END_X - START_X) / STEPS;
const STEP_DY = (START_Y - END_Y) / STEPS;

const NODES = Array.from({ length: STEPS }, (_, i) => ({
  x: START_X + (i + 1) * STEP_DX,
  y: START_Y - (i + 1) * STEP_DY,
}));

const STAIR_PATH = (() => {
  let d = `M ${START_X} ${START_Y}`;
  for (let i = 1; i <= STEPS; i += 1) {
    const treadY = START_Y - (i - 1) * STEP_DY;
    const x = START_X + i * STEP_DX;
    const y = START_Y - i * STEP_DY;
    d += ` L ${x} ${treadY} L ${x} ${y}`;
  }
  return d;
})();

/** Ascending staircase of 7 nodes, one per "¿Cómo operamos?" step — the Services page's own visual signature (distinct from Home/About's bracket motif), per CLAUDE.md §7's timeline/workflow-diagram metaphor. */
export function ServicesStepPath() {
  const reducedMotion = useReducedMotionPreference();

  return (
    <svg viewBox="0 0 400 300" fill="none" aria-hidden className="h-full w-full">
      <motion.path
        d={STAIR_PATH}
        stroke="var(--color-primary-500)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={
          reducedMotion ? { duration: 0 } : { duration: 1.6, ease: "easeInOut", delay: 0.2 }
        }
      />
      {NODES.map((node, i) => {
        const isLast = i === NODES.length - 1;
        return (
          <motion.circle
            key={i}
            cx={node.x}
            cy={node.y}
            r={isLast ? 7 : 4}
            fill={isLast ? "var(--color-primary-500)" : "var(--color-bone-100)"}
            stroke="var(--color-primary-500)"
            strokeWidth="2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={
              reducedMotion
                ? { duration: 0 }
                : { duration: 0.3, delay: 0.3 + (i / NODES.length) * 1.4 }
            }
          />
        );
      })}
    </svg>
  );
}
