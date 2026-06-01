import { useEffect } from 'react'

// Native smooth scroll with momentum using requestAnimationFrame
export function useSmoothScroll() {
  useEffect(() => {
    let current = 0
    let target = 0
    let rafId = null
    const ease = 0.1

    const onWheel = (e) => {
      e.preventDefault()
      target += e.deltaY * 0.8
      target = Math.max(0, Math.min(target, document.body.scrollHeight - window.innerHeight))
    }

    const loop = () => {
      current += (target - current) * ease
      if (Math.abs(target - current) < 0.5) current = target
      window.scrollTo(0, current)
      rafId = requestAnimationFrame(loop)
    }

    // Sync on scroll (touch, keyboard, etc.)
    const onScroll = () => {
      target = window.scrollY
      current = window.scrollY
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('touchmove', onScroll)
    window.addEventListener('keydown', onScroll)
    rafId = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('touchmove', onScroll)
      window.removeEventListener('keydown', onScroll)
    }
  }, [])
}
