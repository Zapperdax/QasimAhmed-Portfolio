'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'
import { ChevronUp } from 'lucide-react'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsVisible(latest > 500)
    })
    return () => unsubscribe()
  }, [scrollY])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.button
      className="fixed bottom-8 right-8 p-2 rounded-full bg-primary text-primary-foreground dark:bg-white shadow-lg z-50"
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
      transition={{ duration: 0.2 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <ChevronUp size={24} />
      <span className="sr-only">Scroll to top</span>
    </motion.button>
  )
}

