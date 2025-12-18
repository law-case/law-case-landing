"use client"

import { useState } from "react"
import { Box, Button, Input, Typography } from "@mui/material"
import CustomSnackbar from "@/src/components/CustomSnackbar"

interface SubscriptionInputProps {
  variant?: "light" | "dark"
}

const SubscriptionInput: React.FC<SubscriptionInputProps> = ({ variant = "dark" }) => {
  const [email, setEmail] = useState("")
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error" | "info"
  })

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false })
  }

  const handleSubscribe = async () => {
    // Regex from OWASP validation patterns to prevent ReDoS.
    if (
      !email ||
      !/^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/.test(email)
    ) {
      setSnackbar({
        open: true,
        message: "Por favor, ingresa un correo electrónico válido.",
        severity: "error"
      })
      return
    }

    const rawScriptURL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL

    try {
      // Limpiamos la URL para remover comillas que pueden venir del archivo .env
      const cleanScriptURL = rawScriptURL?.replace(/"/g, "") || ""

      const response = await fetch(cleanScriptURL, {
        method: "POST",
        redirect: "follow",
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify({ email })
      })

      const data = await response.json()

      if (data.result === "success") {
        setSnackbar({
          open: true,
          message: "¡Gracias por suscribirte! Te mantendremos informado.",
          severity: "success"
        })
        setEmail("")
      } else if (data.result === "already_subscribed") {
        setSnackbar({
          open: true,
          message: "Este correo electrónico ya se encuentra suscrito.",
          severity: "info"
        })
      } else {
        throw new Error(data.message || "Falló la solicitud de suscripción.")
      }
    } catch (error) {
      console.error("Error al suscribir:", (error as Error).message)
      setSnackbar({
        open: true,
        message: "Ocurrió un error al suscribirte. Por favor, intenta de nuevo más tarde.",
        severity: "error"
      })
    }
  }

  return (
    <Box sx={{ width: "100%", maxWidth: { xs: 300, sm: 400 } }}>
      <CustomSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
      />
      <Box display="flex" gap={1} flexDirection={{ xs: "column", sm: "row" }}>
        <Input
          placeholder="Tu correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            flex: 1,
            bgcolor: variant === "light" ? "white" : "rgba(255, 255, 255, 0.9)",
            px: 1.5,
            py: 0.5,
            borderRadius: 1,
            fontSize: "14px",
            color: "black"
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
            fontSize: { xs: "12px", sm: "14px" },
            lineHeight: "100%",
            letterSpacing: "0%",
            textTransform: "capitalize",
            px: 3,
            "&:hover": {
              bgcolor: "secondary.dark"
            }
          }}
        >
          Suscribirme
        </Button>
      </Box>
      <Typography
        variant="caption"
        sx={{
          color: variant === "light" ? "rgba(255, 255, 255, 0.8)" : "white",
          display: "block",
          mt: 1,
          fontSize: "12px",
          textAlign: "center"
        }}
      >
        Mantente informado sobre novedades y actualizaciones
      </Typography>
    </Box>
  )
}

export default SubscriptionInput
