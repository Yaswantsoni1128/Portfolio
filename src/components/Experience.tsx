import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { experiences } from '@/lib/data'

export function Experience() {
  const container = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="experience" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-4"
        >
          <motion.div variants={item} className="flex items-center space-x-4">
            <div className="p-3 rounded-2xl bg-accent/10 border border-accent/20 text-accent shadow-lg shadow-accent/5">
              <Briefcase size={24} />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold font-display text-foreground mb-2">Experience</h2>
              <p className="text-foreground-secondary text-lg max-w-xl">My professional journey and internships.</p>
            </div>
          </motion.div>
          
          <motion.div variants={item} className="hidden md:block">
            <div className="h-1 w-24 bg-gradient-to-r from-accent to-transparent rounded-full" />
          </motion.div>
        </motion.div>

        <motion.div
          className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.id}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-card/40 backdrop-blur-sm border border-accent/10 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:shadow-accent/10 hover:border-accent/30 transition-all duration-300 overflow-hidden"
            >
              {/* Card gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex flex-col gap-1 mb-4">
                  <div className="flex justify-between items-start gap-2">
                    <h4 className="text-sm sm:text-base font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                      {exp.position}
                    </h4>
                    <span className="text-xs font-semibold py-1 px-2 rounded-full bg-accent/10 text-accent border border-accent/20 whitespace-nowrap">
                      {exp.duration}
                    </span>
                  </div>
                  <div className="text-base font-bold text-accent text-blue-500 group-hover:text-accent-secondary transition-colors duration-300">
                    {exp.company}
                  </div>
                </div>

                <ul className="space-y-3 mb-6 flex-grow">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex items-start text-sm text-foreground-secondary/90 leading-relaxed group-hover:text-foreground-secondary transition-colors duration-300">
                      <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/40 group-hover:bg-accent transition-colors duration-300 flex-shrink-0" />
                      {desc}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-accent/5 text-foreground-secondary border border-accent/10 group-hover:border-accent/30 group-hover:bg-accent/10 group-hover:text-accent transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}