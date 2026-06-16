'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { education } from '@/data/portfolio';

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-surface/30"
      aria-labelledby="education-heading"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          id="education-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="font-space font-bold text-3xl sm:text-4xl text-text-primary mb-12"
        >
          Education
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="bg-surface border border-border rounded-xl p-8"
        >
          {/* Degree Icon and Title */}
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-primary-accent/10 rounded-xl">
              <GraduationCap
                size={32}
                className="text-primary-accent"
                aria-hidden="true"
              />
            </div>
            <div>
              <h3 className="font-space font-bold text-xl text-text-primary mb-1">
                {education.degree}
              </h3>
              <p className="font-inter text-primary-accent font-medium">
                {education.institution}
              </p>
            </div>
          </div>

          {/* Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-secondary-accent uppercase tracking-wider">
                Duration
              </span>
              <span className="font-inter text-sm text-text-muted">
                {education.dateRange}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-secondary-accent uppercase tracking-wider">
                CGPA
              </span>
              <span className="font-inter text-sm text-text-muted">
                {education.cgpa}
              </span>
            </div>
          </div>

          {/* Recognition */}
          <div className="flex items-center gap-2 mb-6 text-text-muted">
            <Award size={16} className="text-secondary-accent" aria-hidden="true" />
            <span className="font-inter text-sm">{education.recognition}</span>
          </div>

          {/* Coursework */}
          <div>
            <h4 className="font-mono text-xs text-secondary-accent uppercase tracking-wider mb-3">
              Relevant Coursework
            </h4>
            <div className="flex flex-wrap gap-2">
              {education.coursework.map((course) => (
                <span
                  key={course}
                  className="font-mono text-xs px-3 py-1.5 bg-background border border-border rounded-full text-text-muted hover:border-primary-accent/50 transition-colors"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
