import { useEffect } from 'react'

export function useParallax() {
  useEffect(() => {
    const elements = () => document.querySelectorAll('[data-parallax]')
    let raf = null
    let lastScroll = -1

    const update = () => {
      const scrollY = window.scrollY
      if (scrollY === lastScroll) { raf = requestAnimationFrame(update); return }
      lastScroll = scrollY

      elements().forEach(el => {
        const speed  = parseFloat(el.dataset.parallax) || 0.2
        const rect   = el.getBoundingClientRect()
        const center = rect.top + rect.height / 2
        const offset = (window.innerHeight / 2 - center) * speed
        el.style.transform = `translateY(${offset}px) translateZ(0)`
        el.style.willChange = 'transform'
      })

      raf = requestAnimationFrame(update)
    }

    raf = requestAnimationFrame(update)
    return () => cancelAnimationFrame(raf)
  }, [])
}
