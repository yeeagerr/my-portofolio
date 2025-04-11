"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function TypingAnimation({ text, speed = 50, delay = 0, className = "" }) {
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const index = useRef(0)

  useEffect(() => {
    let timeout

    // Initial delay
    const initialDelay = setTimeout(() => {
      setIsTyping(true)

      // Start typing
      const interval = setInterval(() => {
        if (index.current < text.length) {
          setDisplayedText((prev) => prev + text.charAt(index.current))
          index.current += 1
        } else {
          clearInterval(interval)
          setIsTyping(false)
        }
      }, speed)

      return () => clearInterval(interval)
    }, delay)

    return () => {
      clearTimeout(initialDelay)
      clearTimeout(timeout)
    }
  }, [text, speed, delay])

  return (
    <div className={className}>
      <span>{displayedText}</span>
      {isTyping && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8 }}
          className="inline-block w-[2px] h-[1em] bg-current ml-[2px] align-middle"
        />
      )}
    </div>
  )
}
