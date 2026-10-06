/* Runtime smoke test: mounts the built React app in jsdom and exercises the routes. */
import { JSDOM } from 'jsdom';
import { readdirSync } from 'fs';
import { pathToFileURL } from 'url';

const dom = new JSDOM('<!DOCTYPE html><html><body><div id="root"></div></body></html>', {
  url: 'http://localhost/',
  pretendToBeVisual: true,
});

const { window } = dom;
global.window = window;
global.document = window.document;
global.navigator = window.navigator;
global.location = window.location;
global.history = window.history;
global.HTMLElement = window.HTMLElement;
global.HTMLIFrameElement = window.HTMLIFrameElement;
global.Element = window.Element;
global.Node = window.Node;
global.CustomEvent = window.CustomEvent;
global.Event = window.Event;
global.getComputedStyle = window.getComputedStyle;
global.MutationObserver = window.MutationObserver;
global.fetch = global.fetch || (async () => ({ ok: true }));
global.requestAnimationFrame = (cb) => setTimeout(cb, 0);
global.cancelAnimationFrame = (id) => clearTimeout(id);
global.sessionStorage = window.sessionStorage;
global.localStorage = window.localStorage;

// Browser APIs jsdom lacks
window.matchMedia = window.matchMedia || ((q) => ({
  matches: false, media: q,
  addEventListener() {}, removeEventListener() {}, addListener() {}, removeListener() {},
}));
const IO = class {
  observe() {} unobserve() {} disconnect() {}
};
window.IntersectionObserver = IO;
global.IntersectionObserver = IO;
const RO = class {
  observe() {} unobserve() {} disconnect() {}
};
window.ResizeObserver = RO;
global.ResizeObserver = RO;
window.scrollTo = () => {};
Element.prototype.scrollIntoView = () => {};

const errors = [];
window.addEventListener('error', (e) => errors.push(`window.onerror: ${e.message}`));
process.on('unhandledRejection', (err) => errors.push(`unhandledRejection: ${err}`));

// Import the built bundle
const assets = readdirSync('dist/assets');
const bundle = assets.find((f) => f.startsWith('index-') && f.endsWith('.js'));
console.log('bundle:', bundle);
await import(pathToFileURL(`dist/assets/${bundle}`).href);

// Let React flush
await new Promise((r) => setTimeout(r, 120));

const root = window.document.getElementById('root');
const html = root.innerHTML;

function check(name, cond) {
  console.log(`${cond ? 'OK ' : 'FAIL'} ${name}`);
  if (!cond) process.exitCode = 1;
}

check('App mounted (root not empty)', html.length > 2000);
check('Navbar rendered', html.includes('aria-label="Primary"') && html.includes('Get a free quote'));
check('Hero heading rendered', html.includes('Custom software for your'));
check('Rotator words rendered', html.includes('entire operation.'));
check('Services cards rendered', html.includes('SaaS Product Development') && html.includes('ERP &amp; Business Systems'));
check('Showcase tabs rendered', html.includes('role="tablist"') && html.includes('panel-saas'));
check('Testimonials rendered', html.includes('Tafadzwa M.') && html.includes('out of 5 stars'));
check('Pricing rendered', html.includes('Most popular') && html.includes('1,900'));
check('FAQ rendered', html.includes('aria-expanded') && html.includes('Do I own the code'));
check('Footer rendered', html.includes('Crafted with') && html.includes('hello@codzlabzim.co.zw'));
check('Floating CTA rendered', html.includes('Call us'));
check('No runtime errors', errors.length === 0);
if (errors.length) errors.forEach((e) => console.log('  ·', e));

console.log('done.');
process.exit(process.exitCode || 0);
