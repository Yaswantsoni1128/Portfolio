'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, GraduationCap, Award, Calendar } from 'lucide-react'
import { developerInfo, education, achievements } from '@/lib/data'
import Image from 'next/image'

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-accent to-accent-secondary mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-start"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left Column - Image and Quick Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full max-w-md mx-auto">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-secondary/20 rounded-2xl rotate-6 group-hover:rotate-3 transition-transform duration-300"
                />
                <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-4 shadow-2xl">
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                    <Image
                      src={developerInfo.profileImage}
                      alt={`${developerInfo.name} - About`}
                      width={400}
                      height={400}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 hover:border-accent/30 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
                variants={itemVariants}
              >
                <MapPin className="text-accent mb-2" size={24} />
                <p className="text-sm text-foreground-secondary mb-1">Location</p>
                <p className="font-semibold">{developerInfo.location}</p>
              </motion.div>

              <motion.div
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 hover:border-accent/30 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
                variants={itemVariants}
              >
                <GraduationCap className="text-accent mb-2" size={24} />
                <p className="text-sm text-foreground-secondary mb-1">Education</p>
                <p className="font-semibold">BTech ECE</p>
              </motion.div>
            </div>

            {/* Education Card */}
            {education.map((edu) => (
              <motion.div
                key={edu.id}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-accent/30 transition-all duration-300"
                whileHover={{ y: -5 }}
                variants={itemVariants}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg mb-1">{edu.institution}</h3>
                    <p className="text-accent font-medium">{edu.degree}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-foreground-secondary flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {edu.duration}
                    </p>
                    {edu.gpa && (
                      <p className="text-sm font-medium text-accent mt-1">GPA: {edu.gpa}</p>
                    )}
                  </div>
                </div>
                <p className="text-sm text-foreground-secondary">{edu.location}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column - About Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-6">
              <motion.h3
                className="text-2xl md:text-3xl font-bold font-display"
                variants={itemVariants}
              >
                Full Stack Web Developer & Tech Enthusiast
              </motion.h3>

              <motion.div 
                className="space-y-4 text-lg text-foreground-secondary leading-relaxed"
                variants={itemVariants}
              >
                <p>
                  Currently pursuing my BTech in Electronics and Communication  Engineering at IIITUNA, 
                  I'm passionate about creating innovative solutions through code. My journey 
                  in tech has been marked by hands-on learning, real-world internships, and 
                  continuous skill development.
                </p>

                <p>
                  With experience from two successful internships, I've had the opportunity 
                  to work with modern technologies like React.js, Node.js, and cloud platforms. 
                  I thrive in collaborative environments and enjoy tackling challenging problems 
                  that push the boundaries of what's possible.
                </p>

                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing 
                  to open-source projects, or participating in hackathons. I believe in the 
                  power of technology to make a positive impact on the world.
                </p>
              </motion.div>
            </div>

            {/* Achievements */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center space-x-2">
                <Award className="text-accent" size={24} />
                <h3 className="text-xl font-bold font-display">Key Achievements</h3>
              </div>
              
              <div className="grid gap-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-card/30 backdrop-blur-sm border border-border rounded-lg hover:border-accent/30 transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-lg">{achievement.split(' ')[0]}</span>
                    <span className="text-foreground-secondary">
                      {achievement.split(' ').slice(1).join(' ')}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              variants={itemVariants}
              className="pt-6"
            >
              <motion.a
                href={developerInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-accent hover:bg-accent-secondary text-accent-foreground font-semibold rounded-xl shadow-lg hover:shadow-accent/25 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <GraduationCap className="mr-2" size={20} />
                View Full Resume
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}