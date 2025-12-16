import { Stack } from "@mui/material"
import LandingHero from "@/src/views/LandingHero"
import { Description } from "@/src/views/Description"
import { Demo } from "@/src/views/Demo"
import { CtaFinal } from "@/src/views/CtaFinal"
import FeaturesView from "@/src/views/features/FeaturesView"
import LandingTestimonies from "@/src/views/LandingTestimonies"

export default function Home() {
  return (
    <Stack sx={{ width: "100%" }}>
      <LandingHero />
      <Description />
      <FeaturesView />
      <LandingTestimonies />
      <Demo />
      <CtaFinal />
    </Stack>
  )
}