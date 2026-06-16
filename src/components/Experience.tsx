'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { experiences } from '@/data/portfolio';

function ExperienceCard({
  experience,
  index,
}: {
  experience: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="relative pl-8 sm:pl-12"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 sm:left-1/2 top-0 w-4 h-4 -translate-x-1/2 sm:translate-x-0 bg-primary-accent rounded-full border-4 border-background z-10" />

      {/* Content */}
      <div className="sm:w-[calc(50%-2rem)] sm:ml-auto">
        <div className="bg-surface border border-border rounded-xl p-6 hover:border-primary-accent/30 transition-colors">
          {/* Header */}
          <div className="mb-4">
            <h3 className="font-space font-bold text-lg text-text-primary leading-tight">
              {experience.role}
            </h3>
            <p className="font-inter text-primary-accent font-medium">
              {experience.company}
            </p>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4 font-mono text-xs text-text-muted">
            <span className="text-secondary-accent">{experience.dateRange}</span>
            <span>·</span>
            <span>{experience.location}</span>
          </div>

          {/* Bullets */}
          <ul className="space-y-2">
            {experience.bullets.map((bullet, bulletIndex) => (
              <li
                key={bulletIndex}
                className="font-inter text-sm text-text-muted leading-relaxed pl-4 relative before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-primary-accent before:rounded-full"
              >
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="experience"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-surface/30"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          id="experience-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="font-space font-bold text-3xl sm:text-4xl text-text-primary mb-16 text-center"
        >
          Experience
        </motion.h2>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Center line (desktop) / left line (mobile) */}
          <div className="absolute left-[7px] sm:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 sm:translate-x-0 overflow-hidden">
            {/* Animated line */}
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-primary-accent to-secondary-accent"
            />
          </div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`${experience.company}-${index}`}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
