import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle.js';
import Reveal from '../components/Reveal.jsx';
import Button, { Eyebrow, Grad } from '../components/Button.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { ArrowRight, Layers, Smartphone, Building2, Workflow } from '../components/Icons.jsx';
import servexa from '../assets/img/servexa.png';
import terrabuild from '../assets/img/terrabuild.png';
import mhuriHero from '../assets/img/mhuri-hero.png';
import mhuriHome from '../assets/img/mhuri-home.webp';
import ubcBanner from '../assets/img/ubc-banner.png';
import zexstarSite from '../assets/img/zexstar-site.png';

const projects = [
  {
    no:'01', slug:'servexa', name:'Servexa', kind:'Service Operations Platform', audience:'Repair and installation teams', title:'Service operations, connected.',
    desc:'A complete repair and installation management platform connecting jobs, customers, technicians, inventory, commercial operations and an AI assistant in one workspace.',
    image:servexa, alt:'Servexa service operations dashboard with AI assistant', tone:'bg-[#F5F3FF]', cropChrome:true,
    tags:['Repairs & installations','Operations','AI-assisted workflows']
  },
  {
    no:'02', slug:'mhuri', name:'Mhuri', kind:'Family Finance · Mobile', audience:'Families managing money together', title:'Family money, together.',
    desc:'A mobile-first financial management experience designed around shared family budgets, savings, shopping and everyday money decisions.',
    image:mhuriHero, alt:'Mhuri family finance mobile application presentation', tone:'bg-[#F3F7F2]',
    tags:['Flutter mobile','Family budgeting','Shared finances']
  },
  {
    no:'03', slug:'terrabuild', name:'TerraBuild', kind:'Construction ERP', audience:'Construction project teams', title:'Construction operations, connected.',
    desc:'A construction-first ERP bringing project operations, workforce, procurement, equipment, finance and site intelligence into one command centre.',
    image:terrabuild, alt:'TerraBuild construction ERP executive dashboard', tone:'bg-[#F7F3EE]', cropChrome:true,
    tags:['ERP','Construction operations','Executive intelligence']
  },
  {
    no:'04', slug:'ubc-hymnbook', name:'UBC Hymnbook', kind:'Digital Hymnal Platform', audience:'United Baptist Church members', title:'Specialised software can still feel simple.',
    desc:'A focused digital experience for the United Baptist Church in Zimbabwe, making prayers, sermons, hymns, favourites and church content easier to access.',
    image:ubcBanner, alt:'United Baptist Church in Zimbabwe hymnbook mobile app', tone:'bg-[#FFF4F2]',
    tags:['Mobile experience','Offline-friendly content','Faith & community']
  },
];

const capabilities = [
  ['01','Custom Software','Systems shaped around real business workflows - not generic templates.',Layers],
  ['02','Mobile Products','Thoughtful mobile applications designed for real users and real environments.',Smartphone],
  ['03','Business Platforms','ERP and operational platforms that connect teams, data and decisions.',Building2],
  ['04','Automation & AI','Intelligent automation applied where it genuinely removes work.',Workflow],
];

