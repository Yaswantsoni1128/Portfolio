'use client'

import { easeInOut, motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, Eye, Star, GitBranch } from 'lucide-react'
import { projects } from '@/lib/data'
import Image from 'next/image'

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [filter, setFilter] = useState<'all' | 'featured'>('all')

  const filteredProjects = filter === 'featured' 
    ? projects.filter(project => project.featured)
    : projects

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeInOut },
    },
  }

  const getTechColor = (tech: string) => {
    const colors: Record<string, string> = {
      'React': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'Next.js': 'bg-gray-500/20 text-gray-300 border-gray-500/30',
      'TypeScript': 'bg-blue-600/20 text-blue-400 border-blue-600/30',
      'Node.js': 'bg-green-500/20 text-green-400 border-green-500/30',
      'MongoDB': 'bg-green-600/20 text-green-400 border-green-600/30',
      'PostgreSQL': 'bg-blue-700/20 text-blue-300 border-blue-700/30',
      'Tailwind CSS': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
      'Prisma': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      'Socket.io': 'bg-gray-600/20 text-gray-300 border-gray-600/30',
      'JWT': 'bg-red-500/20 text-red-400 border-red-500/30',
      'Express.js': 'bg-gray-700/20 text-gray-300 border-gray-700/30',
      'Redux Toolkit': 'bg-purple-600/20 text-purple-400 border-purple-600/30',
      'Chart.js': 'bg-pink-500/20 text-pink-400 border-pink-500/30',
      'React Native': 'bg-cyan-600/20 text-cyan-400 border-cyan-600/30',
    }
    return colors[tech] || 'bg-accent/20 text-accent border-accent/30'
  }

  return (
    <section id="projects" className="py-20 relative" ref={ref}>
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
            Featured <span className="gradient-text">Projects</span>
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
            Here are some of my recent projects that showcase my skills in full-stack development, 
            UI/UX design, and modern web technologies.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex space-x-4 bg-card/50 backdrop-blur-sm border border-border rounded-xl p-2">
            {[
              { key: 'all', label: 'All Projects', count: projects.length },
              { key: 'featured', label: 'Featured', count: projects.filter(p => p.featured).length },
            ].map((filterOption) => (
              <motion.button
                key={filterOption.key}
                onClick={() => setFilter(filterOption.key as 'all' | 'featured')}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  filter === filterOption.key
                    ? 'bg-accent text-accent-foreground shadow-lg'
                    : 'text-foreground-secondary hover:text-foreground hover:bg-accent/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filterOption.label} ({filterOption.count})
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-500"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-20 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                  <Star size={14} />
                  <span>Featured</span>
                </div>
              )}

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={400}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-accent/90 text-accent-foreground rounded-full hover:bg-accent transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Eye size={20} />
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-card/90 text-foreground rounded-full hover:bg-card transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={20} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold font-display mb-2 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-foreground-secondary  leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${getTechColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex space-x-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-accent hover:text-accent-secondary font-medium transition-colors duration-300"
                      >
                        <ExternalLink className="mr-1" size={16} />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-foreground-secondary hover:text-foreground font-medium transition-colors duration-300"
                      >
                        <Github className="mr-1" size={16} />
                        Code
                      </a>
                    )}
                  </div>
                  <div className="flex items-center text-foreground-secondary text-sm">
                    <GitBranch size={14} className="mr-1" />
                    Project
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.a
            href="https://github.com/Yaswantsoni1128"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-transparent hover:bg-accent/10 text-accent border-2 border-accent hover:border-accent-secondary font-semibold rounded-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github className="mr-2" size={20} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}