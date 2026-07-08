import type { Variants } from "motion/react";

/**
 * Reusable Motion variants for scroll-reveal and stagger patterns used
 * throughout the site. Every consumer must respect prefers-reduced-motion —
 * pair these with `useReducedMotionPreference()` (src/hooks/use-reduced-motion.ts)
 * and branch the transition, e.g.:
 *
 *   const reduced = useReducedMotionPreference();
 *   <motion.div variants={fadeInUp} transition={reduced ? { duration: 0 } : undefined} />
 *
 * Route-line draw animations, magnetic buttons, and animated underlines are
 * intentionally NOT included here — they need concrete geometry/pointer
 * logic tied to a specific component (see Hero/Markets in later phases).
 */

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/** Parent variant: pair with fadeInUp/fadeIn on children for a staggered reveal. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

/** Per-word/char reveal — apply to each split text unit, use with staggerContainer as parent. */
export const textReveal: Variants = {
  hidden: { opacity: 0, y: "0.5em" },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

/** Convention for scroll-triggered reveals: pair with `whileInView="visible"` and `viewport={{ once: true, margin: "-80px" }}`. */
export const scrollReveal = fadeInUp;
