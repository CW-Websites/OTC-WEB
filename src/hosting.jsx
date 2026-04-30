function OTCHosting() {
  return (
    <section className="section" id="hosting">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Enterprise Lock System Hosting</div>
          <h2 className="section-head__title">
            Always <span className="accent">available.</span><br/>
            Always safe. Always supported.
          </h2>
          <p className="section-head__lede">
            We host your core lock system assets on dedicated, isolated AWS infrastructure
            — with redundant secondary architecture, geographic flexibility, and 24×7 ops support.
          </p>
        </div>

        <div className="hosting-image reveal">
          <img src="uploads/otc-hosting.png" alt="OTC Anywhere hosting diagram — Internal Ops with no operational changes, CoorWorks Enterprise AWS hosted Lock System DB and Keybox with redundant secondary architecture, CoorWorks Support, and redundant Primary/Secondary OTC Anywhere services" />
        </div>
      </div>
    </section>
  );
}
window.OTCHosting = OTCHosting;
