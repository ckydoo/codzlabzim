import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

/** Animated count-up that fires when scrolled into view. */
export default function Counter({ value, decimals = 0, prefix = '', suffix = '' }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const render = (val) => {
    const el = ref.current;
    if (el) el.textContent = `${prefix}${val.toFixed(decimals)}${suffix}`;
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const animate = () => {
      if (reduce) {
        render(value);
        return;
      }
      const duration = 1600;
      let start = null;
      const frame = (ts) => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        render(value * eased);
        if (p < 1) requestAnimationFrame(frame);
        else render(value);
      };
      requestAnimationFrame(frame);
    };

    if (!('IntersectionObserver' in window)) {
      animate();
      return undefined;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate();
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, decimals, prefix, suffix, reduce]);

  return <span ref={ref}>0</span>;
}
