# 🏛️ LawCase Landing Page

> Modern, high-performance landing page for LawCase - The all-in-one legal practice management platform

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Material-UI](https://img.shields.io/badge/MUI-7-007FFF?style=flat-square&logo=mui)](https://mui.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)

## 📋 Overview

LawCase Landing Page is a high-performance, SEO-optimized website built with Next.js 16 App Router and Material-UI v7. Designed to showcase LawCase's legal practice management platform, it features modern design patterns, excellent performance scores, and a focus on conversion optimization.

**Live Demo:** [lawcase.app](https://lawcase.app)

### 🚀 Performance Highlights
- ⚡ **Lighthouse Score:** 95+ across all categories
- 📱 **Core Web Vitals:** All metrics in green
- 🎯 **First Contentful Paint:** < 1.5s
- 🔄 **Interactive in:** < 3.5s
- 📊 **Vercel Analytics:** Real-time user insights

## ✨ Features

### 🎨 **Design & UX**
- **Modern Material Design** with custom LawCase branding
- **Responsive Layout** that works flawlessly on all devices
- **Smooth Animations** using AOS (Animate On Scroll)
- **Dark Mode** ready theme system
- **Accessibility** compliant (WCAG 2.1 AA)

### ⚡ **Performance**
- **Server-Side Rendering** for optimal SEO
- **Image Optimization** with Next.js Image component
- **Code Splitting** automatic route-based
- **Font Optimization** with next/font
- **Bundle Analysis** built-in

### 🔧 **Developer Experience**
- **TypeScript** for type safety
- **ESLint & Prettier** configured
- **Git Hooks** with Husky
- **Component Storybook** ready
- **Testing** setup with Jest & React Testing Library

### 🌐 **SEO & Marketing**
- **Structured Data** for rich snippets
- **Open Graph** tags for social sharing
- **XML Sitemap** auto-generated
- **Robots.txt** configuration
- **Meta Tags** management

## 🏗️ Architecture

### 📁 Project Structure
```
lawcase-landing/
├── app/                          # Next.js 16 App Router
│   ├── (marketing)/             # Marketing routes group
│   │   ├── page.tsx             # Home page (landing)
│   │   └── layout.tsx           # Marketing layout
│   ├── api/                     # API routes
│   │   └── newsletter/          # Newsletter subscription
│   ├── layout.tsx               # Root layout with providers
│   ├── globals.css              # Global styles
│   ├── manifest.ts              # PWA manifest
│   └── robots.ts                # SEO config
├── src/
│   ├── components/              # Reusable components
│   │   ├── ui/                  # UI primitives
│   │   │   ├── button/
│   │   │   ├── card/
│   │   │   └── dialog/
│   │   ├── layout/              # Layout components
│   │   │   ├── Header/
│   │   │   ├── Footer/
│   │   │   └── Navigation/
│   │   └── sections/            # Landing sections
│   │       ├── Hero/
│   │       ├── Features/
│   │       └── CTA/
│   ├── hooks/                   # Custom React hooks
│   │   ├── useScrollDirection.ts
│   │   └── useMediaQuery.ts
│   ├── lib/                     # Utilities & configurations
│   │   ├── utils/               # Helper functions
│   │   ├── constants/           # App constants
│   │   └── providers/           # Context providers
│   ├── styles/                  # Styling configuration
│   │   ├── theme.ts             # MUI theme
│   │   ├── palette.ts           # Color system
│   │   └── typography.ts        # Font system
│   └── types/                   # TypeScript definitions
├── public/                      # Static assets
│   ├── fonts/                   # Custom fonts
│   ├── images/                  # Optimized images
│   └── icons/                   # SVG icons
└── tests/                       # Test files
```

### 🎯 Key Components

#### Header (`src/components/layout/Header.tsx`)
- **Dynamic scroll behavior** - changes style on scroll
- **Mobile navigation** with drawer
- **Active link highlighting**
- **Theme toggle** (dark/light mode ready)

#### Newsletter Subscription (`src/components/forms/SubscriptionInput.tsx`)
- **Real-time validation**
- **Google Apps Script integration**
- **Success/error feedback**
- **Rate limiting protection**

#### Animations (`src/components/providers/AOSProvider.tsx`)
- **Scroll-triggered animations**
- **Performance optimized**
- **Mobile-friendly**
- **Configurable delays**

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm 9+ or pnpm 8+ or yarn 1.22+
- Git

### Quick Start
```bash
# Clone repository
git clone https://github.com/law-case/law-case-landing.git
cd law-case-landing

# Install dependencies
npm install

# Set up environment
cp .env.example .env.local

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your application.

### Environment Variables
Create a `.env.local` file in the root directory:

```env
# Application
NEXT_PUBLIC_APP_NAME="LawCase"
NEXT_PUBLIC_APP_URL="https://lawcase.app"
NEXT_PUBLIC_BETA_APP_URL="https://beta.lawcase.app"

# API & Integrations
NEXT_PUBLIC_GOOGLE_SCRIPT_URL="https://script.google.com/macros/s/SCRIPT_ID/exec"
NEXT_PUBLIC_GA_TRACKING_ID="G-XXXXXXXXXX"

# Social Links
NEXT_PUBLIC_DISCORD_URL="https://discord.gg/kEmHYQ6S"
NEXT_PUBLIC_LINKEDIN_URL="https://linkedin.com/company/lawcase"
NEXT_PUBLIC_TWITTER_URL="https://twitter.com/lawcase"
NEXT_PUBLIC_INSTAGRAM_URL="https://instagram.com/lawcase"

# Contact
NEXT_PUBLIC_CONTACT_EMAIL="support@lawcase.app"
NEXT_PUBLIC_BUSINESS_EMAIL="business@lawcase.app"
```

### Available Scripts
```bash
# Development
npm run dev           # Start development server
npm run build         # Create production build
npm run start         # Start production server
npm run lint          # Run ESLint
npm run format        # Format with Prettier

# Testing
npm run test          # Run tests
npm run test:watch    # Run tests in watch mode
npm run test:coverage # Run tests with coverage

# Analysis
npm run analyze       # Analyze bundle size
npm run lighthouse    # Run Lighthouse audit
```

## 🎨 Design System

### Color Palette
| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Primary | Navy Blue | `#2D3250` | Main brand color |
| Secondary | Warm Orange | `#F6B17A` | Accents, CTAs |
| Background | Light Gray | `#F8F9FA` | Page background |
| Text Primary | Dark Gray | `#212529` | Main text |
| Text Secondary | Medium Gray | `#6C757D` | Secondary text |
| Success | Green | `#28A745` | Success states |
| Error | Red | `#DC3545` | Error states |

### Typography
- **Primary Font:** Inter (sans-serif)
- **Font Weights:** 300, 400, 500, 600, 700
- **Base Size:** 16px (1rem)
- **Scale:** 1.125 major second (1.125:1)

### Spacing System
8px base unit with multiples:
- `0.5rem` (8px)
- `1rem` (16px)
- `1.5rem` (24px)
- `2rem` (32px)
- `3rem` (48px)
- `4rem` (64px)
- `6rem` (96px)

## 📱 Responsive Breakpoints

| Device | Breakpoint | Container Width |
|--------|------------|-----------------|
| Mobile | 0-767px | 100% |
| Tablet | 768-1023px | 720px |
| Desktop | 1024-1279px | 960px |
| Large Desktop | 1280px+ | 1140px |

## 🔧 Configuration

### Next.js Config (`next.config.ts`)
```typescript
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['lawcase.app', 'beta.lawcase.app'],
  },
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
};
```

### MUI Theme (`src/styles/theme.ts`)
```typescript
const theme = createTheme({
  palette: {
    primary: {
      main: '#2D3250',
      light: '#5A5F80',
      dark: '#1A1F3A',
    },
    secondary: {
      main: '#F6B17A',
      light: '#FFE3B3',
      dark: '#C3814F',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  shape: {
    borderRadius: 8,
  },
});
```

## 📊 Analytics & Monitoring

### Integrated Services
- **Vercel Analytics:** Real-time performance monitoring
- **Google Analytics 4:** User behavior tracking
- **Hotjar:** Heatmaps and session recordings
- **Sentry:** Error tracking and monitoring

### Performance Monitoring
```typescript
// Example: Performance tracking
export function reportWebVitals(metric: NextWebVitalsMetric) {
  if (metric.label === 'web-vital') {
    console.log(metric);
    // Send to analytics service
  }
}
```

## 🌍 Internationalization (i18n)

The site is configured for multiple languages with Argentine Spanish (voseo) as default:

```typescript
// Language configuration
const locales = {
  'es-AR': 'Español (Argentina)',
  'es': 'Español',
  'en': 'English',
  'pt': 'Português',
};

// Voseo conjugations
const voseoPhrases = {
  organize: 'Organizá',
  manage: 'Gestioná',
  enter: 'Ingresá',
};
```

## 🔒 Security

### Implemented Security Features
- **Content Security Policy (CSP)** headers
- **XSS Protection** with Helmet middleware
- **Rate Limiting** on API routes
- **CSRF Protection** for forms
- **HTTPS Enforcement** in production

### Security Headers
```typescript
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
];
```

## 📈 SEO Optimization

### Meta Tags Configuration
```typescript
export const metadata: Metadata = {
  title: 'LawCase - Gestión Legal Integral',
  description: 'Plataforma todo en uno para la gestión de tu estudio jurídico',
  keywords: ['legal', 'gestión', 'abogados', 'Argentina'],
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://lawcase.app',
    siteName: 'LawCase',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@lawcase',
  },
};
```

### Structured Data
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "LawCase",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "ARS"
  }
}
```

## 🚢 Deployment

### Vercel Deployment (Recommended)
```bash
# Deploy with Vercel CLI
npm i -g vercel
vercel
vercel --prod
```

### Environment-Specific Builds
```json
{
  "scripts": {
    "build:staging": "NEXT_PUBLIC_ENV=staging npm run build",
    "build:production": "NEXT_PUBLIC_ENV=production npm run build"
  }
}
```

### Docker Deployment
```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
EXPOSE 3000
CMD ["npm", "start"]
```

## 🧪 Testing

### Test Structure
```
tests/
├── unit/              # Unit tests
│   ├── components/
│   └── utils/
├── integration/       # Integration tests
├── e2e/              # End-to-end tests
└── fixtures/         # Test data
```

### Running Tests
```bash
# Run all tests
npm test

