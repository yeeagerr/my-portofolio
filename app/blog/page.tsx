"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import CustomCursor from "@/components/custom-cursor"
import BlogModal from "@/components/blog-modal"

// Sample blog posts data with expanded content
const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Animation: Beyond Basic Transitions",
    excerpt: "Exploring advanced animation techniques that can elevate your web projects from good to extraordinary.",
    content: (
      <>
        <p>
          Web animations have come a long way from simple CSS transitions. Today's web experiences leverage powerful
          libraries and browser capabilities to create immersive, app-like interactions that engage users and
          communicate information in dynamic ways.
        </p>
        <p>
          In this article, we'll explore how modern animation techniques can be used to create more engaging user
          experiences, improve usability, and add personality to your web projects.
        </p>
        <h3>The Psychology of Animation</h3>
        <p>
          Well-designed animations serve a purpose beyond aesthetics. They can guide users through complex interfaces,
          provide feedback on interactions, establish spatial relationships, and create emotional connections.
        </p>
        <p>
          When used thoughtfully, animations can significantly improve user experience by making interfaces more
          intuitive and enjoyable to use.
        </p>
        <h3>Advanced Animation Techniques</h3>
        <ul>
          <li>Physics-based animations that mimic real-world movement</li>
          <li>Scroll-driven animations that respond to user navigation</li>
          <li>Micro-interactions that provide feedback and delight</li>
          <li>3D transformations and perspective effects</li>
          <li>Animated data visualizations</li>
        </ul>
      </>
    ),
    date: "April 10, 2023",
    category: "Development",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Designing for Accessibility: A Comprehensive Guide",
    excerpt: "How to ensure your web designs are accessible to everyone, regardless of ability or disability.",
    date: "March 22, 2023",
    category: "Design",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "The Psychology of Minimalism in UI Design",
    excerpt: "Understanding how minimalist design principles can improve user experience and conversion rates.",
    date: "February 15, 2023",
    category: "UI/UX",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Performance Optimization Techniques for Modern Websites",
    excerpt: "Practical strategies to improve loading times and overall performance of your web applications.",
    date: "January 30, 2023",
    category: "Development",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "Creating Immersive Experiences with Three.js",
    excerpt: "A beginner's guide to adding 3D elements to your web projects using Three.js.",
    date: "December 12, 2022",
    category: "Development",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "10 min read",
  },
  {
    id: 6,
    title: "The Art of Responsive Typography",
    excerpt: "Techniques for creating beautiful, readable text across all screen sizes.",
    date: "November 5, 2022",
    category: "Design",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "6 min read",
  },
]

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null)

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
            Blog & Insights
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Thoughts, ideas, and insights on design, development, and the digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {blogPosts.slice(0, 2).map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: post.id * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">{post.category}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                <span className="flex items-center text-xs text-gray-500">
                  <Calendar className="h-3 w-3 mr-1" />
                  {post.date}
                </span>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                <span className="flex items-center text-xs text-gray-500">
                  <Clock className="h-3 w-3 mr-1" />
                  {post.readTime}
                </span>
              </div>
              <h2 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center text-sm font-medium text-gray-900 group-hover:text-gray-700 transition-colors">
                Read More
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.article>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.slice(2).map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">{post.category}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                <span className="text-xs text-gray-500">{post.readTime}</span>
              </div>
              <h2 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-gray-600 mb-3">{post.excerpt}</p>
              <div className="flex items-center text-sm font-medium text-gray-900 group-hover:text-gray-700 transition-colors">
                Read More
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Blog Post Modal */}
      <BlogModal post={selectedPost} isOpen={!!selectedPost} onClose={() => setSelectedPost(null)} />
    </main>
  )
}
