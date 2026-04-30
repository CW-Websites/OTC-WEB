const { useEffect: useEffectOTC } = React;

const OTC_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#2F6FB8",
  "showGrid": true
}/*EDITMODE-END*/;

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

function applyOTCTweaks(t) {
  const root = document.documentElement;
  root.style.setProperty('--accent', t.accent || '#2F6FB8');
  document.querySelectorAll('.grid-bg').forEach(el => {
    el.style.display = t.showGrid ? '' : 'none';
  });
}

function OTCApp() {
  const [t, setTweak] = useTweaks(OTC_TWEAK_DEFAULTS);
  useOTCReveal();
  useEffectOTC(() => { applyOTCTweaks(t); }, [t]);

  return (
    <>
      <OTCNav/>
      <main>
        <OTCHero/>
        <OTCStatsAndBrands/>
        <OTCPlatform/>
        <OTCHosting/>
        <OTCCases/>
        <OTCBenefits/>
        <OTCContact/>
      </main>
      <OTCFooter/>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Brand"/>
        <TweakColor label="Accent" value={t.accent}
          onChange={(v) => setTweak('accent', v)}/>
        <TweakSection label="Behavior"/>
        <TweakToggle label="Schematic grid" value={!!t.showGrid}
          onChange={(v) => setTweak('showGrid', v)}/>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<OTCApp/>);
