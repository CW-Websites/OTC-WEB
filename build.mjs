// build.mjs — turns the React source in /src into finished HTML pages in /dist.
//
// Why this exists: the site used to build itself in the visitor's browser
// (React + Babel loaded from unpkg). Search engines then saw an empty page.
// This script does that work once, at deploy time, so every page ships with
// its real text already in the HTML. The browser then "hydrates" it — attaches
// the interactive bits (nav highlighting, contact form) to the existing HTML.
//
// Run locally:   npm install   then   npm run build
// Netlify runs:  npm run build  (see netlify.toml) and publishes /dist.

import { build } from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, 'dist');
const SITE_URL = 'https://otcanywhere.com';

// Source files, in load order. Each file defines components on `window`,
// exactly as before — later files use what earlier files define.
const SOURCES = [
  'tweaks-panel.jsx',
  'src/data.jsx',
  'src/pages.jsx',
  'src/nav.jsx',
  'src/hero.jsx',
  'src/platform.jsx',
  'src/hosting.jsx',
  'src/cases.jsx',
  'src/benefits.jsx',
  'src/landing.jsx',
  'src/contact.jsx',
  'src/app.jsx',
];

const concatSources = () =>
  SOURCES.map(f => `\n// ---- ${f} ----\n` + fs.readFileSync(path.join(ROOT, f), 'utf8')).join('\n');

// 1) Browser bundle: React (production build) + all components + hydrate call.
const clientEntry = `
import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
window.React = React;
const ReactDOM = ReactDOMClient;
${concatSources()}
const rootEl = document.getElementById('root');
OTC_CURRENT_PAGE = window.__OTC_PAGE__ || 'home';
ReactDOMClient.hydrateRoot(rootEl, <OTCApp page={OTC_CURRENT_PAGE}/>);
`;

// 2) Build-time bundle: same components, rendered to an HTML string in Node.
const serverEntry = `
import React from 'react';
import { renderToString } from 'react-dom/server';
globalThis.window = globalThis;
const ReactDOM = {};
${concatSources()}
export function render(page) {
  OTC_CURRENT_PAGE = page;
  return renderToString(<OTCApp page={page}/>);
}
export const pages = OTC_PAGES;
export const faqs = OTC_FAQS;
`;

const esbuildBase = {
  bundle: true,
  loader: { '.js': 'jsx' },
  jsx: 'transform',
  logLevel: 'warning',
  define: { 'process.env.NODE_ENV': '"production"' },
};

fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(path.join(DIST, 'assets'), { recursive: true });

await build({
  ...esbuildBase,
  stdin: { contents: clientEntry, resolveDir: ROOT, loader: 'jsx', sourcefile: 'client-entry.jsx' },
  outfile: path.join(DIST, 'assets/site.js'),
  minify: true,
  format: 'iife',
  target: ['es2019'],
});

const serverFile = path.join(ROOT, '.cache/server.mjs');
await build({
  ...esbuildBase,
  stdin: { contents: serverEntry, resolveDir: ROOT, loader: 'jsx', sourcefile: 'server-entry.jsx' },
  outfile: serverFile,
  platform: 'node',
  format: 'esm',
  packages: 'external', // use react/react-dom straight from node_modules
});
const server = await import(pathToFileURL(serverFile).href + '?t=' + Date.now());

// Cache-busting: a short fingerprint of the JS + CSS so browsers fetch new
// versions after each deploy instead of using a stale copy.
const hash = (s) => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7).toString(36);
const cssFiles = ['styles.css', 'otc.css'];
const version = hash(
  fs.readFileSync(path.join(DIST, 'assets/site.js'), 'utf8') +
  cssFiles.map(f => fs.readFileSync(path.join(ROOT, f), 'utf8')).join('')
);

// ---------------------------------------------------------------------------
// Page <head>: title, description, canonical URL, social preview, structured data
// ---------------------------------------------------------------------------
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

