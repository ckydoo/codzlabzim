import usePageTitle from '../hooks/usePageTitle.js';
import Reveal from '../components/Reveal.jsx';
import PageHero from '../components/PageHero.jsx';
import CtaBand from '../components/CtaBand.jsx';
import Button, { Eyebrow, Grad } from '../components/Button.jsx';
import { Shield, MessageCircle, Zap, Heart, ArrowRight } from '../components/Icons.jsx';
import studio from '../assets/img/studio.jpg';

const VALUES = [
  {
    title: 'Craft over shortcuts',
    desc: 'We build things properly - tested, secure, documented - because software should outlive the invoice.',
    Icon: Shield,
    delay: 0.03,
  },
  {
    title: 'Radical honesty',
    desc: "Realistic timelines. Transparent prices. If something isn't worth building, we'll tell you before you spend a cent.",
    Icon: MessageCircle,
    delay: 0.07,
  },
  {
    title: 'Useful innovation',
    desc: 'We love new tech - but only when it solves a real problem. AI, automation, apps: always in service of outcomes.',
    Icon: Zap,
    delay: 0.11,
  },
  {
    title: 'Clients as partners',
    desc: 'Your wins are our wins. We stay long after launch, celebrating milestones and solving problems together.',
    Icon: Heart,
    delay: 0.15,
  },
];

const PROCESS = [
  { title: 'Listen first', desc: 'We start by understanding your business, your users and what "success" really means for you.', tag: 'Always', delay: 0.03 },
  { title: 'Deliver in the open', desc: "Weekly demos, shared boards and honest updates. You're never guessing where your project stands.", tag: 'Weekly', delay: 0.08 },
  { title: 'Own our work', desc: "Bugs happen - we fix them fast and free within the support window. Quality isn't a checkbox; it's our reputation.", tag: 'Guarantee', delay: 0.13 },
  { title: 'Grow together', desc: 'The best products evolve. We measure, learn and improve - helping your software grow with your ambitions.', tag: 'Long-term', delay: 0.18 },
];

const ROLES = [
  ['Product & Strategy', 'Scoping, roadmaps & UX thinking'],
  ['Design', 'Brand-perfect UI & interaction craft'],
  ['Engineering', 'Web, mobile, cloud & AI systems'],
  ['Support & Success', 'Launch, training & ongoing care'],
];

const STACK = [
  'React & Next.js', 'Node.js', 'Python', 'Flutter', 'React Native', 'PostgreSQL',
  'OpenAI & LLMs', 'AWS & Azure', 'Docker', 'Firebase', 'Laravel', 'Tailwind',
];

