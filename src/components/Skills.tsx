'use client'

import { easeInOut, easeOut, motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import React, { useRef, useState } from 'react'
import { Code, Database, Smartphone, Settings, ChevronRight, Languages } from 'lucide-react'
import { skills } from '@/lib/data'

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const categories = [
    { key: 'frontend', label: 'Frontend', icon: Code, color: 'from-blue-500 to-cyan-500' },
    { key: 'backend', label: 'Backend', icon: Database, color: 'from-green-500 to-emerald-500' },
    { key: 'mobile', label: 'Mobile', icon: Smartphone, color: 'from-purple-500 to-pink-500' },
    { key: 'database', label: 'Database', icon: Database, color: 'from-orange-500 to-red-500' },
    { key: 'tools', label: 'Tools', icon: Settings, color: 'from-gray-500 to-slate-500' },
    { key: 'language', label: 'Language', icon: Languages, color: 'from-blue-500 to-red-500' },
  ]

  const filteredSkills = selectedCategory 
    ? skills.filter(skill => skill.category === selectedCategory)
    : skills

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeInOut },
    },
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: easeOut },
    },
  }

  return (
    <section id="skills" className="py-20 relative" ref={ref}>
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
            Skills & <span className="gradient-text">Technologies</span>
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
            Here are the technologies and tools I work with to bring ideas to life. 
            Click on a category to explore specific skills in detail.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.button
            variants={itemVariants}
            onClick={() => setSelectedCategory(null)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              selectedCategory === null
                ? 'bg-accent text-accent-foreground shadow-lg'
                : 'bg-card/50 text-foreground-secondary hover:text-foreground hover:bg-accent/10 border border-border'
            }`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>All Skills</span>
            <span className="bg-accent/20 text-accent px-2 py-1 rounded-full text-xs">
              {skills.length}
            </span>
          </motion.button>

          {categories.map((category) => {
            const categorySkills = skills.filter(skill => skill.category === category.key)
            const IconComponent = category.icon
            
            return (
              <motion.button
                key={category.key}
                variants={itemVariants}
                onClick={() => setSelectedCategory(category.key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category.key
                    ? 'bg-accent text-accent-foreground shadow-lg'
                    : 'bg-card/50 text-foreground-secondary hover:text-foreground hover:bg-accent/10 border border-border'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <IconComponent size={18} />
                <span>{category.label}</span>
                <span className="bg-accent/20 text-accent px-2 py-1 rounded-full text-xs">
                  {categorySkills.length}
                </span>
              </motion.button>
            )
          })}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          key={selectedCategory} // Force re-render when category changes
        >
          {filteredSkills.map((skill, index) => {
            const category = categories.find(cat => cat.key === skill.category)
            
            return (
              <motion.div
                key={`${skill.name}-${selectedCategory}`}
                variants={skillVariants}
                className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-accent/30 transition-all duration-500"
                whileHover={{ scale: 1.02, y: -5 }}
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category?.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />
                
                <div className="relative z-10">
                  {/* Skill Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div>
                        <h3 className="font-bold text-lg group-hover:text-accent transition-colors duration-300">
                          {skill.name}
                        </h3>
                        <p className="text-sm text-foreground-secondary capitalize">
                          {skill.category}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-accent">
                        {skill.level}%
                      </div>
                    </div>
                  </div>

                  {/* Skill Progress Bar */}
                  <div className="relative mb-4">
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${category?.color}`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          duration: 1.5, 
                          delay: 0.5 + index * 0.1, 
                          ease: 'easeOut' 
                        }}
                      />
                    </div>
                  </div>

                  {/* Skill Description */}
                  <motion.div
                    className="overflow-hidden"
                    initial={{ height: 0 }}
                    animate={{ 
                      height: hoveredSkill === skill.name ? 'auto' : 0 
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <p className="text-sm text-foreground-secondary leading-relaxed pb-2">
                      {skill.description}
                    </p>
                  </motion.div>

                  {/* Expand Indicator */}
                  <motion.div
                    className="flex items-center justify-center pt-2"
                    animate={{
                      opacity: hoveredSkill === skill.name ? 0 : 1,
                      y: hoveredSkill === skill.name ? -10 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight 
                      size={16} 
                      className="text-foreground-secondary group-hover:text-accent transition-colors duration-300" 
                    />
                  </motion.div>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  initial={false}
                  animate={{
                    boxShadow: hoveredSkill === skill.name 
                      ? '0 20px 25px -5px rgba(147, 51, 234, 0.1), 0 10px 10px -5px rgba(147, 51, 234, 0.05)'
                      : '0 0 0 rgba(147, 51, 234, 0)',
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold font-display mb-4">
              Continuous Learning Journey
            </h3>
            <p className="text-foreground-secondary leading-relaxed mb-6">
              I'm constantly expanding my skill set and staying up-to-date with the latest 
              technologies and best practices. Currently focusing on advanced React patterns, 
              cloud architecture, and machine learning fundamentals.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {categories.map((category) => {
                const categorySkills = skills.filter(skill => skill.category === category.key)
                const avgLevel = Math.round(
                  categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length
                )
                
                return (
                  <motion.div
                    key={category.key}
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-3xl font-bold text-accent mb-1">{avgLevel}%</div>
                    <div className="text-sm text-foreground-secondary">{category.label}</div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}