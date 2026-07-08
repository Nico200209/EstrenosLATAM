"use client";

import { useReducedMotion } from "motion/react";

/**
 * Single import point for respecting prefers-reduced-motion across the site.
 * Wraps Motion's built-in hook so call sites don't reach into `motion/react`
 * directly and every animated component shares one convention.
 */
export function useReducedMotionPreference(): boolean {
  return useReducedMotion() ?? false;
}
