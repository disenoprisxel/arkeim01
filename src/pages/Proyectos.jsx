import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RevealText from '../components/RevealText'
import RevealSection from '../components/RevealSection'

const ARCH1 = '/arch1.png'
const ARCH2 = '/arch2.png'
const ARCH3 = '/arch3.png'
const ARCH4 = '/arch4.png'

const projects = [
  { id: 'edificio-calle-53', title: 'Edificio We Live 53', cat: 'Comercial', year: '2025', location: 'Bogotá', img: ARCH3, desc: 'Edificio de uso mixto con oficinas y comercio en el corredor de la Calle 53. Incluye visor 3D interactivo.' },
  { id: 'casa-montes', title: 'Casa Montes', cat: 'Residencial', year: '2024', location: 'Bogotá', img: ARCH2, desc: 'Residencia unifamiliar en el norte de Bogotá con énfasis en la conexión interior-exterior y materiales naturales.' },
  { id: 'edificio-zar', title: 'Edificio Zar Pro', cat: 'Comercial', year: '2023', location: 'Medellín', img: ARCH3, desc: 'Torre de oficinas de 12 pisos con fachada ventilada y espacios colaborativos de alto rendimiento.' },
  { id: 'centro-cultural', title: 'Centro Cultural Llana', cat: 'Institucional', year: '2023', location: 'Cali', img: ARCH4, desc: 'Centro cultural comunitario diseñado para integrar arte, formación y espacio público en un barrio periférico.' },
  { id: 'loft-chapinero', title: 'Loft Chapinero', cat: 'Residencial', year: '2022', location: 'Bogotá', img: ARCH1, desc: 'Remodelación de loft en zona histórica con conservación de estructura original y diseño contemporáneo.' },
  { id: 'tipsa-nogal', title: 'Tipsa Nogal', cat: 'Comercial', year: '2022', location: 'Bogotá', img: ARCH3, desc: 'Sede corporativa de 3.000 m² con espacios de trabajo abiertos, zonas de descanso y terraza verde.' },
  { id: 'vivienda-buba', title: 'Vivienda Buba', cat: 'Residencial', year: '2021', location: 'Barranquilla', img: ARCH2, desc: 'Conjunto de 8 viviendas de interés prioritario con sistemas pasivos de ventilación y materiales locales.' },
]

const cats = ['Todos', 'Residencial', 'Comercial', 'Institucional']

export default function Proyectos() {
  const [active, setActive] = useState('Todos')
  const filtered = active === 'Todos' ? projects : projects.filter(p => p.cat === active)

  return (
    <div style={{ backgroundColor: '#0A0A0A', minHeight: '100vh' }}>
      <Navbar />

      {/* ── HEADER ── */}
      <section style={{ background: 'linear-gradient(180deg,#0A0A0A 0%,#141414 50%,#0A0A0A 100%)', padding: '160px 100px 60px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, textAlign: 'center' }} className="proy-header">
        <RevealSection delay={0}>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 500, color: '#B91C1C', letterSpacing: 6, textTransform: 'uppercase' }}>Portafolio</span>
        </RevealSection>
        <RevealText tag="h1" delay={0.15} style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(48px, 6vw, 72px)', fontWeight: 700, color: '#fff', letterSpacing: -2, margin: 0 }}>
          Proyectos
        </RevealText>
        <RevealSection delay={0.3}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 20, color: 'rgba(255,255,255,0.5)', maxWidth: 560, lineHeight: 1.6 }}>
            Proyectos residenciales, comerciales e institucionales.
          </p>
        </RevealSection>
      </section>

      {/* ── FILTERS ── */}
      <RevealSection delay={0.1} style={{ padding: '0 100px 40px', display: 'flex', gap: 10, flexWrap: 'wrap' }} className="filters">
        {cats.map(c => (
          <button key={c} onClick={() => setActive(c)} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: 500, color: '#fff', backgroundColor: active === c ? '#B91C1C' : 'transparent', border: active === c ? 'none' : '1px solid rgba(255,255,255,0.2)', padding: '10px 24px', borderRadius: 28, cursor: 'pointer', transition: 'all 0.25s cubic-bezier(0.16,1,0.3,1)' }}>
            {c}
          </button>
        ))}
      </RevealSection>

      {/* ── PROJECT GRID ── */}
      <section style={{ padding: '0 100px 80px', display: 'flex', flexDirection: 'column', gap: 30 }} className="proy-grid-wrap">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 30 }}>
          {filtered.slice(0, 2).map((p, i) => (
            <RevealSection key={p.id} delay={i * 0.12} direction="up">
              <ProjectCard project={p} tall />
            </RevealSection>
          ))}
        </div>
        {filtered.length > 2 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 30 }}>
            {filtered.slice(2).map((p, i) => (
              <RevealSection key={p.id} delay={i * 0.1} direction="up">
                <ProjectCard project={p} />
              </RevealSection>
            ))}
          </div>
        )}
      </section>

      {/* ── LOAD MORE ── */}
      <RevealSection delay={0} style={{ display: 'flex', justifyContent: 'center', padding: '0 100px 80px' }}>
        <button style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.7)', backgroundColor: 'transparent', border: '1px solid rgba(255,255,255,0.12)', padding: '14px 36px', borderRadius: 2, cursor: 'pointer', transition: 'all 0.25s ease' }}
          onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)' }}
          onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)' }}>
          Cargar más proyectos
        </button>
      </RevealSection>

      {/* ── CTA ── */}
      <section style={{ background: 'linear-gradient(180deg,#0A0A0A 0%,#141414 50%,#0A0A0A 100%)', padding: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28 }} className="proy-cta">
        <RevealText tag="h2" delay={0} style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 700, color: '#fff', letterSpacing: -1, textAlign: 'center', margin: 0 }}>
          ¿Te gustaría un resultado similar?
        </RevealText>
        <RevealSection delay={0.2}>
          <Link to="/contacto" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 500, color: '#fff', textDecoration: 'none', backgroundColor: '#B91C1C', padding: '14px 40px', borderRadius: 2 }}>
            Hablemos de tu proyecto
          </Link>
        </RevealSection>
      </section>

      <Footer />
      <style>{`
        @media (max-width: 768px) {
          .proy-header { padding: 120px 24px 40px !important; }
          .filters { padding: 0 24px 32px !important; }
          .proy-grid-wrap { padding: 0 24px 60px !important; }
          .proy-cta { padding: 60px 24px !important; }
        }
      `}</style>
    </div>
  )
}

function ProjectCard({ project, tall }) {
  return (
    <Link to={`/proyectos/${project.id}`} style={{ textDecoration: 'none', display: 'block', borderRadius: 4, overflow: 'hidden', position: 'relative' }}>
      <div style={{ position: 'relative', paddingTop: tall ? '65%' : '70%', overflow: 'hidden' }}>
        <img src={project.img} alt={project.title}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)' }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.9) 100%)', transition: 'opacity 0.3s' }} />
        <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, color: '#B91C1C', letterSpacing: 3, textTransform: 'uppercase' }}>{project.cat}</span>
            <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 10 }}>·</span>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.4)' }}>{project.location} · {project.year}</span>
          </div>
          <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 22, fontWeight: 700, color: '#fff', letterSpacing: -0.3, margin: '0 0 8px' }}>{project.title}</h3>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>{project.desc}</p>
        </div>
      </div>
    </Link>
  )
}
