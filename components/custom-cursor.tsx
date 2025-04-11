"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isHidden, setIsHidden] = useState(true)

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsHidden(false)
    }

    const updateCursorType = () => {
      const target = document.elementFromPoint(position.x, position.y)
      if (target) {
        const computedStyle = window.getComputedStyle(target)
        setIsPointer(computedStyle.cursor === "pointer")
      }
    }

    const handleMouseLeave = () => {
      setIsHidden(true)
    }

    const handleMouseEnter = () => {
      setIsHidden(false)
    }

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mousemove", updateCursorType)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mousemove", updateCursorType)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [position.x, position.y])

  // Don't render on mobile devices
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  if (isMobile) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-black pointer-events-none z-[70] "
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isPointer ? 1.5 : 1,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-black pointer-events-none z-[70] "
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
          mass: 0.2,
        }}
      />
    </>
  )
}
