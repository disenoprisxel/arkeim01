import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ARCH1 = '/arch1.png'
const ARCH2 = '/arch2.png'

const values = [
  {
    title: 'Criterio Técnico',
    desc: 'Aplicamos rigor estructural y normativo en cada fase del proyecto, garantizando seguridad y durabilidad.',
  },
  {
    title: 'Visión Integral',
    desc: 'Entendemos el diseño, la construcción y la visualización como un proceso continuo y coherente.',
  },
  {
    title: 'Compromiso',
    desc: 'Acompañamos al cliente desde la primera idea hasta la entrega final, con comunicación transparente.',
  },
]

const team = [
  {
    name: 'Andrés Molina',
    role: 'Director Creativo',
    desc: 'Arquitecto con 12 años de experiencia en proyectos residenciales y comerciales de alta complejidad.',
  },
  {
    name: 'Laura Vélez',
    role: 'Directora de Construcción',
    desc: 'Ingeniería civil y arquitectura, especialista en gestión de obra y control de calidad.',
  },
  {
    name: 'Felipe Castro',
    role: 'Visualización 3D',
    desc: 'Artista 3D y arquitecto especializado en renders fotorrealistas y animaciones de arquitectura.',
  },
]

export default function QuienesSomos() {
  return (
    <div style={{ backgroundColor: '#0A0A0A', minHeight: '100vh' }}>
      <Navbar />

      {/* ── HERO HEADER ── */}
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
        className="qs-header"
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
          Nosotros
        </span>
        <h1
          style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(48px, 6vw, 80px)',
            fontWeight: 700,
            color: '#fff',
            letterSpacing: -2,
            margin: 0,
            lineHeight: 1.05,
          }}
        >
          Quiénes Somos
        </h1>
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 20,
            color: 'rgba(255,255,255,0.5)',
            maxWidth: 600,
            lineHeight: 1.6,
          }}
        >
          Arquitectura comprometida con la excelencia y el respeto al entorno.
        </p>
      </section>

      {/* ── STUDIO SECTION ── */}
      <section
        style={{
          backgroundColor: '#F5F4F2',
          padding: '100px',
          display: 'flex',
          alignItems: 'center',
          gap: 80,
          flexWrap: 'wrap',
        }}
        className="studio-section"
      >
        <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: 32 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
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
              El Estudio
            </span>
            <h2
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 'clamp(32px, 3.5vw, 52px)',
                fontWeight: 700,
                color: '#0A0A0A',
                letterSpacing: -1.5,
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              Diseñamos,<br />construimos,<br />entregamos
            </h2>
          </div>
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 16,
              color: '#6B7280',
              lineHeight: 1.7,
            }}
          >
            Arkeím nace de la convicción de que la buena arquitectura transforma vidas. Fundado en 2017, hemos desarrollado proyectos residenciales, comerciales e institucionales en Colombia, siempre bajo un mismo compromiso: criterio, calidad y entrega.
          </p>
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 16,
              color: '#6B7280',
              lineHeight: 1.7,
            }}
          >
            Trabajamos con un equipo multidisciplinar que integra arquitectura, ingeniería y diseño visual en un proceso coherente de principio a fin.
          </p>
          <Link
            to="/contacto"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 14,
              fontWeight: 500,
              color: '#fff',
              textDecoration: 'none',
              backgroundColor: '#B91C1C',
              padding: '14px 32px',
              borderRadius: 2,
              alignSelf: 'flex-start',
            }}
          >
            Hablar con el equipo
          </Link>
        </div>

        <div style={{ flex: '1 1 400px', position: 'relative', minHeight: 500 }}>
          <img
            src={ARCH2}
            alt="Estudio Arkeím"
            style={{
              width: '100%',
              height: 520,
              objectFit: 'cover',
              borderRadius: 4,
            }}
          />
        </div>
      </section>

      {/* ── VALUES ── */}
      <section
        style={{
          backgroundColor: '#F5F4F2',
          padding: '0 100px 100px',
          display: 'flex',
          flexDirection: 'column',
          gap: 56,
        }}
        className="values-section"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
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
            Valores
          </span>
          <h2
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(28px, 3vw, 40px)',
              fontWeight: 700,
              color: '#0A0A0A',
              letterSpacing: -1,
              margin: 0,
            }}
          >
            Valores que nos definen
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 24,
          }}
        >
          {values.map(v => (
            <div
              key={v.title}
              style={{
                backgroundColor: '#fff',
                borderRadius: 4,
                padding: '40px 36px',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                borderTop: '3px solid #B91C1C',
              }}
            >
              <h3
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: 20,
                  fontWeight: 700,
                  color: '#0A0A0A',
                  margin: 0,
                }}
              >
                {v.title}
              </h3>
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 14,
                  color: '#6B7280',
                  lineHeight: 1.6,
                }}
              >
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── STATS ── */}
      <section
        style={{
          background: 'linear-gradient(180deg, #F5F4F2 0%, #E8E6E1 100%)',
          padding: '60px 100px',
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          gap: 40,
        }}
        className="qs-stats"
      >
        {[
          { val: '8+', label: 'Años de experiencia' },
          { val: '120+', label: 'Proyectos entregados' },
          { val: '100%', label: 'Clientes satisfechos' },
        ].map(({ val, label }) => (
          <div key={label} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 56,
                fontWeight: 700,
                color: '#0A0A0A',
                letterSpacing: -2,
              }}
            >
              {val}
            </span>
            <span
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 13,
                color: '#6B7280',
                textTransform: 'uppercase',
                letterSpacing: 2,
              }}
            >
              {label}
            </span>
          </div>
        ))}
      </section>

      {/* ── TEAM ── */}
      <section
        style={{
          backgroundColor: '#F5F4F2',
          padding: '100px',
          display: 'flex',
          flexDirection: 'column',
          gap: 56,
        }}
        className="team-section"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
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
            Equipo
          </span>
          <h2
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(28px, 3vw, 40px)',
              fontWeight: 700,
              color: '#0A0A0A',
              letterSpacing: -1,
              margin: 0,
            }}
          >
            Las personas detrás de Arkeím
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
          }}
        >
          {team.map(t => (
            <div
              key={t.name}
              style={{
                backgroundColor: '#fff',
                borderRadius: 4,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  height: 220,
                  backgroundColor: '#E8E6E1',
                  backgroundImage: `url(${ARCH2})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div style={{ padding: '28px 32px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                <h3
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontSize: 20,
                    fontWeight: 700,
                    color: '#0A0A0A',
                    margin: 0,
                  }}
                >
                  {t.name}
                </h3>
                <span
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: 12,
                    fontWeight: 500,
                    color: '#B91C1C',
                    letterSpacing: 2,
                    textTransform: 'uppercase',
                  }}
                >
                  {t.role}
                </span>
                <p
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: 14,
                    color: '#6B7280',
                    lineHeight: 1.6,
                    marginTop: 4,
                  }}
                >
                  {t.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: '140px 100px 120px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 28,
        }}
        className="qs-cta"
      >
        <img
          src={ARCH2}
          alt=""
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(245,244,242,0.95) 0%, rgba(245,244,242,0.75) 20%, rgba(58,58,58,0.6) 55%, rgba(10,10,10,0.93) 80%, #0A0A0A 100%)',
          }}
        />
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 600 }}>
          <h2
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(32px, 4vw, 56px)',
              fontWeight: 700,
              color: '#fff',
              letterSpacing: -1.5,
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            ¿Listo para construir con Arkeím?
          </h2>
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 18,
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.6,
            }}
          >
            Cuéntanos sobre tu proyecto y respondemos en menos de 24 horas.
          </p>
          <Link
            to="/contacto"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 14,
              fontWeight: 500,
              color: '#fff',
              textDecoration: 'none',
              backgroundColor: '#B91C1C',
              padding: '14px 36px',
              borderRadius: 2,
              alignSelf: 'flex-start',
            }}
          >
            Iniciar proyecto
          </Link>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .qs-header { padding: 120px 24px 60px !important; }
          .studio-section { padding: 60px 24px !important; flex-direction: column !important; }
          .values-section { padding: 0 24px 60px !important; }
          .qs-stats { padding: 40px 24px !important; }
          .team-section { padding: 60px 24px !important; }
          .qs-cta { padding: 80px 24px 60px !important; }
        }
      `}</style>
    </div>
  )
}
