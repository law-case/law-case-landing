"use client"

import React from "react"
import MuiAlert, { AlertColor } from "@mui/material/Alert"
import Snackbar from "@mui/material/Snackbar"

interface CustomSnackbarProps {
  open: boolean
  message: string
  severity?: AlertColor // "success" | "error" | "info" | "warning"
  onClose: () => void
  autoHideDuration?: number
}

const CustomSnackbar: React.FC<CustomSnackbarProps> = ({
  open,
  message,
  severity = "success",
  onClose,
  autoHideDuration = 5000
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
    >
      <MuiAlert
        elevation={6}
        variant="filled"
        onClose={onClose}
        severity={severity}
        sx={{ width: "100%", fontSize: "0.8rem" }}
      >
        {message}
      </MuiAlert>
    </Snackbar>
  )
}

export default CustomSnackbar
