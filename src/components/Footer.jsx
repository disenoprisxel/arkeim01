import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#0A0A0A',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Red top line */}
      <div
        style={{
          height: 1,
          background: 'linear-gradient(90deg, transparent, #B91C1C, transparent)',
        }}
      />

      {/* Watermark */}
      <div
        style={{
          position: 'absolute',
          bottom: -10,
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: 'Syne, sans-serif',
          fontSize: 180,
          fontWeight: 800,
          color: 'rgba(255,255,255,0.02)',
          letterSpacing: -6,
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        ARKEÍM
      </div>

      <div
        style={{
          maxWidth: 1440,
          margin: '0 auto',
          padding: '56px 100px',
          display: 'flex',
          flexDirection: 'column',
          gap: 48,
          position: 'relative',
        }}
        className="footer-inner"
      >
        {/* Top row */}
        <div style={{ display: 'flex', gap: 60, flexWrap: 'wrap' }} className="footer-top">
          {/* Brand */}
          <div style={{ flex: '1 1 260px', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <img
              src="/logo.png"
              alt="Arkeím"
              style={{ height: 44, width: 'auto', display: 'block', filter: 'invert(1) hue-rotate(180deg)' }}
            />
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 14,
                color: 'rgba(255,255,255,0.4)',
                lineHeight: 1.6,
                maxWidth: 280,
              }}
            >
              Arquitectura con criterio. Diseñamos, construimos y entregamos espacios que perduran.
            </p>
          </div>

          {/* Nav */}
          <div style={{ flex: '0 0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <span
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 11,
                fontWeight: 500,
                color: '#B91C1C',
                letterSpacing: 4,
                textTransform: 'uppercase',
              }}
            >
              Navegación
            </span>
            {[
              { to: '/', label: 'Inicio' },
              { to: '/quienes-somos', label: 'Quiénes Somos' },
              { to: '/servicios', label: 'Servicios' },
              { to: '/proyectos', label: 'Proyectos' },
              { to: '/contacto', label: 'Contacto' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.5)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.target.style.color = '#fff')}
                onMouseLeave={e => (e.target.style.color = 'rgba(255,255,255,0.5)')}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div style={{ flex: '0 0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <span
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 11,
                fontWeight: 500,
                color: '#B91C1C',
                letterSpacing: 4,
                textTransform: 'uppercase',
              }}
            >
              Servicios
            </span>
            {['Diseño Arquitectónico', 'Construcción', 'Renders y Videos 3D'].map(s => (
              <span
                key={s}
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.5)',
                }}
              >
                {s}
              </span>
            ))}
          </div>

          {/* Contact */}
          <div style={{ flex: '0 0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <span
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 11,
                fontWeight: 500,
                color: '#B91C1C',
                letterSpacing: 4,
                textTransform: 'uppercase',
              }}
            >
              Contacto
            </span>
            {[
              'Bogotá, Colombia',
              'info@arkeim.co',
              '+57 300 123 4567',
              'Lun – Vie · 8:00 – 18:00',
            ].map(c => (
              <span
                key={c}
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.5)',
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: 24,
            borderTop: '1px solid rgba(255,255,255,0.06)',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <span
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 13,
              color: 'rgba(255,255,255,0.25)',
            }}
          >
            © 2025 Arkeím · Bogotá, Colombia
          </span>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Instagram', 'LinkedIn', 'Behance'].map(s => (
              <a
                key={s}
                href="#"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 13,
                  color: 'rgba(255,255,255,0.3)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.target.style.color = '#fff')}
                onMouseLeave={e => (e.target.style.color = 'rgba(255,255,255,0.3)')}
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-inner { padding: 40px 24px 32px !important; }
          .footer-top { flex-direction: column !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  )
}
