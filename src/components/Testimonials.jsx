import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Stars } from './Icons.jsx';

/** Testimonial slider with touch swipe, dots and pause-on-hover. */
export default function Testimonials({ items }) {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(1);
  const [paused, setPaused] = useState(false);
  const maxIndex = Math.max(0, items.length - perView);
  const startX = useRef(0);

  useEffect(() => {
    const calc = () => {
      setPerView(window.innerWidth >= 1100 ? 3 : window.innerWidth >= 768 ? 2 : 1);
    };
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);

  useEffect(() => {
    setIndex((i) => Math.min(i, Math.max(0, items.length - perView)));
  }, [perView, items.length]);

  useEffect(() => {
    if (paused || items.length <= perView) return undefined;
    const id = setInterval(() => {
      setIndex((i) => (i >= Math.max(0, items.length - perView) ? 0 : i + 1));
    }, 7000);
    return () => clearInterval(id);
  }, [paused, perView, items.length]);

  const go = (i) => setIndex(Math.max(0, Math.min(i, maxIndex)));
  const gap = 20;
  const offset = `translateX(calc(${(-index * 100) / perView}% - ${(index * gap) / perView}px))`;

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="overflow-hidden">
        <div
          className="flex gap-[20px] transition-transform duration-500 ease-out will-change-transform"
          style={{ transform: offset }}
          onTouchStart={(e) => { startX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            const dx = e.changedTouches[0].clientX - startX.current;
            if (Math.abs(dx) > 46) go(index + (dx < 0 ? 1 : -1));
          }}
        >
          {items.map((t) => (
            <div
              key={t.name + t.role}
              className="min-w-0 shrink-0 grow-0"
              style={{ flexBasis: `calc(${100 / perView}% - ${(gap * (perView - 1)) / perView}px)` }}
            >
              <figure className="flex h-full flex-col justify-between gap-6 rounded-card border border-line bg-white p-7">
                <div>
                  <Stars />
                  <blockquote className="mt-4 text-[1rem] leading-[1.7] text-ink-2">
                    {t.quote}
                  </blockquote>
                </div>
                <figcaption className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand text-[0.8125rem] font-semibold text-white">
                    {t.initials}
                  </span>
                  <span className="grid gap-0.5">
                    <b className="text-[0.9375rem] font-semibold tracking-tight text-ink">{t.name}</b>
                    <span className="text-[0.825rem] text-muted">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Previous testimonials"
          disabled={index === 0}
          onClick={() => go(index - 1)}
          className="grid h-11 w-11 cursor-pointer place-items-center rounded-[8px] border border-line bg-white text-ink transition-colors duration-150 hover:bg-bg-subtle disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronLeft size={19} />
        </button>
        <div className="flex gap-1.5">
          {Array.from({ length: maxIndex + 1 }, (_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide group ${i + 1}`}
              aria-current={i === index ? 'true' : undefined}
              onClick={() => go(i)}
              className={`h-[7px] cursor-pointer rounded-full border-0 p-0 transition-all duration-200 ease-out ${
                i === index ? 'w-6 bg-ink' : 'w-[7px] bg-line-strong'
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next testimonials"
          disabled={index === maxIndex}
          onClick={() => go(index + 1)}
          className="grid h-11 w-11 cursor-pointer place-items-center rounded-[8px] border border-line bg-white text-ink transition-colors duration-150 hover:bg-bg-subtle disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronRight size={19} />
        </button>
      </div>
    </div>
  );
}
