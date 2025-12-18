"use client"

import { AppBar, Box, Toolbar } from "@mui/material"
import Link from "next/link"
import Image from "next/image"
import Logo from "@/components/Logo"

const Header = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        backdropFilter: "blur(10px)",
        zIndex: 1100
      }}
    >
      <Toolbar sx={{ justifyContent: "flex-start", px: { xs: 2, sm: 4, md: 8 } }}>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="flex-start"
          gap={1}
        >
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
            <Logo
              size={{ xs: 40, sm: 40, md: 45 }}
              sx={{ display: "block", cursor: "pointer" }}
            />
          </Link>
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
            <Image
              src="/logo.png"
              alt="LawCase Logo"
              width={120}
              height={40}
              style={{ width: "auto", height: "30px", cursor: "pointer" }}
            />
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
