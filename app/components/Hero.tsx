'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import AnimatedDoodles from './AnimatedDoodles'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])

  return (
    <section className="min-h-screen flex items-center justify-center relative text-center px-4 overflow-hidden">
        <AnimatedDoodles />
      <motion.div style={{ y }} className="absolute inset-0">
        {/* <Image
        //   src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
        //   src="https://unsplash.com/photos/a-close-up-of-a-sign-with-the-word-hello-hello-jxelyjTrWFg"
          src="https://unsplash.com/photos/lines-of-html-codes-4hbJ-eymZ1o"
          alt="GitHub-like world from space"
          fill
          quality={100}
          priority
        /> */}
      </motion.div>
      <div className="absolute inset-0 bg-background/50"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Qasim Ahmed
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8 text-muted-foreground"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Developer & Problem Solver
        </motion.p>
        <motion.a
          href="#contact"
          className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold text-lg hover:bg-primary/90 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Get in Touch
        </motion.a>
      </motion.div>
    </section>
  )
}

