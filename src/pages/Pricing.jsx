import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle.js';
import Reveal from '../components/Reveal.jsx';
import PageHero from '../components/PageHero.jsx';
import Pricing from '../components/Pricing.jsx';
import Faq from '../components/Faq.jsx';
import CtaBand from '../components/CtaBand.jsx';
import Button, { Badge, Eyebrow, Grad } from '../components/Button.jsx';
import { ArrowRight } from '../components/Icons.jsx';
import { PRICING_TIERS } from '../data/pricing.js';
import { PRICING_FAQ } from '../data/faqs.js';
import { SITE } from '../data/site.js';

const COMPARE_ROWS = [
  ['Free consultation & quote', ['Included', true], ['Included', true], ['Included', true]],
  ['Custom UI/UX design', ['Included', true], ['Included', true], ['Included', true]],
  ['Mobile & tablet responsive', ['Included', true], ['Included', true], ['Included', true]],
  ['Source code & IP ownership', ['100%', true], ['100%', true], ['100%', true]],
  ['AI automation / chatbot', ['Add-on', false], ['Included', true], ['Advanced', true]],
  ['System integrations', ['Basic', false], ['Standard', false], ['Unlimited', false]],
  ['Dedicated project lead', ['-', false], ['Included', true], ['Included', true]],
  ['Post-launch support', ['1 month', false], ['3 months', false], ['Custom SLA', false]],
  ['Uptime SLA & monitoring', ['-', false], ['Best effort', false], ['99.9%', true]],
  ['On-site training & workshops', ['-', false], ['Add-on', false], ['Included', true]],
];

const ADDONS = [
  { title: 'AI Chatbot', price: 'from $350', desc: 'WhatsApp or website assistant trained on your business, with live-agent handoff.', delay: 0.02 },
  { title: 'Mobile App', price: 'from $1,200', desc: 'iOS & Android from one codebase, published to the stores with analytics.', delay: 0.06 },
  { title: 'SEO & Growth Pack', price: 'from $250/mo', desc: 'Keyword strategy, technical SEO, content guidance and monthly reporting.', delay: 0.1 },
  { title: 'Care & Maintenance', price: 'from $99/mo', desc: 'Updates, backups, security patches, monitoring and priority bug fixes.', delay: 0.14 },
  { title: 'UI/UX Design Sprint', price: 'from $600', desc: 'Research, wireframes and clickable prototypes - perfect before fundraising.', delay: 0.18 },
  { title: 'Cloud & DevOps', price: 'from $400', desc: 'Deployment pipelines, monitoring, backups and cost-optimised infrastructure.', delay: 0.22 },
];

function CompareCell({ value, highlighted }) {
  if (highlighted) {
    return <Badge tone="green">{value}</Badge>;
  }
  return value;
}

