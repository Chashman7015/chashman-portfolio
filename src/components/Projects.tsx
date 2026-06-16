'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FolderGit2, Calendar, ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/portfolio';

const projectColors = [
  'from-primary-accent to-blue-600',
  'from-secondary-accent to-cyan-600',
  'from-accent-purple to-violet-600',
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background-light to-background"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-accent-green/10 rounded-full mb-4">
            <span className="font-mono text-xs text-accent-green uppercase tracking-wider">Portfolio</span>
          </span>
          <h2
            id="projects-heading"
            className="font-space font-bold text-4xl md:text-5xl text-text-primary mb-4"
          >
            Featured Projects
          </h2>
          <p className="font-inter text-text-muted max-w-2xl mx-auto">
            Real-world solutions demonstrating expertise in automation, control systems, and intelligent systems
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const gradientClass = projectColors[index % projectColors.length];
            
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative"
              >
                {/* Gradient border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-accent via-secondary-accent to-accent-purple rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative h-full bg-surface border border-border rounded-2xl p-8 hover:border-transparent transition-all duration-300">
                  {/* Gradient accent bar */}
                  <div className={`absolute top-0 left-8 right-8 h-1 bg-gradient-to-r ${gradientClass} rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-surface to-background border border-border">
                      <FolderGit2 size={28} className="text-primary-accent" />
                    </div>
                    <div className="flex items-center gap-2 text-text-muted">
                      <Calendar size={14} />
                      <span className="font-mono text-xs">{project.date}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-space font-bold text-xl text-text-primary mb-3 group-hover:text-primary-accent transition-colors">
                    {project.title}
                  </h3>

                  {/* Bullets */}
                  <ul className="space-y-3 mb-6">
                    {project.bullets.map((bullet, bulletIndex) => (
                      <li
                        key={bulletIndex}
                        className="font-inter text-sm text-text-light leading-relaxed pl-4 relative before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-gradient-to-br before:from-primary-accent before:to-secondary-accent before:rounded-full"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-3 py-1.5 bg-background border border-border rounded-lg text-text-muted hover:border-primary-accent/50 hover:text-primary-accent transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
