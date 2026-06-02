import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ModelViewer3D from '../components/ModelViewer3D'

const ARCH1 = '/arch1.png'
const ARCH2 = '/arch2.png'
const ARCH3 = '/arch3.png'
const ARCH4 = '/arch4.png'

const projectsData = {
  'edificio-calle-53': {
    title: 'Edificio Calle 53',
    cat: 'Comercial',
    location: 'Bogotá, Colombia',
    year: '2025',
    area: '2.400 m²',
    status: 'En desarrollo',
    hero: ARCH3,
    desc: 'Edificio de uso mixto ubicado en el corredor comercial de la Calle 53 en Bogotá. El proyecto integra oficinas de alto estándar en los pisos superiores con locales comerciales en el primer nivel, articulados por un gran vestíbulo de doble altura que conecta visualmente el espacio público con el interior.',
    challenge: 'Desarrollar un programa mixto eficiente en un lote estrecho entre medianeras, garantizando iluminación natural en todos los espacios de trabajo y cumpliendo con la normativa de altura y aprovechamiento del sector.',
    solution: 'Se diseñó una fachada articulada con quiebrasoles verticales que controlan la entrada de luz según la orientación, y un núcleo de circulación desplazado que libera las plantas para una mayor flexibilidad de distribución.',
    model3d: '/models/edificio-calle-53.glb',
    img1: ARCH1,
    fullImg: ARCH4,
    gallery: [ARCH3, ARCH2, ARCH1, ARCH4],
    details: [
      { label: 'Cliente', val: 'Confidencial' },
      { label: 'Ubicación', val: 'Bogotá, Colombia' },
      { label: 'Año', val: '2025' },
      { label: 'Área', val: '2.400 m²' },
      { label: 'Estado', val: 'En desarrollo' },
      { label: 'Tipo', val: 'Comercial / Oficinas' },
    ],
    related: [
      { id: 'casa-montes', title: 'Casa Montes', cat: 'Residencial', img: ARCH2 },
      { id: 'loft-chapinero', title: 'Loft Chapinero', cat: 'Residencial', img: ARCH1 },
      { id: 'centro-cultural', title: 'Centro Cultural Llana', cat: 'Institucional', img: ARCH4 },
    ],
  },
  'casa-montes': {
    title: 'Casa Montes',
    cat: 'Residencial',
    location: 'Bogotá, Colombia',
    year: '2024',
    area: '480 m²',
    status: 'Construido',
    hero: ARCH2,
    desc: 'Casa Montes es una residencia unifamiliar ubicada en el norte de Bogotá que responde al entorno forestal de su lote con una arquitectura que equilibra privacidad, luz natural y conexión con el jardín. El programa se articula en tres volúmenes que generan patios intermedios, controlando la entrada de luz y ventilación de manera pasiva.',
    challenge: 'El principal reto fue integrar un programa de 480 m² en un lote de pendiente pronunciada, minimizando el movimiento de tierra y preservando los árboles existentes.',
    solution: 'Optamos por una planta escalonada que sigue la topografía natural, con terrazas ajardinadas que actúan como extensión de los espacios interiores.',
    img1: ARCH1,
    fullImg: ARCH3,
    gallery: [ARCH2, ARCH4, ARCH1, ARCH3],
    details: [
      { label: 'Cliente', val: 'Familia Montes' },
      { label: 'Ubicación', val: 'Bogotá, Colombia' },
      { label: 'Año', val: '2024' },
      { label: 'Área', val: '480 m²' },
      { label: 'Estado', val: 'Construido' },
      { label: 'Tipo', val: 'Residencial' },
    ],
    related: [
      { id: 'loft-chapinero', title: 'Loft Chapinero', cat: 'Residencial', img: ARCH1 },
      { id: 'vivienda-buba', title: 'Vivienda Buba', cat: 'Residencial', img: ARCH2 },
      { id: 'edificio-zar', title: 'Edificio Zar Pro', cat: 'Comercial', img: ARCH3 },
    ],
  },
}

const defaultProject = {
  title: 'Proyecto Arkeím',
  cat: 'Residencial',
  location: 'Bogotá, Colombia',
  year: '2024',
  area: '350 m²',
  status: 'Construido',
  hero: ARCH2,
  desc: 'Un proyecto que combina rigor técnico y sensibilidad estética para crear espacios que responden a las personas y al entorno.',
  challenge: 'Diseñar un espacio que integre los requerimientos del cliente con las condiciones del lugar.',
  solution: 'A través de un proceso colaborativo con el cliente, desarrollamos un concepto que resuelve de manera elegante todos los requerimientos del programa.',
  img1: ARCH1,
  fullImg: ARCH3,
  gallery: [ARCH2, ARCH4, ARCH1, ARCH3],
  details: [
    { label: 'Cliente', val: 'Cliente Privado' },
    { label: 'Ubicación', val: 'Bogotá, Colombia' },
    { label: 'Año', val: '2024' },
    { label: 'Área', val: '350 m²' },
    { label: 'Estado', val: 'Construido' },
    { label: 'Tipo', val: 'Residencial' },
  ],
  related: [
    { id: 'casa-montes', title: 'Casa Montes', cat: 'Residencial', img: ARCH2 },
    { id: 'loft-chapinero', title: 'Loft Chapinero', cat: 'Residencial', img: ARCH1 },
    { id: 'edificio-zar', title: 'Edificio Zar Pro', cat: 'Comercial', img: ARCH3 },
  ],
}

