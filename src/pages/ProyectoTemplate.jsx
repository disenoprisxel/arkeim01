import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ARCH1 = '/arch1.png'
const ARCH2 = '/arch2.png'
const ARCH3 = '/arch3.png'
const ARCH4 = '/arch4.png'

const projectsData = {
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

      {/* ── PROJECT NAV (breadcrumb + details) ── */}
      <section
        style={{
          backgroundColor: '#0A0A0A',
          padding: '32px 100px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 20,
        }}
        className="proj-nav"
      >
        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
          {p.details.slice(0, 4).map(d => (
            <div key={d.label} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, color: '#B91C1C', letterSpacing: 3, textTransform: 'uppercase' }}>
                {d.label}
              </span>
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#fff' }}>{d.val}</span>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <Link
            to="/contacto"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 13,
              fontWeight: 500,
              color: '#fff',
              textDecoration: 'none',
              backgroundColor: '#B91C1C',
              padding: '10px 24px',
              borderRadius: 2,
            }}
          >
            Proyecto similar
          </Link>
        </div>
      </section>

      {/* ── DESCRIPTION ── */}
      <section
        style={{
          backgroundColor: '#0A0A0A',
          padding: '100px',
          display: 'flex',
          gap: 80,
          flexWrap: 'wrap',
          alignItems: 'flex-start',
        }}
        className="proj-desc"
      >
        <div style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: 40 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <h2
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 'clamp(28px, 3vw, 40px)',
                fontWeight: 700,
                color: '#fff',
                letterSpacing: -1,
                margin: 0,
              }}
            >
              Sobre el proyecto
            </h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 16, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>
              {p.desc}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 18, fontWeight: 700, color: '#fff', margin: '0 0 8px' }}>
                El desafío
              </h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
                {p.challenge}
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 18, fontWeight: 700, color: '#fff', margin: '0 0 8px' }}>
                La solución
              </h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
                {p.solution}
              </p>
            </div>
          </div>
        </div>

        {/* Details card */}
        <div
          style={{
            flex: '0 0 300px',
            backgroundColor: '#1A1A1A',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 8,
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}
        >
          <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 16, fontWeight: 700, color: '#fff', margin: 0, letterSpacing: 1 }}>
            FICHA TÉCNICA
          </h3>
          <div
            style={{
              height: 1,
              background: 'linear-gradient(90deg, #B91C1C, transparent)',
            }}
          />
          {p.details.map(d => (
            <div key={d.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: '#B91C1C', letterSpacing: 2, textTransform: 'uppercase' }}>
                {d.label}
              </span>
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#fff' }}>{d.val}</span>
            </div>
          ))}
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
