import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/** Single-open FAQ accordion with smooth height animation. */
export default function Faq({ items, initialOpen = 0 }) {
  const [open, setOpen] = useState(initialOpen);

  return (
    <div className="mx-auto grid max-w-[760px] gap-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className={`overflow-hidden rounded-card border bg-white transition-colors duration-200 ${
              isOpen ? 'border-line-strong' : 'border-line hover:border-line-strong/70'
            }`}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full cursor-pointer items-center justify-between gap-5 bg-transparent px-6 py-5 text-left text-[1.02rem] font-semibold tracking-[-0.015em] text-ink"
            >
              {item.q}
              <span
                className={`relative grid h-[26px] w-[26px] shrink-0 place-items-center rounded-full border transition-colors duration-200 ${
                  isOpen ? 'border-transparent bg-brand' : 'border-line'
                }`}
                aria-hidden="true"
              >
                <span className={`absolute h-[1.5px] w-[10px] rounded-sm ${isOpen ? 'bg-white' : 'bg-ink-2'}`} />
                <span className={`absolute h-[10px] w-[1.5px] rounded-sm transition-opacity duration-200 ${isOpen ? 'bg-white opacity-0' : 'bg-ink-2 opacity-100'}`} />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="px-6 pb-6 text-[0.975rem] leading-[1.72] text-muted">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
