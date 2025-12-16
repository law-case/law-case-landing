"use client"

import { Box, Stack, Typography } from "@mui/material"

export const Description = () => {
  return (
    <Stack
      sx={{
        backgroundImage: `url(/assets/descriptionBg.svg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "auto",
        display: "flex",
        paddingBottom: 4,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 3
      }}
    >
      <Typography
        variant="h4"
        sx={{ color: "primary.contrastText", fontWeight: "bold", marginTop: { xs: 6, sm: 4 } }}
      >
        ¿Qué es LawCase (beta)?
      </Typography>
      <Typography
        variant="h6"
        sx={{ color: "primary.contrastText", width: { xs: "80%", sm: "40%" }, textAlign: "center" }}
      >
        El derecho está cambiando y los abogados enfrentan el desafío de adaptarse a nuevas formas
        de trabajo.
      </Typography>
      <Box sx={{ display: "flex", gap: 1, width: { xs: "80%", sm: "40%" } }}>
        <Typography variant="h6" sx={{ color: "primary.contrastText", textAlign: "center" }}>
          <strong>LawCase (beta)</strong> nace para acompañar esa transformación: una plataforma
          legal diseñada para la gestión digital de casos, que hoy lanzamos en beta abierta para que
          pruebes y seas parte del cambio.
        </Typography>
      </Box>
      <Box
        sx={{
          marginX: { xs: 2, sm: 0 },
          backgroundColor: "black",
          paddingTop: { xs: 1, sm: 2 },
          paddingBottom: 0.5,
          paddingX: 0.5,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          boxShadow: "43px 58px 84px 11px rgba(0,0,0,0.6)"
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row", gap: 1, marginLeft: 2, marginBottom: 1 }}>
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "grey"
            }}
          />
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "grey"
            }}
          />
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "grey"
            }}
          />
        </Box>
        <img src="/assets/descriptionImg.svg" alt="" width="100%" height="100%" />
      </Box>
    </Stack>
  )
}
