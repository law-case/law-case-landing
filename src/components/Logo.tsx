"use client"

import { Box, SxProps, Theme } from "@mui/material"

interface LogoProps {
  size:
    | number
    | {
        xs?: string | number
        sm?: string | number
        md?: string | number
        lg?: string | number
        xl?: string | number
      }
  sx?: SxProps<Theme>
}

const Logo: React.FC<LogoProps> = ({ size, sx }) => {
  const responsiveSx: SxProps<Theme> =
    typeof size === "object"
      ? {
          width: size,
          height: size,
          ...sx
        }
      : {
          width: size,
          height: "auto",
          ...sx
        }

  return (
    <Box
      component="svg"
      viewBox="0 0 928 733"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      sx={responsiveSx}
    >
      <rect
        x="7"
        y="137"
        width="914"
        height="589"
        rx="87"
        fill="#2D3250"
        stroke="white"
        strokeWidth="14"
      />
      <path
        d="M322 65C322 29.1015 351.101 0 387 0H537C572.898 0 602 29.1015 602 65V144H322V65Z"
        fill="white"
      />
      <path
        d="M362 74C362 51.9086 379.909 34 402 34H522C544.091 34 562 51.9086 562 74V130H362V74Z"
        fill="#424769"
      />
      <rect x="250" y="140" width="70" height="582" fill="white" />
      <rect x="318" y="347" width="598" height="50" fill="white" />
      <rect x="12" y="297" width="240" height="50" fill="white" />
      <path
        d="M363 513C363 522.849 364.953 532.602 368.747 541.701C372.541 550.801 378.103 559.069 385.113 566.033C392.124 572.997 400.447 578.522 409.607 582.291C418.767 586.06 428.585 588 438.5 588C448.415 588 458.233 586.06 467.393 582.291C476.553 578.522 484.876 572.997 491.887 566.033C498.897 559.069 504.459 550.801 508.253 541.701C512.047 532.602 514 522.849 514 513L438.5 513H363Z"
        fill="white"
      />
      <line x1="438.69" y1="397.069" x2="364.69" y2="514.069" stroke="white" strokeWidth="4" />
      <line
        y1="-2"
        x2="138.438"
        y2="-2"
        transform="matrix(0.534536 0.845145 0.845145 -0.534536 440 396)"
        stroke="white"
        strokeWidth="4"
      />
      <path d="M322 144H834C878.183 144 914 179.817 914 224V347H322V144Z" fill="#7077A1" />
      <path d="M14 224C14 179.817 49.8172 144 94 144H252V297H14V224Z" fill="#F6B17A" />
      <path d="M14 347H252V719H94C49.8172 719 14 683.183 14 639V347Z" fill="#424769" />
      <path
        d="M58 463C58 472.849 59.9529 482.602 63.7471 491.701C67.5413 500.801 73.1026 509.069 80.1134 516.033C87.1243 522.997 95.4473 528.522 104.607 532.291C113.767 536.06 123.585 538 133.5 538C143.415 538 153.233 536.06 162.393 532.291C171.553 528.522 179.876 522.997 186.887 516.033C193.897 509.069 199.459 500.801 203.253 491.701C207.047 482.602 209 472.849 209 463L133.5 463H58Z"
        fill="white"
      />
      <line x1="133.69" y1="347.069" x2="59.6903" y2="464.069" stroke="white" strokeWidth="4" />
      <line
        y1="-2"
        x2="138.438"
        y2="-2"
        transform="matrix(0.534536 0.845145 0.845145 -0.534536 135 346)"
        stroke="white"
        strokeWidth="4"
      />
    </Box>
  )
}

export default Logo
