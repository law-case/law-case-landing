"use client"

import LinkedInIcon from "@mui/icons-material/LinkedIn"
import { Box, Stack, Typography } from "@mui/material"
import Link from "next/link"
import DiscordIcon from "@/components/DiscordIcon"
import theme from "@/styles/theme"
import SubscriptionInput from "@/src/components/SubscriptionInput"

export const CtaFinal = () => {
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      gap={6}
      sx={{
        height: "auto",
        background: `URL(/assets/testimonies-bg-wave.svg), URL(/assets/testimonies-bg-wave-2.svg) ${theme.palette.primary.main}`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        position: "relative",
        paddingBottom: 4
      }}
    >
      <Box
        data-aos="fade-up"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          width: { xs: "80%", sm: "40%" },
          alignItems: "center"
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "primary.contrastText",
            fontWeight: "bold",
            marginTop: { xs: 6, sm: 4 },
            textAlign: "center"
          }}
        >
          Ingresá a nuestra beta abierta y transformá tu gestión legal
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "primary.contrastText",
            width: { xs: "80%", sm: "100%", md: "90%" },
            textAlign: "center"
          }}
        >
          Estamos construyendo la próxima generación de herramientas para la gestión legal, y
          queremos hacerlo con vos. Probá LawCase en su versión beta, explorá sus funciones y
          compartinos tu feedback para ayudarnos a mejorar.
        </Typography>
        <SubscriptionInput variant="light" />
      </Box>

      <Box
        data-aos="fade-up"
        data-aos-delay="200"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          width: { xs: "80%", sm: "40%" },
          alignItems: "center"
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "primary.contrastText",
            width: { xs: "80%", sm: "100%", md: "90%" },
            textAlign: "center",
            fontSize: 12
          }}
        >
          Sumate a la comunidad en <strong>Discord</strong> para conocer novedades, compartir
          feedback y acceder al soporte técnico, o seguinos en <strong>LinkedIn</strong> para estar
          al tanto de proximas actualizaciones.
        </Typography>
        <Box
          display="flex"
          gap={3}
          sx={{
            opacity: 0.8,
            px: 2,
            py: 1,
            borderRadius: 2
          }}
        >
          <Link href={process.env.NEXT_PUBLIC_LINKEDIN_URL} target="_blank">
            <LinkedInIcon
              sx={{
                fontSize: 40,
                color: "white",
                cursor: "pointer",
                "&:hover": { color: "secondary.main" }
              }}
            />
          </Link>
          <Link href={process.env.NEXT_PUBLIC_DISCORD_URL} target="_blank">
            <DiscordIcon width={"40px"} height={"40px"} color={"white"} />
          </Link>
        </Box>
      </Box>
      <Typography
        data-aos="fade-up"
        data-aos-delay="400"
        variant="h6"
        sx={{
          color: "primary.contrastText",
          textAlign: "center",
          fontSize: { xs: "0.6rem", sm: "0.7rem" }
        }}
      >
        La beta es gratuita y de acceso limitado. Unite ahora y asegurá tu lugar.
      </Typography>
    </Stack>
  )
}
