# 🏛️ LawCase Landing Page

> Professional landing page for LawCase - Modern legal practice management platform

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61dafb?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Material-UI](https://img.shields.io/badge/MUI-7-007FFF?style=flat&logo=mui)](https://mui.com/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

## 📋 Overview

High-performance landing page built with Next.js 16 App Router, designed to showcase LawCase's legal management platform. Featuring server-side rendering, optimized images, and a modern UI built with Material-UI.

### ✨ Key Features

- 🚀 **Next.js 16** with App Router and React 19
- 🎨 **Material-UI v7** for consistent design system
- 📱 **Fully Responsive** - Mobile-first approach
- ⚡ **Performance Optimized** - Lighthouse score 95+
- 🔍 **SEO Ready** - Complete meta tags and structured data
- 🌐 **i18n Ready** - Argentine Spanish localization (voseo)
- 📊 **Vercel Analytics** integrated
- 🎯 **Dynamic Header** - Scroll-aware navigation
- 📬 **Newsletter Integration** - Google Apps Script backend

## 🏗️ Project Structure

```
lawcase-landing/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with MUI theme
│   ├── page.tsx                 # Main landing page
│   ├── globals.css              # Global styles
│   ├── manifest.ts              # PWA manifest
│   └── robots.ts                # SEO robots config
│
├── src/
│   ├── components/              # Reusable components
│   │   ├── Header.tsx          # Dynamic scroll header
│   │   ├── Footer.tsx          # Footer with social links
│   │   ├── SubscriptionInput.tsx
│   │   ├── CustomSnackbar.tsx
│   │   └── AOSProvider.tsx     # Animation on scroll
│   │
│   ├── views/                   # Landing sections
│   │   ├── LandingHero.tsx     # Hero section
│   │   ├── Description.tsx      # Product description
│   │   ├── Demo.tsx             # Video demo section
│   │   ├── LandingTestimonies.tsx
│   │   ├── CtaFinal.tsx        # Final call-to-action
│   │   └── features/
│   │       ├── FeaturesView.tsx
│   │       └── components/
│   │
│   └── hooks/
│       └── useScrollDirection.ts # Custom scroll detection
│
├── styles/                      # Theme configuration
│   ├── theme.ts                # MUI theme setup
│   ├── palette.ts              # Color palette
│   ├── typography.ts           # Typography config
│   └── button.ts               # Button styles
│
├── public/                      # Static assets
│   ├── logo.png
│   └── assets/                 # Images and SVGs
│
├── .env                         # Environment variables (example)
├── next.config.ts               # Next.js configuration
├── tsconfig.json                # TypeScript config
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** or **pnpm** package manager

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/law-case/law-case-landing.git
cd lawcase-landing
```

2. **Install dependencies**

```bash
npm install
# or
pnpm install
```

3. **Configure environment variables**

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=your-google-apps-script-url
NEXT_PUBLIC_DISCORD_URL=https://discord.gg/your-invite
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/company/your-company
NEXT_PUBLIC_APP_URL=https://beta.lawcase.app
```

4. **Run development server**

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## 📦 Build & Deploy

### Production Build

```bash
npm run build
npm start
```

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/law-case/law-case-landing)

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Configure environment variables
4. Deploy!

## 🎨 Design System

### Theme

The project uses a custom Material-UI theme with:

- **Primary Color**: `#2D3250` (Dark blue)
- **Secondary Color**: `#F6B17A` (Warm orange)
- **Typography**: Inter font family
- **Responsive breakpoints**: xs, sm, md, lg, xl

### Components

All components follow these conventions:

- ✅ Functional components with TypeScript
- ✅ Props interfaces with descriptive names
- ✅ MUI `sx` prop for styling
- ✅ Responsive design patterns
- ✅ Accessible (WCAG AA compliant)

## 🌐 Internationalization

The landing page uses **Argentine Spanish** (voseo):

- ✅ Formal tone with "vos" conjugation
- ✅ "Organizá", "gestioná", "ingresá" instead of neutral Spanish
- ✅ Third-person neutral for feature descriptions

## 📊 Analytics & SEO

### Vercel Analytics

Integrated with `@vercel/analytics/next` for:

- Page views tracking
- User interaction metrics
- Performance monitoring

### SEO Features

- ✅ Complete meta tags (Open Graph, Twitter Cards)
- ✅ Structured data (JSON-LD)
- ✅ Sitemap and robots.txt
- ✅ Canonical URLs
- ✅ Optimized images with Next/Image

## 🔧 Configuration Files

### next.config.ts

- React Compiler enabled
- Turbopack for faster builds
- Image optimization (AVIF, WebP)
- Security headers
- Compression enabled

### tsconfig.json

- Strict mode enabled
- Path aliases (`@/*`)
- React JSX transform

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## 🔗 Related Projects

- [law-case-client](https://github.com/law-case/law-case-client) - Main application (React + Vite)
- [law-case-server](https://github.com/law-case/law-case-server) - Backend API

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `perf:` Performance improvements
- `test:` Adding tests
- `chore:` Maintenance tasks

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

**LawCase Development Team**

- Website: [lawcase.app](https://lawcase.app)
- Email: lawcaseapp@gmail.com
- LinkedIn: [@lawcase](https://linkedin.com/company/lawcase)
- Discord: [Join our community](https://discord.gg/kEmHYQ6S)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components by [Material-UI](https://mui.com/)
- Animations by [AOS](https://michalsnik.github.io/aos/)
- Deployed on [Vercel](https://vercel.com/)

---

**Made with ❤️ by the LawCase team**
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
