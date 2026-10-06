import { useState } from 'react';
import { motion } from 'framer-motion';
import usePageTitle from '../hooks/usePageTitle.js';
import Reveal from '../components/Reveal.jsx';
import PageHero from '../components/PageHero.jsx';
import Faq from '../components/Faq.jsx';
import CtaBand from '../components/CtaBand.jsx';
import Button, { Eyebrow, Grad } from '../components/Button.jsx';
import {
  Mail, Phone, MapPin, Clock, Lock, Sun, Smile, ArrowRight,
} from '../components/Icons.jsx';
import { CONTACT_FAQ } from '../data/faqs.js';
import { SITE } from '../data/site.js';

const SERVICE_OPTIONS = [
  'SaaS product development',
  'ERP / business system',
  'Mobile app (iOS / Android)',
  'AI automation',
  'AI chatbot',
  'Web app / website',
  'Maintenance / rescue mission',
  "Not sure yet - let's talk",
];

const BUDGET_OPTIONS = [
  'Under $500',
  '$500 – $2,000',
  '$2,000 – $5,000',
  '$5,000 – $15,000',
  '$15,000+',
  "Let's discuss",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputCls = [
  'w-full rounded-[10px] border bg-white px-4 py-[0.72rem]',
  'text-[0.975rem] text-ink placeholder:text-muted-2',
  'transition-[border-color,box-shadow] duration-150',
  'hover:border-line-strong',
  'focus-visible:outline-none focus-visible:border-brand focus-visible:shadow-[0_0_0_3px_rgba(180,81,43,0.12)]',
].join(' ');

const selectCls = `${inputCls} appearance-none bg-[url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='12'%20height='8'%20fill='none'%3E%3Cpath%20d='M1%201.5%206%206.5%2011%201.5'%20stroke='%2398A2B3'%20stroke-width='1.8'%20stroke-linecap='round'%20stroke-linejoin='round'/%3E%3C/svg%3E")] bg-[length:12px_8px] bg-[right_1rem_center] bg-no-repeat pr-10`;

const labelCls = 'text-[0.875rem] font-medium text-ink-2';

function fieldBorder(hasError) {
  return hasError
    ? 'border-danger shadow-[0_0_0_3px_rgba(240,68,56,0.1)]'
    : 'border-line';
}

function ErrorText({ show, children }) {
  return (
    <span className={`text-[0.8125rem] text-danger-text ${show ? 'block' : 'hidden'}`}>{children}</span>
  );
}

export default function Contact() {
  usePageTitle(
    'Contact - Get a Free Software Quote | CodzLabZim',
    'Talk to CodzLabZim about your software project. Free 30-minute consultation, honest quotes within 24 hours. We build SaaS, ERP, mobile apps, AI automation & web apps from Mutare, Zimbabwe.'
  );

  const [values, setValues] = useState({
    name: '', email: '', company: '', phone: '', service: '', budget: '', message: '',
  });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const validateField = (field, value) => {
    const v = value.trim();
    if (['name', 'email', 'service', 'message'].includes(field) && !v) return false;
    if (field === 'email' && v && !EMAIL_RE.test(v)) return false;
    return true;
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) ? undefined : true }));
    }
  };

  const onBlur = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) ? undefined : true }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const next = {};
    Object.entries(values).forEach(([field, value]) => {
      if (!validateField(field, value)) next[field] = true;
    });
    setErrors(next);
    if (Object.keys(next).length > 0) {
      // Wait a frame so the .has-error class is rendered before focusing
      requestAnimationFrame(() => {
        const first = document.querySelector('.has-error input, .has-error select, .has-error textarea');
        first?.focus();
      });
      return;
    }

    setSending(true);
    // Front-end demo: wire this to your backend / email service (e.g. Formspree, Getform).
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setValues({ name: '', email: '', company: '', phone: '', service: '', budget: '', message: '' });
    }, 900);
  };

  const fieldClass = (name) => `grid gap-1.5${errors[name] ? ' has-error' : ''}`;

  return (
    <>
      <PageHero
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
        eyebrow="Let's talk"
        title={<>Bring your idea. <Grad>We'll bring a plan.</Grad></>}
        lead="Book a free 30-minute consultation. No pushy sales, no jargon - just an honest conversation about what you need and how we can help."
      />

      {/* Contact grid */}
      <section className="relative py-[clamp(3.5rem,7vw,6rem)]">
        <div className="mx-auto grid w-[min(1200px,calc(100%-3rem))] items-start gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <Reveal
            id="contact-form"
            className="rounded-panel border border-line bg-white p-[clamp(1.5rem,3.25vw,2.35rem)]"
          >
            <h2 className="mb-2 text-[clamp(1.55rem,2.6vw,1.95rem)]">
              Tell us about your project
            </h2>
            <p className="mb-7 text-[1.02rem] leading-[1.7] text-muted">
              Fill in the form and we'll get back to you within 24 hours with next steps - or a
              straight answer if we're not the right fit.
            </p>

            <form onSubmit={onSubmit} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className={fieldClass('name')}>
                  <label htmlFor="f-name" className={labelCls}>
                    Full name <span className="text-danger" aria-hidden="true">*</span>
                  </label>
                  <input id="f-name" name="name" type="text" autoComplete="name"
                    placeholder="e.g. Tendai Moyo" value={values.name}
                    onChange={onChange} onBlur={onBlur}
                    aria-invalid={!!errors.name} required
                    className={`${inputCls} ${fieldBorder(errors.name)}`} />
                  <ErrorText show={errors.name}>Please enter your name.</ErrorText>
                </div>
                <div className={fieldClass('email')}>
                  <label htmlFor="f-email" className={labelCls}>
                    Email <span className="text-danger" aria-hidden="true">*</span>
                  </label>
                  <input id="f-email" name="email" type="email" autoComplete="email"
                    placeholder="you@company.com" value={values.email}
                    onChange={onChange} onBlur={onBlur}
                    aria-invalid={!!errors.email} required
                    className={`${inputCls} ${fieldBorder(errors.email)}`} />
                  <ErrorText show={errors.email}>Please enter a valid email address.</ErrorText>
                </div>
                <div className={fieldClass('company')}>
                  <label htmlFor="f-company" className={labelCls}>
                    Company / organisation
                  </label>
                  <input id="f-company" name="company" type="text" autoComplete="organization"
                    placeholder="Optional" value={values.company}
                    onChange={onChange} onBlur={onBlur}
                    className={`${inputCls} ${fieldBorder(errors.company)}`} />
                  <ErrorText show={errors.company}>Please check this field.</ErrorText>
                </div>
                <div className={fieldClass('phone')}>
                  <label htmlFor="f-phone" className={labelCls}>
                    Phone / WhatsApp
                  </label>
                  <input id="f-phone" name="phone" type="tel" autoComplete="tel"
                    placeholder="Optional" value={values.phone}
                    onChange={onChange} onBlur={onBlur}
                    className={`${inputCls} ${fieldBorder(errors.phone)}`} />
                  <ErrorText show={errors.phone}>Please check this field.</ErrorText>
                </div>
                <div className={fieldClass('service')}>
                  <label htmlFor="f-service" className={labelCls}>
                    What do you need? <span className="text-danger" aria-hidden="true">*</span>
                  </label>
                  <select id="f-service" name="service" value={values.service}
                    onChange={onChange} onBlur={onBlur}
                    aria-invalid={!!errors.service} required
                    className={`${selectCls} ${fieldBorder(errors.service)}`}>
                    <option value="" disabled>Select a service…</option>
                    {SERVICE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                  </select>
                  <ErrorText show={errors.service}>Please choose a service.</ErrorText>
                </div>
                <div className={fieldClass('budget')}>
                  <label htmlFor="f-budget" className={labelCls}>
                    Budget range
                  </label>
                  <select id="f-budget" name="budget" value={values.budget}
                    onChange={onChange} onBlur={onBlur}
                    className={`${selectCls} ${fieldBorder(errors.budget)}`}>
                    <option value="" disabled>Select a range…</option>
                    {BUDGET_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                  </select>
                  <ErrorText show={errors.budget}>Please check this field.</ErrorText>
                </div>
              </div>

              <div className="mt-5 grid gap-1.5">
                <div className={fieldClass('message')}>
                  <label htmlFor="f-message" className={labelCls}>
                    Project details <span className="text-danger" aria-hidden="true">*</span>
                  </label>
                  <textarea id="f-message" name="message"
                    placeholder="What are you building? What problem should it solve? Any timeline in mind?"
                    value={values.message} onChange={onChange} onBlur={onBlur}
                    aria-invalid={!!errors.message} required
                    className={`${inputCls} min-h-[140px] resize-y ${fieldBorder(errors.message)}`} />
                  <ErrorText show={errors.message}>Please tell us a little about your project.</ErrorText>
                </div>
              </div>

              <div className="mt-6 grid gap-4">
                <Button type="submit" size="lg" disabled={sending} className="w-full">
                  {sending ? (
                    <>
                      <span
                        className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                        aria-hidden="true"
                      />
                      Sending…
                    </>
                  ) : (
                    'Send message & get free quote'
                  )}
                </Button>
                <p className="flex items-start gap-2 text-[0.855rem] leading-[1.6] text-muted-2">
                  <Lock size={15} className="mt-0.5 shrink-0" />
                  Your details are safe with us. We never share your information, and we're happy to
                  sign an NDA before you share anything sensitive.
                </p>
              </div>

              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-5 flex items-start gap-3 rounded-card border border-success/25 bg-success-soft p-5"
                  data-form-success
                  role="status"
                >
                  <Smile size={21} className="shrink-0 text-success-text" />
                  <div>
                    <b className="mb-1 block text-[0.975rem] font-semibold text-ink">Message sent! 🎉</b>
                    <p className="text-[0.925rem] leading-[1.6] text-muted">
                      Thanks for reaching out. A real human from our team will reply within 24 hours - usually much sooner.
                    </p>
                  </div>
                </motion.div>
              )}
            </form>
          </Reveal>

          {/* Info cards */}
          <div className="grid gap-4">
            <Reveal className="flex gap-4 rounded-card border border-line bg-white p-6" variant="right" delay={0.03}>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[10px] border border-line bg-bg-subtle text-ink">
                <Mail size={19} />
              </span>
              <div>
                <h4 className="mb-1 text-[1.02rem]">Email us</h4>
                <p className="text-[0.925rem] leading-[1.62] text-muted">
                  <a className="link-underline font-medium text-brand transition-colors hover:text-brand-strong" href={`mailto:${SITE.email}`}>{SITE.email}</a>
                  <br />Replies within 24 hours, guaranteed.
                </p>
              </div>
            </Reveal>

            <Reveal className="flex gap-4 rounded-card border border-line bg-white p-6" variant="right" delay={0.07}>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[10px] border border-line bg-bg-subtle text-ink">
                <Phone size={19} />
              </span>
              <div>
                <h4 className="mb-1 text-[1.02rem]">Call / WhatsApp</h4>
                <p className="text-[0.925rem] leading-[1.62] text-muted">
                  <a className="link-underline font-medium text-brand transition-colors hover:text-brand-strong" href={SITE.phoneHref}>{SITE.phone}</a>
                  <br />{SITE.hours}
                </p>
              </div>
            </Reveal>

            <Reveal className="flex gap-4 rounded-card border border-line bg-white p-6" variant="right" delay={0.11}>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[10px] border border-line bg-bg-subtle text-ink">
                <MapPin size={19} />
              </span>
              <div>
                <h4 className="mb-1 text-[1.02rem]">Visit the lab</h4>
                <p className="text-[0.925rem] leading-[1.62] text-muted">
                  Mutare, Zimbabwe<br />Serving clients across Zimbabwe, Africa &amp; worldwide.
                </p>
              </div>
            </Reveal>

            <Reveal
              className="grid min-h-[220px] place-items-center rounded-panel border border-line bg-bg-subtle p-8 [background-image:repeating-linear-gradient(0deg,rgba(17,19,24,0.03)_0_1px,transparent_1px_44px),repeating-linear-gradient(90deg,rgba(17,19,24,0.03)_0_1px,transparent_1px_44px)]"
              variant="right"
              delay={0.15}
            >
              <div className="grid justify-items-center gap-2 text-center">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-brand text-white" aria-hidden="true">
                  <Sun size={20} />
                </span>
                <b className="font-display text-[1.02rem] tracking-tight text-ink">CodzLabZim HQ</b>
                <span className="text-[0.925rem] leading-[1.62] text-muted">
                  Mutare, Zimbabwe 🇿🇼<br />Working with Africa and the world, one build at a time.
                </span>
              </div>
            </Reveal>

            <Reveal className="flex gap-4 rounded-card border border-line bg-white p-6" variant="right" delay={0.19}>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[10px] border border-line bg-bg-subtle text-ink">
                <Clock size={19} />
              </span>
              <div>
                <h4 className="mb-1 text-[1.02rem]">What happens next?</h4>
                <p className="text-[0.925rem] leading-[1.62] text-muted">
                  1. We reply within 24 hours<br />2. Free 30-min consultation<br />3. Fixed quote &amp; roadmap - no obligation
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact FAQ */}
      <section className="relative border-t border-line bg-bg-subtle py-[clamp(4.5rem,8vw,7.5rem)]">
        <div className="mx-auto w-[min(1200px,calc(100%-3rem))]">
          <div className="mx-auto mb-[clamp(2.5rem,4.5vw,3.5rem)] grid max-w-[680px] justify-items-center gap-4 text-center">
            <Reveal><Eyebrow>Before you write</Eyebrow></Reveal>
            <Reveal as="h2" delay={0.05} className="text-[clamp(1.875rem,3.6vw,2.5rem)]">
              Quick answers to <Grad>common questions</Grad>
            </Reveal>
          </div>
          <Reveal>
            <Faq items={CONTACT_FAQ} />
          </Reveal>
        </div>
      </section>

      <CtaBand
        title={<>Prefer to chat <span className="text-white/90">right now?</span></>}
        text={'WhatsApp is the fastest way to reach us. Send a voice note, a screenshot or a simple "hi" - we\'ll take it from there.'}
        actions={
          <>
            <Button href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" variant="light" size="lg">
              Chat on WhatsApp <ArrowRight size={18} />
            </Button>
            <Button href={`mailto:${SITE.email}`} variant="lightGhost" size="lg">
              {SITE.email}
            </Button>
          </>
        }
        side={[
          'Typically reply in under 24h',
          'WhatsApp, email or call',
          'NDA on request',
          'Real humans, not bots',
        ]}
      />
    </>
  );
}
