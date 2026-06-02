import { useEffect, useRef, useState } from 'react'

const ENVIRONMENTS = [
  { id: 'neutral',   label: 'Neutro',    value: 'neutral' },
  { id: 'legacy',    label: 'Studio',    value: 'legacy' },
  { id: 'commerce',  label: 'Suave',     value: 'commerce' },
  { id: 'dawn',      label: 'Amanecer',  value: 'https://modelviewer.dev/shared-assets/environments/spruit_sunrise_1k_HDR.hdr' },
  { id: 'sunset',    label: 'Atardecer', value: 'https://modelviewer.dev/shared-assets/environments/aircraft_workshop_01_1k.hdr' },
]

const BACKGROUNDS = [
  { id: 'black',      label: 'Negro',        value: '#0D0D0D' },
  { id: 'dark',       label: 'Gris oscuro',  value: '#2A2A2A' },
  { id: 'mid',        label: 'Gris medio',   value: '#666666' },
  { id: 'light',      label: 'Gris claro',   value: '#BEBEBE' },
  { id: 'white',      label: 'Blanco',       value: '#F5F5F5' },
]

const TONEMAPS = [
  { id: 'commerce', label: 'Realista' },
  { id: 'neutral',  label: 'Neutro' },
  { id: 'agx',      label: 'Cinemático' },
  { id: 'linear',   label: 'Lineal' },
]

