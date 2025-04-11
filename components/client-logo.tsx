"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function ClientLogo({ src, alt, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex items-center justify-center p-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-32 h-16">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          className={`object-contain transition-all duration-300 ${isHovered ? "filter-none" : "filter grayscale opacity-60"}`}
        />
      </div>
    </motion.div>
  )
}
