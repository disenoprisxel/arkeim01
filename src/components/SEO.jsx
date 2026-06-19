import { Helmet } from 'react-helmet-async'

const BASE_URL = 'https://www.arkeimstudio.com'
const DEFAULT_IMAGE = `${BASE_URL}/hero.png`

export default function SEO({ title, description, path = '', image }) {
  const fullTitle = title ? `${title} | Arkeím Studio` : 'Arkeím Studio · Arquitectura, BIM y Construcción en Bogotá'
  const url = `${BASE_URL}${path}`
  const og = image || DEFAULT_IMAGE

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={og} />
      <meta property="og:locale" content="es_CO" />
      <meta property="og:site_name" content="Arkeím Studio" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={og} />
    </Helmet>
  )
}
