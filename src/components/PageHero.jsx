import { Link } from 'react-router-dom';
import Reveal from './Reveal.jsx';
import { Eyebrow } from './Button.jsx';

/** Inner-page hero - light, calm, with breadcrumbs. */
export default function PageHero({ crumbs = [], eyebrow, title, lead, children, centered = false }) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-bg-subtle pb-[clamp(4rem,7vw,6rem)] pt-[calc(68px+clamp(4rem,7vw,6rem))]">
      <div aria-hidden="true" className="pointer-events-none absolute right-[8%] top-[42%] hidden h-px w-[28%] bg-line lg:block"><span className="absolute -left-1 -top-1 h-2 w-2 rounded-full bg-brand"/><span className="absolute -right-1 -top-1 h-2 w-2 rounded-full border border-brand bg-bg-subtle"/></div>
      <div className={`relative z-[1] mx-auto w-[min(1200px,calc(100%-3rem))] ${centered ? 'text-center' : ''}`}>
        {crumbs.length > 0 && (
          <Reveal as="nav" aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-2 text-[0.85rem] text-muted-2">
            {crumbs.map((c, i) => (
              <span key={c.label} className="flex items-center gap-2">
                {i > 0 && <span className="opacity-50">/</span>}
                {c.to ? (
                  <Link to={c.to} className="text-muted transition-colors hover:text-ink">{c.label}</Link>
                ) : (
                  <span aria-current="page" className="text-ink">{c.label}</span>
                )}
              </span>
            ))}
          </Reveal>
        )}
        {eyebrow && (
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
        )}
        <Reveal as="h1" delay={0.05} className="mt-3.5 max-w-[800px] text-[clamp(2.25rem,4.6vw,3.25rem)] tracking-[-0.028em]">
          {title}
        </Reveal>
        {lead && (
          <Reveal as="p" delay={0.1} className={`mt-5 max-w-[640px] text-[clamp(1.0625rem,1.6vw,1.1875rem)] leading-[1.7] text-muted ${centered ? 'mx-auto' : ''}`}>
            {lead}
          </Reveal>
        )}
        {children && (
          <Reveal delay={0.16} className="mt-8">
            {children}
          </Reveal>
        )}
      </div>
    </section>
  );
}
