import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export default function PageTransition({ children }) {
  const ref = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(20px)'
    el.style.transition = 'none'

    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.transition = 'opacity 0.55s cubic-bezier(0.22,1,0.36,1), transform 0.55s cubic-bezier(0.22,1,0.36,1)'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      })
    })
    return () => cancelAnimationFrame(id)
  }, [location.pathname])

  return (
    <div ref={ref} style={{ opacity: 0 }}>
      {children}
    </div>
  )
}
