'use client'

import { motion } from 'framer-motion'
import AnimatedDoodles from './AnimatedDoodles'

const skills = [
  "React JS",
  "Node JS",
  "Express JS",
  "Next JS",
  "React Native",
  "Redux",
  "CSS",
  "Material UI",
  "MongoDB",
  "PostgreSQL",
  "NoSQL",
  "REST APIs",
  "Git",
  "GitHub",
  "DevOps",
  "Agile/Scrum",
  "XDP",
  "Shell Scripting",
  "Ansible",
  "Docker",
  "AWS"
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10
    }
  }
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 gradient-bg-skills relative overflow-hidden">
      <AnimatedDoodles />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-primary animate-fade-in-up"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>
        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-card/50 backdrop-blur-md rounded-lg px-4 py-2 shadow-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-primary font-medium">{skill}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

