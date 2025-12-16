"use client"

import {
  AccessTimeOutlined,
  EventAvailableOutlined,
  FolderOutlined,
  GroupsOutlined,
  MobileFriendlyOutlined,
  VerifiedUserOutlined
} from "@mui/icons-material"
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material"

import DeviceImage from "./components/DeviceImage"
import FeatureCardsList from "./components/FeatureCardsList"
import FeaturesCarousel from "./components/FeaturesCarousel"
import { pageContainerStyle, titlePagesStyle } from "./FeaturesView.styles"

const featuresContent = [
  {
    icon: (
      <EventAvailableOutlined
        sx={{ fontSize: { xs: "50px", sm: "35px", md: "35px", lg: "35px" } }}
      />
    ),
    title: "Tu asistente personal legal",
    content:
      "Recibí recordatorios automáticos sobre tareas pendientes, plazos y actividades importantes. Nunca más pierdas una fecha clave."
  },
  {
    icon: (
      <MobileFriendlyOutlined
        sx={{ fontSize: { xs: "50px", sm: "35px", md: "35px", lg: "35px" } }}
      />
    ),
    title: "Accedé a tu estudio jurídico desde donde esté",
    content:
      "LawCase (beta) es una app web multi-dispositivo, diseñada para que puedas trabajar desde tu computadora, tablet o celular, en cualquier momento y lugar."
  },
  {
    icon: <GroupsOutlined sx={{ fontSize: { xs: "50px", sm: "35px", md: "35px", lg: "35px" } }} />,
    title: "Escalá tu estudio sin perder el control",
    content:
      "LawCase (beta) se adapta al crecimiento de tu estudio. Ya seas independiente o parte de un equipo más grande, la plataforma te permite escalar tu gestión sin perder de vista ningún detalle."
  },
  {
    icon: (
      <AccessTimeOutlined sx={{ fontSize: { xs: "50px", sm: "35px", md: "35px", lg: "35px" } }} />
    ),
    title: "Ahorrá tiempo y enfocáte en tus clientes",
    content:
      "LawCase (beta) te permite dejar de lado tareas repetitivas y administrativas para dedicarte a lo que realmente importa: construir relaciones de confianza con tus clientes."
  },
  {
    icon: <FolderOutlined sx={{ fontSize: { xs: "50px", sm: "35px", md: "35px", lg: "35px" } }} />,
    title: "Gestión centralizada y sin papeles",
    content:
      "Organizá causas, tareas, documentos y contactos desde una única plataforma intuitiva. Sin más desorden, sin papelerío."
  },
  {
    icon: (
      <VerifiedUserOutlined sx={{ fontSize: { xs: "50px", sm: "35px", md: "35px", lg: "35px" } }} />
    ),
    title: "Privacidad y seguridad garantizadas",
    content:
      "Protegemos tu información con los más altos estándares de seguridad para asegurar la confidencialidad de cada caso y cada cliente."
  }
]

/**
 * Componente principal de la vista de características.
 */
const FeaturesView = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")) // Detecta pantallas móviles (<= 600px)
  const isTablet = useMediaQuery(theme.breakpoints.between("xs", "md")) // Detecta pantallas entre xs y sm

  return (
    <Stack id="features" sx={pageContainerStyle}>
      <Box>
        <Typography sx={titlePagesStyle}>Toda tu actividad legal en una sola plataforma</Typography>
      </Box>
      {isMobile ? (
        <FeaturesCarousel features={featuresContent} />
      ) : (
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={5}>
          <FeatureCardsList features={featuresContent} start={0} end={3} />
          {!isTablet && <DeviceImage />}
          <FeatureCardsList features={featuresContent} start={3} end={6} />
        </Stack>
      )}
    </Stack>
  )
}

export default FeaturesView
