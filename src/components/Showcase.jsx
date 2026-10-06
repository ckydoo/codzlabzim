import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Reveal from './Reveal.jsx';
import Button, { Eyebrow, Grad } from './Button.jsx';
import { Tick } from './Icons.jsx';
import { DUR, EASE, spring } from '../motion.js';

/**
 * Sticky product storytelling showcase.
 * Left: feature blocks (scroll-synced). Right: sticky visual with quiet crossfade.
 * The chip strip is a tablist controlling the visual (click/keyboard jumps to a feature).
 * tabs: [{ id, label, title, desc, features, cta, visual }]
 */
export default function Showcase({ tabs }) {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const blockRefs = useRef([]);
  const tabRefs = useRef([]);

  // Scroll storytelling: the feature crossing the middle band drives the visual.
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = blockRefs.current.indexOf(entry.target);
            if (idx >= 0) setActive(idx);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );
    blockRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [tabs.length]);

  const goTo = (idx, focus = false) => {
    setActive(idx);
    const el = blockRefs.current[idx];
    if (el) el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
    if (focus) tabRefs.current[idx]?.focus();
  };

  const onKeyDown = (e, idx) => {
    let next = null;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (idx + 1) % tabs.length;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (idx - 1 + tabs.length) % tabs.length;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = tabs.length - 1;
    if (next !== null) {
      e.preventDefault();
      goTo(next, true);
    }
  };

  return (
    <section id="showcase" className="py-[clamp(4.5rem,8vw,7.5rem)]">
      <div className="mx-auto w-[min(1200px,calc(100%-3rem))]">
        <div className="mx-auto mb-[clamp(2.5rem,4.5vw,3.5rem)] grid max-w-[680px] justify-items-center gap-4 text-center">
          <Reveal><Eyebrow>Product showcase</Eyebrow></Reveal>
          <Reveal as="h2" delay={0.05} className="text-[clamp(1.875rem,3.6vw,2.5rem)]">
            Software that looks as good as <Grad>it performs</Grad>
          </Reveal>
          <Reveal as="p" delay={0.1} className="text-[1.0625rem] leading-[1.7] text-muted">
            A glimpse of the kinds of products we design, build and maintain for clients every week.
          </Reveal>
        </div>

        <Reveal className="rounded-panel border border-line bg-bg-subtle p-[clamp(1.5rem,3.5vw,2.75rem)]">
          {/* Jump nav - slides smoothly between products (desktop) */}
          <div
            role="tablist"
            aria-label="Product showcase"
            className="mb-[clamp(1.75rem,3.5vw,2.5rem)] hidden w-fit max-w-full flex-wrap gap-1 rounded-[10px] border border-line bg-white p-1 lg:inline-flex"
          >
            {tabs.map((tab, idx) => (
              <button
                key={tab.id}
                ref={(el) => { tabRefs.current[idx] = el; }}
                role="tab"
                id={`tab-${tab.id}`}
                aria-controls="showcase-visual"
                aria-selected={active === idx}
                tabIndex={active === idx ? 0 : -1}
                type="button"
                onClick={() => goTo(idx)}
                onKeyDown={(e) => onKeyDown(e, idx)}
                className={`relative cursor-pointer whitespace-nowrap rounded-[7px] px-4 py-2 text-[0.9375rem] font-medium transition-colors duration-200 ${
                  active === idx ? 'text-white' : 'text-muted hover:text-ink'
                }`}
              >
                {active === idx && (
                  <motion.span
                    layoutId="showcase-tab-pill"
                    className="absolute inset-0 rounded-[7px] bg-ink"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-[1]">{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="grid items-start gap-[clamp(1.75rem,3.5vw,2.75rem)] lg:grid-cols-[0.92fr_1.08fr]">
            {/* Feature blocks - scroll-synced */}
            <div className="grid gap-10">
              {tabs.map((tab, idx) => (
                <div
                  key={tab.id}
                  id={`panel-${tab.id}`}
                  ref={(el) => { blockRefs.current[idx] = el; }}
                  className="flex flex-col justify-center gap-4 lg:min-h-[480px]"
                >
                  <Reveal className="grid justify-items-start gap-4">
                    <Eyebrow>{tab.label}</Eyebrow>
                    <h3 className="text-[clamp(1.45rem,2.5vw,1.95rem)]">{tab.title}</h3>
                    <p className="text-[1.02rem] leading-[1.7] text-muted">{tab.desc}</p>
                    <ul className="grid gap-2.5">
                      {tab.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-[0.955rem] text-ink-2">
                          <Tick className="mt-[3px]" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* Inline visual (mobile / tablet) */}
                    <div className="relative w-full overflow-hidden rounded-card border border-line bg-white p-5 lg:hidden">
                      {tab.visual}
                    </div>

                    <Button to="/contact" variant="secondary" className="mt-1">{tab.cta}</Button>
                  </Reveal>
                </div>
              ))}
            </div>

            {/* Sticky product visual - quiet crossfade (desktop) */}
            <div
              role="tabpanel"
              id="showcase-visual"
              aria-labelledby={`tab-${tabs[active].id}`}
              className="hidden lg:block lg:sticky lg:top-[calc(68px+2.5rem)]"
            >
              <div className="relative min-h-[440px]">
                {tabs.map((tab, idx) => (
                  <div
                    key={tab.id}
                    aria-hidden={active !== idx}
                    className={`story-visual absolute inset-0 flex items-center overflow-hidden rounded-card border bg-white p-5 ${
                      active === idx
                        ? 'scale-100 opacity-100'
                        : 'pointer-events-none scale-[0.99] opacity-0'
                    } ${active === idx ? 'border-line-strong' : 'border-line'}`}
                  >
                    {tab.visual}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
