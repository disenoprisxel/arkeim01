import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ARCH3 = '/arch3.png'
const ARCH1 = '/arch1.png'

const infoItems = [
  { icon: '📍', label: 'Bogotá, Colombia', sub: 'Cra 15 #93-75, Of. 502' },
  { icon: '✉️', label: 'arkeim.sas@gmail.com', sub: 'Respondemos en 24h' },
  { icon: '📞', label: '+57 312 412 1866', sub: 'Lun – Vie · 8:00 – 18:00' },
]

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', tipo: '', descripcion: '' })
  const [sent, setSent] = useState(false)

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = e => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div style={{ backgroundColor: '#0A0A0A', minHeight: '100vh' }}>
      <Navbar />

      {/* ── HEADER ── */}
      <section
        style={{
          background: 'linear-gradient(180deg, #0A0A0A 0%, #141414 50%, #0A0A0A 100%)',
          padding: '160px 100px 60px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 16,
          textAlign: 'center',
        }}
        className="cnt-header"
      >
        <span
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 11,
            fontWeight: 500,
            color: '#B91C1C',
            letterSpacing: 6,
            textTransform: 'uppercase',
          }}
        >
          Contacto
        </span>
        <h1
          style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(40px, 5vw, 68px)',
            fontWeight: 700,
            color: '#fff',
            letterSpacing: -2,
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          Evaluemos<br />tu proyecto
        </h1>
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 18,
            color: 'rgba(255,255,255,0.5)',
            maxWidth: 500,
            lineHeight: 1.6,
          }}
        >
          Cuéntanos sobre tu idea y te respondemos en menos de 24 horas.
        </p>
      </section>

      {/* ── CONTACT BODY ── */}
      <section
        style={{
          backgroundColor: '#F5F4F2',
          padding: '80px 100px 100px',
          display: 'flex',
          gap: 100,
          flexWrap: 'wrap',
          alignItems: 'flex-start',
        }}
        className="cnt-body"
      >
        {/* Left: info */}
        <div style={{ flex: '0 0 320px', display: 'flex', flexDirection: 'column', gap: 40 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <span
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 11,
                fontWeight: 500,
                color: '#B91C1C',
                letterSpacing: 4,
                textTransform: 'uppercase',
              }}
            >
              Información
            </span>
            <h2
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 28,
                fontWeight: 700,
                color: '#0A0A0A',
                margin: 0,
                letterSpacing: -0.5,
              }}
            >
              Estamos aquí para ayudarte
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {infoItems.map(i => (
              <div key={i.label} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <span style={{ fontSize: 20, marginTop: 2 }}>{i.icon}</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <span
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: 15,
                      fontWeight: 500,
                      color: '#0A0A0A',
                    }}
                  >
                    {i.label}
                  </span>
                  <span
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: 13,
                      color: '#9CA3AF',
                    }}
                  >
                    {i.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Social */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <span
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 11,
                fontWeight: 500,
                color: '#B91C1C',
                letterSpacing: 4,
                textTransform: 'uppercase',
              }}
            >
              Redes sociales
            </span>
            <div style={{ display: 'flex', gap: 16 }}>
              {['Instagram', 'LinkedIn', 'Behance'].map(s => (
                <a
                  key={s}
                  href="#"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: 13,
                    color: '#6B7280',
                    textDecoration: 'none',
                  }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div style={{ flex: '1 1 400px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
            <span
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 11,
                fontWeight: 500,
                color: '#B91C1C',
                letterSpacing: 4,
                textTransform: 'uppercase',
              }}
            >
              Escríbenos
            </span>
            <h2
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 28,
                fontWeight: 700,
                color: '#0A0A0A',
                margin: 0,
                letterSpacing: -0.5,
              }}
            >
              Cuéntanos tu proyecto
            </h2>
          </div>

          {sent ? (
            <div
              style={{
                backgroundColor: '#fff',
                border: '1px solid #E5E7EB',
                borderRadius: 4,
                padding: '48px 40px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  backgroundColor: 'rgba(185,28,28,0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 24,
                }}
              >
                ✓
              </div>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 22, fontWeight: 700, color: '#0A0A0A', margin: 0 }}>
                ¡Mensaje enviado!
              </h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, color: '#6B7280', lineHeight: 1.6 }}>
                Gracias por contactarnos. Te responderemos en menos de 24 horas.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="form-row">
                <FormField label="Nombre completo" name="nombre" value={form.nombre} onChange={handle} placeholder="Tu nombre" required />
                <FormField label="Email" name="email" type="email" value={form.email} onChange={handle} placeholder="tu@email.com" required />
              </div>
              <div>
                <label style={labelStyle}>Tipo de proyecto</label>
                <select
                  name="tipo"
                  value={form.tipo}
                  onChange={handle}
                  required
                  style={{ ...inputStyle, color: form.tipo ? '#0A0A0A' : '#9CA3AF' }}
                >
                  <option value="" disabled>Selecciona una opción</option>
                  <option value="residencial">Residencial</option>
                  <option value="comercial">Comercial</option>
                  <option value="institucional">Institucional</option>
                  <option value="render">Render / Visualización 3D</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Descripción del proyecto</label>
                <textarea
                  name="descripcion"
                  value={form.descripcion}
                  onChange={handle}
                  placeholder="Cuéntanos sobre tu proyecto: ubicación, área, presupuesto estimado, plazo..."
                  rows={5}
                  style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                />
              </div>
              <button
                type="submit"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 14,
                  fontWeight: 500,
                  color: '#fff',
                  backgroundColor: '#B91C1C',
                  border: 'none',
                  padding: '14px 32px',
                  borderRadius: 2,
                  cursor: 'pointer',
                  alignSelf: 'flex-start',
                }}
              >
                Enviar mensaje →
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── MAP PLACEHOLDER ── */}
      <section
        style={{
          position: 'relative',
          height: 300,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={ARCH3}
          alt=""
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }}
        />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(245,244,242,0.85)' }} />
        <div style={{ position: 'relative', textAlign: 'center' }}>
          <span style={{ fontSize: 32 }}>📍</span>
          <p
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 18,
              fontWeight: 700,
              color: '#0A0A0A',
              margin: '8px 0 4px',
            }}
          >
            Bogotá, Colombia
          </p>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#6B7280' }}>
            Cra 15 #93-75, Of. 502 · Chicó Nogal
          </p>
        </div>
      </section>

      {/* ── PHONE CTA ── */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: '100px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 16,
          minHeight: 300,
        }}
        className="phone-cta"
      >
        <img
          src={ARCH1}
          alt=""
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(245,244,242,0.9) 0%, rgba(245,244,242,0.6) 15%, rgba(26,26,26,0.7) 45%, rgba(10,10,10,0.93) 75%, #0A0A0A 100%)',
          }}
        />
        <p style={{ position: 'relative', fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.5)', letterSpacing: 3, textTransform: 'uppercase' }}>
          También puedes llamarnos
        </p>
        <a
          href="tel:+573124121866"
          style={{
            position: 'relative',
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 700,
            color: '#fff',
            textDecoration: 'none',
            letterSpacing: -1,
          }}
        >
          +57 312 412 1866
        </a>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .cnt-header { padding: 120px 24px 48px !important; }
          .cnt-body { padding: 48px 24px 60px !important; flex-direction: column !important; gap: 48px !important; }
          .form-row { grid-template-columns: 1fr !important; }
          .phone-cta { padding: 60px 24px !important; }
        }
      `}</style>
    </div>
  )
}

const labelStyle = {
  display: 'block',
  fontFamily: 'DM Sans, sans-serif',
  fontSize: 12,
  fontWeight: 500,
  color: '#6B7280',
  marginBottom: 6,
  textTransform: 'uppercase',
  letterSpacing: 1,
}

const inputStyle = {
  width: '100%',
  fontFamily: 'DM Sans, sans-serif',
  fontSize: 15,
  color: '#0A0A0A',
  backgroundColor: '#fff',
  border: '1px solid #E5E7EB',
  borderRadius: 4,
  padding: '12px 16px',
  outline: 'none',
  boxSizing: 'border-box',
}

function FormField({ label, name, type = 'text', value, onChange, placeholder, required }) {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        style={inputStyle}
      />
    </div>
  )
}
