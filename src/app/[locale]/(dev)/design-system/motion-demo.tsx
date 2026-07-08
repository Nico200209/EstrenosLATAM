"use client";

import { motion } from "motion/react";

import { useReducedMotionPreference } from "@/hooks/use-reduced-motion";
import { fadeInUp, staggerContainer, textReveal } from "@/lib/motion";

function DemoCard({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-border bg-card flex h-40 flex-col items-center justify-center gap-3 rounded-xl border">
      {children}
      <span className="text-caption text-muted-foreground uppercase">{label}</span>
    </div>
  );
}

export function MotionDemo() {
  const reduced = useReducedMotionPreference();
  const transition = reduced ? { duration: 0 } : undefined;

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      <DemoCard label="fadeInUp">
        <motion.div
          key="fade-in-up"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={transition}
          className="bg-primary-500 size-12 rounded-lg"
        />
      </DemoCard>

      <DemoCard label="staggerContainer">
        <motion.div
          key="stagger"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex gap-2"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              transition={transition}
              className="bg-mint-500 size-8 rounded-md"
            />
          ))}
        </motion.div>
      </DemoCard>

      <DemoCard label="textReveal">
        <motion.div
          key="text-reveal"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex overflow-hidden"
        >
          {"Estrenos".split("").map((char, i) => (
            <motion.span
              key={i}
              variants={textReveal}
              transition={transition}
              className="text-h3 inline-block"
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      </DemoCard>
    </div>
  );
}
