import { Box, Divider, Paper, Stack, Typography } from "@mui/material"

import { cardContaninerStyle, contentCardsStyle, titleCardsStyle } from "../FeaturesView.styles"

interface FeaturesViewProps {
  icon?: JSX.Element
  title?: string
  content?: string
}

const FeaturesCard: React.FC<FeaturesViewProps> = ({ icon, title, content }) => {
  return (
    <Paper sx={cardContaninerStyle} elevation={5}>
      <Box
        sx={{
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: { xs: "1.5rem", sm: 0, md: 0, lg: 0 }
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={{ xs: "center", sm: "flex-start", md: "center", lg: "center" }}
          spacing={{ xs: 5, sm: 2, md: 1, lg: 2 }}
          px={{ sx: 2, sm: 1, md: 0, lg: 0 }}
        >
          <Box display="flex" color="secondary.light">
            {icon}
          </Box>
          <Typography sx={titleCardsStyle}>{title}</Typography>
        </Stack>
        <Divider
          sx={{
            margin: { sx: "1rem 0", sm: "0.5rem 0", md: "0.5rem 0", lg: "0.5rem 0" },
            borderColor: "white"
          }}
        />
        <Typography sx={contentCardsStyle}>{content}</Typography>
      </Box>
    </Paper>
  )
}

export default FeaturesCard
