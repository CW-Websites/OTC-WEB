/* ——— OTC Anywhere — pages, search-engine text, FAQs, landing-page copy ———
 *
 * This is the one file to edit for SEO wording.
 *  - title:       the blue link in Google results (aim for under ~60 characters)
 *  - description: the grey text under it (aim for 140–160 characters)
 *  - path:        the page's web address
 * Each landing page targets one search topic so Google can tell them apart.
 * ———————————————————————————————————————————————————————————————————————— */

// Which page is being shown. Set by build.mjs (when building) and by the
// browser bundle (when the page loads). Used to make nav links work from
// sub-pages, e.g. "#platform" on the home page becomes "/#platform" elsewhere.
let OTC_CURRENT_PAGE = 'home';
const otcAnchor = (id) => (OTC_CURRENT_PAGE === 'home' ? `#${id}` : `/#${id}`);

// Images: build.mjs makes a smaller WebP copy of every PNG in /uploads, with a
// fingerprint in the name (e.g. otc-platform.3k9x1a.webp) so browsers always
// fetch the new version when you replace a PNG. Keep editing the PNGs; use
// otcImg('/uploads/name.png') in code and the build swaps in the WebP.
const otcImg = (p) => ((typeof window !== 'undefined' && window.__OTC_IMG__) || {})[p] || p;

const OTC_PAGES = [
  {
    key: 'home',
    path: '/',
    crumb: 'OTC Anywhere',
    title: 'ATM Lock Automation for Cencon, S&G & Intergard | OTC Anywhere',
    description:
      'Automated ATM lock opening and one-time combination dispatch for dormakaba Cencon, S&G and Intergard locks. 24×7, audited, no change to your lock procedures.',
  },
  {
    key: 'cencon',
    path: '/cencon-lock-automation/',
    crumb: 'Cencon Lock Automation',
    navLabel: 'dormakaba Cencon',
    title: 'Cencon Lock Automation — Automated Cencon Dispatch | OTC Anywhere',
    description:
      'Automate dormakaba Cencon ATM lock dispatch: one-time combinations, close enforcement and lock reassignment, 24×7, with no change to your Cencon procedures.',
  },
  {
    key: 'sg',
    path: '/sg-lock-automation/',
    crumb: 'S&G Lock Automation',
    navLabel: 'S&G',
    title: 'S&G Lock Automation — Automated ATM Lock Opening | OTC Anywhere',
    description:
      'Automate Sargent & Greenleaf (S&G) ATM lock opening. One-time codes by app, IVR, SMS or API, with geofencing, time-of-day rules and a full audit trail.',
  },
  {
    key: 'intergard',
    path: '/intergard-lock-automation/',
    crumb: 'Intergard Lock Automation',
    navLabel: 'Intergard',
    title: 'Intergard Lock Automation — Automated ATM Lock Access | OTC Anywhere',
    description:
      'Automate Intergard ATM lock access. Third-party or CoorWorks-hosted systems, 24×7 one-time code dispatch, geofenced open and close and a full audit trail.',
  },
  {
    key: 'lms',
    path: '/lms-automation/',
    crumb: 'Lock Management System Automation',
    navLabel: 'LMS automation',
    title: 'Automated LMS — Lock Management System Automation | OTC Anywhere',
    description:
      'Automate your ATM lock management system (LMS) across Cencon, S&G and Intergard, with LMS hosting on dedicated AWS, 24×7 support and a full audit trail.',
  },
  {
    key: 'notfound',
    path: '/404',
    crumb: 'Page not found',
    noindex: true,
    title: 'Page not found | OTC Anywhere',
    description: 'This page does not exist. OTC Anywhere automates ATM lock opening for Cencon, S&G and Intergard lock systems.',
  },
];

const OTC_LANDING_KEYS = ['cencon', 'sg', 'intergard', 'lms'];
const otcPage = (key) => OTC_PAGES.find(p => p.key === key);

