import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/quienes-somos', label: 'Quiénes Somos' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: scrolled ? 'rgba(10,10,10,0.95)' : '#0A0A0A',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          margin: '0 auto',
          padding: '18px 100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        className="nav-inner"
      >
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img
            src="/logo-fn.png"
            alt="Arkeím"
            style={{ height: 50, width: 'auto', display: 'block' }}
          />
        </Link>

        {/* Desktop links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 36,
          }}
          className="desktop-links"
        >
          {links.map(({ to, label }) => {
            const active = location.pathname === to
            return (
              <Link
                key={to}
                to={to}
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 14,
                  fontWeight: active ? 500 : 400,
                  color: active ? '#fff' : 'rgba(255,255,255,0.5)',
                  textDecoration: 'none',
                  position: 'relative',
                  padding: '4px 0',
                  transition: 'color 0.2s',
                  letterSpacing: active ? 0.2 : 0,
                }}
                onMouseEnter={e => { e.currentTarget.style.color = '#fff' }}
                onMouseLeave={e => { e.currentTarget.style.color = active ? '#fff' : 'rgba(255,255,255,0.5)' }}
              >
                {label}
                {/* Active indicator */}
                <span style={{
                  position: 'absolute',
                  bottom: -2,
                  left: 0,
                  right: 0,
                  height: 2,
                  backgroundColor: '#B91C1C',
                  borderRadius: 1,
                  transform: active ? 'scaleX(1)' : 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1)',
                  boxShadow: active ? '0 0 6px #B91C1C' : 'none',
                }} />
              </Link>
            )
          })}
        </div>

        {/* CTA button */}
        <Link
          to="/contacto"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 13,
            fontWeight: 500,
            color: '#fff',
            textDecoration: 'none',
            backgroundColor: '#B91C1C',
            padding: '10px 24px',
            borderRadius: 2,
            letterSpacing: 0.3,
          }}
          className="desktop-cta"
        >
          Contactar
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 4,
            flexDirection: 'column',
            gap: 5,
          }}
          className="hamburger"
          aria-label="Menu"
        >
          <span
            style={{
              display: 'block',
              width: 24,
              height: 2,
              backgroundColor: '#fff',
              transition: 'all 0.3s',
              transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            }}
          />
          <span
            style={{
              display: 'block',
              width: 24,
              height: 2,
              backgroundColor: '#fff',
              transition: 'all 0.3s',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: 'block',
              width: 24,
              height: 2,
              backgroundColor: '#fff',
              transition: 'all 0.3s',
              transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        style={{
          maxHeight: menuOpen ? 520 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.35s ease',
          backgroundColor: '#0A0A0A',
          borderTop: menuOpen ? '1px solid rgba(255,255,255,0.06)' : 'none',
        }}
        className="mobile-menu"
      >
        <div style={{ padding: '16px 24px 32px', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 16,
                fontWeight: 400,
                color: location.pathname === to ? '#fff' : 'rgba(255,255,255,0.6)',
                textDecoration: 'none',
                padding: '12px 0',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contacto"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 14,
              fontWeight: 500,
              color: '#fff',
              textDecoration: 'none',
              backgroundColor: '#B91C1C',
              padding: '12px 24px',
              borderRadius: 2,
              textAlign: 'center',
              marginTop: 12,
            }}
          >
            Contactar
          </Link>

          {/* Redes sociales */}
          <div style={{ marginTop: 20, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, fontWeight: 500, color: '#B91C1C', letterSpacing: 4, textTransform: 'uppercase', display: 'block', marginBottom: 14 }}>
              Síguenos
            </span>
            <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
              {[
                {
                  label: 'Instagram',
                  url: 'https://www.instagram.com/arkeimsas?igsh=aGg1eG82cmQwbzFk',
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  ),
                },
                {
                  label: 'LinkedIn',
                  url: 'https://www.linkedin.com/in/yilmer-martinez-50152637a/',
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
                  style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', display: 'flex', alignItems: 'center', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-inner { padding: 16px 24px !important; }
          .desktop-links { display: none !important; }
          .desktop-cta { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
