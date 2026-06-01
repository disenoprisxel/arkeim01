import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RevealText from '../components/RevealText'
import RevealSection from '../components/RevealSection'

const ARCH2 = '/arch2.png'
const ARCH3 = '/arch3.png'
const ARCH4 = '/arch4.png'
const ARCH1 = '/arch1.png'

const services = [
  {
    num: '01', tag: 'DISEÑO', title: 'Diseño Arquitectónico',
    desc: 'Desarrollamos proyectos de arquitectura residencial, comercial e institucional con un enfoque que integra funcionalidad, estética y contexto urbano. Desde el anteproyecto hasta los planos de construcción, acompañamos cada etapa del proceso.',
    points: ['Anteproyecto y concepto', 'Planos arquitectónicos y técnicos', 'Diseño de interiores y exteriores', 'Coordinación con ingeniería'],
    img: ARCH2,
  },
  {
    num: '02', tag: 'BIM', title: 'BIM y Coordinación Técnica',
    desc: 'Modelamos y coordinamos todos los sistemas del proyecto bajo estándares BIM (Building Information Modeling), integrando arquitectura, estructura e instalaciones en un único modelo digital colaborativo que minimiza errores y optimiza la construcción.',
    points: ['Modelado BIM multidisciplinar', 'Detección y resolución de interferencias', 'Presupuestación y cuantificación', 'Gestión documental del proyecto'],
    img: ARCH1,
  },
  {
    num: '03', tag: 'VISUALIZACIÓN', title: 'Visualización Arquitectónica',
    desc: 'Creamos representaciones visuales de alta calidad que dan vida al proyecto antes de construirlo. Renders fotorrealistas, recorridos virtuales y animaciones que permiten comunicar, vender y aprobar proyectos con total claridad.',
    points: ['Renders exteriores e interiores', 'Recorridos y tours virtuales 360°', 'Animaciones y videos arquitectónicos', 'Imágenes para marketing inmobiliario'],
    img: ARCH4,
  },
  {
    num: '04', tag: 'LICENCIAS', title: 'Licencias de Construcción',
    desc: 'Gestionamos todos los trámites, permisos y documentación técnica requerida ante las entidades competentes para obtener las licencias de construcción, urbanismo y demás autorizaciones necesarias para ejecutar tu proyecto.',
    points: ['Radicación ante curaduría urbana', 'Gestión de licencias de construcción', 'Permisos de uso de suelo', 'Acompañamiento en visitas y revisiones'],
    img: ARCH3,
  },
  {
    num: '05', tag: 'CONSTRUCCIÓN', title: 'Construcción',
    desc: 'Ejecutamos la obra con equipos especializados, procesos controlados y materiales certificados. La construcción es el paso final de un proceso integral que garantiza fidelidad al diseño, cumplimiento de plazos y estándares de calidad.',
    points: ['Gestión integral de obra', 'Control de calidad en sitio', 'Proveeduría y logística', 'Informes periódicos al cliente'],
    img: ARCH3,
  },
]

