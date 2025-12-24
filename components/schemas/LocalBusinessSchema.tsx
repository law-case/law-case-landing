/**
 * Schema LocalBusiness para SEO Local
 * 
 * Implementar en layout.tsx o en página principal
 * Ayuda a aparecer en búsquedas locales y Google Maps
 * 
 * IMPORTANTE: Actualizar con datos reales de tu empresa
 */

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["SoftwareApplication", "LocalBusiness"],
  "name": "LawCase",
  "alternateName": "LawCase App",
  "legalName": "LawCase SRL", // Actualizar con razón social real
  "url": "https://lawcase.app",
  "logo": "https://lawcase.app/assets/logo.svg",
  "image": [
    "https://lawcase.app/assets/hero-image.svg",
    "https://lawcase.app/assets/logo.svg"
  ],
  
  // Contacto
  "email": "contacto@lawcase.app",
  "telephone": "+54-11-XXXX-XXXX", // Actualizar con teléfono real
  
  // Dirección (si aplica)
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Corrientes 1234", // Actualizar
    "addressLocality": "Buenos Aires",
    "addressRegion": "CABA",
    "postalCode": "C1043", // Actualizar
    "addressCountry": "AR"
  },
  
  // Coordenadas (si tienes oficina física)
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -34.603722, // Actualizar
    "longitude": -58.381592 // Actualizar
  },
  
  // Horarios de atención
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  
  // Redes sociales (actualizar cuando las crees)
  "sameAs": [
    "https://www.linkedin.com/company/lawcase",
    "https://twitter.com/lawcaseapp",
    "https://www.instagram.com/lawcaseapp",
    "https://www.facebook.com/lawcaseapp"
  ],
  
  // Información del software
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web Browser, iOS, Android",
  "softwareVersion": "1.0",
  
  // Oferta (beta gratuita)
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "ARS",
    "availability": "https://schema.org/InStock",
    "url": "https://lawcase.app/auth/register",
    "description": "Beta abierta gratuita para abogados y estudios jurídicos",
    "validFrom": "2025-01-01",
    "priceValidUntil": "2025-12-31"
  },
  
  // Rating (actualizar con datos reales cuando tengas reviews)
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  },
  
  // Descripción
  "description": "LawCase es la plataforma digital para abogados y estudios jurídicos que permite gestionar casos, documentos, tareas y calendarios desde una sola aplicación web. Software legal diseñado para profesionales del derecho en Argentina.",
  
  // Características principales
  "featureList": [
    "Gestión de casos judiciales",
    "Organización de documentos legales",
    "Calendario jurídico integrado",
    "Seguimiento de tareas y deadlines",
    "Gestión de clientes",
    "Reportes y analytics",
    "Colaboración en equipo",
    "Seguridad y encriptación de datos"
  ],
  
  // Target audience
  "audience": {
    "@type": "Audience",
    "audienceType": "Abogados, Estudios Jurídicos, Departamentos Legales"
  }
}

// Componente React para insertar el schema
export default function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessSchema)
      }}
    />
  )
}
