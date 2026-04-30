function OTCHero() {
  return (
    <section className="section hero hero--otc" id="top">
      <div className="grid-bg"></div>
      <div className="hero__inner">
        <div className="hero__copy">
          <div className="hero__kicker">
            {OTC_SCOPE.map((s, i) => (
              <React.Fragment key={i}>
                {i > 0 && <span className="sep">/</span>}
                <span>{s}</span>
              </React.Fragment>
            ))}
          </div>
          <h1 className="hero__title">
            Automated<br/>
            <span className="accent">ATM lock</span><br/>
            Dispatching.
          </h1>
          <p className="hero__sub">
            Always available, automated lock operations across DormaKaba, Stanley S&amp;G, and Intergard
            — with no change to your current lock management procedures.
          </p>
          <div className="hero__ctas">
            <a href="#contact" className="btn btn--accent">
              Schedule a demo
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
            <a href="#platform" className="btn btn--ghost">See the platform</a>
          </div>
          <div className="hero__stores">
            <a
              className="hero__store-badge"
              href="https://play.google.com/store/apps/details?id=com.coorworks.otc.mobile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get the OTC Anywhere mobile app on Google Play"
            >
              <img src="uploads/badge-google-play.png" alt="Android app on Google Play" />
            </a>
            <a
              className="hero__store-badge"
              href="https://apps.apple.com/us/app/otc-anywhere-mobile-app/id1491299750"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download OTC Anywhere on the App Store"
            >
              <img src="uploads/badge-app-store.png" alt="Download on the App Store" />
            </a>
          </div>
          <div className="hero__bullets">
            {OTC_HERO_BULLETS.map(b => (
              <div key={b.label} className="hero__bullet">
                <span className="label">{b.label}</span>
                <span className="val">{b.val}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero__visual" aria-label="OTC Anywhere — dashboard and companion app">
          <div className="hero__ph hero__ph--web" aria-label="OTC Anywhere web — lock activity dashboard">
            <img src="uploads/OTC-Hero-Web.png?v=3" alt="OTC Anywhere dashboard showing lock activity on map with audit log" />
          </div>
          <div className="hero__ph hero__ph--app" aria-label="OTC Anywhere mobile app — Open Lock screen">
            <img src="uploads/OTC-Hero-App.png?v=2" alt="OTC Anywhere mobile app Open Lock screen" />
          </div>
        </div>
      </div>
    </section>
  );
}
window.OTCHero = OTCHero;

function OTCStatsAndBrands() {
  return (
    <section className="section" style={{paddingTop: 0, paddingBottom: 'clamp(60px, 8vw, 100px)'}}>
      <div className="container">
        <div className="otc-stats reveal">
          {OTC_HERO_STATS.map(s => (
            <div key={s.lbl} className="otc-stat">
              <div className="otc-stat__num">{s.num}<span className="accent">{s.accent}</span></div>
              <div className="otc-stat__lbl">{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.OTCStatsAndBrands = OTCStatsAndBrands;