export default function ProyectoTemplate() {
  const { id } = useParams()
  const p = projectsData[id] || defaultProject

  return (
    <div style={{ backgroundColor: '#0A0A0A', minHeight: '100vh' }}>
      <Navbar />

      {/* ── HERO IMAGE ── */}
      <section
        style={{
          position: 'relative',
          height: 720,
          overflow: 'hidden',
        }}
      >
        <img
          src={p.hero}
          alt={p.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(10,10,10,0) 0%, rgba(10,10,10,0.27) 50%, rgba(10,10,10,0.93) 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 60,
            left: 100,
            right: 100,
          }}
          className="proj-hero-text"
        >
          <Link
            to="/proyectos"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 12,
              color: 'rgba(255,255,255,0.5)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              marginBottom: 20,
            }}
          >
            ← Todos los proyectos
          </Link>
          <h1
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(40px, 5vw, 72px)',
              fontWeight: 700,
              color: '#fff',
              letterSpacing: -2,
              margin: '0 0 12px',
            }}
          >
            {p.title}
          </h1>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: '#B91C1C', letterSpacing: 3, textTransform: 'uppercase' }}>
              {p.cat}
            </span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{p.location}</span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{p.year}</span>
          </div>
        </div>
      </section>

      {/* ── VISOR 3D + FICHA TÉCNICA (layout 60/40) ── */}
      <section style={{ backgroundColor: '#0A0A0A', padding: '48px 60px', display: 'flex', gap: 32, alignItems: 'flex-start', flexWrap: 'wrap' }} className="proj-main">

        {/* LEFT — Visor 3D 60% */}
        <div style={{ flex: '0 0 60%', minWidth: 300, display: 'flex', flexDirection: 'column', gap: 16 }} className="proj-viewer-col">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, color: '#B91C1C', letterSpacing: 5, textTransform: 'uppercase' }}>
              Modelo Interactivo BIM
            </span>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(22px, 2.4vw, 32px)', fontWeight: 700, color: '#fff', letterSpacing: -0.8, margin: 0 }}>
              Explora el proyecto en 3D
            </h2>
          </div>
          {p.model3d
            ? <ModelViewer3D src={p.model3d} title={p.title} />
            : (
              <div style={{ height: 400, backgroundColor: '#111', borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.2)' }}>Modelo 3D no disponible</span>
              </div>
            )
          }
        </div>

        {/* RIGHT — Info 40% */}
        <div style={{ flex: 1, minWidth: 260, display: 'flex', flexDirection: 'column', gap: 28 }}>

          {/* Ficha técnica */}
          <div style={{ backgroundColor: '#1A1A1A', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 10, padding: '28px 28px', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ height: 1, flex: 1, background: 'linear-gradient(90deg, #B91C1C, transparent)' }} />
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 11, fontWeight: 700, color: '#B91C1C', margin: 0, letterSpacing: 3, textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                Ficha Técnica
              </h3>
              <div style={{ height: 1, flex: 1, background: 'linear-gradient(270deg, #B91C1C, transparent)' }} />
            </div>
            {p.details.map(d => (
              <div key={d.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingBottom: 10, borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: 2, textTransform: 'uppercase' }}>{d.label}</span>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#fff', fontWeight: 500 }}>{d.val}</span>
              </div>
            ))}
          </div>

          {/* Descripción */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 16, fontWeight: 700, color: '#fff', margin: 0 }}>Sobre el proyecto</h3>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
          </div>

          {/* Desafío & solución */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <h4 style={{ fontFamily: 'Syne, sans-serif', fontSize: 13, fontWeight: 700, color: '#B91C1C', margin: 0, letterSpacing: 1, textTransform: 'uppercase' }}>El desafío</h4>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, margin: 0 }}>{p.challenge}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <h4 style={{ fontFamily: 'Syne, sans-serif', fontSize: 13, fontWeight: 700, color: '#B91C1C', margin: 0, letterSpacing: 1, textTransform: 'uppercase' }}>La solución</h4>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, margin: 0 }}>{p.solution}</p>
            </div>
          </div>

          {/* CTA */}
          <Link to="/contacto" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: 500, color: '#fff', textDecoration: 'none', backgroundColor: '#B91C1C', padding: '12px 24px', borderRadius: 2, textAlign: 'center', display: 'block', transition: 'opacity 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
            Quiero un proyecto similar →
          </Link>
        </div>
      </section>

      {/* ── FULL IMAGE 1 ── */}
      <div style={{ overflow: 'hidden', height: 600 }}>
        <img src={p.fullImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      {/* ── PROJECT DETAILS / GALLERY ── */}
      <section
        style={{
          backgroundColor: '#0A0A0A',
          padding: '100px',
          display: 'flex',
          flexDirection: 'column',
          gap: 60,
        }}
        className="proj-gallery"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: '#B91C1C', letterSpacing: 6, textTransform: 'uppercase' }}>
            Galería
          </span>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 700, color: '#fff', letterSpacing: -1, margin: 0 }}>
            Imágenes fotográficas
          </h2>
        </div>

        {/* Gallery Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {/* Row 1: 2 images */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {p.gallery.slice(0, 2).map((img, i) => (
              <div key={i} style={{ height: 380, borderRadius: 4, overflow: 'hidden' }}>
                <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
          {/* Row 2: 1 wide + 1 */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 20 }}>
            {p.gallery.slice(2, 4).map((img, i) => (
              <div key={i} style={{ height: 380, borderRadius: 4, overflow: 'hidden' }}>
                <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section
        style={{
          position: 'relative',
          height: 500,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: 16,
          padding: '0 40px',
        }}
      >
        <img src={ARCH4} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(10,10,10,0.93) 0%, rgba(10,10,10,0.55) 50%, rgba(10,10,10,0.93) 100%)',
          }}
        />
        <blockquote
          style={{
            position: 'relative',
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(20px, 2.5vw, 30px)',
            fontWeight: 700,
            color: '#fff',
            textAlign: 'center',
            letterSpacing: -0.5,
            lineHeight: 1.4,
            maxWidth: 700,
            margin: 0,
          }}
        >
          "Un proyecto bien concebido ya está terminado antes de poner el primer ladrillo."
        </blockquote>
        <cite
          style={{
            position: 'relative',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 13,
            color: 'rgba(255,255,255,0.4)',
            fontStyle: 'italic',
          }}
        >
          — Equipo Arkeím
        </cite>
      </section>

      {/* ── RELATED PROJECTS ── */}
      <section
        style={{
          background: 'linear-gradient(180deg, #0A0A0A 0%, #111 50%, #0A0A0A 100%)',
          padding: '100px',
          display: 'flex',
          flexDirection: 'column',
          gap: 48,
        }}
        className="related"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: '#B91C1C', letterSpacing: 6, textTransform: 'uppercase' }}>
            Más proyectos
          </span>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 700, color: '#fff', letterSpacing: -1, margin: 0 }}>
            Proyectos relacionados
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
          {p.related.map(r => (
            <Link
              key={r.id}
              to={`/proyectos/${r.id}`}
              style={{ textDecoration: 'none', display: 'block', borderRadius: 4, overflow: 'hidden' }}
            >
              <div style={{ position: 'relative', paddingTop: '75%' }}>
                <img
                  src={r.img}
                  alt={r.title}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.85) 100%)' }} />
                <div style={{ position: 'absolute', bottom: 20, left: 20 }}>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, color: '#B91C1C', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 4 }}>
                    {r.cat}
                  </p>
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 18, fontWeight: 700, color: '#fff', margin: 0 }}>
                    {r.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: '120px 100px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 24,
        }}
        className="proj-cta"
      >
        <img src={ARCH2} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(10,10,10,0.93) 0%, rgba(10,10,10,0.75) 50%, #0A0A0A 100%)',
          }}
        />
        <h2
          style={{
            position: 'relative',
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(28px, 3.5vw, 48px)',
            fontWeight: 700,
            color: '#fff',
            letterSpacing: -1,
            textAlign: 'center',
            margin: 0,
          }}
        >
          ¿Te gustaría un resultado similar?
        </h2>
        <p
          style={{
            position: 'relative',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 18,
            color: 'rgba(255,255,255,0.55)',
            textAlign: 'center',
          }}
        >
          Hablemos sobre tu proyecto.
        </p>
        <Link
          to="/contacto"
          style={{
            position: 'relative',
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
          Iniciar proyecto
        </Link>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .proj-hero-text { left: 24px !important; right: 24px !important; bottom: 40px !important; }
          .proj-nav { padding: 24px !important; }
          .proj-desc { padding: 48px 24px !important; flex-direction: column !important; }
          .proj-gallery { padding: 48px 24px !important; }
          .related { padding: 48px 24px !important; }
          .proj-cta { padding: 60px 24px !important; }
        }
      `}</style>
    </div>
  )
}