export default function Servicios() {
  return (
    <div style={{ backgroundColor: '#0A0A0A', minHeight: '100vh' }}>
      <Navbar />

      {/* ── HEADER ── */}
      <section style={{ background: 'linear-gradient(180deg,#0A0A0A 0%,#141414 50%,#0A0A0A 100%)', padding: '160px 100px 80px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, textAlign: 'center' }} className="srv-header">
        <RevealSection delay={0}>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 500, color: '#B91C1C', letterSpacing: 6, textTransform: 'uppercase' }}>Servicios</span>
        </RevealSection>
        <RevealText tag="h1" delay={0.15} style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(48px, 6vw, 72px)', fontWeight: 700, color: '#fff', letterSpacing: -2, margin: 0, lineHeight: 1.05 }}>
          Lo que hacemos
        </RevealText>
        <RevealSection delay={0.35}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 20, color: 'rgba(255,255,255,0.5)', maxWidth: 600, lineHeight: 1.6 }}>
            Un proceso integral desde el concepto hasta la entrega final.
          </p>
        </RevealSection>
      </section>

      {/* ── SERVICE BLOCKS ── */}
      {services.map((s, i) => (
        <section key={s.num} style={{ backgroundColor: '#0A0A0A', padding: '0 100px', display: 'flex', alignItems: 'center', gap: 0, minHeight: 800, flexDirection: i % 2 === 0 ? 'row' : 'row-reverse' }} className="srv-block">

          {/* Text side */}
          <div style={{ flex: '0 0 620px', display: 'flex', flexDirection: 'column', gap: 28, padding: '80px 0', paddingRight: i % 2 === 0 ? 64 : 0, paddingLeft: i % 2 !== 0 ? 64 : 0 }} className="srv-text">

            <RevealSection delay={0} direction={i % 2 === 0 ? 'left' : 'right'}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 500, color: '#B91C1C', letterSpacing: 6 }}>{s.tag}</span>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 20 }}>
                  <span style={{ fontFamily: 'Syne, sans-serif', fontSize: 72, fontWeight: 800, color: 'rgba(255,255,255,0.04)', letterSpacing: -4, lineHeight: 1 }}>{s.num}</span>
                  <RevealText tag="h2" delay={0.1} style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(26px, 2.8vw, 40px)', fontWeight: 700, color: '#fff', letterSpacing: -1, margin: 0, lineHeight: 1.15 }}>
                    {s.title}
                  </RevealText>
                </div>
              </div>
            </RevealSection>

            <RevealSection delay={0.2} direction={i % 2 === 0 ? 'left' : 'right'}>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>{s.desc}</p>
            </RevealSection>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {s.points.map((pt, j) => (
                <RevealSection key={pt} delay={0.3 + j * 0.07} direction={i % 2 === 0 ? 'left' : 'right'}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 6, height: 6, backgroundColor: '#B91C1C', borderRadius: 1, flexShrink: 0 }} />
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>{pt}</span>
                  </div>
                </RevealSection>
              ))}
            </div>

            <RevealSection delay={0.6} direction={i % 2 === 0 ? 'left' : 'right'}>
              <Link to="/contacto" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: 500, color: '#fff', textDecoration: 'none', backgroundColor: '#B91C1C', padding: '12px 28px', borderRadius: 2, alignSelf: 'flex-start', display: 'inline-block' }}>
                Solicitar información →
              </Link>
            </RevealSection>
          </div>

          {/* Image side */}
          <RevealSection delay={0.15} direction={i % 2 === 0 ? 'right' : 'left'} style={{ flex: 1, alignSelf: 'stretch', overflow: 'hidden', borderRadius: 12, margin: '60px 0' }}>
            <img src={s.img} alt={s.title} data-parallax="0.15" style={{ width: '100%', height: '120%', objectFit: 'cover', marginTop: '-10%' }} />
          </RevealSection>
        </section>
      ))}

      {/* ── CTA ── */}
      <section style={{ background: 'linear-gradient(180deg,#0A0A0A 0%,#141414 50%,#0A0A0A 100%)', padding: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28 }} className="srv-cta">
        <RevealText tag="h2" delay={0} style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 700, color: '#fff', letterSpacing: -1, textAlign: 'center', margin: 0 }}>
          ¿Necesitas alguno de estos servicios?
        </RevealText>
        <RevealSection delay={0.2}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 18, color: 'rgba(255,255,255,0.5)', textAlign: 'center', maxWidth: 500 }}>
            Conversemos sobre cómo podemos hacer realidad tu proyecto.
          </p>
        </RevealSection>
        <RevealSection delay={0.35}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/contacto" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 500, color: '#fff', textDecoration: 'none', backgroundColor: '#B91C1C', padding: '14px 40px', borderRadius: 2 }}>Iniciar conversación</Link>
            <Link to="/proyectos" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 500, color: '#fff', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.12)', padding: '14px 40px', borderRadius: 2 }}>Ver proyectos</Link>
          </div>
        </RevealSection>
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
