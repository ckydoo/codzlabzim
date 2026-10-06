import { useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

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
    </>
  );
}