export default function Home(){
  usePageTitle('CodzLabZim - Software built around how your business works','CodzLabZim designs and builds custom software, mobile products, business platforms and intelligent automation from Zimbabwe for ambitious organisations.');
  return <>
    <section className="relative overflow-hidden border-b border-line bg-bg-subtle pt-[68px]">
      <div className="mx-auto grid w-[min(1240px,calc(100%-3rem))] items-center gap-12 py-[clamp(3.5rem,6vw,6.5rem)] lg:grid-cols-[.92fr_1.08fr]">
        <div className="relative z-10 max-w-[650px]">
          <Reveal as="h1" delay={.05} className="mt-5 text-[clamp(2.7rem,6.2vw,5.15rem)] leading-[.99] tracking-[-.045em]">Software built around <Grad>how your business works.</Grad></Reveal>
          <Reveal as="p" delay={.1} className="mt-6 max-w-[590px] text-[clamp(1.05rem,1.5vw,1.18rem)] leading-[1.75] text-muted">We design and build digital products, mobile apps and business platforms that solve real operational problems - from first idea to production.</Reveal>
          <Reveal delay={.15} className="mt-8 flex flex-wrap gap-3"><Button to="/contact" size="lg">Start a project <ArrowRight size={18}/></Button><Button to="/work" variant="secondary" size="lg">View our work</Button></Reveal>
          <Reveal delay={.2} className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted"><span>Custom Software</span><span>Mobile</span><span>Business Systems</span><span>Automation</span></Reveal>
        </div>
        <Reveal variant="scale" delay={.1} className="relative min-h-[430px] max-lg:min-h-[360px]">
          <div className="absolute right-0 top-0 aspect-[2.1/1] w-[88%] overflow-hidden rounded-panel border border-line bg-white p-2 shadow-md rotate-[1deg] transition-transform duration-500 hover:rotate-0 hover:-translate-y-1"><img src={terrabuild} alt="TerraBuild dashboard" className="h-full w-full rounded-[12px] object-cover object-bottom"/></div>
          <div className="absolute bottom-2 left-0 aspect-[2.1/1] w-[72%] overflow-hidden rounded-panel border border-line bg-white p-2 shadow-md -rotate-[1.5deg] transition-transform duration-500 hover:rotate-0 hover:-translate-y-1"><img src={servexa} alt="Servexa dashboard" className="h-full w-full rounded-[12px] object-cover object-bottom"/></div>
          <div className="absolute bottom-[-12px] right-[4%] w-[25%] overflow-hidden rounded-[28px] border-[6px] border-ink bg-ink shadow-md transition-transform duration-500 hover:-translate-y-1"><img src={mhuriHome} alt="Mhuri mobile app" className="w-full rounded-[20px]"/></div>
        </Reveal>
      </div>
    </section>

    <section className="border-b border-line py-5"><div className="mx-auto flex w-[min(1200px,calc(100%-3rem))] flex-wrap items-center justify-between gap-4 text-[.78rem] font-semibold uppercase tracking-[.1em] text-muted"><span>Products, not promises.</span><span>Web + Mobile</span><span>ERP + Operations</span><span>AI + Automation</span><span>Designed & engineered by CodzLab</span></div></section>

    <section id="work" className="py-[clamp(5rem,9vw,8rem)]">
      <div className="mx-auto w-[min(1200px,calc(100%-3rem))]">
        <Reveal><Eyebrow>Selected work</Eyebrow></Reveal>
        <div className="mt-4 grid gap-5 lg:grid-cols-2 lg:items-end"><Reveal as="h2" className="text-[clamp(2.2rem,4.5vw,3.7rem)] tracking-[-.035em]">Real products for <Grad>real-world operations.</Grad></Reveal><Reveal as="p" delay={.05} className="max-w-[520px] text-[1.05rem] leading-[1.75] text-muted lg:justify-self-end">The strongest proof of what we can build is what we have already shipped. Explore a selection of products across operations, finance, construction and community.</Reveal></div>
        <div className="mt-16 grid gap-[clamp(4rem,7.5vw,7rem)]">
          {projects.map((p,i)=><article key={p.name} className={`grid items-center gap-9 lg:grid-cols-2 ${i%2?'lg:[&>div:first-child]:order-2':''}`}>
            <Reveal className="max-w-[520px]">
              <div className="mb-5 flex items-center gap-4 text-xs font-semibold uppercase tracking-[.1em] text-muted"><span className="text-brand">{p.no}</span><span>{p.kind}</span></div>
              <h3 className="text-[clamp(2rem,3.8vw,3.15rem)] tracking-[-.035em]">{p.name}<br/><span className="text-muted">{p.title}</span></h3>
              <p className="mt-5 text-[1.03rem] leading-[1.75] text-muted">{p.desc}</p>
              <p className="mt-5 border-l-2 border-brand/30 pl-3 text-sm text-muted"><span className="mr-2 text-[.68rem] font-semibold uppercase tracking-[.1em] text-brand">Built for</span>{p.audience}</p>
              <ul className="mt-6 flex flex-wrap gap-2">{p.tags.map(t=><li key={t} className="rounded-full border border-line bg-bg-subtle px-3 py-1.5 text-xs font-medium text-ink-2">{t}</li>)}</ul>
              <Link to={`/work#${p.slug}`} className="link-underline mt-7 inline-flex items-center gap-2 font-semibold text-brand">Explore project <ArrowRight size={16}/></Link>
            </Reveal>
            <Reveal variant={i%2?'left':'right'} className={`group overflow-hidden rounded-panel border border-line p-3 ${p.tone}`}>{p.cropChrome ? <div className="aspect-[2.1/1] overflow-hidden rounded-card"><img src={p.image} alt={p.alt} loading="lazy" className="h-full w-full object-cover object-bottom transition-transform duration-700 ease-out group-hover:scale-[1.012]"/></div> : <div className="aspect-[2/1] overflow-hidden rounded-card"><img src={p.image} alt={p.alt} loading="lazy" className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.012]"/></div>}</Reveal>
          </article>)}
        </div>

        <Reveal className="mt-24 grid overflow-hidden rounded-panel border border-line bg-ink text-white lg:grid-cols-[.8fr_1.2fr]">
          <div className="p-[clamp(2rem,5vw,4.5rem)]"><div className="text-xs font-semibold uppercase tracking-[.1em] text-white/50">05 · Web experience</div><h3 className="mt-4 text-[clamp(2rem,4vw,3.4rem)] text-white">C.Z Zexstar Construction</h3><p className="mt-5 max-w-[480px] text-white/65">A professional digital presence for a South African construction company - focused on credibility, clear service presentation, responsive design and a confident brand experience.</p><a href="https://zexstarconstruction.co.za/" target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 font-semibold text-white">Visit website <ArrowRight size={16}/></a></div>
          <div className="aspect-[2.2/1] overflow-hidden bg-white"><img src={zexstarSite} alt="C.Z Zexstar Construction website" className="h-full w-full object-cover object-bottom transition-transform duration-700 hover:scale-[1.01]"/></div>
        </Reveal>
      </div>
    </section>

    <section id="services" className="border-y border-line bg-bg-subtle py-[clamp(5rem,9vw,8rem)]"><div className="mx-auto w-[min(1200px,calc(100%-3rem))]"><Reveal><Eyebrow>What we build</Eyebrow></Reveal><Reveal as="h2" delay={.05} className="mt-4 max-w-[720px] text-[clamp(2.1rem,4.3vw,3.5rem)]">From a business problem to a <Grad>working digital product.</Grad></Reveal><div className="mt-14 border-t border-line">{capabilities.map(([n,t,d,Icon])=><Reveal key={t} className="group grid gap-5 border-b border-line py-8 md:grid-cols-[70px_1fr_1fr_48px] md:items-center"><span className="text-sm font-semibold text-brand">{n}</span><h3 className="text-[clamp(1.45rem,2.6vw,2.05rem)]">{t}</h3><p className="max-w-[500px] text-muted">{d}</p><Icon className="text-muted transition-colors group-hover:text-brand" size={23}/></Reveal>)}</div></div></section>

    <section className="py-[clamp(5rem,9vw,8rem)]"><div className="mx-auto w-[min(1200px,calc(100%-3rem))]"><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><Reveal><Eyebrow>How we work</Eyebrow><h2 className="mt-4 text-[clamp(2rem,4vw,3.2rem)]">Clear process.<br/><Grad>Visible progress.</Grad></h2></Reveal><div className="grid border-t border-line">{[['01','Understand','We start with the business problem, users and constraints.'],['02','Design','We turn the workflow into a clear, testable product experience.'],['03','Build','We engineer, integrate and test the system with visible progress.'],['04','Launch','We deploy, hand over and keep improving what matters.']].map(([n,t,d])=><Reveal key={n} className="grid gap-3 border-b border-line py-7 sm:grid-cols-[60px_160px_1fr]"><span className="text-sm font-semibold text-brand">{n}</span><strong className="text-ink">{t}</strong><span className="text-muted">{d}</span></Reveal>)}</div></div></div></section>

    <CtaBand title={<>Have something <span className="text-white/75">worth building?</span></>} text="Tell us the problem. We'll help you figure out the right software - without forcing your idea into a template." actions={<><Button to="/contact" variant="light" size="lg">Start a project <ArrowRight size={18}/></Button><Button to="/work" variant="lightGhost" size="lg">Explore our work</Button></>} side={['Real product experience','Clear scope before build','Web + mobile delivery','You own your product']}/>
  </>;
}