/* ——— FAQs (shown on the page AND sent to Google as structured data) ——— */
const OTC_FAQS = {
  home: [
    {
      q: 'What is ATM lock automation?',
      a: 'ATM lock automation replaces the manual work of dispatching lock combinations. Instead of a dispatcher issuing each one-time combination by phone, OTC Anywhere checks the request against your rules and returns the open code automatically — for ATMs and vaults, around the clock.',
    },
    {
      q: 'Which ATM lock systems does OTC Anywhere automate?',
      a: 'OTC Anywhere automates dormakaba (Cencon), S&G (Sargent & Greenleaf) and Intergard lock systems, and lets you manage all of them from one service.',
    },
    {
      q: 'Do we have to change our lock management procedures?',
      a: 'No. Your lock system administration, manual dispatching and key management stay exactly as they are. OTC Anywhere automates the routine opens, closes and reassignments — typically 95% or more of them.',
    },
    {
      q: 'How do technicians and loaders get an open code?',
      a: 'Through the OTC Anywhere mobile app (iOS and Android), the web dashboard, IVR or SMS by phone, inside the Track/Trace service app, or from your own application through the REST API.',
    },
    {
      q: 'How long does deployment take?',
      a: 'A typical OTC Anywhere deployment takes less than a day, with a return-on-investment target of under 30 days.',
    },
    {
      q: 'Is every lock access recorded?',
      a: 'Yes. Every request, open and close is logged, giving you a full access history and audit trail, with real-time monitoring and alerting on request volume.',
    },
  ],
  cencon: [
    {
      q: 'Does OTC Anywhere replace Cencon?',
      a: 'No. Cencon remains your lock management system. OTC Anywhere works with your existing Cencon system and automates routine dispatch against it, so your Cencon administration, manual dispatch and key management do not change.',
    },
    {
      q: 'What Cencon tasks can be automated?',
      a: 'Issuing one-time open combinations, enforcing lock close, and reassigning locks — the routine ATM and vault functions that make up most of a dispatcher’s day.',
    },
    {
      q: 'Can CoorWorks host our Cencon system?',
      a: 'Yes. CoorWorks can host your lock system and its database on dedicated, fully isolated AWS hosts with a redundant secondary architecture, monitoring and 24×7 support.',
    },
    {
      q: 'Can we control who opens which Cencon lock?',
      a: 'Yes. Access can be limited by lock region, individual lock, time of day, permitted lock functions, service ticket and device, with geofence enforcement on open and close.',
    },
  ],
  sg: [
    {
      q: 'Which S&G locks does OTC Anywhere work with?',
      a: 'OTC Anywhere works with S&G (Sargent & Greenleaf) ATM lock systems managed through an S&G lock system database. Contact us to confirm your specific lock models and software version.',
    },
    {
      q: 'Can we run S&G and Cencon locks side by side?',
      a: 'Yes. OTC Anywhere is built for mixed fleets — one service and one set of access rules across S&G, dormakaba Cencon and Intergard locks.',
    },
    {
      q: 'How are S&G one-time codes delivered?',
      a: 'By the OTC Anywhere mobile app, IVR or SMS, the Track/Trace service app, or your own field app through the REST API.',
    },
  ],
  intergard: [
    {
      q: 'Does OTC Anywhere support hosted Intergard systems?',
      a: 'Yes. OTC Anywhere connects to Intergard lock systems whether they are hosted by a third party or by CoorWorks.',
    },
    {
      q: 'Can Intergard locks be managed alongside our other ATM locks?',
      a: 'Yes. Intergard locks sit in the same service as dormakaba Cencon and S&G locks, with one set of access controls and one audit trail.',
    },
    {
      q: 'What access controls apply to Intergard locks?',
      a: 'The same controls as every other lock: region and individual lock access, time-of-day windows, permitted functions, geofenced open and close, open thresholds with auto-lockouts, and service ticket authorization.',
    },
  ],
  lms: [
    {
      q: 'What is a lock management system (LMS)?',
      a: 'A lock management system is the software that controls electronic ATM and vault locks — who may open which lock, when, and with which one-time combination. Cencon is dormakaba’s LMS; S&G and Intergard have their own.',
    },
    {
      q: 'What does LMS automation do?',
      a: 'It takes the routine requests your dispatchers handle by hand — opens, closes and reassignments — and approves and fulfils them automatically against your rules, 24×7, while your LMS stays the system of record.',
    },
    {
      q: 'Can you host our LMS?',
      a: 'Yes. CoorWorks hosts lock systems and their databases on dedicated, fully isolated AWS hosts with redundant secondary architecture, service failover, monitoring and 24×7 support.',
    },
    {
      q: 'Do we need one LMS for all our locks?',
      a: 'No. OTC Anywhere sits across multiple lock management systems, so you can keep dormakaba Cencon, S&G and Intergard locks and run them as one operation.',
    },
  ],
  notfound: [],
};

