import { useEffect, useState } from "react"

export function useScrollDirection({ threshold = 0 } = {}) {
  const [scrollDir, setScrollDir] = useState<"up" | "down">("up")
  const [isAtTop, setIsAtTop] = useState(true)

  useEffect(() => {
    let lastY = window.scrollY

    const onScroll = () => {
      const y = window.scrollY
      const diff = y - lastY

      setIsAtTop(y === 0)

      if (Math.abs(diff) > threshold) {
        setScrollDir(diff > 0 ? "down" : "up")
        lastY = y
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [threshold])

  return { scrollDir, isAtTop }
}
