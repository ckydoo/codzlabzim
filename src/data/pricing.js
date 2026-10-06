/** Shared pricing tiers (Home + Pricing pages). */

export const PRICING_TIERS = [
  {
    name: 'Starter',
    desc: 'For individuals, founders and small businesses taking their first big digital step.',
    project: { price: '450', per: '/ project from', note: '50% deposit · 2–4 week delivery' },
    monthly: { price: '150', per: '/ month from', note: 'Rolling monthly · cancel anytime' },
    features: [
      'Professional website or small web app',
      'Mobile-responsive & SEO foundations',
      'Basic AI chatbot add-on available',
      '1 month free post-launch support',
      'You own 100% of the code',
    ],
    cta: 'Start with Starter',
    delay: 0.05,
  },
  {
    name: 'Growth',
    desc: 'For growing businesses that need custom software, automation and a serious tech partner.',
    project: { price: '1,900', per: '/ project from', note: 'Flexible milestones · 4–10 week delivery' },
    monthly: { price: '550', per: '/ month from', note: 'Priority retainer · pause anytime' },
    features: [
      'Custom web app, ERP module or mobile app',
      'Integrations, dashboards & reporting',
      'AI automation or chatbot included',
      'Priority support & 3 months maintenance',
      'Weekly demos & dedicated project lead',
    ],
    cta: 'Choose Growth',
    featured: true,
    flag: 'Most popular',
    delay: 0.12,
  },
  {
    name: 'Enterprise',
    desc: 'For organisations running mission-critical operations that demand scale, SLAs and depth.',
    project: { price: '', currency: 'Custom', custom: true, per: '', note: 'Tailored scope · dedicated team · SLAs' },
    monthly: { price: '', currency: 'Custom', custom: true, per: '', note: 'Dedicated team · custom SLAs' },
    features: [
      'Full SaaS platforms & enterprise ERP suites',
      'AI agents, complex automations & data pipelines',
      'Dedicated team & quarterly roadmaps',
      '99.9% uptime SLA & 24/7 monitoring',
      'On-site workshops & staff training',
    ],
    cta: 'Request a proposal',
    delay: 0.19,
  },
];
