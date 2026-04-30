/* ——— OTC Anywhere — content from slides 1-8 ————————————————————————— */

const OTC_NAV_LINKS = [
  { id: 'platform',   label: 'Platform'    },
  { id: 'hosting',    label: 'Hosting'     },
  { id: 'cases',      label: 'Deployments' },
  { id: 'benefits',   label: 'Benefits'    },
];

/* Slide 1 — hero */
const OTC_SCOPE = ['SECURED', 'ON-DEMAND', 'ENTERPRISE MANAGED'];

const OTC_HERO_BULLETS = [
  { label: 'Coverage',   val: 'DormaKaba · Stanley S&G · Intergard' },
  { label: 'Automation', val: '95%+ of routine ATM / Vault open · close · reassign' },
  { label: 'Operations', val: '24×7×365 protected & supported · No procedure changes' },
];

const OTC_HERO_STATS = [
  { num: '500K', accent: '+', lbl: 'Monthly automated opens' },
  { num: '95',  accent: '%+', lbl: 'Automation of routine functions' },
  { num: '<1',  accent: ' day', lbl: 'Typical deployment' },
  { num: '<30', accent: ' day', lbl: 'ROI target' },
];

const OTC_LOCK_BRANDS = ['DormaKaba', 'Stanley S&G', 'Intergard'];

/* Slide 2 — Platform: Multiple Lock Systems, Multiple Methods, Multiple Enforcements */
const OTC_CHANNELS = [
  { name: 'Web',          sub: 'Dashboard · API' },
  { name: 'App',          sub: 'Loader / Technician' },
  { name: 'IVR / SMS',    sub: 'Phone Accessible' },
  { name: 'On-Premise',   sub: 'Keybox Appliance' },
];

const OTC_LOCK_SYSTEMS = [
  { sys: 'DormaKaba',  loc: 'Lock System DB' },
  { sys: 'Stanley S&G', loc: 'Lock System DB' },
  { sys: 'Intergard',  loc: '3rd Party / Hosted' },
];

const OTC_ENFORCEMENTS = [
  'Lock System (Kaba / S&G / IG)',
  'Lock Operating Mode (RTE / FLM)',
  'Lock Region Access Control',
  'Individual Lock Access Control',
  'Time-of-Day Access Controls',
  'Permitted Lock Functions',
  'Geofence Open Enforcement',
  'Geofence Close Enforcement',
  'Open Thresholds / Auto-Lockouts',
  'Login Methods (Phone, ID, Key)',
  'Service Ticket Authorizations',
  'App / Device Authorization',
];

/* Slide 3 — Enterprise Lock System Hosting */
const OTC_HOSTING_CUSTOMERS = [
  { name: 'Lock System',     sub: 'Enterprise hosted' },
  { name: 'Lock System DB',  sub: 'Enterprise hosted' },
  { name: 'Keybox',          sub: 'On-Premise' },
];

const OTC_HOSTING_SUPPORTS = [
  {
    h: 'No Changes in Operations',
    lede: 'Your lock system administration, manual dispatching, and key management workflows stay exactly as they are.',
    items: [
      'Lock System Administration',
      'Manual Dispatching',
      'Key Management',
      'Redundant Secondary Architecture',
      'Redundant Keybox Authentication',
    ],
  },
  {
    h: 'Internal Ops · CoorWorks Support',
    lede: 'A dedicated operations layer monitors, configures, and supports your lock system 24×7.',
    items: [
      'Automated Monitoring & Alerting',
      'Solution Configuration',
      'Lock System Expertise',
      'Last-Tier Functional Support',
    ],
  },
  {
    h: 'Redundant OTC Anywhere Services',
    lede: 'Primary and secondary OTC services with geographic flexibility and full service failover.',
    items: [
      'Primary + Secondary OTC Services',
      'Service Failover',
      'Geographically Flexible',
      'Dedicated / Fully Isolated AWS Hosts',
    ],
  },
];