export default function About() {
  usePageTitle(
    'About - The Software Laboratory of Zimbabwe | CodzLabZim',
    'CodzLabZim is a Mutare-based software studio building world-class custom software for companies and individuals. Learn our story, values and how we work.'
  );

  return (
    <>
      <PageHero
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About' }]}
        eyebrow="Our story"
        title={<>A product studio <Grad>built in Zimbabwe.</Grad></>}
        lead="We design and engineer digital products from Zimbabwe for organisations that need software to fit the way they actually work."
      />

      {/* Story */}
      <section className="relative pb-[clamp(4.5rem,8vw,7.5rem)]">
        <div className="mx-auto grid w-[min(1200px,calc(100%-3rem))] items-center gap-[clamp(2.5rem,5vw,4.5rem)] lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div>
            <Reveal><Eyebrow>Who we are</Eyebrow></Reveal>
            <Reveal as="h2" delay={0.05} className="mb-5 mt-4 text-[clamp(1.85rem,3.5vw,2.65rem)]">
              Local context. <Grad>Production-minded craft.</Grad>
            </Reveal>
            <Reveal as="p" delay={0.1} className="mb-4 text-[1.02rem] leading-[1.72] text-muted">
              We're a compact team of engineers, designers and product thinkers who got tired of
              seeing businesses held back by software that's slow, ugly, or absurdly overpriced.
              So we built a studio that works differently.
            </Reveal>
            <Reveal as="p" delay={0.14} className="mb-4 text-[1.02rem] leading-[1.72] text-muted">
              From local enterprises running complex logistics across the SADC region, to founders
              launching their very first app - we combine local understanding with global
              engineering standards. Every product we ship is fast, secure, beautifully designed
              and genuinely useful.
            </Reveal>
            <Reveal as="p" delay={0.18} className="text-[1.02rem] leading-[1.72] text-muted">
              Our name says it all: <b className="font-semibold text-ink">Codz</b> - code,{' '}
              <b className="font-semibold text-ink">Lab</b> - experimentation and craft,{' '}
              <b className="font-semibold text-ink">Zim</b> - our home. A laboratory where world-class
              software is brewed in Zimbabwe.
            </Reveal>
            <Reveal delay={0.22} className="mt-8 flex flex-wrap gap-3">
              <Button to="/contact">Work with us</Button>
              <Button to="/work" variant="secondary">See our work</Button>
            </Reveal>
          </div>
          <Reveal className="overflow-hidden rounded-panel border border-line bg-white p-2" variant="right">
            <img
              className="h-full min-h-[280px] w-full rounded-card object-cover"
              src={studio}
              alt="CodzLabZim developers working in a modern Mutare studio with warm light and glowing screens"
              loading="lazy"
              width="960"
              height="600"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-bg-subtle py-8">
        <div className="mx-auto flex w-[min(1200px,calc(100%-3rem))] flex-wrap items-center justify-between gap-5 text-sm text-muted">
          <span className="font-semibold text-ink">What our work spans</span><span>Service operations</span><span>Construction ERP</span><span>Family finance</span><span>Digital publishing</span><span>Corporate web</span>
        </div>
      </section>

      {/* Values */}
      <section className="relative border-y border-line bg-bg-subtle py-[clamp(4.5rem,8vw,7.5rem)]">
        <div className="mx-auto w-[min(1200px,calc(100%-3rem))]">
          <div className="mx-auto mb-[clamp(2.5rem,4.5vw,3.5rem)] grid max-w-[680px] justify-items-center gap-4 text-center">
            <Reveal><Eyebrow>What drives us</Eyebrow></Reveal>
            <Reveal as="h2" delay={0.05} className="text-[clamp(1.875rem,3.6vw,2.5rem)]">
              Values we <Grad>actually live by</Grad>
            </Reveal>
            <Reveal as="p" delay={0.1} className="text-[1.0625rem] leading-[1.7] text-muted">
              Not words on a wall - these shape every line of code we write and every conversation we have.
            </Reveal>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {VALUES.map((v) => (
              <Reveal
                as="article"
                className="flex h-full flex-col rounded-card border border-line bg-white p-7"
                key={v.title}
                delay={v.delay}
              >
                <div className="mb-5 grid h-11 w-11 place-items-center rounded-[10px] border border-line bg-bg-subtle text-ink">
                  <v.Icon size={21} />
                </div>
                <h3 className="mb-2 text-[1.175rem]">{v.title}</h3>
                <p className="text-[0.955rem] leading-[1.7] text-muted">{v.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative py-[clamp(4.5rem,8vw,7.5rem)]">
        <div className="mx-auto w-[min(1200px,calc(100%-3rem))]">
          <Reveal className="grid gap-8 rounded-panel border border-line bg-white p-[clamp(1.75rem,3.5vw,2.75rem)]">
            <div>
              <Eyebrow>Our team</Eyebrow>
              <h2 className="mb-3 mt-4 text-[clamp(1.65rem,3vw,2.25rem)]">
                Small team. <Grad>Senior talent.</Grad>
              </h2>
              <p className="max-w-[680px] text-[1.02rem] leading-[1.72] text-muted">
                You'll work directly with the people building your product - not layers of account
                managers. Designers, engineers and product leads who've shipped real software for
                startups, enterprises and everything in between.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {ROLES.map(([role, desc]) => (
                <div className="rounded-card border border-line bg-bg-subtle p-5" key={role}>
                  <b className="mb-1 block text-[0.975rem] font-semibold tracking-tight text-ink">{role}</b>
                  <span className="text-[0.865rem] leading-relaxed text-muted">{desc}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {STACK.map((t) => (
                <span
                  className="rounded-md border border-line bg-bg-subtle px-2.5 py-1 text-[0.8125rem] font-medium text-muted"
                  key={t}
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process recap */}
      <section className="relative border-t border-line bg-bg-subtle py-[clamp(4.5rem,8vw,7.5rem)]">
        <div className="mx-auto w-[min(1200px,calc(100%-3rem))]">
          <div className="mx-auto mb-[clamp(2.5rem,4.5vw,3.5rem)] grid max-w-[680px] justify-items-center gap-4 text-center">
            <Reveal><Eyebrow>How we work</Eyebrow></Reveal>
            <Reveal as="h2" delay={0.05} className="text-[clamp(1.875rem,3.6vw,2.5rem)]">
              A partnership you can <Grad>count on</Grad>
            </Reveal>
            <Reveal as="p" delay={0.1} className="text-[1.0625rem] leading-[1.7] text-muted">
              Clear communication, weekly progress and no surprises - from the first hello to the
              hundredth update.
            </Reveal>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <Reveal
                as="article"
                className="rounded-card border border-line bg-white p-6"
                key={p.title}
                delay={p.delay}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-soft text-[0.875rem] font-semibold text-brand tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-[1.125rem]">{p.title}</h3>
                </div>
                <p className="text-[0.9375rem] leading-[1.68] text-muted">{p.desc}</p>
                <span className="mt-4 inline-block text-[0.78rem] font-medium uppercase tracking-[0.06em] text-muted-2">
                  {p.tag}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={<>Let's write your <span className="text-white/90">success story.</span></>}
        text="Whether you're a company with a big vision or an individual with a bold idea - we'd love to hear it."
        actions={
          <>
            <Button to="/contact" variant="light" size="lg">
              Get your free quote <ArrowRight size={18} />
            </Button>
            <Button to="/services" variant="lightGhost" size="lg">
              Explore services
            </Button>
          </>
        }
        side={[
          'Free, no-obligation consultation',
          'Fixed quotes, zero surprises',
          'NDA-friendly from day one',
          'We reply within 24 hours',
        ]}
      />
    </>
  );
}
