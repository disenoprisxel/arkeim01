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
            style={{ height: 40, width: 'auto', display: 'block' }}
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
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 14,
                fontWeight: 400,
                color: location.pathname === to ? '#fff' : 'rgba(255,255,255,0.5)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.target.style.color = '#fff')}
              onMouseLeave={e =>
                (e.target.style.color =
                  location.pathname === to ? '#fff' : 'rgba(255,255,255,0.5)')
              }
            >
              {label}
            </Link>
          ))}
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
          maxHeight: menuOpen ? 400 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
          backgroundColor: '#0A0A0A',
          borderTop: menuOpen ? '1px solid rgba(255,255,255,0.06)' : 'none',
        }}
        className="mobile-menu"
      >
        <div style={{ padding: '16px 24px 24px', display: 'flex', flexDirection: 'column', gap: 4 }}>
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
