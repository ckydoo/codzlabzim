import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

/** Cycles through words with a quiet crossfade - hero headline. */
export default function Rotator({ words, interval = 3200 }) {
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || words.length < 2) return undefined;

    const id = setInterval(() => {
      activeRef.current = (activeRef.current + 1) % words.length;
      setActive(activeRef.current);
    }, interval);

    return () => clearInterval(id);
  }, [words.length, interval, reduce]);

  return (
    <span className="rotator text-brand" aria-live="polite">
      {words.map((word, i) => (
        <span key={word} className={i === active ? 'is-active' : ''}>
          {word}
        </span>
      ))}
    </span>
  );
}
