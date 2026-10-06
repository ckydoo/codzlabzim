/** Shared site-wide content constants. */

export const SITE = {
  name: 'CodzLabZim',
  email: 'hello@codzlabzim.co.zw',
  phone: '+263 71 862 6666',
  phoneHref: 'tel:+263718626666',
  whatsapp: 'https://wa.me/263718626666',
  location: 'Mutare, Zimbabwe',
  hours: 'Mon–Fri · 08:00–17:30 CAT',
};

export const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Services' },
  { to: '/work', label: 'Our Work' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export const SERVICE_LINKS = [
  { to: '/services#saas', label: 'SaaS Development' },
  { to: '/services#erp', label: 'ERP Systems' },
  { to: '/services#mobile', label: 'Mobile Apps' },
  { to: '/services#ai', label: 'AI Automation' },
  { to: '/services#chatbots', label: 'AI Chatbots' },
  { to: '/services#web', label: 'Web Apps & Sites' },
];

export const COMPANY_LINKS = [
  { to: '/about', label: 'About us' },
  { to: '/work', label: 'Our work' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/#process', label: 'How we work' },
  { to: '/#faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

export const SOCIALS = [
  { label: 'X (Twitter)', href: '#', Icon: 'IconX' },
  { label: 'LinkedIn', href: '#', Icon: 'IconLinkedin' },
  { label: 'GitHub', href: '#', Icon: 'IconGithub' },
  { label: 'Instagram', href: '#', Icon: 'IconInstagram' },
  { label: 'WhatsApp', href: SITE.whatsapp, Icon: 'IconWhatsapp' },
];
