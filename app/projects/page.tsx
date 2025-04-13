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
    title: "Online ticketing bus travel",
    category: "Web",
    image: "/project/bustrav-header.png?height=600&width=800",
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
      "/project/bustrav.infy.uk_.png?height=auto&width=800",
      "/project/bustrav.infy.uk_ticket.png?width=800",
      "/project/bustrav_detail.png?width=800",
    ],
    github: "",
    livePreview: ""
  },
  {
    id: 2,
    title: "Dropshipping Website",
    category: "Web",
    image: "/project/azazel-cover.png?height=600&width=800",
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
      "/project/azazel-store.vercel.app_.png",
      "/project/azazel-store.vercel.detail.png",
      "/project/azazel-store-how-to.png",
    ],
    github: "",
    livePreview: ""
  },

  {
    id: 3,
    title: "UI/UX School canteen app",
    category: "UI/UX",
    image: "/project/kantin-splash-screen.png",
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
      "/project/kantin-mhs.png",
      "/project/kantin-Order-Page.png",
      "/project/kantin-Succes-page.png",
    ],
    github: "",
    livePreview: ""
  },

  {
    id: 4,
    title: "Job portal website",
    category: "Web",
    image: "/project/riau-jobseeker.png",
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
      "/project/riau-jobseeker.wuaze.com__i=1.png",
      "/project/riau-jobseeker.wuaze.com_job.png",
      "/project/riau-jobseeker.wuaze.com_user_profile_12.png",
    ],
    github: "",
    livePreview: ""
  },

  {
    id: 5,
    title: "School E-Report",
    category: "Web",
    image: "/project/INDEX - HOME GURU.png",
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
      "/project/INDEX - HOME GURU.png",
      "/project/INDEX - TABLE RANKING SISWA.png",
      "/project/INDEX -TABLE RAPORT SISWA.png",
    ],
    github: "",
    livePreview: ""
  },

  {
    id: 6,
    title: "Courier website header",
    category: "Design",
    image: "/project/gokureer.png",
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
      "/project/gokureer.png",
    ],
    github: "",
    livePreview: ""
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