# Run specific test
npm test -- Header.test.tsx

# Update snapshots
npm test -- -u

# Coverage report
npm run test:coverage
```

## 📚 Documentation

### Available Documentation
- **Component Documentation** in Storybook
- **API Reference** for custom hooks
- **Deployment Guide** for different environments
- **Contribution Guidelines**
- **Design System Documentation**

### Generate Documentation
```bash
# Build Storybook
npm run storybook:build

# Generate TypeDoc
npm run docs:generate

# Serve documentation
npm run docs:serve
```

## 🤝 Contributing

We welcome contributions! Please read our [Contributing Guide](CONTRIBUTING.md) first.

### Development Workflow
1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'feat: add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### Code Standards
- Follow [Conventional Commits](https://www.conventionalcommits.org/)
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass

### Pull Request Template
```markdown
## Description
Brief description of the changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Checklist
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] No console errors
- [ ] Responsive design tested
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏢 Company

**LawCase** - Modern legal practice management for Argentina

- **Website**: [lawcase.app](https://lawcase.app)
- **Email**: contact@lawcase.app
- **LinkedIn**: [@lawcase](https://linkedin.com/company/lawcase)
- **Twitter**: [@lawcase](https://twitter.com/lawcase)
- **Discord**: [Join Community](https://discord.gg/kEmHYQ6S)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI Components from [Material-UI](https://mui.com/)
- Icons from [Material Icons](https://mui.com/material-ui/material-icons/)
- Animations with [AOS](https://michalsnik.github.io/aos/)
- Deployed on [Vercel](https://vercel.com)

## 📊 Project Status

![Project Status](https://img.shields.io/badge/status-active-brightgreen.svg)
![Last Commit](https://img.shields.io/github/last-commit/law-case/law-case-landing)
![Open Issues](https://img.shields.io/github/issues-raw/law-case/law-case-landing)
![Open PRs](https://img.shields.io/github/issues-pr-raw/law-case/law-case-landing)

---

**Made with ❤️ for the legal community in Argentina**

---

<div align="center">
  <sub>If you found this project helpful, consider giving it a ⭐️ on GitHub!</sub>
</div>
