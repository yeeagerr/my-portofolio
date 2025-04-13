"use client"

import { motion } from "framer-motion"

// Sample timeline data
const timelineItems = [
  {
    year: "2020 - 2021",
    title: "High School Student",
    company: "Local High School",
    description:
      "Laid the groundwork for a career in technology by delving into programming through online courses and academic projects, gaining a solid foundation in web development and analytical problem-solving.",
  },
  {
    year: "2022 - 2023",
    title: "Freelance Web Developer",
    company: "Self-Employed",
    description:
      "Delivered high-quality freelance projects, including the development of a fully responsive e-commerce platform for a local retailer, integrating secure payment systems and optimizing user experience for increased engagement.",
  },
  {
    year: "2024 - 2025",
    title: "Web Developer Intern",
    company: "PT. Pundi Mas Berjaya",
    description:
      "Contributed to the development and maintenance of scalable web applications as part of a professional team, refining technical expertise and gaining valuable insights into industry best practices and collaborative workflows.",
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
