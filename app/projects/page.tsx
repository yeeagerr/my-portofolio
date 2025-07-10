"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CustomCursor from "@/components/custom-cursor";
import ProjectModal from "@/components/project-modal";

// Sample project data with expanded details
const projects = [
  {
    id: 100,
    title: "Shopco Rouge Fashion Online Shop",
    category: "Web",
    image: "/project/shopco-header.png",
    description:
      "A modern e-commerce platform tailored for fashion lovers to browse and purchase clothing and accessories with ease.",
    longDescription: (
      <>
        <p>
          Shopco Rouge is a stylish and responsive online shopping platform
          designed for a seamless fashion retail experience. Users can explore
          the latest trends, view detailed product information, and complete
          purchases effortlessly.
        </p>
        <p>
          The platform features a mobile-first responsive design, fast search
          and filtering, shopping cart functionality, and secure PayPal payment
          integration to ensure a smooth and trustworthy checkout process. It
          also includes a powerful admin panel for managing products, orders,
          and customers.
        </p>
      </>
    ),
    technologies: ["Nextjs", "Typescript", "Tailwind CSS"],
    features: [
      "Product catalog with category filtering",
      "Shopping cart and real-time cart updates",
      "Secure checkout with PayPal payment gateway",
      "Responsive design for mobile and desktop",
      "Admin dashboard for product, order, and user management",
    ],
    gallery: [
      "/project/shopco-rouge-two.vercel.app_.png",
      "/project/shopco-rouge-two.vercel.app_ (1).png",
      "/project/shopco-rouge-two.vercel.app_ (2).png",
    ],
    github: null,
    livePreview: "https://shopco-rouge-two.vercel.app/",
  },

  {
    id: 1,
    title: "Online ticketing bus travel",
    category: "Web",
    image: "/project/bustrav-header.png?height=600&width=800",
    description:
      "A user-friendly online bus ticket booking system designed to simplify travel planning and payment.",
    longDescription: (
      <>
        <p>
          This project features an online ticketing platform for bus travel,
          aimed at making it easier for users to browse routes, check schedules,
          and book tickets seamlessly.
        </p>
        <p>
          The interface was optimized for both mobile and desktop devices, with
          an emphasis on intuitive navigation, real-time availability, and a
          smooth checkout process.
        </p>
      </>
    ),
    technologies: ["Laravel", "PHP", "Javascript", "MySQL", "Tailwindcss"],
    features: [
      "Bus schedule and route listings",
      "Online ticket booking with payment gateway",
      "Printable and digital ticket options",
      "Mobile-first responsive design",
      "Admin panel for managing schedules and bookings",
    ],
    gallery: [
      "/project/bustrav.infy.uk_.png?height=auto&width=800",
      "/project/bustrav.infy.uk_ticket.png?width=800",
      "/project/bustrav_detail.png?width=800",
    ],
    github: null,
    livePreview: "http://bustrav.infy.uk/",
  },
  {
    id: 2,
    title: "Dropshipping Website",
    category: "Web",
    image: "/project/azazel-cover.png?height=600&width=800",
    description:
      "A modern dropshipping store built for automation, ease of use, and optimized sales conversion.",
    longDescription: (
      <>
        <p>
          This dropshipping website was designed to streamline online product
          sales without inventory. It features an appealing storefront, product
          automation, and smooth customer journey.
        </p>
        <p>
          Key areas included optimizing product discovery, integrating automated
          order fulfillment, and creating a brand-consistent shopping
          experience.
        </p>
      </>
    ),
    technologies: ["React", "Tailwindcss", "DaisyUI", "MongoDB"],
    features: [
      "Product catalog with static inventory display",
      "Simple use and ready to use",
    ],
    gallery: [
      "/project/azazel-store.vercel.app_.png",
      "/project/azazel-store.vercel.detail.png",
      "/project/azazel-store-how-to.png",
    ],
    github: null,
    livePreview: "https://azazel-store.vercel.app/",
  },

  {
    id: 3,
    title: "UI/UX School canteen app",
    category: "UI/UX",
    image: "/project/kantin-splash-screen.png",
    description:
      "A mobile-focused UI/UX design for a school canteen app to simplify food ordering for students.",
    longDescription: (
      <>
        <p>
          This UI/UX project focuses on designing an intuitive school canteen
          app, allowing students to browse menus, pre-order meals, and make
          payments easily.
        </p>
        <p>
          The design prioritizes simplicity and clarity, ensuring a smooth user
          experience for both students and canteen staff.
        </p>
      </>
    ),
    technologies: ["Figma"],
    features: [
      "Modern and clean interface",
      "Daily menu and meal categories UI",
      "Order success screen",
    ],
    gallery: [
      "/project/kantin-mhs.png",
      "/project/kantin-Order-Page.png",
      "/project/kantin-Succes-page.png",
    ],
    github: null,
    livePreview:
      "https://www.figma.com/design/PcXc74a54tGslRtJ2wXZzF/Untitled?node-id=1-17&t=ZZ7tlY3ZpoL2iZmN-0",
  },

  {
    id: 4,
    title: "Job portal website",
    category: "Web",
    image: "/project/riau-jobseeker.png",
    description:
      "A job portal designed to connect job seekers and employers with intuitive search and application flows.",
    longDescription: (
      <>
        <p>
          This project is a responsive web platform designed to help users
          search for job opportunities, create profiles, and apply to listings
          with ease.
        </p>
        <p>
          Employers can post jobs, manage applications, and review candidate
          profiles within a streamlined dashboard.
        </p>
      </>
    ),
    technologies: [
      "Laravel",
      "PHP",
      "Javascript",
      "Jquery",
      "MySQL",
      "Tailwindcss",
    ],
    features: [
      "Job search with location and category filters",
      "Employer and job seeker user roles",
      "Job application submission and tracking",
      "Profile management with resume uploads",
      "Admin dashboard for job approvals and analytics",
    ],
    gallery: [
      "/project/riau-jobseeker.wuaze.com__i=1.png",
      "/project/riau-jobseeker.wuaze.com_job.png",
      "/project/riau-jobseeker.wuaze.com_user_profile_12.png",
    ],
    github: null,
    livePreview: "http://riau-jobseeker.wuaze.com/",
  },

  {
    id: 5,
    title: "School E-Report",
    category: "Web",
    image: "/project/INDEX - HOME GURU.png",
    description:
      "A digital report card system for schools to manage and distribute student grades securely.",
    longDescription: (
      <>
        <p>
          This platform digitizes the traditional report card, allowing teachers
          to input grades and students to access their academic performance
          online.
        </p>
        <p>
          The system includes ranking features, grade history, and downloadable
          reports, built with role-based access for staff, students, and
          parents.
        </p>
      </>
    ),
    technologies: ["React", "Next.js", "Tailwind CSS", "Sanity CMS"],
    features: [
      "Teacher dashboard to input student grades",
      "Student report cards with grade history",
      "Class ranking system",
      "Role-based login for teachers, students, and parents",
      "Printable/downloadable grade reports",
    ],
    gallery: [
      "/project/INDEX - HOME GURU.png",
      "/project/INDEX - TABLE RANKING SISWA.png",
      "/project/INDEX -TABLE RAPORT SISWA.png",
    ],
    github: "https://github.com/yeeagerr/e-raport-mhs",
    livePreview: null,
  },

  {
    id: 6,
    title: "Courier website header",
    category: "Design",
    image: "/project/gokureer.png",
    description:
      "A bold and modern hero/header section for a courier service website, built for instant user engagement.",
    longDescription: (
      <>
        <p>
          This design project centers around the creation of a visually engaging
          and functional website header for a courier service. It includes
          call-to-action elements and delivery tracking highlights.
        </p>
        <p>
          The focus was on brand clarity, responsive layout, and immediate
          accessibility to key services like order tracking and price
          estimation.
        </p>
      </>
    ),
    technologies: ["Figma", "Photoshop"],
    features: [
      "Eye-catching hero banner design",
      "Call-to-action buttons for order and tracking",
      "Courier branding and icons integration",
      "Responsive layout mockup",
    ],
    gallery: ["/project/gokureer.png"],
    github: null,
    livePreview:
      "https://www.figma.com/design/VSNY3EA5VjLgkuiwLq5yWO/Untitled?node-id=1-3&t=bNadhtDaLhA2Y4mi-0",
  },
];

// Categories for filtering
const categories = ["All", "Web", "UI/UX", "Design", "Mobile", "Experimental"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-gray-900 mb-6">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A curated selection of my work across various disciplines and
            technologies.
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
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-max"
        >
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
                  <div
                    className={`overflow-hidden ${
                      project.id % 3 === 0 ? "aspect-[3/4]" : "aspect-[4/3]"
                    }`}
                  >
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
                    <h3 className="text-xl font-medium text-gray-900 mt-1 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 2).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full"
                        >
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
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </main>
  );
}
