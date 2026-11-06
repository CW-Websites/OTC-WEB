function OTCContact() {
  const [status, setStatus] = React.useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    setStatus('submitting');
    try {
      const res = await fetch('https://formspree.io/f/mvzderqa', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) { form.reset(); setStatus('success'); }
      else { setStatus('error'); }
    } catch { setStatus('error'); }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="reveal">
            <div className="eyebrow" style={{marginBottom:24}}>Contact</div>
            <h2 className="contact__title">
              Schedule a <span className="accent">demo.</span>
            </h2>
            <p className="contact__lede">
              Tell us about your lock operation. An hour to walk through OTC Anywhere
              and where it can move the needle on automation, availability, and access control.
            </p>
            <div className="contact__rows">
              <div className="contact__row">
                <span className="k">Email</span>
                <span className="v"><a href="mailto:Support@Coorworks.com">Support@Coorworks.com</a></span>
              </div>
              <div className="contact__row">
                <span className="k">Office</span>
                <span className="v">CoorWorks · 1069 W Broad Street #813 · Falls Church, VA 22046</span>
              </div>
              <div className="contact__row">
                <span className="k">Direct</span>
                <span className="v"><a href="tel:7032006225">703.200.6225</a></span>
              </div>
              <div className="contact__row">
                <span className="k">Service</span>
                <span className="v">24×7×365 · Platform operates continuously</span>
              </div>
            </div>
          </div>
          {status === 'success' ? (
            <div className="contact__form contact__success" role="status" aria-live="polite">
              <div className="contact__success-mark" aria-hidden="true">
                <img src={otcImg("/uploads/check-circle-green.png")} alt=""/>
              </div>
              <h3>Thanks — we got it.</h3>
              <p>
                Your message is in. A member of the CoorWorks team will be in touch within one business day to schedule your demo.
              </p>
              <button type="button" className="btn btn--ghost" onClick={() => setStatus('idle')} style={{alignSelf:'flex-start'}}>
                Send another
              </button>
            </div>
          ) : (
            <form
              className="contact__form reveal"
              action="https://formspree.io/f/mvzderqa"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div className="contact__field">
                <label htmlFor="cf-name">Name</label>
                <input id="cf-name" name="name" type="text" placeholder="Jane Doe" required/>
              </div>
              <div className="contact__field">
                <label htmlFor="cf-email">Email</label>
                <input id="cf-email" name="email" type="email" placeholder="jane@company.com" required/>
              </div>
              <div className="contact__field">
                <label htmlFor="cf-company">Company / Operation</label>
                <input id="cf-company" name="company" type="text" placeholder="Operation name & lock systems"/>
              </div>
              <div className="contact__field">
                <label htmlFor="cf-message">What are you trying to move?</label>
                <textarea id="cf-message" name="message" placeholder="Automation · availability · audit · access control · subcontractor reach"></textarea>
              </div>
              <input type="text" name="_gotcha" style={{display:'none'}} tabIndex="-1" autoComplete="off"/>
              {/* Lead source: tells you which page a demo request came from.
                  _subject sets the email subject line Formspree sends you. */}
              <input type="hidden" name="source_page" value={otcPage(OTC_CURRENT_PAGE).crumb + ' (' + otcPage(OTC_CURRENT_PAGE).path + ')'}/>
              <input type="hidden" name="_subject" value={'OTC demo request — ' + otcPage(OTC_CURRENT_PAGE).crumb}/>
              {status === 'error' && (
                <div className="contact__error" role="alert">
                  Something went wrong sending your message. Please email <a href="mailto:Support@Coorworks.com">Support@Coorworks.com</a> directly.
                </div>
              )}
              <button
                className="btn btn--accent"
                type="submit"
                disabled={status === 'submitting'}
                style={{alignSelf:'flex-start'}}
              >
                {status === 'submitting' ? 'Sending…' : 'Send'}
                {status !== 'submitting' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
window.OTCContact = OTCContact;

function OTCFooter() {
  return (
    <footer className="tnt-footer otc-footer">
      <div className="container">
        <div className="tnt-footer__grid">
          <div className="tnt-footer__col">
            <img src={otcImg("/uploads/OTC-Logo-v1-white.png")} loading="lazy" decoding="async" alt="OTC Anywhere" style={{height: 32, width: 'auto', marginBottom: 18}}/>
            <p style={{margin: 0, lineHeight: 1.6, opacity: 0.8, fontSize: 14, maxWidth: '34ch'}}>
              Automated ATM lock opening and dispatching across dormakaba Cencon, Stanley S&amp;G, and Intergard
              — secured, on-demand, enterprise managed.
            </p>
          </div>
          <div className="tnt-footer__col">
            <h4>Site</h4>
            <ul>
              <li><a href={otcAnchor('platform')}>Platform</a></li>
              <li><a href={otcAnchor('hosting')}>Hosting</a></li>
              <li><a href={otcAnchor('cases')}>Deployments</a></li>
              <li><a href={otcAnchor('benefits')}>Benefits</a></li>
              <li><a href={otcAnchor('faq')}>FAQ</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="tnt-footer__col">
            <h4>Lock Automation</h4>
            <ul>
              {OTC_LANDING_KEYS.map(k => (
                <li key={k}><a href={otcPage(k).path}>{otcPage(k).crumb}</a></li>
              ))}
            </ul>
          </div>
          <div className="tnt-footer__col">
            <h4>CoorWorks Products</h4>
            <ul>
              <li><a href="https://coorworks.com" target="_blank" rel="noopener">CoorWorks</a></li>
              <li><a href="https://coorworks.com#deliverables" target="_blank" rel="noopener">Track/Trace</a></li>
              <li><a href="/">OTC Anywhere</a></li>
              <li><a href="https://coorworks.com#deliverables" target="_blank" rel="noopener">ELISA</a></li>
              <li><a href="https://coorworks.com#deliverables" target="_blank" rel="noopener">Coordinate</a></li>
            </ul>
          </div>
          <div className="tnt-footer__col">
            <h4>Contact</h4>
            <ul>
              <li>1069 W Broad Street #813</li>
              <li>Falls Church, VA 22046</li>
              <li><a href="tel:+17032006225">+1 (703) 200‑6225</a></li>
              <li><a href="mailto:support@coorworks.com">support@coorworks.com</a></li>
            </ul>
          </div>
        </div>

        <a href="https://coorworks.com" target="_blank" rel="noopener" className="tnt-footer__wordmark" aria-label="CoorWorks website">
          CoorWorks<span className="accent">.</span>
        </a>

        <div className="tnt-footer__legal">
          <span>© {new Date().getFullYear()} CoorWorks, Inc. All rights reserved.</span>
          <span>OTC Anywhere · A CoorWorks Platform · Operating 24 × 7 × 365</span>
        </div>
        <p className="tnt-footer__tm">
          dormakaba, Cencon, S&amp;G, Sargent &amp; Greenleaf and Intergard are trademarks of their respective owners.
          They are used here only to identify compatible lock systems; OTC Anywhere is not affiliated with or
          endorsed by these companies.
        </p>
      </div>
    </footer>
  );
}
window.OTCFooter = OTCFooter;
