"use client"

import { Stack, Typography } from "@mui/material"
import theme from "@/styles/theme"

const LandingTestimonies = () => {
  return (
    <Stack
      component="section"
      justifyContent="flex-start"
      alignItems="center"
      sx={{
        pt: 5,
        width: "100%",
        height: "100vh",
        background: `URL(/assets/testimonies-bg-wave.svg), URL(/assets/testimonies-bg-wave-2.svg) ${theme.palette.primary.dark}`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        "& .MuiTypography-root": {
          color: "primary.contrastText"
        }
      }}
    >
      <Typography variant="h3" fontWeight="bold" align="center">
        ¿Qué dicen nuestros usuarios?
      </Typography>
      <Typography variant="h6" align="center" maxWidth={600} mt={2} p={1}>
        Descubre cómo LawCase (beta) ha transformado la forma en que los estudios jurídicos
        gestionan sus casos, optimizan sus procesos y fortalecen la relación con sus clientes. Estas
        experiencias reales reflejan el impacto positivo que nuestra plataforma tiene en el día a
        día de profesionales del derecho.
      </Typography>
    </Stack>
  )
}

export default LandingTestimonies
