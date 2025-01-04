'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedDoodles from './AnimatedDoodles'
import { MapPin, Mail, Phone, Linkedin, Github, Twitter } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Construct the mailto URL with the form data
    const subject = `An email from ${formData.name}`
    const body = `${formData.message}`
    const mailtoLink = `mailto:qasimisdev@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    // Open the user's email client
    window.location.href = mailtoLink
    
    // Reset the form after submission
    setFormData({ name: '', email: '', message: '' })
  }

  const contactInfo = [
    { icon: MapPin, text: "Rawalpindi, Pakistan 46000", href: "https://maps.app.goo.gl/6Pu1tDDyFsNyUvUr8" },
    { icon: Mail, text: "qasimisdev@gmail.com", href: "mailto:qasimisdev@gmail.com" },
    // { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: Linkedin, text: "linkedin.com/in/Qasim", href: "https://www.linkedin.com/in/qasim-ahmed-5779281a3" },
    { icon: Github, text: "github.com/Qasim", href: "https://github.com/Zapperdax" },
  ]

  return (
    <section id="contact" className="py-20 gradient-bg-contact relative overflow-hidden">
      <AnimatedDoodles />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-primary animate-fade-in-up"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            className="lg:w-1/2 bg-card/50 backdrop-blur-md rounded-xl p-8 shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-primary">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <item.icon size={20} />
                  <span>{item.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 bg-card/50 backdrop-blur-md rounded-xl p-8 shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-primary">Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-primary">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-primary">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground"
                  placeholder="your@email.com"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-primary">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground"
                  placeholder="Your message"
                  rows={4}
                />
              </div>
              <motion.button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

