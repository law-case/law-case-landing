"use client"

import { AppBar, Box, Button, Container, Slide, Toolbar, Typography } from "@mui/material"
import Link from "next/link"
import Image from "next/image"
import Logo from "@/components/Logo"
import { useScrollDirection } from '../hooks/useScrollDirection'

const Header = () => {
  const { scrollDir, isAtTop } = useScrollDirection({ threshold: 5 })
  const isVisible = scrollDir === "up"

  return (
    <Slide appear={false} direction="down" in={isVisible}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: isAtTop ? "transparent" : "primary.dark",
          boxShadow: isAtTop ? "none" : "0px 2px 4px rgba(0, 0, 0, 0.1)",
          backdropFilter: isAtTop ? "blur(10px)" : "none",
          transition: "background-color 600ms ease, box-shadow 600ms ease",
          zIndex: 1100
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              minHeight: 64,
              px: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            {/* Izquierda: Logo maletín y logotipo LAWCASE */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flex: "0 0 auto"
              }}
            >
              <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
                <Logo
                  size={{ xs: 30, sm: 35, md: 40 }}
                  sx={{ mr: 2, cursor: "pointer" }}
                />
              </Link>
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
              style={{ width: "60%", cursor: "pointer", marginBottom: 0 }}
                    />
                  </Link>
                </Box>
            </Box>

            {/* Centro: Espacio vacío para simetría */}
            <Box sx={{ flex: 1 }} />

            {/* Derecha: Ayuda y botón Ingresar */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: 1.5, sm: 3 },
                flex: "0 0 auto"
              }}
            >
              <Link href={`${process.env.NEXT_PUBLIC_APP_URL}/faq`} style={{ textDecoration: "none" }}>
                <Typography
                  variant="body1"
                  sx={{
                    cursor: "pointer",
                    color: "primary.contrastText",
                    fontWeight: 400,
                    fontSize: { xs: "0.875rem", sm: "15px" },
                    "&:hover": {
                      textDecoration: "underline"
                    }
                  }}
                >
                  Ayuda
                </Typography>
              </Link>
              <Link href={`${process.env.NEXT_PUBLIC_APP_URL}/auth/login`} style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "secondary.main",
                    color: "black",
                    fontWeight: 500,
                    fontSize: { xs: "0.75rem", sm: "0.875rem" },
                    px: { xs: 2, sm: 3 },
                    py: { xs: 0.5, sm: 1 },
                    textTransform: "none",
                    borderRadius: 1,
                    "&:hover": {
                      bgcolor: "secondary.dark"
                    }
                  }}
                >
                  Ingresar
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  )
}

export default Header
