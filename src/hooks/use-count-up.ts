"use client";

import { useEffect, useRef, useState } from "react";

import { useReducedMotionPreference } from "@/hooks/use-reduced-motion";

type UseCountUpOptions = {
  /** Target value to count up to. */
  end: number;
  /** Duration in milliseconds. Ignored (jumps instantly) if reduced motion is preferred. */
  duration?: number;
  /** Set true once the counter's container has entered the viewport. */
  start?: boolean;
};

/** Animates a number from 0 to `end` once `start` is true. Used by stat/count-up bands. */
export function useCountUp({ end, duration = 1200, start = true }: UseCountUpOptions): number {
  const [value, setValue] = useState(0);
  const reducedMotion = useReducedMotionPreference();
  const frameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!start) return;

    if (reducedMotion) {
      const frame = requestAnimationFrame(() => setValue(end));
      return () => cancelAnimationFrame(frame);
    }

    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * end));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      }
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [end, duration, start, reducedMotion]);

  return value;
}
