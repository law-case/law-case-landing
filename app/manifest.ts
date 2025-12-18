import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'LawCase - Plataforma de Gestión Legal',
    short_name: 'LawCase',
    description: 'Plataforma digital para la gestión de casos legales, documentos y tareas jurídicas',
    start_url: '/',
    display: 'standalone',
    background_color: '#2D3250',
    theme_color: '#424769',
    icons: [
      {
        src: '/assets/logo.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
