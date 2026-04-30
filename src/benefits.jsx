function OTCBenefits() {
  return (
    <section className="section section--ink" id="benefits">
      <div className="grid-bg"></div>
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Target Benefits</div>
          <h2 className="section-head__title">
            More time growing ATM services.<br/>
            Less time <span className="accent">baby-sitting</span> them.
          </h2>
          <p className="section-head__lede">
            The shortlist we drive against in every OTC Anywhere deployment
            — outcomes that compound margin, velocity, and operational trust.
          </p>
        </div>
        <div className="benefits-grid reveal">
          {OTC_BENEFITS.map(b => (
            <div key={b} className="benefit">
              <div className="benefit__check"></div>
              <div className="benefit__text">{b}</div>
            </div>
          ))}
        </div>
        <div className="benefits-foot reveal">
          <span className="val">&lt; <span className="accent">1&nbsp;day</span> deployment · &lt; <span className="accent">30&nbsp;day</span> ROI target</span>
        </div>
      </div>
    </section>
  );
}
window.OTCBenefits = OTCBenefits;
