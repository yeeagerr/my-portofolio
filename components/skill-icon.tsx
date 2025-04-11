"use client"

import { motion } from "framer-motion"
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiFigma,
  SiPostgresql,
  SiFirebase,
  SiGit,
  SiMysql,
    SiLaravel,
  SiPhp,
  SiMongodb,
  SiPython,
  SiBootstrap
} from "react-icons/si"
import { CuboidIcon as Cube } from "lucide-react"

const iconComponents = {
  html: SiHtml5,
  css: SiCss3,
  javascript: SiJavascript,
  react: SiReact,
  nextjs: SiNextdotjs,
  tailwind: SiTailwindcss,
  typescript: SiTypescript,
  nodejs: SiNodedotjs,
  figma: SiFigma,
  git: SiGit,
  laravel: SiLaravel, // Assuming you have an icon for Laravel
  php: SiPhp, // Assuming you have an icon for PHP
  mysql: SiMysql, // Assuming you have an icon for MySQL
  firebase: SiFirebase, // Assuming you have an icon for Firebase
  postgresql: SiPostgresql, // Assuming you have an icon for PostgreSQL
  mongodb: SiMongodb, // Assuming you have an icon for MongoDB
  python: SiPython, // Assuming you have an icon for Python
  bootstrap: SiBootstrap,

}

const iconColors = {
  html: "#E34F26",
  css: "#1572B6",
  javascript: "#F7DF1E",
  react: "#61DAFB",
  nextjs: "#000000",
  tailwind: "#06B6D4",
  typescript: "#3178C6",
  nodejs: "#339933",
  blender: "#F5792A",
  figma: "#F24E1E",
  git: "#F05032",
  php: "#777BB4",
  laravel: "#FF2D20",
  firebase: "#FFCA28",
  postgresql: "#336791",
  mongodb: "#47A248",
  mysql: "#4479A1",
  python: "#3776AB",
  bootstrap: '#0a58ca'
}

export default function SkillIcon({ name, index = 0, showLabel = true, size = "md" }) {
  const Icon = iconComponents[name.toLowerCase()] || SiReact
  const color = iconColors[name.toLowerCase()] || "#000000"

  const sizeClasses = {
    sm: "text-2xl",
    md: "text-3xl",
    lg: "text-4xl",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
      className="flex flex-col items-center gap-2"
    >
      <div
        className={`flex items-center justify-center p-3 rounded-lg bg-white shadow-sm ${sizeClasses[size]}`}
        style={{ color }}
      >
        <Icon />
      </div>
      {showLabel && <span className="text-xs font-medium text-gray-700">{name}</span>}
    </motion.div>
  )
}
