import usePageTitle from '../hooks/usePageTitle.js';
import Reveal from '../components/Reveal.jsx';
import PageHero from '../components/PageHero.jsx';
import CtaBand from '../components/CtaBand.jsx';
import Button, { Eyebrow, Grad } from '../components/Button.jsx';
import { ArrowRight } from '../components/Icons.jsx';
import servexa from '../assets/img/servexa-latest.png';
import terrabuild from '../assets/img/terrabuild.png';
import mhuri from '../assets/img/mhuri-hero.png';
import ubc from '../assets/img/ubc-banner.png';
import zexstar from '../assets/img/zexstar-site.png';
import mimj from '../assets/img/mimj-site.png';

const PROJECTS = [
 {n:'01',slug:'servexa',name:'Servexa',kind:'Service operations platform',audience:'Repair and installation teams',statement:'A working system for the work behind the service.',desc:'Repairs, installations, customers, technicians, inventory and commercial operations brought into one focused workspace.',image:servexa,cropChrome:true,tags:['Operations','Repairs & installations','Web platform']},
 {n:'02',slug:'terrabuild',name:'TerraBuild',kind:'Construction ERP',audience:'Construction project teams',statement:'Construction operations, connected.',desc:'A construction-first command centre for projects, site activity, workforce, procurement, equipment, finance and operational intelligence.',image:terrabuild,cropChrome:true,tags:['Construction','ERP','Operations']},
 {n:'03',slug:'mhuri',name:'Mhuri',kind:'Family finance · Mobile',audience:'Families managing money together',statement:'Family money, together.',desc:'A mobile-first financial experience for shared budgets, savings, shopping and everyday family money decisions.',image:mhuri,tags:['Flutter','Family finance','Mobile']},
 {n:'04',slug:'ubc-hymnbook',name:'UBC Hymnbook',kind:'Digital hymnal',audience:'United Baptist Church members',statement:'Specialised content, made simple.',desc:'A focused mobile experience for the United Baptist Church in Zimbabwe, bringing prayers, sermons, hymns, favourites and church content into one accessible place.',image:ubc,tags:['Mobile','Content platform','Community']},
];

const WEB = [
 {name:'C.Z Zexstar Construction',desc:'A confident digital presence for a South African construction company, designed around services, credibility and enquiries.',image:zexstar,href:'https://zexstarconstruction.co.za/'},
 {name:'MIMJ Enterprises',desc:'A corporate web experience for an industrial business, using strong photography, clear navigation and brand-led storytelling.',image:mimj,href:null},
];

