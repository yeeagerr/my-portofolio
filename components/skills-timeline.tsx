"use client"

import { motion } from "framer-motion"

// Sample timeline data
const timelineItems = [
  {
    year: "2022 - Present",
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    description:
      "Leading the frontend development team, implementing cutting-edge technologies and mentoring junior developers.",
  },
  {
    year: "2020 - 2022",
    title: "UI/UX Developer",
    company: "Creative Solutions",
    description:
      "Designed and developed user interfaces for various clients, focusing on accessibility and performance optimization.",
  },
  {
    year: "2018 - 2020",
    title: "Web Developer",
    company: "Digital Agency",
    description: "Created responsive websites and interactive applications for clients across different industries.",
  },
]

export default function SkillsTimeline() {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-gray-200" />

      <div className="space-y-12">
        {timelineItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 w-4 h-4 rounded-full bg-primary border-4 border-white" />

            {/* Left side (or top on mobile) */}
            <div className={`md:text-right ${index % 2 === 1 ? "md:order-2" : ""}`}>
              <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full mb-2">
                {item.year}
              </span>
              <h3 className="text-xl font-medium text-gray-900">{item.title}</h3>
              <p className="text-gray-600">{item.company}</p>
            </div>

            {/* Right side (or bottom on mobile) */}
            <div className={index % 2 === 1 ? "md:order-1" : ""}>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
