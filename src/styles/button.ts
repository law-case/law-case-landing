import { Components, Theme } from "@mui/material"

/**
 * Sobrescribe propiedades del botón de MUI
 */
const button: Components<Theme>["MuiButton"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      textTransform: "capitalize",
      borderRadius: 10
    })
  },
  variants: [
    {
      props: { variant: "outlined" },
      style: ({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.light,
        border: `1px solid ${theme.palette.secondary.light}`,
        "&:hover": {
          backgroundColor: theme.palette.primary.dark,
          border: `1px solid ${theme.palette.secondary.main}`
        },
        "&:active": {
          backgroundColor: theme.palette.primary.light
        }
      })
    }
  ]
}

export default button
