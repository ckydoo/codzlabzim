import usePageTitle from '../hooks/usePageTitle.js';
import Reveal from '../components/Reveal.jsx';
import Button, { Eyebrow, Grad } from '../components/Button.jsx';
import { ArrowRight } from '../components/Icons.jsx';

export default function NotFound() {
  usePageTitle('Page not found - CodzLabZim');

  return (
    <section className="relative grid min-h-[70vh] content-center border-b border-line bg-bg-subtle pb-[clamp(3rem,6vw,4.5rem)] pt-[calc(68px+clamp(3rem,6vw,4.75rem))]">
      <div className="relative z-[1] mx-auto w-[min(1200px,calc(100%-3rem))] text-center">
        <Reveal><Eyebrow>404</Eyebrow></Reveal>
        <Reveal as="h1" delay={0.05} className="mt-4 text-[clamp(2.25rem,4.6vw,3.25rem)] tracking-[-0.028em]">
          This page took a <Grad>wrong branch</Grad>
        </Reveal>
        <Reveal as="p" delay={0.1} className="mx-auto mt-5 max-w-[560px] text-[clamp(1.0625rem,1.6vw,1.1875rem)] leading-[1.7] text-muted">
          The page you're looking for doesn't exist - or it's still being brewed in the lab.
        </Reveal>
        <Reveal delay={0.16} className="mt-8 flex flex-wrap justify-center gap-3">
          <Button to="/" size="lg">
            Back to home <ArrowRight size={18} />
          </Button>
          <Button to="/contact" variant="secondary" size="lg">Contact us</Button>
        </Reveal>
      </div>
    </section>
  );
}
