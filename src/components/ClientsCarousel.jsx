import { useEffect, useRef } from 'react'

const clients = [
  { src: '/clients/cliente-1.jpg', alt: 'Cliente 1' },
  { src: '/clients/cliente-2.jpg', alt: 'Kappa' },
  { src: '/clients/cliente-3.jpg', alt: 'LAGA' },
  { src: '/clients/cliente-4.jpg', alt: 'Lina' },
  { src: '/clients/cliente-5.jpg', alt: 'Delta' },
  { src: '/clients/cliente-6.jpg', alt: 'Renova' },
]

// Duplicamos para loop infinito suave
const track = [...clients, ...clients, ...clients]

export default function ClientsCarousel() {
  const railRef = useRef(null)
  const posRef = useRef(0)
  const rafRef = useRef(null)
  const pausedRef = useRef(false)
  const SPEED = 0.5 // px per frame

  useEffect(() => {
    const rail = railRef.current
    if (!rail) return

    const singleWidth = rail.scrollWidth / 3

    const animate = () => {
      if (!pausedRef.current) {
        posRef.current += SPEED
        if (posRef.current >= singleWidth) posRef.current -= singleWidth
        rail.style.transform = `translateX(-${posRef.current}px)`
      }
      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <section style={{ backgroundColor: '#0A0A0A', padding: '80px 0', overflow: 'hidden' }}>
      {/* Header */}
      <div style={{ padding: '0 100px 56px', display: 'flex', flexDirection: 'column', gap: 10 }} className="clients-header">
        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 500, color: '#B91C1C', letterSpacing: 6, textTransform: 'uppercase' }}>
          Clientes
        </span>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 700, color: '#fff', letterSpacing: -1, margin: 0 }}>
          Confían en nosotros
        </h2>
      </div>

      {/* Track container — white pill, centered with wide margins */}
      <div style={{ padding: '0 160px' }} className="clients-track-outer">
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 14,
            backgroundColor: '#fff',
            boxShadow: '0 2px 32px rgba(0,0,0,0.18)',
          }}
          onMouseEnter={() => { pausedRef.current = true }}
          onMouseLeave={() => { pausedRef.current = false }}
        >
          {/* Left fade */}
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(90deg, #fff 0%, transparent 100%)', zIndex: 2, pointerEvents: 'none' }} />
          {/* Right fade */}
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(270deg, #fff 0%, transparent 100%)', zIndex: 2, pointerEvents: 'none' }} />

          {/* Rail — no background here, container provides it */}
          <div
            ref={railRef}
            style={{ display: 'flex', willChange: 'transform' }}
          >
            {track.map((c, i) => (
              <div
                key={i}
                style={{
                  flexShrink: 0,
                  width: 200,
                  height: 120,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0 28px',
                  borderRight: '1px solid rgba(0,0,0,0.06)',
                }}
              >
                <img
                  src={c.src}
                  alt={c.alt}
                  style={{
                    maxWidth: '100%',
                    maxHeight: 90,
                    objectFit: 'contain',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ margin: '56px 100px 0', height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 20%, rgba(255,255,255,0.06) 80%, transparent)' }} className="clients-divider" />

      <style>{`
        @media (max-width: 768px) {
          .clients-header { padding: 0 24px 40px !important; }
          .clients-track-outer { padding: 0 24px !important; }
          .clients-divider { margin: 40px 24px 0 !important; }
        }
      `}</style>
    </section>
  )
}
