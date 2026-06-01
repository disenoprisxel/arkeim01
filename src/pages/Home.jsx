import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RevealText from '../components/RevealText'
import RevealSection from '../components/RevealSection'

const HERO = '/hero.png'
const ARCH1 = '/arch1.png'
const ARCH2 = '/arch2.png'
const ARCH3 = '/arch3.png'
const ARCH4 = '/arch4.png'

const services = [
  { num: '01', title: 'Diseño Arquitectónico', desc: 'Proyectos residenciales, comerciales e institucionales con enfoque en funcionalidad, estética y contexto urbano.' },
  { num: '02', title: 'Renders y Videos 3D', desc: 'Visualización fotorrealista que permite ver y comunicar el proyecto antes de construirlo.' },
  { num: '03', title: 'Construcción', desc: 'Gestión integral de obra con equipos especializados, cumplimiento de normas y control riguroso de calidad.' },
]

const projects = [
  { title: 'Casa Montes', cat: 'Residencial', img: ARCH2 },
  { title: 'Edificio Zar Pro', cat: 'Comercial', img: ARCH3 },
  { title: 'Centro Cultural Llana', cat: 'Institucional', img: ARCH4 },
  { title: 'Loft Chapinero', cat: 'Residencial', img: ARCH1 },
]

const process = [
  { n: '01', title: 'Briefing', desc: 'Escuchamos tus necesidades y definimos los objetivos del proyecto.' },
  { n: '02', title: 'Diseño', desc: 'Desarrollamos propuestas creativas alineadas con el contexto y el programa.' },
  { n: '03', title: 'Construcción', desc: 'Ejecutamos la obra con precisión, supervisando cada etapa del proceso.' },
  { n: '04', title: 'Entrega', desc: 'Finalizamos con atención al detalle y acompañamiento post-entrega.' },
]

const whyPoints = [
  {
    title: 'Enfoque Integral',
    desc: 'Desde el concepto hasta la llave en mano, manejamos todo el proceso.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B91C1C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>
        <line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/>
        <line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/>
      </svg>
    ),
  },
  {
    title: 'Equipo Experto',
    desc: 'Arquitectos, ingenieros y constructores trabajando en conjunto.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B91C1C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    title: 'Transparencia Total',
    desc: 'Comunicación constante y presupuestos claros sin sorpresas.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B91C1C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
  },
  {
    title: 'Resultados Duraderos',
    desc: 'Materiales de calidad y detalle constructivo que perdura en el tiempo.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B91C1C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
]

