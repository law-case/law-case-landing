"use client"

import { createTheme } from "@mui/material/styles"
import button from "./button"
import palette from "./palette"
import typography from "./typography"

/**
 * Personalización del tema global de MUI
 */
const theme = createTheme({
  palette,
  typography,
  components: {
    MuiButton: button
  }
})

export default theme
