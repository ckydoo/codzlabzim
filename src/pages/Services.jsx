import usePageTitle from '../hooks/usePageTitle.js';
import Reveal from '../components/Reveal.jsx';
import PageHero from '../components/PageHero.jsx';
import CtaBand from '../components/CtaBand.jsx';
import Button, { Eyebrow, Grad } from '../components/Button.jsx';
import { ArrowRight, Layers, Smartphone, Building2, Workflow, Globe } from '../components/Icons.jsx';
import servexa from '../assets/img/servexa-latest.png';
import terrabuild from '../assets/img/terrabuild.png';
import mhuri from '../assets/img/mhuri-home.webp';
import zexstar from '../assets/img/zexstar-site.png';

const SERVICES=[
 {n:'01',title:'Custom software',Icon:Layers,desc:'Purpose-built systems shaped around your actual workflow, users, permissions and decisions.',proof:'Servexa shows this in practice: service operations brought into one coherent workspace.',image:servexa},
 {n:'02',title:'Business platforms & ERP',Icon:Building2,desc:'Connected operational platforms for teams that have outgrown spreadsheets and disconnected tools.',proof:'TerraBuild brings construction operations, procurement, workforce and project intelligence together.',image:terrabuild},
 {n:'03',title:'Mobile products',Icon:Smartphone,desc:'Focused iOS and Android experiences designed for real users, real devices and everyday use.',proof:'Mhuri turns shared family finance into a clear mobile-first experience.',image:mhuri,mobile:true},
 {n:'04',title:'Automation & AI',Icon:Workflow,desc:'Automation and intelligent assistance applied where it removes repetitive work or shortens a workflow.',proof:'We integrate intelligence into products when it improves the job - not as decoration.',image:servexa},
 {n:'05',title:'Web experiences',Icon:Globe,desc:'Premium websites and web applications built for clarity, credibility, performance and conversion.',proof:'Zexstar demonstrates our brand-led approach to a professional corporate web presence.',image:zexstar},
];

export default function Services(){
 usePageTitle('Capabilities - CodzLabZim','Custom software, business platforms, mobile products, automation and premium web experiences by CodzLabZim.');
 return <>
  <PageHero crumbs={[{label:'Home',to:'/'},{label:'Capabilities'}]} eyebrow="What we build" title={<>Technology shaped around <Grad>the problem.</Grad></>} lead="We do not begin with a stack, a template or an AI feature. We begin with the work that needs to become simpler, faster or more visible." />
  <section className="py-[clamp(5rem,9vw,8rem)]"><div className="mx-auto w-[min(1200px,calc(100%-3rem))] border-t border-line">
   {SERVICES.map((s,i)=><Reveal as="article" key={s.title} className="grid gap-8 border-b border-line py-[clamp(3rem,6vw,5.5rem)] lg:grid-cols-[.8fr_1.2fr] lg:items-center">
    <div className="max-w-[500px]"><div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[.12em] text-muted"><span className="text-brand">{s.n}</span><s.Icon size={17}/></div><h2 className="mt-5 text-[clamp(2rem,4vw,3.25rem)] tracking-[-.035em]">{s.title}</h2><p className="mt-5 text-[1.05rem] leading-[1.75] text-muted">{s.desc}</p><p className="mt-5 border-l-2 border-brand pl-4 text-[.95rem] leading-7 text-ink-2">{s.proof}</p><Button to="/contact" variant="secondary" className="mt-7">Discuss this capability <ArrowRight size={16}/></Button></div>
    <div className={`overflow-hidden rounded-panel border border-line bg-bg-subtle p-3 ${s.mobile?'mx-auto max-w-[330px] lg:mr-0':''}`}><img src={s.image} alt={`${s.title} example`} className={`w-full rounded-card object-cover ${s.mobile?'max-h-[620px] object-top':''}`} loading="lazy"/></div>
   </Reveal>)}
  </div></section>
  <section className="border-y border-line bg-bg-subtle py-[clamp(5rem,9vw,8rem)]"><div className="mx-auto grid w-[min(1200px,calc(100%-3rem))] gap-10 lg:grid-cols-[.7fr_1.3fr]"><Reveal><Eyebrow>How we choose technology</Eyebrow><h2 className="mt-4 text-[clamp(2rem,4vw,3.1rem)]">The stack serves <Grad>the product.</Grad></h2></Reveal><div className="border-t border-line">{[['01','Fit','Choose tools that suit the product, team, budget and environment.'],['02','Longevity','Prefer maintainable foundations over fashionable complexity.'],['03','Performance','Treat speed, accessibility and reliability as product features.'],['04','Ownership','Build so the client can own, operate and grow the product.']].map(([n,t,d])=><Reveal key={n} className="grid gap-3 border-b border-line py-7 sm:grid-cols-[60px_150px_1fr]"><span className="text-sm font-semibold text-brand">{n}</span><strong>{t}</strong><span className="text-muted">{d}</span></Reveal>)}</div></div></section>
  <CtaBand title={<>The right solution starts with <span className="text-white/70">the right problem.</span></>} text="Tell us what is slowing the business down, what users need, or what you want to launch." actions={<><Button to="/contact" variant="light" size="lg">Start the conversation <ArrowRight size={18}/></Button><Button to="/work" variant="lightGhost" size="lg">See real work</Button></>} side={['Problem-first discovery','Clear scope','Purposeful technology','Production-minded delivery']}/>
 </>;
}
