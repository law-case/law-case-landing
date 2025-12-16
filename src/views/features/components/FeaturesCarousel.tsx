"use client"

import { useEffect, useState } from "react"
import { Box, Stack } from "@mui/material"

import FeaturesCard from "./FeaturesCard"

interface Feature {
  icon: JSX.Element
  title: string
  content: string
}

interface FeaturesCarouselProps {
  features: Feature[]
}

const FeaturesCarousel: React.FC<FeaturesCarouselProps> = ({ features }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length)
    }, 7000) // timer para el cambio de cards automatico

    return () => clearInterval(interval)
  }, [features.length])

  // Manejo de navegación manual
  const handleNavigation = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <Stack alignItems="center" spacing={10} sx={{ width: "100%", maxWidth: 400 }}>
      <Box sx={{ width: "100%", height: "500px", display: "flex", justifyContent: "center" }}>
        <FeaturesCard
          icon={features[currentIndex].icon}
          title={features[currentIndex].title}
          content={features[currentIndex].content}
        />
      </Box>

      <Stack direction="row" spacing={4}>
        {features.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 16, // Ancho del círculo
              height: 16, // Alto del círculo
              borderRadius: "50%", // Forma circular
              backgroundColor: index === currentIndex ? "#7077A1" : "#2D3250", // Fondo según estado
              border: index === currentIndex ? "none" : "1px solid #7077A1", // Contorno solo para los no seleccionados
              transition: "background-color 0.3s ease, border 0.3s ease",
              cursor: "pointer"
            }}
            onClick={() => handleNavigation(index)}
          />
        ))}
      </Stack>
    </Stack>
  )
}

export default FeaturesCarousel
