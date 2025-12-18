"use client"

import { Stack, Typography } from "@mui/material"
import theme from "@/styles/theme"

export const Demo = () => {
  return (
    <Stack
      id="demo"
      sx={{
        background: `URL(/assets/descriptionBg.svg), URL(/assets/demoBg.svg)`,
        backgroundColor: theme.palette.primary.main,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "auto",
        paddingBottom: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 3
      }}
    >
      <Typography
        data-aos="fade-up"
        align="center"
        variant="h4"
        sx={{ color: "common.white", fontWeight: "bold", marginTop: 4 }}
      >
        Sumate a la beta y transformá tu gestión legal
      </Typography>
      <Typography
        data-aos="fade-up"
        data-aos-delay="100"
        variant="h6"
        color="primary.contrastText"
        sx={{ textAlign: "center", width: { xs: "80%", sm: "40%" } }}
      >
        Mirá cómo funciona LawCase y conocé de primera mano las herramientas que ya podés probar en
        nuestra beta abierta. Tu feedback será clave para mejorar la experiencia y construir juntos
        la plataforma legal del mañana.
      </Typography>
      {/* Contenedor responsivo para mantener relación de aspecto 16:9 */}
      <Stack
        data-aos="zoom-in"
        data-aos-delay="200"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          width: { xs: "90%", md: "60%" },
          paddingTop: "20px"
        }}
      >
        <iframe
          style={{ width: 720, height: 405, maxWidth: "100%" }}
          src="https://www.youtube.com/embed/eM5ygU296es?si=vYy_4i5gYj5k_Z7x?autoplay=1&mute=1&loop=1?rel=0&modestbranding=1&&showinfo=0&iv_load_policy=3&fs=0"
          title="Video de demostración de LawCase (beta)"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </Stack>
    </Stack>
  )
}
