import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import theme from "@/styles/theme"
import AOSProvider from "@/src/components/AOSProvider"
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://lawcase.app'),
  title: {
    default: "LawCase - Plataforma de Gestión Legal | Gestioná tus Casos Judiciales",
    template: "%s | LawCase"
  },
  description: "LawCase es la plataforma digital para abogados y estudios jurídicos. Gestioná casos, documentos, tareas y calendarios desde una sola aplicación web. Sumate a la beta abierta gratis.",
  keywords: [
    "gestión legal",
    "software para abogados",
    "plataforma jurídica",
    "gestión de casos",
    "estudio jurídico digital",
    "lawtech",
    "tecnología legal",
    "abogados Argentina",
    "expedientes digitales",
    "CRM legal",
    "gestión de causas"
  ],
  authors: [{ name: "LawCase Team" }],
  creator: "LawCase",
  publisher: "LawCase",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://lawcase.app",
    siteName: "LawCase",
    title: "LawCase - Plataforma de Gestión Legal para Abogados",
    description: "Transformá tu gestión legal con LawCase. Organizá casos, documentos y tareas desde una plataforma intuitiva. Beta abierta y gratuita.",
    images: [
      {
        url: "/assets/hero-image.svg",
        width: 1200,
        height: 630,
        alt: "LawCase - Plataforma de Gestión Legal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LawCase - Plataforma de Gestión Legal para Abogados",
    description: "Transformá tu gestión legal con LawCase. Organizá casos, documentos y tareas desde una plataforma intuitiva.",
    images: ["/assets/hero-image.svg"],
  },
  verification: {
    google: 'google795ae835b1e3b032',
  },
  alternates: {
    canonical: "https://lawcase.app",
  },
  category: "Legal Technology",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <AOSProvider>
              {children}
            </AOSProvider>
            <Analytics />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}