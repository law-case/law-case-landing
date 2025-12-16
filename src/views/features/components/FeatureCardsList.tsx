import { Box, Stack } from "@mui/material"
import React from "react"

import FeaturesCard from "./FeaturesCard"

interface FeaturesCardListProps {
  features: Feature[]
  start: number
  end: number
}

interface Feature {
  icon: React.ReactElement
  title: string
  content: string
}

const FeatureCardsList: React.FC<FeaturesCardListProps> = ({ features, start, end }) => {
  return (
    <Stack justifyContent="center" alignItems="center" spacing={10}>
      {features.slice(start, end).map((feature, index) => (
        <Box key={index} sx={{ width: "100%", maxWidth: { xs: 400, md: 450, lg: 450 } }}>
          <FeaturesCard icon={feature.icon} title={feature.title} content={feature.content} />
        </Box>
      ))}
    </Stack>
  )
}

export default FeatureCardsList
