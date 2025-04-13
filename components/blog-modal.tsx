"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Share2, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BlogModal({ post, isOpen, onClose }) {
  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      window.addEventListener("keydown", handleEsc)
    }

    return () => {
      window.removeEventListener("keydown", handleEsc)
    }
  }, [isOpen, onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  if (!post) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none p-4 sm:p-6 md:p-8"
          >
            <div
              className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl w-full max-h-[90vh] pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <div className="h-64 md:h-80 w-full overflow-y-auto overflow-x-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full   "
                />
                </div>
               
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-gray-800 hover:bg-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-20rem)]">
                <div className="flex items-center gap-3 mb-4">
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

                <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-6">{post.title}</h2>

                <div className="prose prose-gray max-w-none">
                  {post.content || (
                    <>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies
                        tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Donec auctor, nisl eget
                        ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
                      </p>
                      <p>
                        Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl
                        eget nisl. Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies
                        nisl nisl eget nisl.
                      </p>
                      <h3>Key Takeaways</h3>
                      <ul>
                        <li>First important point that readers should remember</li>
                        <li>Second critical concept explained in the article</li>
                        <li>Third valuable insight from the content</li>
                      </ul>
                      <p>
                        Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl
                        eget nisl. Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies
                        nisl nisl eget nisl.
                      </p>
                    </>
                  )}
                </div>

                <div className="mt-8 pt-6 border-t flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <img
                      src="/placeholder.svg?height=40&width=40"
                      alt="Author"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Author Name</p>
                      <p className="text-xs text-gray-500">Writer & Developer</p>
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
