"use client"

import { useState } from "react"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import { Box, Container, Typography, Stack } from "@mui/material"
import Link from "next/link"
import Image from "next/image"
import Logo from "@/components/Logo"
import CustomSnackbar from "@/src/components/CustomSnackbar"
import DiscordIcon from "@/components/DiscordIcon"

const Footer = () => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error" | "info"
  })

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false })
  }

  return (
    <Box component="footer" sx={{ bgcolor: "#2D3250", color: "white", pt: 4, pb: 3 }}>
      <CustomSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
      />
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          sx={{ flexWrap: "wrap" }}
        >
          {/* Logo y tagline */}
          <Box sx={{ flex: { xs: "1 1 100%", md: "1 1 25%" } }}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems={{ xs: "center", md: "flex-start" }}
            >
              <Box
                display="flex"
                flexDirection={{ xs: "column", md: "row" }}
                alignItems="center"
                justifyContent={{ xs: "center", md: "flex-start" }}
                mb={0}
              >
                <Box p={0}>
                  <Link href="/" style={{ textDecoration: "none" }}>
                    <Logo
                      size={{ xs: 144, sm: 144, md: 40 }}
                      sx={{ display: "block", cursor: "pointer" }}
                    />
                  </Link>
                </Box>
                <Box
                  sx={{
                    alignText: {xs: "center", lg: "left"},
                    lineHeight: 1.8,
                    textDecoration: "underline",
                    textDecorationThickness: 2,
                    textDecorationStyle: "solid",
                    textUnderlineOffset: 0,

                  }}
                >
                  <Link href="/" style={{ textDecoration: "none" }}>
                    <Image
                      src="/logo.png"
                      alt="LawCase Logo"
                      width={220}
                      height={60}
                      sx={{ width: "60%",  cursor: "pointer", marginButton: "40%" }}
                    />
                  </Link>
                </Box>
              </Box>
              <Typography
                sx={{
                  color: "#D8D8D8",
                  textAlign: { xs: "center", md: "left" },
                  m: 2,
                  fontSize: { xs: "24px", md: "20px" },
                  fontWeight: 200
                }}
              >
                Simplifica tu trabajo,
                <br />
                fortalece tus resultados
              </Typography>
              {/* Iconos de redes sociales */}
              <Box
                display="flex"
                gap={3}
                sx={{
                  backgroundColor: "primary.main",
                  opacity: 0.8,
                  px: 2,
                  py: 1,
                  borderRadius: 2
                }}
              >
                <Link href="https://linkedin.com/company/lawcase" target="_blank">
                  <LinkedInIcon
                    sx={{
                      fontSize: 24,
                      color: "white",
                      cursor: "pointer",
                      "&:hover": { color: "secondary.main" }
                    }}
                  />
                </Link>
                <Link href="https://discord.gg/kEmHYQ6S" target="_blank">
                  <DiscordIcon width={"24px"} height={"24px"} color={"white"} />
                </Link>
              </Box>
            </Box>
          </Box>

          {/* Contacto */}
          <Box sx={{ flex: { xs: "1 1 100%", md: "1 1 25%" } }}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems={{ xs: "center", md: "flex-start" }}
            >
              <Typography variant="h6" sx={{ color: "white" }}>
                Contacto
              </Typography>
              <Link
                href="mailto:lawcaseapp@gmail.com"
                style={{
                  color: "#D8D8D8",
                  textDecoration: "none",
                  fontSize: 14
                }}
              >
                lawcaseapp@gmail.com
              </Link>
            </Box>
          </Box>

          {/* Enlaces */}
          <Box sx={{ flex: { xs: "1 1 100%", md: "1 1 25%" } }}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems={{ xs: "center", md: "flex-start" }}
            >
              <Typography variant="h6" sx={{ mb: 0, color: "white", fontWeight: "bold" }}>
                Enlaces
              </Typography>
              <Box
                display="flex"
                flexDirection="column"
                gap={1}
                alignItems={{ xs: "center", sm: "center", md: "flex-start" }}
              >
                <Link
                  href="https://lawcase.app/terms"
                  style={{
                    color: "#D8D8D8",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: "400px"
                  }}
                >
                  Términos y condiciones
                </Link>
                <Link
                  href="https://lawcase.app/faq"
                  style={{
                    color: "#D8D8D8",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: "400px"
                  }}
                >
                  Ayuda
                </Link>
              </Box>
            </Box>
          </Box>

          {/* Subscríbete ahora */}
          {/* <Box sx={{ flex: { xs: "1 1 100%", md: "1 1 25%" } }}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems={{ xs: "center", md: "right" }}
            >
              <Typography
                sx={{
                  ml:0,
                  color: "white",
                  fontWeight: "bold",
                  fontSize: { xs: "20px", md: "16px" }
                }}
              >
                Subscríbete ahora
              </Typography>
              <Box sx={{ width: "100%", maxWidth: 280 }}>
                <Box display="flex" gap={1}>
                  <Input
                    placeholder="Tu correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{
                      flex: 1,
                      bgcolor: "white",
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 1,
                      fontSize: "14px"
                    }}
                  />
                  <Button
                    variant="contained"
                    onClick={handleSubscribe}
                    sx={{
                      bgcolor: "secondary.main",
                      color: "black",
                      fontFamily: "Inter",
                      fontWeight: 400,
                      fontSize: "10px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      textTransform: "capitalize",
                      "&:hover": {
                        bgcolor: "secondary.dark"
                      }
                    }}
                  >
                    Enviar
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box> */}
        </Stack>

        {/* Copyright */}
        <Box
          sx={{ textAlign: "center", mt: 4, pt: 3, borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          <Typography sx={{ color: "white", fontSize: "14px" }}>
            © 2025 LawCase (beta). Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
