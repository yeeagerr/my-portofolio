"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ArrowDown, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import CustomCursor from "@/components/custom-cursor"
import ThreeBackground from "@/components/three-background"
import TypingAnimation from "@/components/typing-animation"
import SkillIcon from "@/components/skill-icon"
import ClientLogo from "@/components/client-logo"
import TestimonialCard from "@/components/testimonial-card"

// Sample projects data
const featuredProjects = [
  {
    id: 1,
    title: "E-Commerce Redesign",
    category: "Web",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "A complete redesign of an e-commerce platform focusing on user experience and conversion optimization.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 2,
    title: "3D Product Configurator",
    category: "Experimental",
    image: "/placeholder.svg?height=600&width=800",
    description: "An interactive 3D product configurator allowing users to customize products in real-time.",
    technologies: ["Three.js", "React", "WebGL", "GSAP"],
  },
]

// Sample skills data
const skills = [
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
]

// Sample client logos
const clientLogos = [
  { src: "/organisation/kylin.png", alt: "Kylin Web3" },
  { src: "/organisation/dfoodcore.jpeg", alt: "Dfoodcore" },
]

// Sample testimonials
const testimonials = [
  {
    quote:
      "Working with this developer was an absolute pleasure. They delivered a stunning website that exceeded our expectations in both design and functionality.",
    author: "Azazel Adillah",
    role: "Founder, Azazel Store",
  },
  {
    quote:
      "Incredible attention to detail and a true professional. Our project was delivered on time and the results have significantly improved our conversion rates.",
    author: "Nezseco",
    role: "CTO, Minimal Works",
  },
]

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  const handleScrollDown = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main ref={containerRef} className="min-h-screen bg-white">
      <CustomCursor />

      {/* Hero Section with Three.js Background */}
      <section
        ref={heroRef}
        className="h-screen flex flex-col items-center justify-center relative px-4 sm:px-6 overflow-hidden"
      >
        <ThreeBackground type="particles" color="#cccccc" />

        <motion.div style={{ opacity, scale }} className="text-center max-w-4xl mx-auto z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-7xl font-light tracking-tight text-gray-900 mb-6"
          >
            <span className="block">Creative</span>
            <span className="font-medium block mt-2">Web Developer & Designer</span>
          </motion.h1>

          <TypingAnimation
            text="DDesign-driven developer crafting digital experiences."
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10"
            delay={1000}
          />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild className="rounded-full px-8 py-6 text-base transition-all hover:scale-105">
              <Link href="/projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full px-8 py-6 text-base transition-all hover:scale-105"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            repeatDelay: 0.5,
          }}
          onClick={handleScrollDown}
        >
          <ArrowDown className="h-8 w-8 text-gray-400" />
        </motion.div>
      </section>

      {/* Quick Intro / Bio */}
      <section ref={scrollRef} className="py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Hello, I'm <span className="font-medium">Muhammad Habib Abdillah</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a creative developer and designer with a passion for building beautiful, functional digital
              experiences. With expertise in front-end development and interactive design, I create websites that not
              only look stunning but also deliver exceptional user experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A selection of my recent work. Each project is crafted with attention to detail and a focus on user
              experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-lg shadow-sm bg-white"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={`Project ${project.title}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-xl font-medium text-gray-900 mt-1 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-700"
                  >
                    View Project
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="rounded-full px-8 py-6 text-base transition-all hover:scale-105"
            >
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Highlight */}
      <section className="py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">Skills & Tools</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">The technologies and tools I use to bring ideas to life.</p>
          </motion.div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 md:gap-8">
            {skills.map((skill, index) => (
              <SkillIcon key={skill} name={skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">Trusted By</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Companies and organizations I've had the pleasure to work with.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {clientLogos.map((logo, index) => (
              <ClientLogo key={index} src={logo.src} alt={logo.alt} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">What Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Feedback from people I've worked with.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">Ready to start your project?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's collaborate to create something amazing together. I'm currently available for freelance projects.
            </p>
            <Button asChild className="rounded-full px-8 py-6 text-base transition-all hover:scale-105">
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
