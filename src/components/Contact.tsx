'use client'

import { easeInOut, easeOut, motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram, MessageCircle } from 'lucide-react'
import { developerInfo } from '@/lib/data'

import { Toaster , toast } from 'react-hot-toast';

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })

    const result = await res.json()

    if (result.success) {
      toast.success(result.message)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      })
    } else {
      toast.error(result.message || "Failed to send message")
    }
  } catch (error) {
    console.error(error)
    toast.error("Something went wrong!")
  } finally {
    setIsSubmitting(false)
  }
}


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeInOut },
    },
  }

  const socialLinks = [
    { icon: Github, href: developerInfo.github, label: 'GitHub', color: 'hover:text-gray-400' },
    { icon: Linkedin, href: developerInfo.linkedin, label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Instagram, href: developerInfo.instagram, label: 'Instagram', color: 'hover:text-pink-400' },
  ]

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: developerInfo.email,
      href: `mailto:${developerInfo.email}`,
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: developerInfo.phone,
      href: `tel:${developerInfo.phone}`,
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: developerInfo.location,
      href: `https://maps.google.com/?q=${encodeURIComponent(developerInfo.location)}`,
      color: 'from-blue-500 to-cyan-500',
    },
  ]

  return (
    <section id="contact" className="py-20 relative" ref={ref}>
      {/* Background Elements */}

            <Toaster position="top-right" reverseOrder={false} />
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/30 rounded-full"
            style={{
              left: `${(i * 19) % 100}%`,
              top: `${(i * 31) % 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold font-display mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-accent to-accent-secondary mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.p 
            className="text-lg text-foreground-secondary max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I'm always open to discussing new opportunities, interesting projects, or just having a 
            chat about technology. Feel free to reach out!
          </motion.p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <motion.h3
                className="text-2xl font-bold font-display mb-6 flex items-center"
                variants={itemVariants}
              >
                <MessageCircle className="mr-3 text-accent" size={28} />
                Let's Connect
              </motion.h3>

              <div className="space-y-6">
                {contactMethods.map((method) => (
                  <motion.a
                    key={method.label}
                    href={method.href}
                    target={method.label === 'Location' ? '_blank' : undefined}
                    rel={method.label === 'Location' ? 'noopener noreferrer' : undefined}
                    className="group flex items-center space-x-4 p-4 bg-card/50 backdrop-blur-sm border border-border rounded-xl hover:border-accent/30 transition-all duration-300"
                    whileHover={{ x: 10, scale: 1.02 }}
                    variants={itemVariants}
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center text-white shadow-lg`}>
                      <method.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                        {method.label}
                      </h4>
                      <p className="text-foreground-secondary">{method.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Media Links */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h4 className="text-xl font-bold font-display">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 bg-card/50 backdrop-blur-sm border border-border rounded-xl flex items-center justify-center text-foreground-secondary ${social.color} hover:border-accent/30 transition-all duration-300`}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Info Card */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-accent/10 to-accent-secondary/10 border border-accent/20 rounded-2xl p-6"
            >
              <h4 className="text-lg font-bold font-display mb-3 text-accent">
                Quick Response Promise
              </h4>
              <p className="text-foreground-secondary leading-relaxed">
                I typically respond to emails within 24 hours. For urgent matters, 
                feel free to connect with me on LinkedIn for a faster response.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <motion.form
              onSubmit={handleSubmit}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 space-y-6"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-foreground mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl text-foreground placeholder-foreground-secondary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-foreground mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl text-foreground placeholder-foreground-secondary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl text-foreground placeholder-foreground-secondary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl text-foreground placeholder-foreground-secondary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300"
                  placeholder="Project Collaboration"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl text-foreground placeholder-foreground-secondary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 resize-none"
                  placeholder="Hi! I'd like to discuss a potential project opportunity..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent-secondary text-accent-foreground font-semibold py-4 rounded-xl shadow-lg hover:shadow-accent/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="mr-2" size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}