/* Slides 4–6 — deployment cases */
const OTC_CASES = [
  {
    n: '01',
    model: 'Companion ATM Access App',
    target: 'Rapid Field Adoption',
    title: 'OTC Companion App',
    pull: 'A standalone access app, engineered for field adoption — flip over to OTC to open the lock.',
    image: 'uploads/OTC-Companion-App-padding.png',
    imageAlt: 'OTC Companion App — Ticket App / Field App alongside Open Lock screen',
    foundations: [
      'User-Proof Simplicity',
      'Session Length Controls (stay logged in)',
      'Lock-State-Driven Interface (only what you can do at this lock)',
      '> 15 seconds to open',
      'Walk-Away Close Enforcement',
      'Request Volume Monitoring / Alerting',
      'User-Proof Simplicity',
    ],
    targets: [
      'Field-friendly adoption',
      'Lock-aware UX every visit',
      'Compliance enforced at the lock',
      'No backend changes required',
    ],
    scope: [
      { k: 'Channel', v: 'iOS / Android' },
      { k: 'Auth',    v: 'Phone · ID · Key' },
      { k: 'Modes',   v: 'FLM · Route · LMS' },
    ],
  },
  {
    n: '02',
    model: 'Track/Trace Integration',
    target: 'Embedded Into Service Workflows',
    targetLink: 'https://www.trackandtracecash.com',
    targetLinkLabel: 'Visit site',
    playStore: 'https://play.google.com/store/apps/details?id=com.coorworks.tnt.mobile',
    title: 'Integrated with Track/Trace Service',
    pull: 'Request-less, just-in-time openings — pulled automatically when service starts.',
    image: 'uploads/OTC-Deployment-TNT.png',
    imageAlt: 'Track/Trace mobile app — service ticket with ATM open code',
    foundations: [
      'Request-less Automated Opening (Pulled on Service Start)',
      'Just-In-Time Code Reveal in Service Workflows',
      'Ticket Assignment Enforcement (no generic access)',
      'Primary / Secondary Lock Access',
      'Control What Services Require Openings',
    ],
    targets: [
      'No standalone request step',
      'Codes appear only when needed',
      'Strict ticket-bound authorization',
      'Service-class control over access',
    ],
    scope: [
      { k: 'Host',    v: 'Track/Trace App' },
      { k: 'Trigger', v: 'Service Start' },
      { k: 'Reveal',  v: 'Just-In-Time' },
    ],
  },
  {
    n: '03',
    model: 'Direct API Access',
    target: 'Integrated into Field App',
    title: 'Direct Internal / External App Access',
    pull: 'A clean REST surface for any modifiable internal or 3rd-party application.',
    image: 'uploads/cloud-otc.png',
    imageAlt: 'OTC Anywhere — direct API access via the cloud',
    foundations: [
      'Straightforward REST API model',
      'Dynamically Scalable API Architecture',
      'Appropriate for Modifiable Apps',
      'Code Delivery by SMS Options',
      'In-Network Appliance / Outbound Connectivity Only',
    ],
    targets: [
      'Embed open-code calls in any app',
      'Match SLA without infra changes',
      'Metered, scalable usage',
      'SMS fallback path available',
    ],
    scope: [
      { k: 'Surface', v: 'REST API' },
      { k: 'Scaling', v: 'Dynamic' },
      { k: 'Fallback', v: 'SMS' },
    ],
  },
];

/* Slide 7 — Target Benefits */
const OTC_BENEFITS = [
  /* Column 1 */
  'Always Available Lock Operations',
  'Manage Across Multiple Lock Systems',
  'Eliminate Off-Hours Support Coordination',
  'Prevent Forced Lock Switching',
  'Full Access History / Auditability',
  /* Column 2 */
  'Redeploy Dispatch Resources',
  'Real-Time Operations Monitorability',
  'Precision Access Control Design / Management',
  'Subcontractor + 3rd Party Extendable',
  'Primary / Backup Access Channels',
];

Object.assign(window, {
  OTC_NAV_LINKS, OTC_SCOPE, OTC_HERO_BULLETS, OTC_HERO_STATS, OTC_LOCK_BRANDS,
  OTC_CHANNELS, OTC_LOCK_SYSTEMS, OTC_ENFORCEMENTS,
  OTC_HOSTING_CUSTOMERS, OTC_HOSTING_SUPPORTS,
  OTC_CASES, OTC_BENEFITS,
});