/* ——— Landing pages ——— */
const OTC_LANDINGS = {
  cencon: {
    eyebrow: 'dormakaba Cencon',
    h1: ['Cencon lock', 'automation.'],
    accentLine: 0,
    lede:
      'OTC Anywhere connects to your dormakaba Cencon lock system and automates the routine work your dispatchers do by hand — issuing one-time combinations, enforcing close and reassigning locks — around the clock.',
    automates: [
      'One-time open combinations for ATMs and vaults',
      'Close enforcement, including walk-away and geofenced close',
      'Lock reassignment',
      'Route (RTE) and first-line maintenance (FLM) operating modes',
      'After-hours and weekend requests with no dispatcher on call',
      'Full access history for every Cencon lock',
    ],
    steps: [
      { h: 'Connect your Cencon system', p: 'OTC Anywhere works with your existing Cencon lock system database — hosted by you, or by CoorWorks on dedicated AWS infrastructure.' },
      { h: 'Technician requests access', p: 'Loaders and FLM technicians request an open from the OTC app, IVR or SMS, the Track/Trace app, or your own app through the API.' },
      { h: 'Rules approve, OTC dispatches', p: 'Region, time-of-day, geofence and service-ticket rules are checked automatically. Approved requests get a code; every step is logged.' },
    ],
  },
  sg: {
    eyebrow: 'Sargent & Greenleaf',
    h1: ['S&G lock', 'automation.'],
    accentLine: 0,
    lede:
      'Automate S&G (Sargent & Greenleaf) ATM and vault lock opening. OTC Anywhere dispatches one-time codes to the people and tickets that are allowed to have them — instantly, 24×7, with every access recorded.',
    automates: [
      'One-time code dispatch for S&G ATM and vault locks',
      'Open, close and reassign — without a dispatcher',
      'Geofence enforcement on open and close',
      'Time-of-day and permitted-function controls',
      'Code delivery by app, IVR, SMS or API',
      'Real-time monitoring and full audit trail',
    ],
    steps: [
      { h: 'Connect your S&G system', p: 'OTC Anywhere connects to your S&G lock system database. No change to how you administer locks today.' },
      { h: 'Set the rules once', p: 'Decide who may open which locks, where, when and for which service — down to the individual lock.' },
      { h: 'Codes flow automatically', p: 'Approved requests receive a one-time code in the channel the technician is already using.' },
    ],
  },
  intergard: {
    eyebrow: 'Intergard',
    h1: ['Intergard lock', 'automation.'],
    accentLine: 0,
    lede:
      'Bring Intergard ATM locks into the same automated service as the rest of your fleet. OTC Anywhere works with third-party hosted and CoorWorks-hosted Intergard systems.',
    automates: [
      'Automated one-time code dispatch for Intergard locks',
      'Third-party hosted or CoorWorks-hosted Intergard systems',
      'One access policy across Intergard, Cencon and S&G',
      'Geofenced open and close enforcement',
      'Open thresholds with automatic lockouts',
      'Subcontractor and third-party technician access',
    ],
    steps: [
      { h: 'Connect Intergard', p: 'OTC Anywhere connects to your Intergard lock system, wherever it is hosted.' },
      { h: 'Apply one policy', p: 'The same region, lock, time and ticket controls you use for every other lock system.' },
      { h: 'Automate the routine', p: 'Opens, closes and reassignments are handled automatically; exceptions still reach your team.' },
    ],
  },
  lms: {
    eyebrow: 'Lock management systems',
    h1: ['Automated', 'LMS.'],
    accentLine: 1,
    lede:
      'Your lock management system (LMS) controls every ATM and vault lock. OTC Anywhere automates the routine requests on top of it — across Cencon, S&G and Intergard — and CoorWorks can host the LMS itself.',
    automates: [
      'Routine opens, closes and reassignments across every LMS',
      'Multi-vendor fleets managed as one operation',
      'LMS hosting on dedicated, isolated AWS hosts',
      'Redundant primary and secondary OTC services with failover',
      'Automated monitoring, alerting and 24×7 support',
      'Complete auditability of every lock access',
    ],
    steps: [
      { h: 'Keep your LMS', p: 'Your lock management system stays the system of record. Administration, manual dispatch and key management do not change.' },
      { h: 'Add automation on top', p: 'OTC Anywhere handles 95%+ of routine functions automatically, under the access rules you set.' },
      { h: 'Optionally, let us host it', p: 'CoorWorks hosts the LMS and database with redundant architecture and 24×7 operations support.' },
    ],
  },
};

Object.assign(window, {
  OTC_PAGES, OTC_FAQS, OTC_LANDINGS, OTC_LANDING_KEYS, otcPage, otcAnchor, otcImg,
});