const ORG = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#org`,
  name: 'CoorWorks',
  url: 'https://coorworks.com',
  email: 'support@coorworks.com',
  telephone: '+1-703-200-6225',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1069 W Broad Street #813',
    addressLocality: 'Falls Church',
    addressRegion: 'VA',
    postalCode: '22046',
    addressCountry: 'US',
  },
};

const SOFTWARE = {
  '@type': 'SoftwareApplication',
  '@id': `${SITE_URL}/#software`,
  name: 'OTC Anywhere',
  url: `${SITE_URL}/`,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web, iOS, Android',
  description: 'Automated ATM lock opening and one-time combination dispatch for dormakaba Cencon, S&G and Intergard lock systems.',
  publisher: { '@id': `${SITE_URL}/#org` },
};

function structuredData(page) {
  const graph = [ORG, SOFTWARE];
  const faqs = server.faqs[page.key] || [];
  if (faqs.length) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: faqs.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
  }
  if (page.key !== 'home') {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'OTC Anywhere', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: page.crumb, item: SITE_URL + page.path },
      ],
    });
  }
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c');
}

function headFor(page) {
  const url = SITE_URL + page.path;
  const ogImage = `${SITE_URL}/uploads/otc-main-hero.png`;
  return `
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.description)}"/>
<link rel="canonical" href="${url}"/>
<meta name="robots" content="${page.noindex ? 'noindex' : 'index,follow'}"/>
<meta property="og:type" content="website"/>
<meta property="og:site_name" content="OTC Anywhere"/>
<meta property="og:title" content="${esc(page.title)}"/>
<meta property="og:description" content="${esc(page.description)}"/>
<meta property="og:url" content="${url}"/>
<meta property="og:image" content="${ogImage}"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="${esc(page.title)}"/>
<meta name="twitter:description" content="${esc(page.description)}"/>
<meta name="twitter:image" content="${ogImage}"/>
<script type="application/ld+json">${structuredData(page)}</script>`;
}

// ---------------------------------------------------------------------------
// Write each page
// ---------------------------------------------------------------------------
const template = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

function writePage(page, outRel, extraHead = '') {
  const html = template
    .replace(/<!--\n[\s\S]*?-->\n/, '') // drop the explanatory note in the template
    .replace('<!--HEAD-->', headFor(page) + extraHead)
    .replace(/\{\{VERSION\}\}/g, version)
    .replace('<!--PAGE-->', `<script>window.__OTC_PAGE__=${JSON.stringify(page.key)};</script>`)
    .replace('<!--APP-->', server.render(page.key));
  const out = path.join(DIST, outRel);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
  console.log('  page  ', page.path.padEnd(32), '→', outRel);
}

console.log('Building pages:');
for (const page of server.pages.filter(p => p.key !== 'notfound')) {
  writePage(page, page.path === '/' ? 'index.html' : path.join(page.path, 'index.html'));
}

// 404 page — a real "not found" instead of silently showing the homepage.
writePage(server.pages.find(p => p.key === 'notfound'), '404.html');

// ---------------------------------------------------------------------------
// Static files: CSS, images, robots.txt, sitemap.xml
// ---------------------------------------------------------------------------
for (const f of cssFiles) fs.copyFileSync(path.join(ROOT, f), path.join(DIST, f));
fs.cpSync(path.join(ROOT, 'uploads'), path.join(DIST, 'uploads'), { recursive: true });

fs.writeFileSync(path.join(DIST, 'robots.txt'),
`User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`);

const today = new Date().toISOString().slice(0, 10);
const indexable = server.pages.filter(p => !p.noindex);
fs.writeFileSync(path.join(DIST, 'sitemap.xml'),
`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexable.map(p => `  <url><loc>${SITE_URL}${p.path}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`);

const kb = (n) => (n / 1024).toFixed(0) + ' KB';
console.log('  script  assets/site.js', kb(fs.statSync(path.join(DIST, 'assets/site.js')).size));
console.log('  robots.txt, sitemap.xml (' + indexable.length + ' URLs), 404.html');
console.log('Done → dist/');
