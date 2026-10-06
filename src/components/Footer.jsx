import { Link } from 'react-router-dom';
import Brand from './Brand.jsx';
import { SITE, SERVICE_LINKS, COMPANY_LINKS } from '../data/site.js';
import {
  BrandX, BrandLinkedin, BrandGithub, BrandInstagram, BrandWhatsapp, MapPin,
} from './Icons.jsx';

const SOCIALS = [
  { label: 'X (Twitter)', href: '#', Icon: BrandX },
  { label: 'LinkedIn', href: '#', Icon: BrandLinkedin },
  { label: 'GitHub', href: '#', Icon: BrandGithub },
  { label: 'Instagram', href: '#', Icon: BrandInstagram },
  { label: 'WhatsApp', href: SITE.whatsapp, Icon: BrandWhatsapp },
];

const linkCls =
  'inline-block text-[0.9375rem] text-muted transition-colors duration-150 hover:text-ink';

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg-subtle">
      <div className="mx-auto w-[min(1200px,calc(100%-3rem))]">
        <div className="grid gap-10 pb-12 pt-[clamp(3rem,6vw,4.5rem)] lg:grid-cols-[1.35fr_0.75fr_0.75fr_0.9fr]">
          <div className="flex max-w-[320px] flex-col items-start gap-4">
            <Brand />
            <p className="text-[0.9375rem] leading-[1.7] text-muted">
              The software laboratory of Zimbabwe. We turn ambitious ideas into custom
              software - SaaS, ERP, mobile apps, AI automation and web apps - with
              world-class craft and honest pricing.
            </p>
            <div className="flex flex-wrap gap-2">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={`CodzLabZim on ${label}`}
                  className="grid h-10 w-10 place-items-center rounded-[8px] border border-line bg-white text-muted transition-colors duration-150 hover:border-line-strong hover:text-ink"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Services links">
            <h5 className="mb-4 text-[0.8125rem] font-semibold uppercase tracking-[0.06em] text-ink">Services</h5>
            <ul className="grid gap-2.5">
              {SERVICE_LINKS.map((l) => (
                <li key={l.to}><Link className={linkCls} to={l.to}>{l.label}</Link></li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company links">
            <h5 className="mb-4 text-[0.8125rem] font-semibold uppercase tracking-[0.06em] text-ink">Company</h5>
            <ul className="grid gap-2.5">
              {COMPANY_LINKS.map((l) => (
                <li key={l.to}><Link className={linkCls} to={l.to}>{l.label}</Link></li>
              ))}
            </ul>
          </nav>

          <div>
            <h5 className="mb-4 text-[0.8125rem] font-semibold uppercase tracking-[0.06em] text-ink">Get in touch</h5>
            <ul className="grid gap-2.5">
              <li><a className={linkCls} href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li><a className={linkCls} href={SITE.phoneHref}>{SITE.phone}</a></li>
              <li className="flex items-center gap-2 text-[0.9375rem] text-muted">
                <MapPin size={15} className="text-muted-2" /> {SITE.location}
              </li>
              <li className="text-[0.9375rem] text-muted">{SITE.hours}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-line py-6 text-[0.875rem] text-muted-2">
          <p className="flex items-center gap-2">
            <MapPin size={14} />
            Crafted with ❤ in Mutare · © {new Date().getFullYear()} CodzLabZim. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6">
            <a href="#" className="transition-colors hover:text-muted">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-muted">Terms of Service</a>
            <Link to="/contact" className="transition-colors hover:text-muted">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
