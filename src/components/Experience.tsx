'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Calendar, Building2 } from 'lucide-react';
import { experiences } from '@/data/portfolio';

function ExperienceCard({
  experience,
  index,
}: {
  experience: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      {/* Timeline connector - desktop */}
      <div className="hidden lg:block absolute top-8 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent -z-10" />
      
      {/* Timeline dot */}
      <div className="hidden lg:flex absolute top-6 left-1/2 -translate-x-1/2 items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary-accent to-secondary-accent shadow-lg shadow-primary-accent/30 z-10">
        <div className="w-3 h-3 bg-white rounded-full" />
      </div>

      {/* Card */}
      <div className={`lg:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'}`}>
        <div className="bg-surface border border-border rounded-2xl p-6 hover:border-primary-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-accent/10 hover:-translate-y-1">
          {/* Header */}
          <div className="mb-4">
            <div className="inline-block px-3 py-1 bg-primary-accent/10 rounded-full mb-3">
              <span className="font-mono text-xs text-primary-accent font-medium">{experience.dateRange}</span>
            </div>
            <h3 className="font-space font-bold text-xl text-text-primary mb-1">
              {experience.role}
            </h3>
            <div className="flex items-center gap-2 flex-wrap">
              <Building2 size={14} className="text-secondary-accent" />
              <p className="font-inter text-secondary-accent font-medium">
                {experience.company}
              </p>
            </div>
          </div>

          {/* Meta */}
          <div className="flex items-center gap-4 mb-4 text-text-muted">
            <div className="flex items-center gap-1.5">
              <MapPin size={14} className="text-accent-purple" />
              <span className="font-inter text-sm">{experience.location}</span>
            </div>
          </div>

          {/* Bullets */}
          <ul className="space-y-3">
            {experience.bullets.map((bullet, bulletIndex) => (
              <li
                key={bulletIndex}
                className="font-inter text-sm text-text-muted leading-relaxed pl-4 relative before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:bg-gradient-to-br before:from-primary-accent before:to-secondary-accent before:rounded-full"
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
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section
      id="experience"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-background-light"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-accent/10 rounded-full mb-4">
            <span className="font-mono text-xs text-primary-accent uppercase tracking-wider">Career Path</span>
          </span>
          <h2
            id="experience-heading"
            className="font-space font-bold text-4xl md:text-5xl text-text-primary mb-4"
          >
            Work Experience
          </h2>
          <p className="font-inter text-text-muted max-w-2xl mx-auto">
            From railway signaling systems to industrial automation, here&apos;s my professional journey
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-accent via-secondary-accent to-accent-purple lg:-translate-x-1/2" />

          {/* Experience Cards */}
          <div className="space-y-8 lg:space-y-0">
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