export default function Home() {
  return (
    <div style={{ backgroundColor: '#0A0A0A', minHeight: '100vh' }}>
      <Navbar />

      {/* ── 01 HERO ── */}
      <section style={{ position: 'relative', height: '100vh', minHeight: 700, overflow: 'hidden' }}>
        {/* Parallax background */}
        <img
          src={HERO}
          alt="Arkeím hero"
          data-parallax="0.25"
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '115%',
            objectFit: 'cover', top: '-7.5%',
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.88) 100%)' }} />

        {/* Watermark — parallax slow layer */}
        <div
          data-parallax="0.08"
          style={{
            position: 'absolute', top: 200, left: 550,
            fontFamily: 'Syne, sans-serif', fontSize: 280, fontWeight: 800,
            color: 'rgba(255,255,255,0.03)', letterSpacing: -8,
            pointerEvents: 'none', userSelect: 'none',
          }}
        >
          ARKEÍM
        </div>

        {/* Content — faster layer */}
        <div
          data-parallax="-0.08"
          style={{ position: 'absolute', bottom: 120, left: 100, right: 100, display: 'flex', flexDirection: 'column', gap: 28 }}
          className="hero-content"
        >
          <RevealSection delay={0.1}>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 500, color: '#B91C1C', letterSpacing: 6, textTransform: 'uppercase' }}>
              Arquitectura · Construcción · Diseño
            </span>
          </RevealSection>

          <RevealText
            tag="h1"
            delay={0.2}
            style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(52px, 6vw, 88px)', fontWeight: 700, color: '#fff', letterSpacing: -2, lineHeight: 1.05, maxWidth: 760, margin: 0 }}
          >
            Arquitectura con criterio
          </RevealText>

          <RevealSection delay={0.5}>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 18, color: 'rgba(255,255,255,0.6)', maxWidth: 500, lineHeight: 1.6 }}>
              Entendemos la arquitectura como un proceso integral donde cada decisión construye el resultado final.
            </p>
          </RevealSection>

          <RevealSection delay={0.65}>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link to="/proyectos" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 500, color: '#fff', textDecoration: 'none', backgroundColor: '#B91C1C', padding: '14px 36px', borderRadius: 2 }}>
                Ver Proyectos
              </Link>
              <Link to="/contacto" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 500, color: '#fff', textDecoration: 'none', backgroundColor: 'transparent', border: '1px solid rgba(255,255,255,0.25)', padding: '14px 36px', borderRadius: 2 }}>
                Conversemos
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── 02 MANIFESTO ── */}
      <section
        style={{ background: 'linear-gradient(180deg,#0D0D0D 0%,#0D0D0D 85%,#0A0A0A 100%)', padding: '140px 100px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 100, minHeight: 900, justifyContent: 'center' }}
        className="manifesto-section"
      >
        <div style={{ maxWidth: 920, display: 'flex', flexDirection: 'column', gap: 48, alignItems: 'center' }}>
          <RevealSection delay={0}>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 500, color: '#B91C1C', letterSpacing: 6, textTransform: 'uppercase' }}>
              Lo que hacemos
            </span>
          </RevealSection>

          <RevealText
            tag="h2"
            delay={0.1}
            style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 700, color: '#fff', letterSpacing: -1.5, lineHeight: 1.15, textAlign: 'center', margin: 0 }}
          >
            Diseñamos espacios que responden a las personas y al entorno
          </RevealText>

          <RevealSection delay={0.2}>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 18, color: 'rgba(255,255,255,0.5)', textAlign: 'center', lineHeight: 1.7, maxWidth: 700 }}>
              Cada proyecto es una oportunidad para crear algo significativo. Combinamos rigor técnico, sensibilidad estética y comprensión profunda del cliente.
            </p>
          </RevealSection>
        </div>

        {/* Stats */}
        <div style={{ maxWidth: 920, width: '100%', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 40 }} className="stats-row">
          {[
            { val: '8+', label: 'Años de experiencia' },
            { val: '120+', label: 'Proyectos entregados' },
            { val: '100%', label: 'Clientes satisfechos' },
            { val: '3', label: 'Premios nacionales' },
          ].map(({ val, label }, i) => (
            <RevealSection key={label} delay={i * 0.1} direction="up">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
                <span style={{ fontFamily: 'Syne, sans-serif', fontSize: 48, fontWeight: 700, color: '#fff', letterSpacing: -1 }}>{val}</span>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: 2 }}>{label}</span>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* ── 03 SERVICES ── */}
      <section style={{ backgroundColor: '#0A0A0A', padding: '100px', display: 'flex', flexDirection: 'column', gap: 56 }} className="services-section">
        <RevealSection delay={0}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 500, color: '#B91C1C', letterSpacing: 6, textTransform: 'uppercase' }}>Servicios</span>
            <RevealText tag="h2" delay={0.1} style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 700, color: '#fff', letterSpacing: -1, margin: 0 }}>
              Lo que ofrecemos
            </RevealText>
          </div>
        </RevealSection>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {services.map((s, i) => (
            <RevealSection key={s.num} delay={i * 0.1}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 48, padding: '40px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', borderTop: i === 0 ? '1px solid rgba(255,255,255,0.06)' : 'none' }} className="service-row">
                <span style={{ fontFamily: 'Syne, sans-serif', fontSize: 13, fontWeight: 700, color: '#B91C1C', minWidth: 32 }}>{s.num}</span>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 28, fontWeight: 700, color: '#fff', letterSpacing: -0.5, margin: 0, flex: '0 0 300px' }}>{s.title}</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, flex: 1 }}>{s.desc}</p>
                <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 20 }}>→</span>
              </div>
            </RevealSection>
          ))}
        </div>

        <RevealSection delay={0.2}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to="/servicios" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 500, color: '#fff', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.12)', padding: '14px 40px', borderRadius: 2 }}>
              Ver todos los servicios
            </Link>
          </div>
        </RevealSection>
      </section>

      {/* ── 04 FEATURED PROJECTS ── */}
      <section style={{ background: 'linear-gradient(180deg,#0A0A0A 0%,#111 50%,#0A0A0A 100%)', padding: '120px 100px', display: 'flex', flexDirection: 'column', gap: 56 }} className="projects-section">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
          <RevealSection delay={0}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 500, color: '#B91C1C', letterSpacing: 6, textTransform: 'uppercase' }}>Portafolio</span>
              <RevealText tag="h2" delay={0.1} style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 700, color: '#fff', letterSpacing: -1, margin: 0 }}>
                Proyectos destacados
              </RevealText>
            </div>
          </RevealSection>
          <Link to="/proyectos" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Ver todos →</Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {projects.map((p, i) => (
            <RevealSection key={p.title} delay={i * 0.1} direction="up">
              <Link to="/proyectos/casa-montes" style={{ textDecoration: 'none', display: 'block', position: 'relative', borderRadius: 4, overflow: 'hidden' }}>
                <div style={{ position: 'relative', paddingTop: '70%', overflow: 'hidden' }}>
                  <img
                    src={p.img}
                    alt={p.title}
                    data-parallax="0.12"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '115%', objectFit: 'cover', top: '-7.5%', transition: 'transform 0.6s ease' }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.85) 100%)' }} />
                  <div style={{ position: 'absolute', bottom: 20, left: 20, right: 20 }}>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: '#B91C1C', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 4 }}>{p.cat}</p>
                    <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 20, fontWeight: 700, color: '#fff', letterSpacing: -0.3, margin: 0 }}>{p.title}</h3>
                  </div>
                </div>
              </Link>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* ── 05 PROCESS ── */}
      <section style={{ backgroundColor: '#F5F4F2', padding: '120px 100px', display: 'flex', flexDirection: 'column', gap: 64 }} className="process-section">
        <RevealSection delay={0}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 500, color: '#B91C1C', letterSpacing: 6, textTransform: 'uppercase' }}>Proceso</span>
            <RevealText tag="h2" delay={0.1} style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 700, color: '#0A0A0A', letterSpacing: -1, margin: 0 }}>
              Cómo trabajamos
            </RevealText>
          </div>
        </RevealSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
          {process.map((p, i) => (
            <RevealSection key={p.n} delay={i * 0.12} direction="up">
              <div style={{ backgroundColor: '#fff', borderRadius: 4, padding: 36, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <span style={{
                  fontFamily: 'Syne, sans-serif', fontSize: 72, fontWeight: 800,
                  color: 'rgba(185,28,28,0.12)', letterSpacing: -4, lineHeight: 1,
                  marginBottom: -8,
                }}>
                  {p.n}
                </span>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 22, fontWeight: 700, color: '#0A0A0A', margin: 0, letterSpacing: -0.3 }}>{p.title}</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#6B7280', lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* ── 06 IMAGE BREAK / QUOTE ── */}
      <section style={{ position: 'relative', height: 500, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 20, padding: '0 40px' }}>
        <img src={ARCH1} alt="" data-parallax="0.2" style={{ position: 'absolute', inset: 0, width: '100%', height: '130%', objectFit: 'cover', top: '-15%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(10,10,10,0.93) 0%, rgba(10,10,10,0.55) 50%, rgba(10,10,10,0.93) 100%)' }} />
        <RevealText
          tag="blockquote"
          delay={0.1}
          style={{ position: 'relative', fontFamily: 'Syne, sans-serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, color: '#fff', textAlign: 'center', letterSpacing: -0.5, lineHeight: 1.4, maxWidth: 800, margin: 0 }}
        >
          "La arquitectura es el juego sabio, correcto y magnífico de los volúmenes bajo la luz."
        </RevealText>
        <RevealSection delay={0.5}>
          <cite style={{ position: 'relative', fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.5)', fontStyle: 'italic' }}>
            — Le Corbusier
          </cite>
        </RevealSection>
      </section>

      {/* ── 07 WHY ARKEÍM ── */}
      <section style={{ backgroundColor: '#0A0A0A', padding: '120px 100px', display: 'flex', flexDirection: 'column', gap: 64 }} className="why-section">
        <RevealSection delay={0}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 500, color: '#B91C1C', letterSpacing: 6, textTransform: 'uppercase' }}>Por qué nosotros</span>
            <RevealText tag="h2" delay={0.1} style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 700, color: '#fff', letterSpacing: -1, margin: 0 }}>
              Lo que nos diferencia
            </RevealText>
          </div>
        </RevealSection>

        <RevealSection delay={0.15}>
          <div style={{ backgroundColor: '#1A1A1A', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '40px 48px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32 }} className="why-grid">
            {whyPoints.map((w, i) => (
              <RevealSection key={w.title} delay={i * 0.1} direction="up">
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <div style={{ width: 44, height: 44, backgroundColor: 'rgba(185,28,28,0.1)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(185,28,28,0.2)' }}>
                    {w.icon}
                  </div>
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 18, fontWeight: 700, color: '#fff', margin: 0 }}>{w.title}</h3>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{w.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </RevealSection>
      </section>

      {/* ── 08 CTA ── */}
      <section style={{ background: 'linear-gradient(180deg,#0A0A0A 0%,#141414 50%,#0A0A0A 100%)', padding: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28 }} className="cta-section">
        <RevealText tag="h2" delay={0} style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: '#fff', letterSpacing: -1, textAlign: 'center', margin: 0 }}>
          ¿Tienes un proyecto en mente?
        </RevealText>
        <RevealSection delay={0.2}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 18, color: 'rgba(255,255,255,0.5)', textAlign: 'center' }}>
            Conversemos sobre cómo podemos hacerlo realidad.
          </p>
        </RevealSection>
        <RevealSection delay={0.3}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/contacto" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 500, color: '#fff', textDecoration: 'none', backgroundColor: '#B91C1C', padding: '14px 40px', borderRadius: 2 }}>
              Iniciar proyecto
            </Link>
            <Link to="/proyectos" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 500, color: '#fff', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.12)', padding: '14px 40px', borderRadius: 2 }}>
              Ver portafolio
            </Link>
          </div>
        </RevealSection>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .hero-content { left: 24px !important; right: 24px !important; bottom: 80px !important; }
          .manifesto-section { padding: 80px 24px !important; }
          .services-section { padding: 60px 24px !important; }
          .projects-section { padding: 60px 24px !important; }
          .process-section { padding: 60px 24px !important; }
          .why-section { padding: 60px 24px !important; }
          .cta-section { padding: 60px 24px !important; }
          .stats-row { justify-content: center !important; }
          .service-row { flex-direction: column !important; gap: 12px !important; }
        }
      `}</style>
    </div>
  )
}
