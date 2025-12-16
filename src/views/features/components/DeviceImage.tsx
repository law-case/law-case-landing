import { Paper } from "@mui/material"

/**
 * Componente que renderiza una imagen de dispositivo dentro de un contenedor estilizado.
 */
const DeviceImage = () => {
  return (
    <Paper
      sx={{
        width: "321px",
        height: "655px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
        borderRadius: "20px",
        overflow: "hidden"
      }}
    >
      <img
        src="/Generic Phone 1.png"
        alt="Device"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain"
        }}
      />
    </Paper>
  )
}

export default DeviceImage
