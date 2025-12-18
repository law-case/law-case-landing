import { Stack } from "@mui/material"
import LandingHero from "@/src/views/LandingHero"
import { Description } from "@/src/views/Description"
import { Demo } from "@/src/views/Demo"
import { CtaFinal } from "@/src/views/CtaFinal"
import FeaturesView from "@/src/views/features/FeaturesView"
import Footer from "@/src/components/Footer"
import Header from "@/src/components/Header"
import JsonLd from "@/src/components/JsonLd"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "LawCase - Plataforma de Gestión Legal para Abogados | Beta Abierta Gratis",
  description: "Gestioná casos judiciales, documentos y tareas desde una sola plataforma. LawCase es el software legal diseñado para abogados modernos. Probá la beta abierta gratis.",
  openGraph: {
    title: "LawCase - Transformá tu Gestión Legal",
    description: "Plataforma digital para abogados. Organizá casos, documentos y calendarios. Beta abierta y gratuita.",
    url: "https://lawcase.app",
    images: [
      {
        url: "/assets/hero-image.svg",
        width: 1200,
        height: 630,
        alt: "LawCase Dashboard",
      },
    ],
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "LawCase",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "description": "Beta abierta gratuita"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "127"
  },
  "description": "Plataforma digital para la gestión de casos legales, documentos y tareas jurídicas",
  "url": "https://lawcase.app",
  "image": "https://lawcase.app/assets/hero-image.svg",
  "provider": {
    "@type": "Organization",
    "name": "LawCase",
    "url": "https://lawcase.app",
    "logo": "https://lawcase.app/logo.png",
    "sameAs": [
      "https://linkedin.com/company/lawcase",
      "https://discord.gg/kEmHYQ6S"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "lawcaseapp@gmail.com",
      "contactType": "Customer Support",
      "availableLanguage": ["Spanish", "English"]
    }
  }
}

export default function Home() {
  return (
    <>
      <JsonLd data={structuredData} />
      <Header />
      <Stack sx={{ width: "100%" }}>
        <LandingHero />
        <Description />
        <FeaturesView />
        <Demo />
        <CtaFinal />
        <Footer />
      </Stack>
    </>
  )
}