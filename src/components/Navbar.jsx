import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Menu, XIcon, ArrowRight } from './Icons.jsx';
import Brand from './Brand.jsx';

const PRIMARY = [
  { to: '/work', label: 'Work' },
  { to: '/services', label: 'Capabilities' },
  { to: '/about', label: 'Studio' },
  { to: '/contact', label: 'Contact' },
];

const PROJECTS = [
  { name: 'Servexa', type: 'Service operations', image: '/src/assets/img/servexa-latest.png' },
  { name: 'TerraBuild', type: 'Construction ERP', image: '/src/assets/img/terrabuild.png' },
  { name: 'Mhuri', type: 'Family finance', image: '/src/assets/img/mhuri-home.webp' },
  { name: 'UBC Hymnbook', type: 'Digital hymnal', image: '/src/assets/img/ubc-app.webp' },
  { name: 'Zexstar Construction', type: 'Corporate web', image: '/src/assets/img/zexstar-site.png' },
  { name: 'MIMJ', type: 'Corporate web', image: '/src/assets/img/mimj-site.png' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [project, setProject] = useState(0);
  const lastY = useRef(0);
  const toggleRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { pathname, hash } = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setWorkOpen(false);
  }, [pathname, hash]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 18);
      if (y < 110) setHidden(false);
      else if (y > lastY.current + 7) setHidden(true);
      else if (y < lastY.current - 7) setHidden(false);
      lastY.current = y;
    };
    lastY.current = window.scrollY;
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', mobileOpen);
    const onKey = (e) => {
      if (e.key === 'Escape') {
        if (mobileOpen) {
          setMobileOpen(false);
          toggleRef.current?.focus();
        }
        setWorkOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('menu-open');
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-[1000] pointer-events-none"
        initial={false}
        animate={{ y: hidden && !mobileOpen ? -92 : 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={`pointer-events-auto mx-auto mt-0 transition-all duration-300 ${scrolled ? 'mt-3 w-[min(1080px,calc(100%-2rem))]' : 'w-[min(1200px,calc(100%-3rem))]'}`}>
          <div className={`relative flex h-[68px] items-center justify-between gap-6 px-0 transition-all duration-300 ${scrolled ? 'rounded-[18px] border border-line bg-white/[0.94] px-4 shadow-md backdrop-blur-md' : 'border-b border-transparent bg-white/[0.86] backdrop-blur-md'}`}>
            <div className="group flex items-center gap-2.5">
              <span className="relative hidden h-2 w-2 rounded-full bg-brand sm:block" aria-hidden="true">
                <span className="absolute inset-[-4px] rounded-full border border-brand/20 opacity-0 transition-opacity group-hover:opacity-100" />
              </span>
              <Brand />
              <span className="hidden overflow-hidden whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.16em] text-muted opacity-0 transition-all duration-300 group-hover:ml-1 group-hover:opacity-100 xl:block">Building digital products</span>
            </div>

            <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
              {PRIMARY.map((link) => {
                const isWork = link.to === '/work';
                return (
                  <div key={link.to} className="relative" onMouseEnter={() => isWork && setWorkOpen(true)}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) => `group/nav relative block px-3.5 py-2 text-[0.91rem] font-medium transition-colors ${isActive ? 'text-ink' : 'text-muted hover:text-ink'}`}
                    >
                      {({ isActive }) => <>
                        <span>{link.label}</span>
                        <span className={`absolute bottom-0 left-3.5 right-3.5 h-px origin-left bg-brand transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover/nav:scale-x-100'}`} />
                        {isActive && <span className="absolute -left-0.5 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-brand" />}
                      </>}
                    </NavLink>
                  </div>
                );
              })}
            </nav>

            <div className="flex items-center gap-3">
              <Link to="/contact" className="group hidden items-center gap-2 rounded-[10px] bg-ink px-4 py-2.5 text-[0.88rem] font-semibold text-white transition-transform hover:-translate-y-px lg:inline-flex">
                Start a project <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <button
                ref={toggleRef}
                type="button"
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                onClick={() => setMobileOpen((v) => !v)}
                className="flex h-11 items-center gap-2 rounded-[10px] border border-line bg-white px-3 text-ink lg:hidden"
              >
                <span className="text-[0.72rem] font-semibold uppercase tracking-[0.12em]">{mobileOpen ? 'Close' : 'Menu'}</span>
                {mobileOpen ? <XIcon size={17} /> : <Menu size={17} />}
              </button>
            </div>

            <AnimatePresence>
              {workOpen && (
                <motion.div
                  onMouseLeave={() => setWorkOpen(false)}
                  className="absolute left-1/2 top-[60px] hidden w-[min(980px,calc(100vw-4rem))] -translate-x-1/2 pt-5 lg:block"
                  initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: reduceMotion ? 0 : 0.2 }}
                >
                  <div className="grid grid-cols-[1.05fr_.95fr] overflow-hidden rounded-[18px] border border-line bg-white shadow-md">
                    <div className="p-6">
                      <div className="mb-4 flex items-center justify-between">
                        <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-brand">Selected work</p>
                        <Link to="/work" className="text-xs font-semibold text-muted hover:text-ink">View all work →</Link>
                      </div>
                      {PROJECTS.map((p, i) => (
                        <Link key={p.name} to="/work" onMouseEnter={() => setProject(i)} className="group/project grid grid-cols-[2rem_1fr_auto] items-center gap-3 border-t border-line py-3 first:border-t-0">
                          <span className="font-mono text-[0.68rem] text-muted-2">{String(i + 1).padStart(2, '0')}</span>
                          <span className="text-[0.94rem] font-semibold text-ink">{p.name}</span>
                          <span className="flex items-center gap-3 text-[0.78rem] text-muted"><span>{p.type}</span><span className="transition-transform group-hover/project:translate-x-1">→</span></span>
                        </Link>
                      ))}
                    </div>
                    <div className="relative min-h-[330px] overflow-hidden bg-bg-subtle p-5">
                      <div className="absolute left-5 top-5 z-10 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-[0.66rem] font-bold uppercase tracking-[0.13em] text-ink shadow-xs">{PROJECTS[project].name}</div>
                      <AnimatePresence mode="wait">
                        <motion.img key={PROJECTS[project].name} src={PROJECTS[project].image} alt={`${PROJECTS[project].name} project preview`} className="h-full w-full rounded-[12px] border border-line object-cover object-top shadow-sm" initial={{ opacity: 0, scale: .99 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduceMotion ? 0 : .22 }} />
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div id="mobile-menu" className="fixed inset-0 z-[990] bg-bg-subtle px-6 pb-8 pt-28 lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduceMotion ? 0 : .2 }}>
            <div className="mx-auto flex h-full max-w-xl flex-col">
              <p className="mb-5 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-brand">Navigate</p>
              <div>
                {PRIMARY.map((link, i) => (
                  <motion.div key={link.to} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduceMotion ? 0 : .04 * i + .04, duration: .3 }}>
                    <NavLink to={link.to} className={({ isActive }) => `grid grid-cols-[2.4rem_1fr_auto] items-center border-t border-line py-5 text-[clamp(1.7rem,8vw,2.6rem)] font-semibold tracking-[-.04em] ${isActive ? 'text-brand' : 'text-ink'}`}>
                      <span className="font-mono text-[0.68rem] font-normal tracking-normal text-muted-2">0{i + 1}</span><span>{link.label}</span><span className="text-lg font-normal">↗</span>
                    </NavLink>
                  </motion.div>
                ))}
              </div>
              <div className="mt-auto border-t border-line pt-6">
                <Link to="/contact" className="group inline-flex items-center gap-3 text-xl font-semibold text-ink">Start a project <ArrowRight size={20} className="text-brand" /></Link>
                <div className="mt-8 flex items-end justify-between gap-4 text-xs text-muted">
                  <p>Mutare, Zimbabwe<br />Digital products for businesses anywhere.</p>
                  <span className="h-2 w-2 rounded-full bg-brand" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