export default function Work(){
 usePageTitle('Selected Work - CodzLabZim','Explore real digital products, business platforms, mobile applications and websites designed and built by CodzLabZim.');
 return <>
  <PageHero crumbs={[{label:'Home',to:'/'},{label:'Work'}]} eyebrow="Selected work" title={<>Products that make <Grad>the capability visible.</Grad></>} lead="No concept dashboards and no invented case studies. A selection of real products and digital experiences we have designed and engineered." />

  <section className="py-[clamp(5rem,9vw,8rem)]"><div className="mx-auto w-[min(1200px,calc(100%-3rem))] grid gap-[clamp(4rem,7.5vw,7rem)]">
   {PROJECTS.map((p,i)=><article id={p.slug} key={p.name} className={`grid items-center gap-10 lg:grid-cols-2 ${i%2?'lg:[&>div:first-child]:order-2':''}`}>
    <Reveal className="max-w-[520px]">
      <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[.12em] text-muted"><span className="text-brand">{p.n}</span><span>{p.kind}</span></div>
      <h2 className="mt-5 text-[clamp(2.2rem,4.6vw,3.75rem)] tracking-[-.04em]">{p.name}</h2>
      <p className="mt-2 text-[clamp(1.2rem,2vw,1.55rem)] font-medium text-ink-2">{p.statement}</p>
      <p className="mt-5 text-[1.03rem] leading-[1.75] text-muted">{p.desc}</p>
      <p className="mt-5 border-l-2 border-brand/30 pl-3 text-sm text-muted"><span className="mr-2 text-[.68rem] font-semibold uppercase tracking-[.1em] text-brand">Built for</span>{p.audience}</p>
      <div className="mt-7 flex flex-wrap gap-2">{p.tags.map(t=><span key={t} className="rounded-full border border-line px-3 py-1.5 text-xs font-medium text-muted">{t}</span>)}</div>
    </Reveal>
    <Reveal variant={i%2?'left':'right'} className="group overflow-hidden rounded-panel border border-line bg-bg-subtle p-3 shadow-sm">{p.cropChrome ? <div className="aspect-[2.1/1] overflow-hidden rounded-card"><img src={p.image} alt={`${p.name} project`} className="h-full w-full object-cover object-bottom transition-transform duration-700 group-hover:scale-[1.012]" loading="lazy"/></div> : <div className="aspect-[2/1] overflow-hidden rounded-card"><img src={p.image} alt={`${p.name} project`} className="h-full w-full object-contain" loading="lazy"/></div>}</Reveal>
   </article>)}
  </div></section>

  <section className="border-y border-line bg-ink py-[clamp(5rem,9vw,8rem)] text-white"><div className="mx-auto w-[min(1200px,calc(100%-3rem))]">
   <Reveal><Eyebrow className="text-white/60">Web experiences</Eyebrow></Reveal>
   <Reveal as="h2" delay={.05} className="mt-4 max-w-[760px] text-[clamp(2.1rem,4.5vw,3.6rem)] text-white">Not every problem needs a platform. <span className="text-white/55">Sometimes the website is the product.</span></Reveal>
   <div className="mt-12 grid gap-6 lg:grid-cols-2">{WEB.map((p,i)=><Reveal as="article" key={p.name} delay={i*.06} className="overflow-hidden rounded-panel border border-white/15 bg-white/[.04]">
     <div className="aspect-[2.2/1] overflow-hidden bg-white"><img src={p.image} alt={`${p.name} website`} className="h-full w-full object-cover object-bottom transition-transform duration-700 hover:scale-[1.015]"/></div>
     <div className="p-7"><h3 className="text-2xl text-white">{p.name}</h3><p className="mt-3 leading-7 text-white/60">{p.desc}</p>{p.href&&<a href={p.href} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 font-semibold text-white">Visit website <ArrowRight size={16}/></a>}</div>
   </Reveal>)}</div>
  </div></section>

  <section className="py-[clamp(5rem,9vw,8rem)]"><div className="mx-auto grid w-[min(1200px,calc(100%-3rem))] gap-10 lg:grid-cols-[.75fr_1.25fr]">
    <Reveal><Eyebrow>What this work shows</Eyebrow><h2 className="mt-4 text-[clamp(2rem,4vw,3.2rem)]">Different problems.<br/><Grad>One product mindset.</Grad></h2></Reveal>
    <div className="border-t border-line">{[['01','Operational depth','Complex workflows can still be clear, calm and usable.'],['02','Design range','Enterprise dashboards, family mobile products and public websites should not all look the same.'],['03','Context first','We design around the users, environment and business problem rather than forcing a template.']].map(([n,t,d])=><Reveal key={n} className="grid gap-3 border-b border-line py-7 sm:grid-cols-[60px_180px_1fr]"><span className="text-sm font-semibold text-brand">{n}</span><strong>{t}</strong><span className="text-muted">{d}</span></Reveal>)}</div>
  </div></section>
  <CtaBand title={<>Have something <span className="text-white/70">worth building?</span></>} text="Show us the problem, workflow or idea. We'll help shape the right digital product around it." actions={<><Button to="/contact" variant="light" size="lg">Start a project <ArrowRight size={18}/></Button><Button to="/services" variant="lightGhost" size="lg">See capabilities</Button></>} side={['Real product experience','Clear scope before build','Web + mobile delivery','You own your product']}/>
 </>;
}
