function OTCPlatform() {
  return (
    <section className="section section--paper2" id="platform">
      <div className="grid-bg"></div>
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Platform</div>
          <h2 className="section-head__title">
            Multiple lock systems.<br/>
            Multiple methods. Multiple <span className="accent">enforcements.</span>
          </h2>
          <p className="section-head__lede">
            One service surface across every lock system you operate — accessible from any channel,
            with precision controls applied at every layer.
          </p>
        </div>

        <div className="platform-image reveal">
          <img src="uploads/otc-platform.png?v=2" alt="OTC Anywhere platform diagram — Loader/Technician with user permission controls, channels (Web, IVR, SMS, mobile), Primary and Secondary OTC services, API access, and lock systems across Enterprise Hosted, 3rd Party, and On-Premise deployments" />
        </div>
      </div>
    </section>
  );
}
window.OTCPlatform = OTCPlatform;
