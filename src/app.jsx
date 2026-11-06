const { useEffect: useEffectOTC } = React;

function useOTCReveal() {
  useEffectOTC(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// `page` says which page to show: 'home', a landing page ('cencon', 'sg',
// 'intergard', 'lms') or 'notfound'. See src/pages.jsx for the list.
function OTCApp({ page = 'home' }) {
  useOTCReveal();

  let main;
  if (page === 'home') {
    main = (
      <>
        <OTCHero/>
        <OTCStatsAndBrands/>
        <OTCLockSystems/>
        <OTCPlatform/>
        <OTCHosting/>
        <OTCCases/>
        <OTCBenefits/>
        <OTCFaq page="home"/>
        <OTCContact/>
      </>
    );
  } else if (OTC_LANDINGS[page]) {
    main = (<><OTCLanding page={page}/><OTCContact/></>);
  } else {
    main = <OTCNotFound/>;
  }

  return (
    <>
      <OTCNav/>
      <main>{main}</main>
      <OTCFooter/>
    </>
  );
}
window.OTCApp = OTCApp;
// The page is mounted by build.mjs (pre-rendered HTML + hydrate in the browser).
