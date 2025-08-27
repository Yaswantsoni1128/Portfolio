'use client'

import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { developerInfo } from '@/lib/data'

export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const scrollToSection = (sectionId: string) => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const footerLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ]

  const socialLinks = [
    { icon: Github, href: developerInfo.github, label: 'GitHub' },
    { icon: Linkedin, href: developerInfo.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${developerInfo.email}`, label: 'Email' },
  ]

  return (
    <footer className="relative bg-card/30 backdrop-blur-sm border-t border-border">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, hsl(var(--accent)) 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-4">
            <motion.div
              className="flex items-center space-x-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent-secondary rounded-lg flex items-center justify-center text-accent-foreground font-bold text-xl">
                {developerInfo.firstName[0]}{developerInfo.lastName[0]}
              </div>
              <div>
                <h3 className="text-xl font-bold font-display">{developerInfo.name}</h3>
                <p className="text-sm text-foreground-secondary">{developerInfo.title}</p>
              </div>
            </motion.div>

            <motion.p
              className="text-foreground-secondary leading-relaxed max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Passionate about creating innovative solutions and building meaningful 
              connections through technology. Currently seeking new opportunities to 
              grow and contribute to impactful projects.
            </motion.p>

            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background/50 hover:bg-accent/10 border border-border hover:border-accent/30 rounded-lg flex items-center justify-center text-foreground-secondary hover:text-accent transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h4
              className="text-lg font-bold font-display mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Quick Links
            </motion.h4>
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {footerLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-foreground-secondary hover:text-accent transition-colors duration-300"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  style={{ transitionDelay: `${index * 0.05}s` }}
                >
                  {link.label}
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.h4
              className="text-lg font-bold font-display mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Get In Touch
            </motion.h4>
            <motion.div
              className="space-y-3 text-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-foreground-secondary">
                <strong className="text-foreground">Email:</strong><br />
                <a 
                  href={`mailto:${developerInfo.email}`} 
                  className="hover:text-accent transition-colors duration-300"
                >
                  {developerInfo.email}
                </a>
              </p>
              <p className="text-foreground-secondary">
                <strong className="text-foreground">Location:</strong><br />
                {developerInfo.location}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          className="border-t border-border my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <motion.p
            className="text-foreground-secondary text-sm flex items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            © 2025 {developerInfo.name}. Made with{' '}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
              className="mx-1"
            >
              <Heart size={16} className="text-red-500" />
            </motion.span>
            using Next.js & Tailwind CSS
          </motion.p>

          {/* Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-foreground-secondary hover:text-accent transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-sm">Back to top</span>
            <div className="w-8 h-8 bg-accent/10 hover:bg-accent/20 border border-accent/30 rounded-full flex items-center justify-center">
              <ArrowUp size={16} />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  )
}