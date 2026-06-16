'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Award, MapPin, GraduationCap } from 'lucide-react';
import { aboutBio, stats } from '@/data/portfolio';

const statIcons: Record<string, React.ElementType> = {
  CGPA: Award,
  Degree: GraduationCap,
  University: Target,
  Location: MapPin,
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background-light to-background"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-secondary-accent/10 rounded-full mb-4">
              <span className="font-mono text-xs text-secondary-accent uppercase tracking-wider">Get to know me</span>
            </span>
            <h2
              id="about-heading"
              className="font-space font-bold text-4xl md:text-5xl text-text-primary mb-4"
            >
              About Me
            </h2>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Bio */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-surface border border-border rounded-2xl p-8 hover:border-secondary-accent/50 transition-colors"
            >
              <h3 className="font-space font-bold text-2xl text-text-primary mb-6 flex items-center gap-3">
                <div className="p-2 bg-primary-accent/10 rounded-lg">
                  <Target className="text-primary-accent" size={24} />
                </div>
                My Story
              </h3>
              <p className="font-inter text-text-light leading-relaxed mb-4">
                {aboutBio}
              </p>
              <p className="font-inter text-text-muted leading-relaxed">
                I&apos;m passionate about building reliable, safety-critical systems that keep people and infrastructure running. My work combines hardware knowledge with software expertise to deliver complete automation solutions.
              </p>
            </motion.div>

            {/* Right: Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              {stats.map((stat, index) => {
                const Icon = statIcons[stat.label] || Award;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="bg-surface border border-border rounded-xl p-5 flex items-center gap-5 hover:border-primary-accent/50 hover:-translate-x-1 transition-all"
                  >
                    <div className="p-3 bg-gradient-to-br from-primary-accent/20 to-secondary-accent/20 rounded-xl">
                      <Icon className="text-primary-accent" size={24} />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-secondary-accent uppercase tracking-wider mb-1">
                        {stat.label}
                      </p>
                      <p className="font-space font-bold text-xl text-text-primary">
                        {stat.value}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
