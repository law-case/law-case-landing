"use client"

import { Stack, Typography } from "@mui/material"
import theme from "@/styles/theme"
import SubscriptionInput from "@/src/components/SubscriptionInput"

const LandingHero = () => {
  return (
    <Stack
      component="section"
      direction={{ xs: "column", sm: "row" }}
      justifyContent="flex-start"
      sx={{
        marginTop: 0,
        pt: 0,
        width: "100%",
        height: "100vh",
        background: `URL(/assets/hero-bg-law-image.svg), URL(/assets/hero-bg-wave-image.svg) ${theme.palette.primary.main}`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        position: "relative"
      }}
      spacing={{ xs: 1, sm: 0 }}
    >
      <Stack
        spacing={{ xs: 2, sm: 5 }}
        justifyContent="center"
        sx={{
          p: { xs: 1, sm: 0 },
          pl: { xs: 1, sm: 10, lg: 30 },
          maxWidth: { xs: "100%", sm: "50%" },
          height: { sm: "100vh" },
          pt: {
            xs: 12,
            sm: 0
          }
        }}
      >
        <Typography
          data-aos="fade-up"
          data-aos-delay="100"
          variant="h4"
          color="primary.contrastText"
          fontWeight="bold"
          sx={{
            justifyContent: "flex-start",
            textAlign: { xs: "center", sm: "left" },
            fontSize: {
              xs: "1.4rem",
              sm: "1.5rem",
              md: "2rem",
              lg: "2.5rem"
            },
            "@media (min-width: 200px) and (max-width: 400px)": {
              fontSize: "20px"
            },
            mt: 0,
            width: { xs: "100%", sm: "65%", md: "100%" }
          }}
        >
          Organiza tus procesos legales desde una sola plataforma.
        </Typography>
        <Typography
          data-aos="fade-up"
          data-aos-delay="200"
          variant="h6"
          color="primary.contrastText"
          sx={{
            textAlign: { xs: "center", sm: "left" },
            fontSize: {
              xs: ".8rem",
              sm: "1rem"
            },
            width: { xs: "100%", sm: "55%", md: "90%" }
          }}
        >
          Sé parte ahora mismo de la beta abierta de <strong>LawCase: </strong>gestioná tus casos
          judiciales de forma ágil, segura y centralizada. Ayudanos a construir hoy la herramienta
          legal del futuro.
        </Typography>
        <Stack
          direction="row"
          spacing={{ xs: 1, sm: 3 }}
          justifyContent={{ xs: "center", sm: "start" }}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <SubscriptionInput variant="light" />
        </Stack>
      </Stack>
      <Stack
        sx={{
          position: { sm: "absolute" },
          paddingTop: { xs: "50px", sm: 0 },
          top: { sm: "50%" },
          transform: { xs: "translateY(0%)", sm: "translateY(-50%)" },
          width: { xs: "90%", sm: "40%", lg: "35%" },
          marginTop: { xs: "20px", sm: 0 },
          alignSelf: { xs: "flex-end", sm: "auto" },
          mr: { xs: 1, sm: 0 },
          right: 0
        }}
      >
        <img
          data-aos="fade-left"
          data-aos-delay="400"
          src="/assets/hero-image.svg"
          alt="Imagen demostrativa de la interfaz de la aplicacion"
          style={{
            width: "100%",
            height: "auto"
          }}
        />
      </Stack>
    </Stack>
  )
}

export default LandingHero
