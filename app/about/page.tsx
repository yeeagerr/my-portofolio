"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import CustomCursor from "@/components/custom-cursor"
import SkillsTimeline from "@/components/skills-timeline"
import SkillIcon from "@/components/skill-icon"

// Sample interests data
const interests = [
  { name: "Reading Books", description: "Immersing myself in stories and gaining knowledge" },
  { name: "Minimalist Design", description: "Appreciating clean, functional, and aesthetic designs" },
  { name: "Communication", description: "Building connections and sharing ideas effectively" },
  { name: "Basketball", description: "Engaging in fast-paced, strategic, and team-oriented play" },
]

export default function About() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-24">
      <CustomCursor />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-gray-900 mb-6">About Me</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The story behind the work and the passion that drives it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-lg">
              <img src="/me.jpeg" alt="Portrait" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-3 bg-white p-4 rounded-lg shadow-md">
                <p className="text-sm font-medium text-gray-900">Based in Batam, Indonesia</p>
                <p className="text-xs text-gray-600">WIB (UTC+7)</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-light text-gray-900 mb-6">
              Hello, I'm <span className="font-medium">Muhammad Habib Abdillah</span>
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                I'm a creative web developer and designer with over 5 years of experience crafting digital experiences
                that blend aesthetics with functionality.
              </p>
              <p>
                My approach combines clean, minimal design with cutting-edge technology to create websites that not only
                look beautiful but also perform exceptionally well.
              </p>
              <p>
                I specialize in front-end & back-end development, interactive animations, and creating intuitive user interfaces
                that engage and delight users.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["React", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap", "php","Laravel", "MySql", "MongoDB", "Firebase", "PostgreSql", "Express.js" ].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-12 text-center">Experience & Skills</h2>
          <SkillsTimeline />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-12 text-center">Technical Skills</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 md:gap-8">
            {[
  "javascript",
  "react",
  "nextjs",
  "php",
  "laravel",
  "tailwind",
  "bootstrap",
  "typescript",
  "nodejs",
  'python',
  "figma",
  'mysql',
  'postgresql',
  'firebase',
  'mongodb',
  "git"
].map((skill, index) => (
              <SkillIcon key={skill} name={skill} index={index} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-24"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-8 text-center">Things I Love</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-lg font-medium text-gray-900 mb-2">{interest.name}</h3>
                <p className="text-gray-600">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl font-medium text-gray-900 mb-6">Want to work together?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm currently available for freelance projects and open to discussing new opportunities.
          </p>
          <Button asChild className="rounded-full px-8 py-6 text-base transition-all hover:scale-105">
            <Link href="/contact">
              Let's Connect
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </main>
  )
}
