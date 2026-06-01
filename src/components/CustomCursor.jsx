import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef    = useRef(null)
  const ringRef   = useRef(null)
  const mouse     = useRef({ x: -200, y: -200 })
  const ringPos   = useRef({ x: -200, y: -200 })
  const clicking  = useRef(false)
  const hovering  = useRef(false)

  useEffect(() => {
    document.documentElement.style.cursor = 'none'

    const onMove = (e) => { mouse.current = { x: e.clientX, y: e.clientY } }
    const onDown = () => { clicking.current = true }
    const onUp   = () => { clicking.current = false }
    const onOver = (e) => { if (e.target.closest('a,button,[role="button"]')) hovering.current = true }
    const onOut  = (e) => { if (e.target.closest('a,button,[role="button"]')) hovering.current = false }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('mouseup',   onUp)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout',  onOut)

    let raf
    const loop = () => {
      const dot  = dotRef.current
      const ring = ringRef.current
      if (dot && ring) {
        const { x, y } = mouse.current
        const ease = hovering.current ? 0.2 : 0.1

        // Dot: instant
        dot.style.transform = `translate(${x}px,${y}px)`

        // Ring: lerp
        ringPos.current.x += (x - ringPos.current.x) * ease
        ringPos.current.y += (y - ringPos.current.y) * ease
        const ringScale = clicking.current ? 0.7 : hovering.current ? 1.7 : 1
        const dotScale  = clicking.current ? 1.5 : hovering.current ? 0.3 : 1
        ring.style.transform = `translate(${ringPos.current.x}px,${ringPos.current.y}px) scale(${ringScale})`
        dot.firstChild.style.transform = `scale(${dotScale})`
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      document.documentElement.style.cursor = ''
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('mouseup',   onUp)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout',  onOut)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      {/* Dot */}
      <div ref={dotRef} style={{ position:'fixed', top:0, left:0, zIndex:99999, pointerEvents:'none', willChange:'transform' }}>
        <div style={{
          width: 8, height: 8,
          backgroundColor: '#B91C1C',
          borderRadius: '50%',
          marginLeft: -4, marginTop: -4,
          transition: 'transform 0.12s cubic-bezier(0.16,1,0.3,1)',
          boxShadow: '0 0 8px #B91C1C, 0 0 20px rgba(185,28,28,0.5)',
        }} />
      </div>

      {/* Ring */}
      <div ref={ringRef} style={{ position:'fixed', top:0, left:0, zIndex:99998, pointerEvents:'none', willChange:'transform', transition:'transform 0.3s cubic-bezier(0.16,1,0.3,1)' }}>
        <div style={{
          width: 38, height: 38,
          border: '1.5px solid rgba(185,28,28,0.75)',
          borderRadius: '50%',
          marginLeft: -19, marginTop: -19,
          transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1), border-color 0.2s',
          boxShadow: 'inset 0 0 8px rgba(185,28,28,0.1)',
        }} />
      </div>

      <style>{`
        *, a, button { cursor: none !important; }
        @media (hover: none) { html { cursor: auto !important; } * { cursor: auto !important; } }
      `}</style>
    </>
  )
}
