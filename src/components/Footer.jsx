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
              src="/logo-fn.png"
              alt="Arkeím"
              style={{ width: 180, height: 'auto', display: 'block' }}
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
            {['Diseño Arquitectónico', 'BIM y Coordinación Técnica', 'Visualización Arquitectónica', 'Licencias de Construcción', 'Construcción'].map(s => (
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
              'arkeim.sas@gmail.com',
              '+57 312 412 1866',
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
          className="footer-bottom"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>
              © 2026 Arkeím · Bogotá, Colombia
            </span>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>
              Hecho por{' '}
              <a
                href="https://www.prisxel.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.target.style.color = '#fff')}
                onMouseLeave={e => (e.target.style.color = 'rgba(255,255,255,0.45)')}
              >
                PRISXEL
              </a>
              {' '}con{' '}
              <span style={{ color: '#e25555' }}>❤</span>
            </span>
          </div>
          <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
            {[
              {
                label: 'Instagram',
                url: 'https://www.instagram.com/arkeimsas?igsh=aGg1eG82cmQwbzFk',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                  </svg>
                ),
              },
              {
                label: 'Facebook',
                url: 'https://www.facebook.com/Arkeimsas',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                ),
              },
              {
                label: 'LinkedIn',
                url: 'https://www.linkedin.com/in/yilmer-martinez-50152637a/',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                ),
              },
            ].map(s => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                style={{
                  color: 'rgba(255,255,255,0.3)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-inner { padding: 40px 24px 100px !important; }
          .footer-top { flex-direction: column !important; gap: 32px !important; }
          .footer-bottom { flex-direction: column-reverse !important; align-items: flex-start !important; gap: 16px !important; }
        }
      `}</style>
    </footer>
  )
}
