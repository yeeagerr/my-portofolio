"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

export default function TestimonialCard({ quote, author, role, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-white p-6 rounded-lg shadow-sm"
    >
      <Quote className="h-8 w-8 text-gray-300 mb-4" />
      <p className="text-gray-700 italic mb-4">{quote}</p>
      <div>
        <p className="font-medium text-gray-900">{author}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </motion.div>
  )
}
