# LawCase Landing Page

Landing page de LawCase migrada de React/Vite a Next.js.

## Características

- **Framework**: Next.js 15 con App Router
- **UI**: Material-UI (MUI) v6
- **Estilos**: CSS Modules y Emotion
- **TypeScript**: Configuración completa
- **Componentes**:
  - Hero Section con llamadas a la acción
  - Sección de descripción del producto
  - Características destacadas
  - Testimonios
  - Video demo
  - Call-to-action final
  - Footer con formulario de suscripción

## Configuración

1. Instalar dependencias:

```bash
npm install
```

2. Crear archivo `.env.local` basado en `.env.local.example`:

```bash
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=tu-url-de-google-apps-script
```

3. Ejecutar el servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## Enlaces

- Los botones de registro redirigen a `https://lawcase.app/auth/register`
- Los enlaces de términos y ayuda redirigen a `https://lawcase.app/terms` y `https://lawcase.app/faq`
- Las redes sociales enlazan a LinkedIn y Discord

## Estructura del Proyecto

```
lawcase-landing/
├── app/                    # App Router de Next.js
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página de inicio
├── components/            # Componentes compartidos
│   ├── DiscordIcon.tsx
│   ├── Logo.tsx
│   └── MUIThemeProvider.tsx
├── src/
│   ├── components/        # Componentes internos
│   │   ├── CustomSnackbar.tsx
│   │   └── Footer.tsx
│   ├── views/             # Secciones de la landing
│   │   ├── LandingHero.tsx
│   │   ├── Description.tsx
│   │   ├── FeaturesView.tsx
│   │   ├── LandingTestimonies.tsx
│   │   ├── Demo.tsx
│   │   └── CtaFinal.tsx
│   └── styles/
│       └── theme.ts       # Configuración del tema MUI
└── public/                # Archivos estáticos
    ├── assets/            # Imágenes y SVGs
    └── logo.png           # Logo de LawCase
```

## Deploy en Vercel

La forma más fácil de deployar es usar la [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Consulta la [documentación de deployment de Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para más detalles.
