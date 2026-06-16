'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Award, Calendar, CheckCircle } from 'lucide-react';
import { education } from '@/data/portfolio';

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="education"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background-light"
      aria-labelledby="education-heading"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-accent-purple/10 rounded-full mb-4">
            <span className="font-mono text-xs text-accent-purple uppercase tracking-wider">Academic Background</span>
          </span>
          <h2
            id="education-heading"
            className="font-space font-bold text-4xl md:text-5xl text-text-primary mb-4"
          >
            Education
          </h2>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          {/* Gradient border */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-purple via-primary-accent to-secondary-accent rounded-2xl opacity-50" />
          
          <div className="relative bg-surface border border-border rounded-2xl p-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
              <div className="p-5 bg-gradient-to-br from-accent-purple/20 to-primary-accent/20 rounded-2xl">
                <GraduationCap size={40} className="text-accent-purple" />
              </div>
              <div className="flex-1">
                <h3 className="font-space font-bold text-2xl text-text-primary mb-2">
                  {education.degree}
                </h3>
                <div className="flex flex-wrap items-center gap-4">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-accent/10 rounded-full">
                    <Award size={14} className="text-primary-accent" />
                    <span className="font-inter text-sm text-primary-accent font-medium">{education.institution}</span>
                  </span>
                  <span className="inline-flex items-center gap-2 text-text-muted">
                    <Calendar size={14} />
                    <span className="font-mono text-sm">{education.dateRange}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-background/50 border border-border rounded-xl p-4 text-center">
                <p className="font-mono text-xs text-secondary-accent uppercase tracking-wider mb-1">CGPA</p>
                <p className="font-space font-bold text-2xl text-text-primary">{education.cgpa}</p>
              </div>
              <div className="bg-background/50 border border-border rounded-xl p-4 text-center">
                <p className="font-mono text-xs text-secondary-accent uppercase tracking-wider mb-1">Status</p>
                <p className="font-inter font-medium text-text-primary">Graduated</p>
              </div>
              <div className="bg-background/50 border border-border rounded-xl p-4 text-center">
                <p className="font-mono text-xs text-secondary-accent uppercase tracking-wider mb-1">Recognition</p>
                <p className="font-inter text-sm text-text-muted">HEC & PEC</p>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="mt-6 pt-6 border-t border-border">
              <h4 className="flex items-center gap-2 font-space font-semibold text-lg text-text-primary mb-4">
                <CheckCircle size={18} className="text-accent-green" />
                Key Competencies
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-3 text-text-muted">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-accent" />
                  <span className="font-inter text-sm">Industrial Automation & Control Systems</span>
                </div>
                <div className="flex items-center gap-3 text-text-muted">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary-accent" />
                  <span className="font-inter text-sm">PLC Programming & SCADA</span>
                </div>
                <div className="flex items-center gap-3 text-text-muted">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-purple" />
                  <span className="font-inter text-sm">Embedded Systems & Microcontrollers</span>
                </div>
                <div className="flex items-center gap-3 text-text-muted">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-green" />
                  <span className="font-inter text-sm">Robotics & Machine Learning</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
