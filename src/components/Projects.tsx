'use client';

import { motion } from 'framer-motion';
import { projects } from '@/data/portfolio';

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-6 lg:px-8"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          id="projects-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="font-space font-bold text-3xl sm:text-4xl text-text-primary mb-12"
        >
          Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group bg-surface border border-border rounded-xl p-6 hover:border-primary-accent/50 hover:shadow-lg hover:shadow-primary-accent/10 transition-all cursor-pointer"
            >
              {/* Header */}
              <div className="mb-4">
                <h3 className="font-space font-bold text-lg text-text-primary leading-tight mb-2 group-hover:text-primary-accent transition-colors">
                  {project.title}
                </h3>
                <p className="font-mono text-xs text-secondary-accent">
                  {project.date}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-2 py-1 bg-background border border-border rounded text-text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bullets */}
              <ul className="space-y-2">
                {project.bullets.map((bullet, bulletIndex) => (
                  <li
                    key={bulletIndex}
                    className="font-inter text-sm text-text-muted leading-relaxed pl-4 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-primary-accent/60 before:rounded-full"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
