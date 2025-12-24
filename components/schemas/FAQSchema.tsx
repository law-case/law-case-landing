/**
 * Schema FAQPage para SEO
 * 
 * Implementar en la página /faq
 * Ayuda a aparecer en Featured Snippets de Google
 * y muestra las preguntas directamente en los resultados de búsqueda
 * 
 * Actualizar con las preguntas reales de tu FAQ
 */

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué es LawCase?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "LawCase es una plataforma digital diseñada específicamente para abogados y estudios jurídicos que permite gestionar casos, documentos, tareas y calendarios desde una sola aplicación web. Es una solución integral de gestión legal que digitaliza y optimiza los procesos de trabajo del estudio jurídico."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta LawCase?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Durante la fase de beta abierta, LawCase es completamente gratuito para todos los usuarios. Esto te permite probar todas las funcionalidades sin compromiso. Una vez finalizada la beta, ofreceremos planes flexibles según el tamaño del estudio y las necesidades específicas."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es seguro almacenar datos legales en LawCase?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, la seguridad es nuestra máxima prioridad. LawCase utiliza encriptación de datos end-to-end, almacenamiento seguro en la nube, backups automáticos diarios y cumple con todas las normativas de protección de datos vigentes en Argentina. Además, implementamos autenticación de dos factores y controles de acceso basados en roles."
      }
    },
    {
      "@type": "Question",
      "name": "¿Necesito instalar algún software?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, LawCase es una aplicación web que funciona directamente desde tu navegador. No requiere instalación de software adicional. Solo necesitas una conexión a internet y un navegador moderno. También estamos desarrollando aplicaciones móviles para iOS y Android."
      }
    },
    {
      "@type": "Question",
      "name": "¿Puedo importar mis casos existentes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, LawCase permite importar datos desde archivos CSV, Excel y otros formatos comunes. También ofrecemos asistencia personalizada para la migración de datos desde otras plataformas de gestión legal."
      }
    },
    {
      "@type": "Question",
      "name": "¿LawCase funciona en equipos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutamente. LawCase está diseñado para trabajo colaborativo. Puedes agregar múltiples usuarios, asignar roles y permisos, compartir casos con colegas y mantener un registro completo de todas las actividades. Es ideal tanto para abogados independientes como para estudios jurídicos de cualquier tamaño."
      }
    },
    {
      "@type": "Question",
      "name": "¿Ofrecen soporte técnico?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, ofrecemos soporte técnico por email y chat en vivo durante horario laboral (Lunes a Viernes de 9 a 18hs). También contamos con una base de conocimiento completa con tutoriales y guías. Durante la beta, el soporte es especialmente ágil para resolver cualquier consulta."
      }
    },
    {
      "@type": "Question",
      "name": "¿Puedo acceder desde mi celular?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, LawCase tiene un diseño responsive que se adapta perfectamente a celulares y tablets. Además, estamos desarrollando aplicaciones nativas para iOS y Android que estarán disponibles próximamente."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo me registro en la beta?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Es muy simple: ingresá a lawcase.app, hacé clic en 'Comenzar Gratis', completá el formulario de registro con tu email y contraseña, y listo. Recibirás un email de confirmación y podrás empezar a usar la plataforma inmediatamente."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué funcionalidades incluye LawCase?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "LawCase incluye: gestión completa de casos y expedientes, organización de documentos con búsqueda avanzada, calendario jurídico con recordatorios de vencimientos, gestión de tareas y deadlines, base de datos de clientes, reportes y estadísticas, colaboración en equipo, notificaciones automáticas y almacenamiento seguro en la nube."
      }
    }
  ]
}

// Componente React para insertar el schema
export default function FAQSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema)
      }}
    />
  )
}

// Para agregar en tu página FAQ:
// import FAQSchema from '@/components/schemas/FAQSchema'
// 
// export default function FAQPage() {
//   return (
//     <>
//       <FAQSchema />
//       {/* Tu contenido de FAQ */}
//     </>
//   )
// }
