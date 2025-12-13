'use client'

import { easeOut, motion, useAnimation, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import React, { useRef, useState, useEffect } from 'react'
import { Code, Database, Smartphone, Settings, Languages, Sparkles } from 'lucide-react'
import { skills } from '@/lib/data'

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [highlightedSkillIndex, setHighlightedSkillIndex] = useState(0)

  const categories = [
    { key: 'frontend', label: 'Frontend', icon: Code, color: 'from-blue-500 to-cyan-500', glow: '0 0 20px rgba(59, 130, 246, 0.5)' },
    { key: 'backend', label: 'Backend', icon: Database, color: 'from-green-500 to-emerald-500', glow: '0 0 20px rgba(34, 197, 94, 0.5)' },
    { key: 'mobile', label: 'Mobile', icon: Smartphone, color: 'from-purple-500 to-pink-500', glow: '0 0 20px rgba(168, 85, 247, 0.5)' },
    { key: 'database', label: 'Database', icon: Database, color: 'from-orange-500 to-red-500', glow: '0 0 20px rgba(249, 115, 22, 0.5)' },
    { key: 'tools', label: 'Tools', icon: Settings, color: 'from-gray-500 to-slate-500', glow: '0 0 20px rgba(107, 114, 128, 0.5)' },
    { key: 'language', label: 'Language', icon: Languages, color: 'from-indigo-500 to-purple-500', glow: '0 0 20px rgba(99, 102, 241, 0.5)' },
  ]

  const filteredSkills = selectedCategory 
    ? skills.filter(skill => skill.category === selectedCategory)
    : skills

  // Auto-play animation for skills in selected category
  useEffect(() => {
    if (selectedCategory && filteredSkills.length > 0) {
      const interval = setInterval(() => {
        setHighlightedSkillIndex((prev) => (prev + 1) % filteredSkills.length)
      }, 2000) // Change highlighted skill every 2 seconds
      return () => clearInterval(interval)
    } else {
      setHighlightedSkillIndex(0)
    }
  }, [selectedCategory, filteredSkills.length])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.1,
      },
    },
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.5, rotateY: -90 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { 
        type: "spring" as const,
        stiffness: 200,
        damping: 15
      },
    },
  }

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category)
    setHighlightedSkillIndex(0) // Reset highlight when category changes
  }

  return (
    <section id="skills" className="py-12 relative overflow-hidden" ref={ref}>
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Compact Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-display mb-2 flex items-center justify-center gap-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Sparkles className="text-accent" size={32} />
            Skills & <span className="gradient-text">Technologies</span>
          </motion.h2>
          <motion.div 
            className="w-16 h-1 bg-gradient-to-r from-accent to-accent-secondary mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 64 } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </motion.div>

        {/* Compact Category Filter */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedCategory || 'all'}
            className="flex flex-wrap justify-center gap-2 mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              onClick={() => handleCategoryChange(null)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                selectedCategory === null
                  ? 'bg-gradient-to-r from-accent to-accent-secondary text-white shadow-lg scale-105'
                  : 'bg-card/60 text-foreground-secondary hover:text-foreground hover:bg-card/80 border border-border/50'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>All</span>
              <span className="bg-white/20 px-1.5 py-0.5 rounded text-xs">
                {skills.length}
              </span>
            </motion.button>

            {categories.map((category) => {
              const categorySkills = skills.filter(skill => skill.category === category.key)
              const IconComponent = category.icon
              
              return (
                <motion.button
                  key={category.key}
                  onClick={() => handleCategoryChange(category.key)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                    selectedCategory === category.key
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                      : 'bg-card/60 text-foreground-secondary hover:text-foreground hover:bg-card/80 border border-border/50'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    boxShadow: selectedCategory === category.key ? category.glow : 'none'
                  }}
                >
                  <IconComponent size={16} />
                  <span>{category.label}</span>
                  <span className="bg-white/20 px-1.5 py-0.5 rounded text-xs">
                    {categorySkills.length}
                  </span>
                </motion.button>
              )
            })}
          </motion.div>
        </AnimatePresence>

        {/* Compact Skills Grid with Auto-Animation */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          key={selectedCategory}
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => {
              const category = categories.find(cat => cat.key === skill.category)
              const isHighlighted = selectedCategory && highlightedSkillIndex === index
              
              return (
                <motion.div
                  key={`${skill.name}-${selectedCategory}`}
                  variants={skillVariants}
                  className={`group relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border rounded-xl p-4 hover:border-accent/50 transition-all duration-300 overflow-hidden ${
                    isHighlighted ? 'border-accent/60 shadow-lg shadow-accent/20' : 'border-border/50'
                  }`}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -8,
                    rotateY: 5,
                    z: 50
                  }}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ 
                    delay: index * 0.02,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                >
                  {/* Auto-play highlight effect */}
                  {isHighlighted && (
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${category?.color} opacity-20 rounded-xl`}
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: [0.1, 0.3, 0.1],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}
                  
                  {/* Animated gradient background on hover */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${category?.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: 'reverse'
                    }}
                  />
                  
                  {/* Glow effect */}
                  <motion.div
                    className={`absolute -inset-1 bg-gradient-to-r ${category?.color} ${
                      isHighlighted ? 'opacity-40' : 'opacity-0'
                    } group-hover:opacity-50 blur-xl transition-opacity duration-300`}
                    animate={isHighlighted ? {
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.5, 0.3]
                    } : {
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <div className="relative z-10">
                    {/* Skill Name */}
                    <motion.h3 
                      className={`font-bold text-base transition-colors duration-300 text-center ${
                        isHighlighted ? 'text-accent scale-110' : 'group-hover:text-accent'
                      }`}
                      animate={isHighlighted ? {
                        scale: [1, 1.1, 1],
                      } : {}}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {skill.name}
                    </motion.h3>
                    
                    {/* Category badge */}
                    <motion.div 
                      className="mt-2 flex justify-center"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: 1, 
                        scale: isHighlighted ? [1, 1.1, 1] : 1 
                      }}
                      transition={{ 
                        delay: index * 0.02 + 0.2,
                        ...(isHighlighted && {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        })
                      }}
                    >
                      <span className={`text-xs px-2 py-1 rounded-full capitalize transition-colors ${
                        isHighlighted ? 'bg-accent text-white' : 'bg-accent/10 text-accent'
                      }`}>
                        {skill.category}
                      </span>
                    </motion.div>
                  </div>

                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  />
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}