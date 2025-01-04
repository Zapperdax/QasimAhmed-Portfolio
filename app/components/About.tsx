'use client'

import { motion } from 'framer-motion'
import AnimatedDoodles from './AnimatedDoodles'

export default function About() {
  return (
    <section id="about" className="py-20 gradient-bg-about relative overflow-hidden">
      <AnimatedDoodles />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-8 text-center text-primary animate-fade-in-up"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto bg-card/50 backdrop-blur-md rounded-xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-lg mb-6 text-muted-foreground animate-fade-in-up">
          My name is <strong>Qasim Ahmed.</strong> I'm a software developer crafting code, shaping systems, and solving problems.
          But when the world calls for innovation, I become something more: <strong>a guardian of logic</strong>, <strong>a master of technology, </strong> 
          <strong>and a hero in the digital realm.</strong>
          </p>
          <p className="text-lg mb-6 text-muted-foreground animate-fade-in-up">
          I get truly excited when faced with tough problems—the harder the challenge, the more motivated I am to solve it.
          </p>
          <p className="text-lg mb-6 text-muted-foreground animate-fade-in-up">
          I love finding creative solutions and always aim to deliver work that is both functional and easy for users to enjoy. 
          I focus on the details and never settle for anything less than my best.
          </p>
          <p className="text-lg text-muted-foreground animate-fade-in-up">
          If you're looking for someone who brings energy, dedication, and a love for problem-solving, 
          I'd be thrilled to contribute to your team. Let's build something amazing together!
          </p>
        </motion.div>
      </div>
    </section>
  )
}

