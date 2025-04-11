"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Inter } from "next/font/google"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
]

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeRoute, setActiveRoute] = useState("/")
  const [isScrolled, setIsScrolled] = useState(false)

  // Update active route based on pathname
  useEffect(() => {
    if (typeof window !== "undefined") {
      setActiveRoute(window.location.pathname)
    }
  }, [])

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <header
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex items-center justify-between h-16 md:h-20">
                {/* Logo */}
                <Link href="/" className="text-xl font-medium text-gray-900">
                  Muhammad Habib Abdillah
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className={`text-sm font-medium transition-colors hover:text-gray-900 relative ${
                        activeRoute === item.path ? "text-gray-900" : "text-gray-600"
                      }`}
                      onClick={() => setActiveRoute(item.path)}
                    >
                      {item.name}
                      {activeRoute === item.path && (
                        <motion.div
                          layoutId="activeNavIndicator"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gray-900"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </Link>
                  ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                  className="md:hidden text-gray-900"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden bg-white"
                >
                  <div className="px-4 py-6 space-y-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        className={`block text-base font-medium ${
                          activeRoute === item.path ? "text-gray-900" : "text-gray-600"
                        }`}
                        onClick={() => {
                          setActiveRoute(item.path)
                          setIsMenuOpen(false)
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </header>

          {children}

          <footer className="bg-white border-t">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <Link href="/" className="text-xl font-medium text-gray-900">
                    Muhammad Habib Abdillah
                  </Link>
                  <p className="mt-4 text-gray-600 max-w-xs">
                    Creative web developer and designer crafting beautiful digital experiences.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wider mb-4">Navigation</h3>
                  <ul className="space-y-2">
                    {navItems.map((item) => (
                      <li key={item.path}>
                        <Link href={item.path} className="text-gray-600 hover:text-gray-900 transition-colors">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wider mb-4">Contact</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-600">mhabibabdillah083@gmail.com</li>
                    <li className="text-gray-600">Batam, Riau Island</li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm text-gray-600">
                  &copy; {new Date().getFullYear()} Muhammad Habib Abdillah. All rights reserved.
                </p>
                <div className="mt-4 md:mt-0 flex space-x-6">
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Twitter
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    GitHub
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    LinkedIn
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
