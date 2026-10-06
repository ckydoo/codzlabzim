import { motion, useReducedMotion } from 'framer-motion';
import { EASE, DUR } from '../motion.js';

const VARIANTS = {
  up: { hidden: { opacity: 0, y: 14 }, shown: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -16 }, shown: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 16 }, shown: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.98 }, shown: { opacity: 1, scale: 1 } },
};

/**
 * Quiet scroll-reveal (fade + short translate). Fires once per element.
 * variant: up (default) | left | right | scale · `delay` in seconds.
 */
export default function Reveal({
  as = 'div',
  variant = 'up',
  delay = 0,
  className = '',
  children,
  ...rest
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as] || motion.div;
  const v = VARIANTS[variant] || VARIANTS.up;

  return (
    <Tag
      className={className}
      initial={reduce ? false : v.hidden}
      whileInView={reduce ? undefined : v.shown}
      viewport={{ once: true, margin: '0px 0px -6% 0px' }}
      transition={{ duration: DUR.ui + 0.18, ease: EASE, delay: reduce ? 0 : delay }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
