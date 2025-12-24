/**
 * Componente de Breadcrumbs con Schema.org
 * 
 * Mejora la navegación del usuario y el SEO
 * Google muestra las breadcrumbs en los resultados de búsqueda
 * 
 * Uso:
 * <Breadcrumbs items={[
 *   { label: 'Inicio', href: '/' },
 *   { label: 'Blog', href: '/blog' },
 *   { label: 'Artículo actual' }
 * ]} />
 */

import Link from 'next/link'
import { ChevronRight } from '@mui/icons-material'
import { Breadcrumbs as MuiBreadcrumbs, Typography } from '@mui/material'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Generar Schema.org para breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      ...(item.href && { "item": `https://lawcase.app${item.href}` })
    }))
  }

  return (
    <>
      {/* Schema markup para Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      
      {/* Breadcrumbs visuales */}
      <MuiBreadcrumbs 
        separator={<ChevronRight fontSize="small" />}
        aria-label="breadcrumb"
        sx={{ 
          mb: 3,
          fontSize: '0.875rem',
          color: 'text.secondary'
        }}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          
          if (isLast || !item.href) {
            return (
              <Typography 
                key={index} 
                color="text.primary"
                sx={{ fontSize: '0.875rem', fontWeight: 500 }}
              >
                {item.label}
              </Typography>
            )
          }
          
          return (
            <Link 
              key={index} 
              href={item.href}
              style={{ 
                textDecoration: 'none',
                color: 'inherit',
                transition: 'color 0.2s'
              }}
            >
              <Typography
                sx={{
                  fontSize: '0.875rem',
                  '&:hover': {
                    color: 'primary.main',
                    textDecoration: 'underline'
                  }
                }}
              >
                {item.label}
              </Typography>
            </Link>
          )
        })}
      </MuiBreadcrumbs>
    </>
  )
}

// Ejemplo de uso en una página:
// 
// import Breadcrumbs from '@/components/Breadcrumbs'
// 
// export default function BlogPost() {
//   return (
//     <Container>
//       <Breadcrumbs items={[
//         { label: 'Inicio', href: '/' },
//         { label: 'Blog', href: '/blog' },
//         { label: 'Cómo digitalizar tu estudio jurídico' }
//       ]} />
//       
//       {/* Resto del contenido */}
//     </Container>
//   )
// }
