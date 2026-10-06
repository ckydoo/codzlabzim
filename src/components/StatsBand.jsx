import Reveal from './Reveal.jsx';
import Counter from './Counter.jsx';

/** Quiet stats strip. items: [{ value, decimals, prefix, suffix, label }] */
export default function StatsBand({ items }) {
  return (
    <section className="py-[clamp(3.5rem,6vw,5.5rem)]">
      <div className="mx-auto w-[min(1200px,calc(100%-3rem))]">
        <Reveal className="grid grid-cols-2 gap-y-10 border-y border-line py-[clamp(2.25rem,4vw,3.25rem)] lg:grid-cols-4">
          {items.map((item) => (
            <div className="px-2 text-center" key={item.label}>
              <div className="font-display text-[clamp(2.15rem,3.6vw,2.75rem)] font-semibold tracking-[-0.03em] tabular-nums text-ink">
                <Counter
                  value={item.value}
                  decimals={item.decimals || 0}
                  prefix={item.prefix || ''}
                  suffix={item.suffix || ''}
                />
              </div>
              <div className="mt-1.5 text-[0.9375rem] text-muted">{item.label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
