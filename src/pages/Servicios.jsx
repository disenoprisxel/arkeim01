import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ARCH2 = '/arch2.png'
const ARCH3 = '/arch3.png'
const ARCH4 = '/arch4.png'

const services = [
  {
    num: '01',
    tag: 'DISEÑO',
    title: 'Diseño Arquitectónico',
    desc: 'Desarrollamos proyectos de arquitectura residencial, comercial e institucional con un enfoque que integra funcionalidad, estética y contexto urbano. Desde el anteproyecto hasta los planos de construcción, acompañamos cada etapa del proceso.',
    points: [
      'Anteproyecto y concepto',
      'Planos arquitectónicos y técnicos',
      'Gestión de permisos y licencias',
      'Coordinación con ingeniería',
    ],
    img: ARCH2,
  },
  {
    num: '02',
    tag: 'CONSTRUCCIÓN',
    title: 'Construcción de Proyectos',
    desc: 'Ejecutamos obras con equipos especializados, procesos controlados y materiales certificados. Nuestra metodología garantiza cumplimiento de plazos, presupuestos y estándares de calidad en cada proyecto que entregamos.',
    points: [
      'Gestión integral de obra',
      'Control de calidad en sitio',
      'Proveeduría y logística',
      'Informes periódicos al cliente',
    ],
    img: ARCH3,
  },
  {
    num: '03',
    tag: 'VISUALIZACIÓN',
    title: 'Renders y Videos 3D',
    desc: 'Creamos representaciones fotorrealistas de proyectos arquitectónicos para comunicar ideas con precisión y detalle. Nuestras visualizaciones son herramientas clave para aprobaciones, ventas y presentaciones.',
    points: [
      'Renders exteriores e interiores',
      'Animaciones y recorridos virtuales',
      'Imágenes para marketing inmobiliario',
      'Presentaciones para inversionistas',
    ],
    img: ARCH4,
  },
]

export default function Servicios() {
  return (
    <div style={{ backgroundColor: '#0A0A0A', minHeight: '100vh' }}>
      <Navbar />

      {/* ── HEADER ── */}
      <section
        style={{
          background: 'linear-gradient(180deg, #0A0A0A 0%, #141414 50%, #0A0A0A 100%)',
          padding: '160px 100px 80px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 16,
          textAlign: 'center',
        }}
        className="srv-header"
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
          Servicios
        </span>
        <h1
          style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(48px, 6vw, 72px)',
            fontWeight: 700,
            color: '#fff',
            letterSpacing: -2,
            margin: 0,
            lineHeight: 1.05,
          }}
        >
          Lo que hacemos
        </h1>
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 20,
            color: 'rgba(255,255,255,0.5)',
            maxWidth: 560,
            lineHeight: 1.6,
          }}
        >
          Arquitectura, construcción y visualización en un proceso integral.
        </p>
      </section>

      {/* ── SERVICE BLOCKS ── */}
      {services.map((s, i) => (
        <section
          key={s.num}
          style={{
            backgroundColor: '#0A0A0A',
            padding: '0 100px',
            display: 'flex',
            alignItems: 'center',
            gap: 0,
            minHeight: 900,
            flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
          }}
          className="srv-block"
        >
          {/* Text side */}
          <div
            style={{
              flex: '0 0 640px',
              display: 'flex',
              flexDirection: 'column',
              gap: 32,
              padding: '80px 0',
              paddingRight: i % 2 === 0 ? 64 : 0,
              paddingLeft: i % 2 !== 0 ? 64 : 0,
            }}
            className="srv-text"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <span
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 11,
                  fontWeight: 500,
                  color: '#B91C1C',
                  letterSpacing: 6,
                }}
              >
                {s.tag}
              </span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 20 }}>
                <span
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontSize: 80,
                    fontWeight: 800,
                    color: 'rgba(255,255,255,0.04)',
                    letterSpacing: -4,
                    lineHeight: 1,
                  }}
                >
                  {s.num}
                </span>
                <h2
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontSize: 'clamp(28px, 3vw, 44px)',
                    fontWeight: 700,
                    color: '#fff',
                    letterSpacing: -1,
                    margin: 0,
                    lineHeight: 1.1,
                  }}
                >
                  {s.title}
                </h2>
              </div>
            </div>

            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 16,
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.7,
              }}
            >
              {s.desc}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {s.points.map(pt => (
                <div key={pt} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 6, height: 6, backgroundColor: '#B91C1C', borderRadius: 1, flexShrink: 0 }} />
                  <span
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: 14,
                      color: 'rgba(255,255,255,0.7)',
                    }}
                  >
                    {pt}
                  </span>
                </div>
              ))}
            </div>

            <Link
              to="/contacto"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 13,
                fontWeight: 500,
                color: '#fff',
                textDecoration: 'none',
                backgroundColor: '#B91C1C',
                padding: '12px 28px',
                borderRadius: 2,
                alignSelf: 'flex-start',
              }}
            >
              Solicitar información →
            </Link>
          </div>

          {/* Image side */}
          <div style={{ flex: 1, alignSelf: 'stretch', overflow: 'hidden', borderRadius: 12, margin: '60px 0' }}>
            <img
              src={s.img}
              alt={s.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </section>
      ))}

      {/* ── CTA ── */}
      <section
        style={{
          background: 'linear-gradient(180deg, #0A0A0A 0%, #141414 50%, #0A0A0A 100%)',
          padding: '100px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 28,
        }}
        className="srv-cta"
      >
        <h2
          style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(28px, 3.5vw, 44px)',
            fontWeight: 700,
            color: '#fff',
            letterSpacing: -1,
            textAlign: 'center',
            margin: 0,
          }}
        >
          ¿Necesitas alguno de estos servicios?
        </h2>
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 18,
            color: 'rgba(255,255,255,0.5)',
            textAlign: 'center',
            maxWidth: 500,
          }}
        >
          Conversemos sobre cómo podemos hacer realidad tu proyecto.
        </p>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link
            to="/contacto"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 14,
              fontWeight: 500,
              color: '#fff',
              textDecoration: 'none',
              backgroundColor: '#B91C1C',
              padding: '14px 40px',
              borderRadius: 2,
            }}
          >
            Iniciar conversación
          </Link>
          <Link
            to="/proyectos"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 14,
              fontWeight: 500,
              color: '#fff',
              textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.12)',
              padding: '14px 40px',
              borderRadius: 2,
            }}
          >
            Ver proyectos
          </Link>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .srv-header { padding: 120px 24px 60px !important; }
          .srv-block { flex-direction: column !important; padding: 0 24px !important; min-height: unset !important; }
          .srv-text { padding: 48px 0 0 !important; }
          .srv-cta { padding: 60px 24px !important; }
        }
      `}</style>
    </div>
  )
}