export default function PricingPage() {
  usePageTitle(
    'Pricing - Transparent, Honest Software Pricing | CodzLabZim',
    'Simple, transparent pricing for custom software, websites, mobile apps and AI automation in Zimbabwe. Fixed-scope projects from $450 and monthly retainers from $150. Free quotes.'
  );

  return (
    <>
      <PageHero
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Pricing' }]}
        centered
        eyebrow="Transparent pricing"
        title={<>Premium software, <Grad>sensible prices</Grad></>}
        lead={'No mystery quotes. No bloated retainers. Just clear packages, honest “from” prices and a free consultation to find exactly what you need.'}
      />

      <Pricing
        tiers={PRICING_TIERS}
        note={
          <>
            All prices in USD. Need something smaller or unusual?{' '}
            <Link className="link-underline pb-0.5 font-semibold text-brand transition-colors hover:text-brand-strong" to="/contact">
              Tell us your budget
            </Link>{' '}
            - we'll always give you an honest answer.
          </>
        }
      />

      {/* Comparison table */}
      <section className="relative border-t border-line bg-bg-subtle py-[clamp(4.5rem,8vw,7.5rem)]">
        <div className="mx-auto w-[min(1200px,calc(100%-3rem))]">
          <div className="mx-auto mb-[clamp(2.5rem,4.5vw,3.5rem)] grid max-w-[680px] justify-items-center gap-4 text-center">
            <Reveal><Eyebrow>Compare plans</Eyebrow></Reveal>
            <Reveal as="h2" delay={0.05} className="text-[clamp(1.875rem,3.6vw,2.5rem)]">
              Every plan includes <Grad>the essentials</Grad>
            </Reveal>
          </div>
          <Reveal className="overflow-x-auto rounded-card border border-line bg-white">
            <table className="w-full min-w-[640px] border-collapse text-[0.925rem]">
              <thead>
                <tr>
                  {['Feature', 'Starter', 'Growth', 'Enterprise'].map((h, i) => (
                    <th
                      key={h}
                      scope="col"
                      className={`border-b border-line bg-bg-subtle px-6 py-4 text-[0.95rem] font-semibold text-ink ${i === 0 ? 'text-left' : 'text-center'}`}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map(([feature, a, b, c]) => (
                  <tr key={feature} className="transition-colors hover:bg-bg-subtle/60">
                    <th scope="row" className="border-b border-line px-6 py-4 text-left font-medium text-ink-2">
                      {feature}
                    </th>
                    <td className="border-b border-line px-6 py-4 text-center text-ink-2">
                      <CompareCell value={a[0]} highlighted={a[1]} />
                    </td>
                    <td className="border-b border-line px-6 py-4 text-center text-ink-2">
                      <CompareCell value={b[0]} highlighted={b[1]} />
                    </td>
                    <td className="border-b border-line px-6 py-4 text-center text-ink-2">
                      <CompareCell value={c[0]} highlighted={c[1]} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* Add-ons */}
      <section className="relative py-[clamp(4.5rem,8vw,7.5rem)]">
        <div className="mx-auto w-[min(1200px,calc(100%-3rem))]">
          <div className="mx-auto mb-[clamp(2.5rem,4.5vw,3.5rem)] grid max-w-[680px] justify-items-center gap-4 text-center">
            <Reveal><Eyebrow>Add-ons &amp; services</Eyebrow></Reveal>
            <Reveal as="h2" delay={0.05} className="text-[clamp(1.875rem,3.6vw,2.5rem)]">
              Level up <Grad>whenever you're ready</Grad>
            </Reveal>
            <Reveal as="p" delay={0.1} className="text-[1.0625rem] leading-[1.7] text-muted">
              Bolt on extras to any plan - or ask us for something not on this list.
            </Reveal>
          </div>
          <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]">
            {ADDONS.map((a) => (
              <Reveal
                as="article"
                className="rounded-card border border-line bg-white p-6"
                key={a.title}
                delay={a.delay}
              >
                <h3 className="mb-2 text-[1.125rem]">{a.title}</h3>
                <p className="mb-2"><b className="font-display text-[1.02rem] font-semibold text-brand">{a.price}</b></p>
                <p className="text-[0.9375rem] leading-[1.68] text-muted">{a.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="relative border-t border-line bg-bg-subtle py-[clamp(4.5rem,8vw,7.5rem)]">
        <div className="mx-auto w-[min(1200px,calc(100%-3rem))]">
          <div className="mx-auto mb-[clamp(2.5rem,4.5vw,3.5rem)] grid max-w-[680px] justify-items-center gap-4 text-center">
            <Reveal><Eyebrow>Pricing FAQ</Eyebrow></Reveal>
            <Reveal as="h2" delay={0.05} className="text-[clamp(1.875rem,3.6vw,2.5rem)]">
              Money questions, <Grad>straight answers</Grad>
            </Reveal>
          </div>
          <Reveal>
            <Faq items={PRICING_FAQ} />
          </Reveal>
        </div>
      </section>

      <CtaBand
        title={<>Get a fixed quote <span className="text-white/90">in 24 hours.</span></>}
        text="Tell us what you're building. We'll come back with a clear scope, timeline and price - free, with zero obligation."
        actions={
          <>
            <Button to="/contact" variant="light" size="lg">
              Get your free quote <ArrowRight size={18} />
            </Button>
            <Button href={`mailto:${SITE.email}`} variant="lightGhost" size="lg">
              Email us directly
            </Button>
          </>
        }
        side={[
          'Fixed, itemised quotes',
          'No hidden costs',
          'Milestone-based payments',
          'Free scoping consultation',
        ]}
      />
    </>
  );
}
