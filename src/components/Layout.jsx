import { useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import { BrandWhatsapp } from './Icons.jsx';
import { SITE } from '../data/site.js';

export default function Layout() {
  const { hash, pathname } = useLocation();

  useLayoutEffect(() => {
    if (pathname !== '/work' || !hash) return undefined;
    const target = document.getElementById(hash.slice(1));
    if (!target) return undefined;

    const frame = requestAnimationFrame(() => {
      target.scrollIntoView({ block: 'start', behavior: 'instant' });
    });
    return () => cancelAnimationFrame(frame);
  }, [hash, pathname]);

  return (
    <>
      <a
        className="fixed left-4 top-[-100px] z-[2000] rounded-[8px] bg-ink px-5 py-3 font-semibold text-white transition-[top] duration-200 focus-visible:top-4"
        href="#main"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <a
        href={SITE.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with CodzLabZim on WhatsApp"
        className="group fixed bottom-5 right-5 z-[900] inline-flex h-14 items-center gap-3 rounded-full border border-white/15 bg-ink pl-4 pr-4 text-white shadow-[0_12px_32px_rgba(7,22,47,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand hover:shadow-[0_16px_38px_rgba(6,69,215,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand sm:bottom-7 sm:right-7"
      >
        <span className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition-colors group-hover:bg-white/15"><BrandWhatsapp size={19} /></span>
        <span className="pr-1 text-sm font-semibold tracking-[-0.01em]">Chat with us</span>
      </a>
    </>
  );
}
