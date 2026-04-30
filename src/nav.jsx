function OTCNav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [active, setActive] = React.useState('');
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  React.useEffect(() => {
    const ids = OTC_NAV_LINKS.map(l => l.id);
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: '-40% 0px -50% 0px' });
    ids.forEach(id => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#top" className="nav__logo">
          <img src="uploads/OTC-Logo.png" alt="OTC Anywhere"/>
        </a>
        <div className="nav__cta-wrap">
          <a href="#contact" className="nav__cta">Schedule Demo →</a>
        </div>
        <div className="nav__links">
          {OTC_NAV_LINKS.map(l => (
            <a key={l.id} href={`#${l.id}`} className={`nav__link ${active===l.id?'active':''}`}>
              <span className="dot"></span>{l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
window.OTCNav = OTCNav;
