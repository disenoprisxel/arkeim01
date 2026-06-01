import { useEffect, useRef } from 'react'

export default function RevealSection({ children, delay = 0, direction = 'up', style, className }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const yStart = direction === 'up' ? 40 : direction === 'down' ? -40 : 0
    const xStart = direction === 'left' ? 40 : direction === 'right' ? -40 : 0

    el.style.opacity = '0'
    el.style.transform = `translate(${xStart}px, ${yStart}px)`
    el.style.transition = `opacity 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}s`

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translate(0,0)'
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    observer.observe(el)

    return () => observer.disconnect()
  }, [delay, direction])

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  )
}
