/**
 * CodzLabZim - shared motion system.
 * One source of truth for durations, easing and entrance variants.
 *
 * Timing scale:
 *   fast  140ms - hover/press colour feedback
 *   base  200ms - buttons, links, inputs, indicators
 *   ui    320ms - panels, accordions, menus
 *   story 550ms - screenshot swaps, section storytelling
 */

export const EASE = [0.22, 1, 0.36, 1];

export const DUR = {
  fast: 0.14,
  base: 0.2,
  ui: 0.32,
  story: 0.55,
};

/** Standard entrance: opacity + short lift. */
export const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  shown: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  shown: { opacity: 1 },
};

export const fadeScale = {
  hidden: { opacity: 0, scale: 0.99 },
  shown: { opacity: 1, scale: 1 },
};

/** Container that staggers its direct motion children. */
export const stagger = (each = 0.07, delay = 0) => ({
  hidden: {},
  shown: {
    transition: { staggerChildren: each, delayChildren: delay },
  },
});

export const fadeUpChild = (duration = DUR.ui) => ({
  hidden: { opacity: 0, y: 12 },
  shown: {
    opacity: 1,
    y: 0,
    transition: { duration, ease: EASE },
  },
});

/** Shared framer transition (seconds). */
export const transition = (duration = DUR.ui, delay = 0) => ({
  duration,
  ease: EASE,
  delay,
});

/** Spring for toggles/thumbs - snappy, no bounce overshoot beyond 1.02. */
export const spring = { type: 'spring', stiffness: 400, damping: 28 };

/** True when the visitor asked for reduced motion. */
export function reducedMotion() {
  return typeof window !== 'undefined'
    && window.matchMedia
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** True on fine-pointer (mouse) devices only - for cursor-aware effects. */
export function finePointer() {
  return typeof window !== 'undefined'
    && window.matchMedia
    && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
}
