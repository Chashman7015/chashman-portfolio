'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Cpu, Gauge, Code, CircuitBoard, Settings, Cog, Binary } from 'lucide-react';
import { skillGroups } from '@/data/portfolio';

const iconMap: Record<string, React.ElementType> = {
  Cpu: Settings,
  Gauge,
  Code,
  CircuitBoard,
};

const accentColors: Record<string, string> = {
  'Industrial Automation & Control': 'from-primary-accent to-primary-light',
  'Instrumentation & Mechanical': 'from-secondary-accent to-accent-green',
  'Software & Programming': 'from-accent-purple to-pink-500',
  'Embedded & Real-Time Systems': 'from-accent-orange to-amber-400',
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background-light"
      aria-labelledby="skills-heading"
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
          <span className="inline-block px-4 py-1.5 bg-accent-purple/10 rounded-full mb-4">
            <span className="font-mono text-xs text-accent-purple uppercase tracking-wider">What I bring</span>
          </span>
          <h2
            id="skills-heading"
            className="font-space font-bold text-4xl md:text-5xl text-text-primary mb-4"
          >
            Skills & Expertise
          </h2>
          <p className="font-inter text-text-muted max-w-2xl mx-auto">
            A comprehensive toolkit spanning industrial automation, software development, and embedded systems
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillGroups.map((group, groupIndex) => {
            const Icon = iconMap[group.icon] || Cpu;
            const accentClass = accentColors[group.title] || 'from-primary-accent to-secondary-accent';

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                className="group relative"
              >
                {/* Gradient border on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-accent via-secondary-accent to-accent-purple rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative bg-surface border border-border rounded-2xl p-6 hover:border-transparent transition-all duration-300 h-full">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${accentClass} shadow-lg`}>
                      <Icon
                        size={28}
                        className="text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="font-space font-bold text-lg text-text-primary leading-tight">
                      {group.title}
                    </h3>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: groupIndex * 0.1 + skillIndex * 0.05 }}
                        className="font-mono text-sm px-4 py-2 bg-background border border-border rounded-full text-text-light hover:border-primary-accent/50 hover:text-primary-accent transition-all cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
