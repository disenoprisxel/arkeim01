import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const { pathname } = useLocation()

  // Reset scroll on route change
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      onClick={scrollUp}
      aria-label="Volver arriba"
      style={{
        position: 'fixed',
        bottom: 92,
        right: 28,
        zIndex: 9001,
        width: 48,
        height: 48,
        borderRadius: '50%',
        backgroundColor: '#B91C1C',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 20px rgba(185,28,28,0.4)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        pointerEvents: visible ? 'auto' : 'none',
      }}
      onMouseEnter={e => e.currentTarget.style.backgroundColor = '#991B1B'}
      onMouseLeave={e => e.currentTarget.style.backgroundColor = '#B91C1C'}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  )
}
