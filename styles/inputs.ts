import { Components, Theme } from "@mui/material"

/**
 * Sobrescribe propiedades del input de MUI
 */
const textField: Components<Theme>["MuiTextField"] = {
  styleOverrides: {
    root: () => ({})
  },
  variants: [
    {
      props: { variant: "outlined" },
      style: ({ theme }) => ({
        "& label": {
          color: theme.palette.secondary.light,
          "&.Mui-focused": {
            color: theme.palette.secondary.main
          },
          "&.Mui-disabled": {
            color: theme.palette.secondary.light
          }
        },
        "& .MuiOutlinedInput-root.Mui-disabled .MuiInputBase-input": {
          WebkitTextFillColor: theme.palette.secondary.light
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: theme.palette.primary.light
        },
        "& .MuiOutlinedInput-root": {
          color: theme.palette.secondary.light,
          "& fieldset": {
            color: theme.palette.secondary.light,
            borderColor: theme.palette.secondary.light
          },
          "&:hover fieldset": {
            borderColor: theme.palette.primary.light
          },
          "&.Mui-focused fieldset": {
            borderColor: theme.palette.secondary.main
          },
          "&.Mui-disabled fieldset": {
            borderColor: theme.palette.secondary.light
          }
        }
      })
    }
  ]
}

export { textField }