export default function ModelViewer3D({ src, title }) {
  const mvRef  = useRef(null)
  const [loaded,   setLoaded]   = useState(false)
  const [loading,  setLoading]  = useState(true)
  const [progress, setProgress] = useState(0)
  const [panelOpen, setPanelOpen] = useState(false)

  // Lighting state
  const [exposure,     setExposure]     = useState(0.9)
  const [shadowInt,    setShadowInt]    = useState(1.2)
  const [shadowSoft,   setShadowSoft]   = useState(0.8)
  const [shadows,      setShadows]      = useState(true)
  const [envId,        setEnvId]        = useState('neutral')
  const [toneMap,      setToneMap]      = useState('commerce')
  const [autoRotate,   setAutoRotate]   = useState(true)
  const [bgId,         setBgId]         = useState('black')

  useEffect(() => { import('@google/model-viewer') }, [])

  useEffect(() => {
    const el = mvRef.current
    if (!el) return
    const onLoad  = () => { setLoaded(true); setLoading(false) }
    const onProg  = (e) => setProgress(Math.round(e.detail.totalProgress * 100))
    el.addEventListener('load',     onLoad)
    el.addEventListener('progress', onProg)
    return () => {
      el.removeEventListener('load',     onLoad)
      el.removeEventListener('progress', onProg)
    }
  }, [])

  // Apply settings to model-viewer
  useEffect(() => {
    const el = mvRef.current
    if (!el || !loaded) return
    el.exposure      = exposure
    el.shadowIntensity = shadows ? shadowInt : 0
    el.shadowSoftness  = shadowSoft
    el.toneMapping     = toneMap
    const env = ENVIRONMENTS.find(e => e.id === envId)
    el.environmentImage = env?.value ?? 'neutral'
    el.autoRotate = autoRotate
    const bg = BACKGROUNDS.find(b => b.id === bgId)
    el.style.backgroundColor = bg?.value ?? '#0D0D0D'
  }, [exposure, shadowInt, shadowSoft, shadows, envId, toneMap, autoRotate, bgId, loaded])

  return (
    <div style={{ position: 'relative', width: '100%', background: '#0D0D0D', borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>

      {/* ── TOP BAR ── */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)', background: '#111' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {['#FF5F57','#FEBC2E','#28C840'].map(c => (
            <div key={c} style={{ width: 11, height: 11, borderRadius: '50%', backgroundColor: c, opacity: 0.7 }} />
          ))}
        </div>

        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.3)', letterSpacing: 1.5, textTransform: 'uppercase' }}>
          Visor 3D · {title}
        </span>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: loaded ? '#28C840' : '#FEBC2E', boxShadow: loaded ? '0 0 5px #28C840' : '0 0 5px #FEBC2E' }} />
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.3)' }}>
              {loaded ? 'Listo' : `${progress}%`}
            </span>
          </div>

          {/* Lighting toggle button */}
          {loaded && (
            <button
              onClick={() => setPanelOpen(o => !o)}
              title="Controles de iluminación"
              style={{
                background: panelOpen ? '#B91C1C' : 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 6,
                padding: '5px 12px',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 6,
                transition: 'all 0.2s',
              }}
            >
              {/* Sun icon */}
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={panelOpen ? '#fff' : 'rgba(255,255,255,0.6)'} strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="4"/>
                <line x1="12" y1="2"  x2="12" y2="5"/>
                <line x1="12" y1="19" x2="12" y2="22"/>
                <line x1="2"  y1="12" x2="5"  y2="12"/>
                <line x1="19" y1="12" x2="22" y2="12"/>
                <line x1="4.22"  y1="4.22"  x2="6.34" y2="6.34"/>
                <line x1="17.66" y1="17.66" x2="19.78" y2="19.78"/>
                <line x1="4.22"  y1="19.78" x2="6.34" y2="17.66"/>
                <line x1="17.66" y1="6.34"  x2="19.78" y2="4.22"/>
              </svg>
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, color: panelOpen ? '#fff' : 'rgba(255,255,255,0.5)', fontWeight: 500 }}>
                Iluminación
              </span>
            </button>
          )}
        </div>
      </div>

      {/* ── MAIN AREA ── */}
      <div style={{ position: 'relative', display: 'flex' }}>

        {/* model-viewer */}
        <div style={{ flex: 1, position: 'relative' }}>
          {/* Loading overlay */}
          {loading && (
            <div style={{ position: 'absolute', inset: 0, zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 20, background: '#0D0D0D' }}>
              <div style={{ position: 'relative', width: 56, height: 56 }}>
                <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '2px solid rgba(185,28,28,0.12)' }} />
                <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '2px solid transparent', borderTopColor: '#B91C1C', animation: 'mv-spin 0.85s linear infinite' }} />
                <div style={{ position: 'absolute', inset: 7, borderRadius: '50%', border: '1.5px solid rgba(185,28,28,0.2)', borderTopColor: 'rgba(185,28,28,0.5)', animation: 'mv-spin 1.4s linear infinite reverse' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <span style={{ fontFamily: 'Syne, sans-serif', fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.6)' }}>Cargando modelo 3D</span>
                <div style={{ width: 160, height: 2, backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: 2, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${progress}%`, backgroundColor: '#B91C1C', borderRadius: 2, transition: 'width 0.3s', boxShadow: '0 0 6px #B91C1C' }} />
                </div>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.25)' }}>{progress}%</span>
              </div>
            </div>
          )}

          <model-viewer
            ref={mvRef}
            src={src}
            alt={title}
            camera-controls
            auto-rotate={autoRotate || undefined}
            auto-rotate-delay="1500"
            rotation-per-second="10deg"
            environment-image="neutral"
            shadow-intensity="1.2"
            shadow-softness="0.8"
            exposure="0.9"
            tone-mapping="commerce"
            style={{ width: '100%', height: 600, backgroundColor: '#0D0D0D', '--progress-bar-color': 'transparent', '--progress-mask': 'transparent' }}
          />
        </div>

        {/* ── LIGHTING PANEL ── */}
        {panelOpen && (
          <div style={{
            width: 240,
            background: '#111',
            borderLeft: '1px solid rgba(255,255,255,0.06)',
            padding: 20,
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
            overflowY: 'auto',
          }}>

            {/* Background color */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <Label icon="🎨" text="Fondo" />
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {BACKGROUNDS.map(b => (
                  <button
                    key={b.id}
                    onClick={() => setBgId(b.id)}
                    title={b.label}
                    style={{
                      width: 28, height: 28,
                      borderRadius: 6,
                      backgroundColor: b.value,
                      border: bgId === b.id
                        ? '2px solid #B91C1C'
                        : '2px solid rgba(255,255,255,0.12)',
                      cursor: 'pointer',
                      transition: 'border-color 0.2s, transform 0.15s',
                      transform: bgId === b.id ? 'scale(1.15)' : 'scale(1)',
                      boxShadow: bgId === b.id ? '0 0 6px rgba(185,28,28,0.5)' : 'none',
                    }}
                  />
                ))}
              </div>
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.25)', letterSpacing: 0.5 }}>
                {BACKGROUNDS.find(b => b.id === bgId)?.label}
              </span>
            </div>

            <Divider />

            {/* Environment */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <Label icon="🌅" text="Ambiente" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {ENVIRONMENTS.map(e => (
                  <button key={e.id} onClick={() => setEnvId(e.id)} style={{
                    background: envId === e.id ? 'rgba(185,28,28,0.2)' : 'rgba(255,255,255,0.03)',
                    border: `1px solid ${envId === e.id ? '#B91C1C' : 'rgba(255,255,255,0.08)'}`,
                    borderRadius: 6, padding: '7px 12px', cursor: 'pointer', textAlign: 'left',
                    fontFamily: 'DM Sans, sans-serif', fontSize: 12,
                    color: envId === e.id ? '#fff' : 'rgba(255,255,255,0.5)',
                    transition: 'all 0.2s',
                  }}>
                    {e.label}
                  </button>
                ))}
              </div>
            </div>

            <Divider />

            {/* Exposure */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <Label icon="☀️" text="Exposición" value={exposure.toFixed(1)} />
              <Slider min={0.1} max={3} step={0.05} value={exposure} onChange={setExposure} />
            </div>

            <Divider />

            {/* Shadows */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Label icon="🌑" text="Sombras" />
                <Toggle value={shadows} onChange={setShadows} />
              </div>
              {shadows && (
                <>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.3)', letterSpacing: 1 }}>INTENSIDAD · {shadowInt.toFixed(1)}</span>
                    <Slider min={0} max={3} step={0.05} value={shadowInt} onChange={setShadowInt} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.3)', letterSpacing: 1 }}>SUAVIDAD · {shadowSoft.toFixed(1)}</span>
                    <Slider min={0} max={1} step={0.05} value={shadowSoft} onChange={setShadowSoft} />
                  </div>
                </>
              )}
            </div>

            <Divider />

            {/* Tone mapping */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <Label icon="🎨" text="Modo de color" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {TONEMAPS.map(t => (
                  <button key={t.id} onClick={() => setToneMap(t.id)} style={{
                    background: toneMap === t.id ? 'rgba(185,28,28,0.2)' : 'rgba(255,255,255,0.03)',
                    border: `1px solid ${toneMap === t.id ? '#B91C1C' : 'rgba(255,255,255,0.08)'}`,
                    borderRadius: 6, padding: '7px 12px', cursor: 'pointer', textAlign: 'left',
                    fontFamily: 'DM Sans, sans-serif', fontSize: 12,
                    color: toneMap === t.id ? '#fff' : 'rgba(255,255,255,0.5)',
                    transition: 'all 0.2s',
                  }}>
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            <Divider />

            {/* Auto-rotate */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Label icon="🔄" text="Auto-rotar" />
              <Toggle value={autoRotate} onChange={setAutoRotate} />
            </div>

            {/* Reset */}
            <button
              onClick={() => { setExposure(0.9); setShadowInt(1.2); setShadowSoft(0.8); setShadows(true); setEnvId('neutral'); setToneMap('commerce'); setAutoRotate(true); setBgId('black') }}
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 6, padding: '8px', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.35)', transition: 'all 0.2s' }}
            >
              Restaurar valores
            </button>
          </div>
        )}
      </div>

      {/* ── BOTTOM HINTS ── */}
      {loaded && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: 28, padding: '10px 20px', background: '#111', borderTop: '1px solid rgba(255,255,255,0.06)', flexWrap: 'wrap' }}>
          {[['🖱️','Arrastrar para rotar'],['⚲','Scroll para zoom'],['✋','Dos dedos para mover']].map(([icon, label]) => (
            <span key={label} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', gap: 5 }}>
              <span style={{ fontSize: 12 }}>{icon}</span> {label}
            </span>
          ))}
        </div>
      )}

      <style>{`
        @keyframes mv-spin { to { transform: rotate(360deg); } }
        model-viewer { --poster-color: transparent; }
        input[type=range] { -webkit-appearance: none; appearance: none; height: 3px; border-radius: 2px; outline: none; cursor: pointer; }
        input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; width: 14px; height: 14px; border-radius: 50%; background: #B91C1C; cursor: pointer; box-shadow: 0 0 4px rgba(185,28,28,0.5); }
      `}</style>
    </div>
  )
}

/* ── Sub-components ── */
function Label({ icon, text, value }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
      <span style={{ fontSize: 13 }}>{icon}</span>
      <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.5)', letterSpacing: 1, textTransform: 'uppercase' }}>{text}</span>
      {value !== undefined && <span style={{ marginLeft: 'auto', fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: '#B91C1C', fontWeight: 600 }}>{value}</span>}
    </div>
  )
}

function Slider({ min, max, step, value, onChange }) {
  return (
    <input
      type="range" min={min} max={max} step={step} value={value}
      onChange={e => onChange(parseFloat(e.target.value))}
      style={{ width: '100%', background: `linear-gradient(to right, #B91C1C ${((value - min) / (max - min)) * 100}%, rgba(255,255,255,0.1) 0%)` }}
    />
  )
}

function Toggle({ value, onChange }) {
  return (
    <button
      onClick={() => onChange(!value)}
      style={{
        width: 36, height: 20, borderRadius: 10, border: 'none', cursor: 'pointer',
        backgroundColor: value ? '#B91C1C' : 'rgba(255,255,255,0.1)',
        position: 'relative', transition: 'background 0.2s', flexShrink: 0,
      }}
    >
      <div style={{
        position: 'absolute', top: 3, left: value ? 18 : 3,
        width: 14, height: 14, borderRadius: '50%', backgroundColor: '#fff',
        transition: 'left 0.2s', boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
      }} />
    </button>
  )
}

function Divider() {
  return <div style={{ height: 1, backgroundColor: 'rgba(255,255,255,0.05)' }} />
}
