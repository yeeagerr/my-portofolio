"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import CustomCursor from "@/components/custom-cursor"
import ProjectModal from "@/components/project-modal"

// Sample project data with expanded details
const projects = [
  {
    id: 1,
    title: "E-Commerce Redesign",
    category: "Web",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "A complete redesign of an e-commerce platform focusing on user experience and conversion optimization.",
    longDescription: (
      <>
        <p>
          This project involved a complete overhaul of an existing e-commerce platform to improve user experience,
          increase conversion rates, and modernize the visual design.
        </p>
        <p>
          The redesign focused on creating a seamless shopping experience across all devices, with special attention to
          the checkout process and product discovery.
        </p>
      </>
    ),
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Stripe", "Sanity CMS"],
    features: [
      "Responsive design optimized for all devices",
      "Advanced filtering and search functionality",
      "Streamlined checkout process",
      "Integrated payment processing",
      "Content management system for easy updates",
    ],
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: 2,
    title: "Financial Dashboard",
    category: "UI/UX",
    image: "/placeholder.svg?height=600&width=800",
    description: "An intuitive financial dashboard with real-time data visualization and interactive charts.",
    longDescription: (
      <>
        <p>
          This financial dashboard provides users with a comprehensive overview of their financial data through
          intuitive visualizations and interactive elements.
        </p>
        <p>
          The design prioritizes clarity and accessibility, making complex financial information easy to understand at a
          glance while providing detailed insights on demand.
        </p>
      </>
    ),
    technologies: ["React", "D3.js", "Tailwind CSS", "TypeScript", "Redux"],
    features: [
      "Real-time data updates",
      "Interactive charts and graphs",
      "Customizable dashboard layouts",
      "Data export functionality",
      "Responsive design for all devices",
    ],
    gallery: ["/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
  },
  {
    id: 3,
    title: "Travel App",
    category: "Mobile",
    image: "/placeholder.svg?height=600&width=800",
    description: "A mobile app for travel enthusiasts with personalized recommendations and immersive experiences.",
    technologies: ["React Native", "Firebase", "Google Maps API"],
    gallery: ["/placeholder.svg?height=600&width=800"],
  },
  {
    id: 4,
    title: "3D Product Configurator",
    category: "Experimental",
    image: "/placeholder.svg?height=600&width=800",
    description: "An interactive 3D product configurator allowing users to customize products in real-time.",
    technologies: ["Three.js", "React", "WebGL", "GSAP"],
    gallery: ["/placeholder.svg?height=600&width=800"],
  },
  {
    id: 5,
    title: "Portfolio for Photographer",
    category: "Design",
    image: "/placeholder.svg?height=600&width=800",
    description: "A minimalist portfolio website for a professional photographer with focus on visual storytelling.",
    technologies: ["Next.js", "Framer Motion", "CSS Grid", "Cloudinary"],
    gallery: ["/placeholder.svg?height=600&width=800"],
  },
  {
    id: 6,
    title: "Interactive Music Experience",
    category: "Experimental",
    image: "/placeholder.svg?height=600&width=800",
    description: "An experimental web application that creates visual representations of music in real-time.",
    technologies: ["Web Audio API", "Canvas", "GSAP", "React"],
    gallery: ["/placeholder.svg?height=600&width=800"],
  },
]

// Categories for filtering
const categories = ["All", "Web", "UI/UX", "Design", "Mobile", "Experimental"]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-gray-900 mb-6">My Projects</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A curated selection of my work across various disciplines and technologies.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="rounded-full px-6 py-2 text-sm transition-all"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Masonry Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-max">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
                style={{
                  gridRow: `span ${project.id % 3 === 0 ? 2 : 1}`,
                  height: project.id % 3 === 0 ? "auto" : "auto",
                }}
              >
                <div className="overflow-hidden rounded-lg shadow-sm bg-white h-full flex flex-col">
                  <div className={`overflow-hidden ${project.id % 3 === 0 ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-medium text-gray-900 mt-1 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 2).map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                          +{project.technologies.length - 2}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center text-sm font-medium text-gray-900 group-hover:text-gray-700">
                      View Details
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />
      </div>
    </main>
  )
}
