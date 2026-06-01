import { useEffect, useRef } from 'react'

export default function RevealText({ children, tag = 'h2', delay = 0, style, className }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const words = el.textContent.trim().split(/\s+/)

    el.innerHTML = words
      .map(
        (w, i) =>
          `<span style="display:inline-block;overflow:hidden;line-height:1.15;vertical-align:bottom">\
<span class="rw" style="display:inline-block;transform:translateY(105%);opacity:0;\
transition:transform 0.75s cubic-bezier(0.16,1,0.3,1) ${(delay + i * 0.06).toFixed(2)}s,\
opacity 0.5s ease ${(delay + i * 0.06).toFixed(2)}s">${w}</span>\
</span>${i < words.length - 1 ? ' ' : ''}`
      )
      .join('')

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        el.querySelectorAll('.rw').forEach(s => {
          s.style.transform = 'translateY(0)'
          s.style.opacity = '1'
        })
        obs.disconnect()
      },
      { threshold: 0.15 }
    )
    obs.observe(el)

    return () => obs.disconnect()
  }, [delay])

  const Tag = tag
  return (
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  )
}
