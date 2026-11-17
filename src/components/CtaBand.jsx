import Reveal from './Reveal.jsx';
import { Check } from './Icons.jsx';

/** Dark closing CTA panel - the one deliberate high-contrast moment. */
export default function CtaBand({ title, text, actions, side = [] }) {
  return (
    <section className="py-[clamp(4.5rem,8vw,7.5rem)]">
      <div className="mx-auto w-[min(1200px,calc(100%-3rem))]">
        <Reveal className="grid items-center gap-10 rounded-panel bg-ink px-[clamp(1.75rem,5vw,4rem)] py-[clamp(2.5rem,5.5vw,4.25rem)] lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <h2 className="text-white text-[clamp(1.85rem,3.6vw,2.65rem)]">{title}</h2>
            {text && <p className="mt-4 max-w-[540px] text-[1.0625rem] leading-[1.7] text-white/70">{text}</p>}
            {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
          </div>
          {side.length > 0 && (
            <ul className="grid gap-3 rounded-[14px] border border-white/12 bg-white/[0.06] p-6">
              {side.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[0.9375rem] text-white/75">
                  <Check size={15} className="shrink-0 text-success" />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </Reveal>
      </div>
    </section>
  );
}
