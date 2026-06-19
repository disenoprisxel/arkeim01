import { useEffect, useCallback } from 'react'

export default function Lightbox({ images, index, onClose, onPrev, onNext }) {
  const handleKey = useCallback(e => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft') onPrev()
    if (e.key === 'ArrowRight') onNext()
  }, [onClose, onPrev, onNext])

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        backgroundColor: 'rgba(0,0,0,0.95)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >
      {/* Close */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute', top: 24, right: 28,
          background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)',
          fontSize: 32, cursor: 'pointer', lineHeight: 1, padding: 4,
          transition: 'color 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.color = '#fff'}
        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
      >
        ×
      </button>

      {/* Counter */}
      <div style={{
        position: 'absolute', top: 28, left: '50%', transform: 'translateX(-50%)',
        fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.4)',
        letterSpacing: 3,
      }}>
        {index + 1} / {images.length}
      </div>

      {/* Prev */}
      <button
        onClick={e => { e.stopPropagation(); onPrev() }}
        style={{
          position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)',
          background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)',
          color: '#fff', width: 52, height: 52, borderRadius: '50%',
          fontSize: 20, cursor: 'pointer', display: 'flex', alignItems: 'center',
          justifyContent: 'center', transition: 'background 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(185,28,28,0.7)'}
        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.07)'}
      >
        ‹
      </button>

      {/* Image */}
      <img
        src={images[index]}
        alt=""
        onClick={e => e.stopPropagation()}
        style={{
          maxWidth: '88vw', maxHeight: '88vh',
          objectFit: 'contain', borderRadius: 4,
          boxShadow: '0 32px 80px rgba(0,0,0,0.8)',
          userSelect: 'none',
        }}
      />

      {/* Next */}
      <button
        onClick={e => { e.stopPropagation(); onNext() }}
        style={{
          position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)',
          background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)',
          color: '#fff', width: 52, height: 52, borderRadius: '50%',
          fontSize: 20, cursor: 'pointer', display: 'flex', alignItems: 'center',
          justifyContent: 'center', transition: 'background 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(185,28,28,0.7)'}
        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.07)'}
      >
        ›
      </button>

      {/* Thumbnails */}
      <div style={{
        position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', gap: 8, maxWidth: '90vw', overflowX: 'auto', padding: '4px 8px',
      }}>
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            onClick={e => { e.stopPropagation(); onClose(); setTimeout(() => {}, 0) }}
            style={{
              width: 56, height: 40, objectFit: 'cover', borderRadius: 3,
              cursor: 'pointer', flexShrink: 0,
              opacity: i === index ? 1 : 0.4,
              border: i === index ? '2px solid #B91C1C' : '2px solid transparent',
              transition: 'opacity 0.2s, border 0.2s',
            }}
          />
        ))}
      </div>
    </div>
  )
}
