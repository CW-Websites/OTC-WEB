function OTCCases() {
  return (
    <section className="section section--paper2" id="cases">
      <div className="grid-bg"></div>
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Deployment Cases</div>
          <h2 className="section-head__title">
            Three ways to <span className="accent">deploy.</span>
          </h2>
          <p className="section-head__lede">
            Companion app, Track/Trace integration, or direct API embed
            — pick the surface that fits your operation.
          </p>
        </div>
        <div className="cases reveal">
          {OTC_CASES.map((c) => (
            <div key={c.n} className="case case--otc">
              <div className="case__head">
                <div className="case__model">
                  {c.model === 'Track/Trace Integration' ? (
                    <img
                      src="uploads/logo-tnt.png"
                      alt="Track/Trace"
                      className="case__model-logo"
                    />
                  ) : (
                    c.model
                  )}
                </div>
                <div className="case__arrow" aria-hidden="true">
                  <img src="uploads/arrow-outbound.png" alt=""/>
                </div>
                <div className="case__target">
                  {c.target}
                  {c.targetLink && (
                    <a
                      className="case__target-link"
                      href={c.targetLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {c.targetLinkLabel || 'Visit site'}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M9 7h8v8"/></svg>
                    </a>
                  )}
                </div>
              </div>
              <div className="case__body">
                <div className="case__id">
                  <div className="case__num">{c.n} / Deployment</div>
                  <div className="case__pull">{c.pull}</div>
                  <div className="case__scope">
                    {c.scope.map(s => (
                      <div key={s.k+s.v} className="row"><span className="k">{s.k}</span><span className="v">{s.v}</span></div>
                    ))}
                  </div>
                  {c.playStore && (
                    <a
                      className="case__store-badge"
                      href={c.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Get the Track/Trace mobile app on Google Play"
                    >
                      <img src="uploads/badge-google-play.png" alt="Get it on Google Play"/>
                    </a>
                  )}
                </div>
                <div className="case__col">
                  <h4>Foundations</h4>
                  <ul>{c.foundations.map((f, i) => <li key={i+'-'+f}>{f}</li>)}</ul>
                  <h4 style={{marginTop: 22}}>Targets</h4>
                  <ul>{c.targets.map((t, i) => <li key={i+'-'+t}>{t}</li>)}</ul>
                </div>
                <div className={"case__media" + (c.image2 ? " case__media--stack" : "")}>
                  {c.image2 ? (
                    <>
                      <img className="case__media-back" src={c.image2} alt={c.imageAlt}/>
                      <img className="case__media-front" src={c.image} alt={c.imageAlt}/>
                    </>
                  ) : (
                    <img src={c.image} alt={c.imageAlt}/>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.OTCCases = OTCCases;
