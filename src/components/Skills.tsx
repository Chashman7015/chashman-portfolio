'use client';

import { motion } from 'framer-motion';
import { Cpu, Gauge, Code, CircuitBoard } from 'lucide-react';
import { skillGroups } from '@/data/portfolio';

const iconMap: Record<string, React.ElementType> = {
  Cpu,
  Gauge,
  Code,
  CircuitBoard,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-6 lg:px-8"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          id="skills-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="font-space font-bold text-3xl sm:text-4xl text-text-primary mb-12"
        >
          Skills
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {skillGroups.map((group, groupIndex) => {
            const Icon = iconMap[group.icon] || Cpu;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                className="bg-surface border border-border rounded-xl p-6 hover:border-primary-accent/50 transition-colors"
              >
                {/* Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary-accent/10 rounded-lg">
                    <Icon
                      size={24}
                      className="text-primary-accent"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="font-space font-semibold text-text-primary text-sm leading-tight">
                    {group.title}
                  </h3>
                </div>

                {/* Skills Pills */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-xs px-3 py-1.5 bg-background border border-border rounded-full text-secondary-accent hover:border-secondary-accent transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
