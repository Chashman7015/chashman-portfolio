'use client';

import { motion } from 'framer-motion';
import { aboutBio, stats } from '@/data/portfolio';

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-surface/30"
      aria-labelledby="about-heading"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2
            id="about-heading"
            className="font-space font-bold text-3xl sm:text-4xl text-text-primary mb-8"
          >
            About
          </h2>

          {/* Bio */}
          <p className="font-inter text-lg text-text-muted leading-relaxed mb-12">
            {aboutBio}
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-surface border border-border rounded-lg p-4 text-center"
              >
                <p className="font-mono text-xs text-secondary-accent uppercase tracking-wider mb-2">
                  {stat.label}
                </p>
                <p className="font-space font-semibold text-lg text-text-primary">
                  {stat.value}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
