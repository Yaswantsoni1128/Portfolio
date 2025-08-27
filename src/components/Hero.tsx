'use client'

import { easeInOut, easeOut, motion } from 'framer-motion'
import { ChevronDown, ArrowRight, Download, Sparkles } from 'lucide-react'
import { developerInfo } from '@/lib/data'
import Image from 'next/image'

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  }

  const floatVariants = {
    animate: {
      y: [-20, 20, -20],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: easeInOut,
      },
    },
  }

  const sparkleVariants = {
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: easeInOut,
      },
    },
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent/20 rounded-full"
            style={{
              left: `${(i * 23) % 100}%`,
              top: `${(i * 37) % 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.div 
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles size={16} className="text-accent animate-pulse" />
                <span className="text-sm font-medium text-accent">Available for Internships</span>
              </motion.div>
              
              <motion.h1
                className="text-4xl sm:text-6xl lg:text-7xl font-bold font-display leading-tight"
                variants={itemVariants}
              >
                <span className="text-foreground">Hello, I'm </span>
                <motion.span 
                  className="gradient-text block"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  {developerInfo.firstName} {developerInfo.lastName}
                </motion.span>
              </motion.h1>

              <motion.h2
                variants={itemVariants}
                className="text-xl sm:text-2xl lg:text-3xl text-foreground-secondary font-light"
              >
                {developerInfo.title}
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-lg text-foreground-secondary max-w-2xl leading-relaxed"
              >
                {developerInfo.bio}
              </motion.p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={() => scrollToSection('projects')}
                className="group relative px-8 py-4 bg-accent hover:bg-accent-secondary text-accent-foreground font-semibold rounded-xl shadow-lg hover:shadow-accent/25 transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  View My Work
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent-secondary to-accent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.a
                href={developerInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-transparent hover:bg-accent/10 text-accent border-2 border-accent hover:border-accent-secondary font-semibold rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center">
                  <Download className="mr-2 group-hover:-translate-y-1 transition-transform duration-300" size={20} />
                  Download CV
                </span>
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {[
                { label: 'Projects', value: '4+' },
                { label: 'Internships', value: '2' },
                { label: 'Technologies', value: '12+' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-accent mb-1">{stat.value}</div>
                  <div className="text-sm text-foreground-secondary">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="relative mx-auto lg:mx-0"
          >
            <motion.div
              variants={floatVariants}
              animate="animate"
              className="relative"
            >
              <div className="relative w-80 h-80 mx-auto">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent to-accent-secondary rounded-full opacity-20 blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: easeInOut,
                  }}
                />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-accent/30 shadow-2xl">
                  <Image
                    src={developerInfo.profileImage}
                    alt={`${developerInfo.name} - Profile Picture`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                
                {/* Floating decorations */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-4 h-4"
                    style={{
                      left: `${15 + (i * 15)}%`,
                      top: `${15 + (i * 12)}%`,
                    }}
                    variants={sparkleVariants}
                    animate="animate"
                    transition={{ delay: i * 0.5 }}
                  >
                    <Sparkles size={16} className="text-accent" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            <ChevronDown size={32} className="text-foreground-secondary hover:text-accent transition-colors duration-300" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}