import { useEffect, useRef, useState } from 'react'

export default function ModelViewer3D({ src, title }) {
  const ref = useRef(null)
  const [loaded, setLoaded] = useState(false)
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Load model-viewer web component
    import('@google/model-viewer')
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onLoad = () => { setLoaded(true); setLoading(false) }
    const onProgress = (e) => { setProgress(Math.round(e.detail.totalProgress * 100)) }
    const onError = () => setLoading(false)

    el.addEventListener('load', onLoad)
    el.addEventListener('progress', onProgress)
    el.addEventListener('error', onError)
    return () => {
      el.removeEventListener('load', onLoad)
      el.removeEventListener('progress', onProgress)
      el.removeEventListener('error', onError)
    }
  }, [])

  return (
    <div style={{ position: 'relative', width: '100%', background: '#0D0D0D', borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>

      {/* Header bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)', background: '#111' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {/* Traffic lights decorativos */}
          {['#FF5F57','#FEBC2E','#28C840'].map(c => (
            <div key={c} style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: c, opacity: 0.7 }} />
          ))}
        </div>
        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.35)', letterSpacing: 1 }}>
          VISOR 3D — {title}
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: loaded ? '#28C840' : '#FEBC2E', boxShadow: loaded ? '0 0 6px #28C840' : '0 0 6px #FEBC2E' }} />
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>
            {loaded ? 'Modelo listo' : `Cargando ${progress}%`}
          </span>
        </div>
      </div>

      {/* Loading overlay */}
      {loading && (
        <div style={{ position: 'absolute', inset: '50px 0 0 0', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 20, background: '#0D0D0D' }}>
          {/* Spinner */}
          <div style={{ position: 'relative', width: 60, height: 60 }}>
            <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '2px solid rgba(185,28,28,0.15)' }} />
            <div style={{
              position: 'absolute', inset: 0, borderRadius: '50%',
              border: '2px solid transparent',
              borderTopColor: '#B91C1C',
              animation: 'mv-spin 0.9s linear infinite',
            }} />
            <div style={{ position: 'absolute', inset: 8, borderRadius: '50%', border: '1px solid rgba(185,28,28,0.2)', borderTopColor: 'rgba(185,28,28,0.6)', animation: 'mv-spin 1.4s linear infinite reverse' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <span style={{ fontFamily: 'Syne, sans-serif', fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>
              Cargando modelo 3D
            </span>
            {/* Progress bar */}
            <div style={{ width: 180, height: 2, backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: 2, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${progress}%`, backgroundColor: '#B91C1C', borderRadius: 2, transition: 'width 0.3s ease', boxShadow: '0 0 8px #B91C1C' }} />
            </div>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>{progress}%</span>
          </div>
        </div>
      )}

      {/* model-viewer */}
      <model-viewer
        ref={ref}
        src={src}
        alt={title}
        camera-controls
        auto-rotate
        auto-rotate-delay="2000"
        rotation-per-second="12deg"
        environment-image="neutral"
        shadow-intensity="1.2"
        shadow-softness="0.8"
        exposure="0.9"
        tone-mapping="commerce"
        style={{
          width: '100%',
          height: 600,
          backgroundColor: '#0D0D0D',
          '--progress-bar-color': '#B91C1C',
          '--progress-mask': 'transparent',
        }}
      />

      {/* Controls hint */}
      {loaded && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: 28, padding: '12px 20px', background: '#111', borderTop: '1px solid rgba(255,255,255,0.06)', flexWrap: 'wrap' }}>
          {[
            { icon: '🖱️', label: 'Arrastrar para rotar' },
            { icon: '⚲', label: 'Scroll para zoom' },
            { icon: '✋', label: 'Dos dedos para mover' },
          ].map(({ icon, label }) => (
            <span key={label} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ fontSize: 13 }}>{icon}</span> {label}
            </span>
          ))}
        </div>
      )}

      <style>{`
        @keyframes mv-spin { to { transform: rotate(360deg); } }
        model-viewer { --poster-color: transparent; }
      `}</style>
    </div>
  )
}
