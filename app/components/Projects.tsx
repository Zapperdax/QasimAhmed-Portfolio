"use client";

import { motion } from "framer-motion";
import { Code } from "lucide-react";
import AnimatedDoodles from "./AnimatedDoodles";
import Image from "next/image";

const projects = [
  {
    title: "Sentiment Analyst and mood companion",
    description:
      "Developed an advanced emotion detection system that provided personalized recommendations for over 100 videos, quotes, songs, and movies through web scraping. Integrated a blogging platform where users could freely post or explore diverse blogs. Enhanced the experience with an AI-powered chatbot offering mood-based task suggestions and assistive conversations, creating a holistic and engaging user experience.",
    image: "/sentiment.png",
    codeUrl: "https://github.com/Zapperdax/Sentiment",
  },
  {
    title: "Evo Bot",
    description:
      "Developed a versatile Discord bot with over 600 active users, featuring moderation commands for seamless server management, tracking commands for real-time insights, security commands to enhance server safety, and engaging fun commands to boost user interaction. Built using Discord.js, the bot is designed for scalability, reliability, and ease of use, making it an essential tool for server administrators.",
    image: "/evobot.png",
    codeUrl: "https://github.com/Zapperdax/EvoBot",
  },
  {
    title: "Hawkeye",
    description:
      "Designed and developed a high-performance system that protects, monitors, and manages over 100Gb/s of internet traffic in real-time. Built with an Assembly/C++ backend, a MEAN stack frontend, and a Spark-powered big data database, the system enables efficient traffic monitoring and processing. Features include blocking apps, IPs, and subscribers, call tracking, and a user-friendly graphical interface for seamless analysis and management.",
    image: "/hawkeye.jpg",
    codeUrl: "https://github.com/",
  },
  {
    title: "Allo Dentiste",
    description:
      "Developed a comprehensive dentist management application designed to streamline operations with multiple management roles. The application facilitates seamless appointment booking, offers personalized treatment plans, and ensures efficient workflow management. With a robust 4-level permission system—Super Admin, Admin, Dentist, and Client—it provides tailored access and functionalities for each role, delivering a user-friendly and highly organized solution for dental practice management.",
    image: "/allodentist.png",
    codeUrl: "https://github.com",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 gradient-bg-projects relative overflow-hidden"
    >
      <AnimatedDoodles />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-primary animate-fade-in-up"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-card/50 backdrop-blur-md rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
              variants={itemVariants}
            >
              <div className="relative overflow-hidden group">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                </div>
              </div>
              <div className="p-6 bg-card dark:bg-card/80 transition-colors duration-300 min-h-full">
                <h3 className="text-xl font-bold mb-2 text-primary group-hover:text-primary/80 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 group-hover:text-foreground transition-colors duration-300">
                  {project.description}
                </p>
                {index < 2 && (
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Code size={18} className="mr-2" />
                      Code
                    </motion.a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
