const WA_NUMBER = '573124121866'
const WA_MESSAGE = encodeURIComponent('Hola Arkeím, me gustaría información sobre sus servicios.')

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      style={{
        position: 'fixed',
        bottom: 28,
        right: 28,
        zIndex: 9000,
        width: 56,
        height: 56,
        borderRadius: '50%',
        backgroundColor: '#25D366',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 20px rgba(37,211,102,0.45)',
        transition: 'transform 0.25s cubic-bezier(0.16,1,0.3,1), box-shadow 0.25s ease',
        textDecoration: 'none',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'scale(1.12)'
        e.currentTarget.style.boxShadow = '0 6px 28px rgba(37,211,102,0.65)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'scale(1)'
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.45)'
      }}
    >
      {/* WhatsApp SVG icon */}
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path
          d="M16 3C8.82 3 3 8.82 3 16c0 2.38.65 4.6 1.77 6.52L3 29l6.67-1.74A12.94 12.94 0 0016 29c7.18 0 13-5.82 13-13S23.18 3 16 3z"
          fill="white"
        />
        <path
          d="M22.5 19.6c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.63-.93-2.23-.25-.59-.5-.51-.68-.52h-.58c-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.46s1.06 2.85 1.2 3.05c.15.2 2.07 3.17 5.03 4.44.7.3 1.25.48 1.68.62.7.22 1.35.19 1.85.11.56-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"
          fill="#25D366"
        />
      </svg>

      {/* Ping animation */}
      <span style={{
        position: 'absolute', inset: 0, borderRadius: '50%',
        backgroundColor: '#25D366', opacity: 0.4,
        animation: 'wa-ping 2s ease-out infinite',
      }} />

      <style>{`
        @keyframes wa-ping {
          0%   { transform: scale(1); opacity: 0.4; }
          70%  { transform: scale(1.7); opacity: 0; }
          100% { transform: scale(1.7); opacity: 0; }
        }
      `}</style>
    </a>
  )
}
