import { SxProps, Theme } from "@mui/material"

const cardContaninerStyle: SxProps<Theme> = {
  backgroundColor: "primary.dark",
  backgroundImage: "linear-gradient(rgba(112, 119, 161, 0.2), rgba(45, 50, 80, 0.2))", // Gradiente con opacidad
  borderRadius: { xs: "40px", lg: "30px" },
  display: "flex",
  flexDirection: "column",
  px: { xs: "1rem", sm: "0.1rem", md: "0.1rem", lg: "2rem" },
  py: { xs: "2rem", sm: "0.5rem", md: "0.5rem", lg: "0.5rem" },
  minHeight: {
    sm: "240px",
    md: "220px",
    lg: "180px"
  },
  maxHeight: {
    xs: "400px",
    sm: "100%"
  },
  maxWidth: {
    xs: "400px",
    lg: "400px"
  }
}

const titleCardsStyle: SxProps<Theme> = {
  color: "secondary.light",
  justifyContent: { md: "center" },
  fontSize: {
    xs: "24px",
    sm: "0.9rem",
    md: "0.9rem",
    lg: "0.9rem"
  },
  fontWeight: {
    xs: "semi-bold",
    lg: "normal"
  },
  fontStyle: {
    xs: "italic",
    sm: "normal",
    md: "normal",
    lg: "normal"
  },
  lineHeight: {
    xs: "1.3",
    sm: "1.4",
    md: "1.3",
    lg: "1.3"
  },
  maxWidth: {
    xs: "100%",
    sm: "210px",
    md: "210px",
    lg: "210px"
  }
}

const contentCardsStyle: SxProps<Theme> = {
  color: "secondary.light",
  justifyContent: { md: "center" },
  fontSize: {
    xs: "20px",
    sm: "0.8rem",
    md: "0.8rem",
    lg: "0.8rem"
  },
  fontWeight: {
    xs: "light",
    lg: "light"
  },
  fontStyle: {
    xs: "italic",
    sm: "normal",
    md: "normal",
    lg: "normal"
  },
  maxWidth: {
    xs: "100%",
    sm: "100%",
    md: "300px",
    lg: "300px"
  },
  px: {
    xs: 2,
    sm: 2,
    md: 0,
    lg: 0
  }
}

const titlePagesStyle: SxProps<Theme> = {
  color: "secondary.light",
  fontSize: {
    xs: "2.5rem",
    sm: "2rem",
    md: "2rem",
    lg: "2rem"
  },
  fontStyle: {
    xs: "italic",
    sm: "normal",
    md: "normal",
    lg: "normal"
  },
  fontWeight: "bold",
  textAlign: "center",
  width: {
    xs: "395px",
    sm: "350px",
    md: "350px",
    lg: "350px"
  }
}

const pageContainerStyle: SxProps<Theme> = {
  justifyContent: { xs: "center ", sm: "center", md: "center", lg: "center" },
  alignItems: {
    xs: "center",
    sm: "center",
    md: "center",
    lg: "center"
  },
  component: "main",
  gap: 5,
  py: { sx: 6, sm: 2, md: 1, lg: 2 },
  px: { sx: 2, sm: 2, md: 1, lg: 2 },
  minHeight: "100vh",
  backgroundColor: "primary.dark",
  backgroundImage: `
        url('/featureImage1.png'), 
        url('/featureImage2.png')
      `,
  backgroundSize: "cover, cover, cover",
  backgroundPosition: "center, center, center",
  backgroundRepeat: "no-repeat, no-repeat, no-repeat"
}

export {
  cardContaninerStyle,
  contentCardsStyle,
  titleCardsStyle,
  titlePagesStyle,
  pageContainerStyle
}
