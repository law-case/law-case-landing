import { Components, Theme } from "@mui/material"

/**
 * Sobrescribe propiedades del botón de MUI
 */
const button: Components["MuiButton"] = {
  styleOverrides: {
    root: {
      variants: [
        {
          props: { variant: "outlined" },
          style: ({ theme }: { theme: Theme }) => ({
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.secondary.light,
            textTransform: "capitalize",
            borderRadius: 10,
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
  }
}

export default button
