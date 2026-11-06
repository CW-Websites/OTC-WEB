/* ——— Lock-system links (home), FAQ section, and the landing-page layout ——— */

const OTC_LOCK_CARDS = [
  { key: 'cencon',    name: 'dormakaba Cencon', blurb: 'Automated Cencon one-time combination dispatch, close enforcement and lock reassignment.' },
  { key: 'sg',        name: 'S&G',              blurb: 'Automated Sargent & Greenleaf ATM and vault lock opening, by app, IVR, SMS or API.' },
  { key: 'intergard', name: 'Intergard',        blurb: 'Third-party or CoorWorks-hosted Intergard locks in the same automated service.' },
  { key: 'lms',       name: 'Any LMS',          blurb: 'Automation on top of your lock management system — plus LMS hosting on dedicated AWS.' },
];

function OTCLockSystems({ exclude, eyebrow = 'Lock systems', title, tone = '' }) {
  const cards = OTC_LOCK_CARDS.filter(c => c.key !== exclude);
  return (
    <section className={'section ' + tone} id="locks">
      {tone && <div className="grid-bg"></div>}
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">{eyebrow}</div>
          <h2 className="section-head__title">
            {title || (<>ATM lock automation for <span className="accent">every lock</span> you run.</>)}
          </h2>
          <p className="section-head__lede">
            One service across dormakaba Cencon, S&amp;G and Intergard lock systems — so a mixed fleet runs
            as a single operation.
          </p>
        </div>
        <div className="lockcards reveal">
          {cards.map(c => {
            const p = otcPage(c.key);
            return (
              <a key={c.key} className="lockcard" href={p.path}>
                <span className="lockcard__name">{c.name}</span>
                <span className="lockcard__blurb">{c.blurb}</span>
                <span className="lockcard__more">{p.crumb} →</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
window.OTCLockSystems = OTCLockSystems;

function OTCFaq({ page }) {
  const faqs = OTC_FAQS[page] || [];
  if (!faqs.length) return null;
  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">FAQ</div>
          <h2 className="section-head__title">
            Common <span className="accent">questions.</span>
          </h2>
        </div>
        <div className="faq reveal">
          {faqs.map(f => (
            <details key={f.q} className="faq__item">
              <summary className="faq__q">{f.q}</summary>
              <p className="faq__a">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
window.OTCFaq = OTCFaq;

function OTCLanding({ page }) {
  const L = OTC_LANDINGS[page];
  const P = otcPage(page);
  return (
    <>
      <section className="section hero hero--otc landing-hero" id="top">
        <div className="grid-bg"></div>
        <div className="hero__inner">
          <div className="hero__copy">
            <nav className="crumbs" aria-label="Breadcrumb">
              <a href="/">OTC Anywhere</a><span className="sep">/</span><span>{P.crumb}</span>
            </nav>
            <div className="hero__kicker"><span>{L.eyebrow}</span></div>
            <h1 className="hero__title">
              {L.h1.map((line, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <br/>}
                  {i === L.accentLine ? <span className="accent">{line}</span> : line}
                </React.Fragment>
              ))}
            </h1>
            <p className="hero__sub">{L.lede}</p>
            <div className="hero__ctas">
              <a href="#contact" className="btn btn--accent">
                Schedule a demo
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </a>
              <a href="/#platform" className="btn btn--ghost">See the platform</a>
            </div>
          </div>
          <div className="hero__visual" aria-label="OTC Anywhere — dashboard and companion app">
            <div className="hero__ph hero__ph--web">
              <img src="/uploads/OTC-Hero-Web.png?v=3" alt={`OTC Anywhere dashboard — ${L.eyebrow} lock activity map and audit log`} />
            </div>
            <div className="hero__ph hero__ph--app">
              <img src="/uploads/OTC-Hero-App.png?v=2" alt="OTC Anywhere mobile app — Open Lock screen" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--paper2" id="automates">
        <div className="grid-bg"></div>
        <div className="container">
          <div className="section-head reveal">
            <div className="eyebrow">What gets automated</div>
            <h2 className="section-head__title">
              The routine work, <span className="accent">handled.</span>
            </h2>
          </div>
          <ul className="benefits-grid benefits-grid--auto reveal">
            {L.automates.map(b => (
              <li key={b} className="benefit">
                <div className="benefit__check"></div>
                <div className="benefit__text">{b}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="how">
        <div className="container">
          <div className="section-head reveal">
            <div className="eyebrow">How it works</div>
            <h2 className="section-head__title">
              Three steps. <span className="accent">No procedure changes.</span>
            </h2>
          </div>
          <ol className="steps reveal">
            {L.steps.map((s, i) => (
              <li key={s.h} className="step">
                <span className="step__num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="step__h">{s.h}</h3>
                <p className="step__p">{s.p}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--ink" id="controls">
        <div className="grid-bg"></div>
        <div className="container">
          <div className="section-head reveal">
            <div className="eyebrow">Access controls</div>
            <h2 className="section-head__title">
              Precision control at <span className="accent">every lock.</span>
            </h2>
            <p className="section-head__lede">
              The same enforcement layer applies to every lock system OTC Anywhere automates.
            </p>
          </div>
          <ul className="benefits-grid benefits-grid--auto reveal">
            {OTC_ENFORCEMENTS.slice(1, 11).map(b => (
              <li key={b} className="benefit">
                <div className="benefit__check"></div>
                <div className="benefit__text">{b}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <OTCFaq page={page}/>
      <OTCLockSystems exclude={page} tone="section--paper2" eyebrow="Other lock systems"
        title={<>Running more than one <span className="accent">lock system?</span></>}/>
    </>
  );
}
window.OTCLanding = OTCLanding;

function OTCNotFound() {
  return (
    <section className="section hero hero--otc landing-hero" id="top">
      <div className="grid-bg"></div>
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">404</div>
          <h1 className="section-head__title">This page <span className="accent">doesn’t exist.</span></h1>
          <p className="section-head__lede">
            It may have moved. Head back to the <a href="/">OTC Anywhere home page</a> or pick a lock system:{' '}
            {OTC_LANDING_KEYS.map((k, i) => (
              <React.Fragment key={k}>{i > 0 && ' · '}<a href={otcPage(k).path}>{otcPage(k).crumb}</a></React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
window.OTCNotFound = OTCNotFound;
