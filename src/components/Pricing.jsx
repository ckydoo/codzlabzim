import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Reveal from './Reveal.jsx';
import Button, { Eyebrow, Grad } from './Button.jsx';
import { Tick } from './Icons.jsx';

function PriceCard({ tier, featured, flag }) {
  return (
    <Reveal
      as="article"
      delay={tier.delay}
      className={`relative flex flex-col gap-6 rounded-card p-7 transition-colors duration-200 ${
        featured
          ? 'border-2 border-brand bg-white shadow-sm'
          : 'border border-line bg-white hover:border-line-strong'
      }`}
    >
      {flag && (
        <span className="absolute right-6 top-6 rounded-md bg-brand-soft px-2.5 py-1 text-[0.75rem] font-semibold text-brand">
          {flag}
        </span>
      )}

      <div className={flag ? 'pr-24' : ''}>
        <h3 className="text-[1.25rem]">{tier.name}</h3>
        <p className="mt-2 text-[0.9375rem] leading-[1.65] text-muted">{tier.desc}</p>
      </div>

      <div>
        <div className="flex items-baseline gap-1.5">
          {tier.currency && (
            <span className={`font-medium text-muted ${tier.custom ? 'text-[1.55rem]' : 'text-[1.0625rem]'}`}>
              {tier.currency}
            </span>
          )}
          {tier.price && (
            <motion.span
              key={tier.price}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.22 }}
              className="font-display text-[clamp(2.35rem,4vw,2.85rem)] font-semibold leading-none tracking-[-0.03em] tabular-nums text-ink"
            >
              {tier.price}
            </motion.span>
          )}
          {tier.per && <span className="text-[0.9375rem] text-muted">{tier.per}</span>}
        </div>
        <p className="mt-2 min-h-[1.35em] text-[0.85rem] text-muted-2">{tier.note}</p>
      </div>

      <ul className="grid gap-3 border-y border-line py-5">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-[0.9375rem] leading-[1.6] text-ink-2">
            <Tick className="mt-[3px]" />
            {f}
          </li>
        ))}
      </ul>

      <Button to={tier.ctaTo || '/contact'} variant={featured ? 'primary' : 'secondary'} className="mt-auto w-full">
        {tier.cta}
      </Button>
    </Reveal>
  );
}

/**
 * Pricing grid with project/monthly toggle.
 * tiers: [{ name, desc, project, monthly, features, cta, featured, flag }]
 */
export default function Pricing({ tiers, note }) {
  const [mode, setMode] = useState('project');

  const resolve = (tier) => {
    const t = tier[mode] || tier.project;
    return { ...tier, price: t.price, per: t.per, note: t.note, currency: t.currency ?? '$', custom: t.custom };
  };

  return (
    <section id="pricing" className="py-[clamp(4.5rem,8vw,7.5rem)]">
      <div className="mx-auto w-[min(1200px,calc(100%-3rem))]">
        <div className="mx-auto mb-[clamp(2.5rem,4.5vw,3.5rem)] grid max-w-[680px] justify-items-center gap-4 text-center">
          <Reveal><Eyebrow>Simple, honest pricing</Eyebrow></Reveal>
          <Reveal as="h2" delay={0.05} className="text-[clamp(1.875rem,3.6vw,2.5rem)]">
            Premium software, <Grad>sensible prices</Grad>
          </Reveal>
          <Reveal as="p" delay={0.1} className="text-[1.0625rem] leading-[1.7] text-muted">
            Start with a fixed-scope project or keep us on a monthly retainer. Every plan includes
            clean code you own and real human support.
          </Reveal>
        </div>

        <Reveal className="text-center">
          <div
            role="group"
            aria-label="Pricing mode"
            className="mx-auto inline-flex items-center gap-3 rounded-[10px] border border-line bg-white p-1.5"
          >
            {['project', 'monthly'].map((m) => (
              <button
                key={m}
                type="button"
                aria-pressed={mode === m}
                onClick={() => setMode(m)}
                className={`cursor-pointer rounded-[7px] px-3.5 py-1.5 text-[0.9rem] font-medium transition-colors duration-150 ${
                  mode === m ? 'bg-bg-muted text-ink' : 'text-muted hover:text-ink'
                }`}
              >
                {m === 'project' ? 'Project-based' : 'Monthly retainer'}
              </button>
            ))}
            <button
              type="button"
              role="switch"
              aria-checked={mode === 'monthly'}
              aria-label="Toggle monthly retainer pricing"
              onClick={() => setMode(mode === 'monthly' ? 'project' : 'monthly')}
              className="relative h-[26px] w-[46px] cursor-pointer rounded-full border border-line bg-bg-muted p-0"
            >
              <motion.span
                className="absolute left-[2px] top-[2px] h-[20px] w-[20px] rounded-full bg-brand"
                animate={{ x: mode === 'monthly' ? 20 : 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 28 }}
              />
            </button>
            <span className="rounded-md bg-success-soft px-2.5 py-1 text-[0.8rem] font-semibold text-success-text">
              Save up to 20%
            </span>
          </div>
        </Reveal>

        <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-3">
          {tiers.map((tier) => (
            <PriceCard key={tier.name} tier={resolve(tier)} featured={tier.featured} flag={tier.flag} />
          ))}
        </div>

        {note && (
          <Reveal as="p" delay={0.1} className="mt-8 text-center text-[0.9375rem] text-muted">
            {note}
          </Reveal>
        )}
      </div>
    </section>
  );
}
