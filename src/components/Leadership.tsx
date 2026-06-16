'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Trophy, Star } from 'lucide-react';
import { leadershipRoles } from '@/data/portfolio';

export default function Leadership() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="leadership"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background-light to-background"
      aria-labelledby="leadership-heading"
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
          <span className="inline-block px-4 py-1.5 bg-accent-orange/10 rounded-full mb-4">
            <span className="font-mono text-xs text-accent-orange uppercase tracking-wider">Beyond Academics</span>
          </span>
          <h2
            id="leadership-heading"
            className="font-space font-bold text-4xl md:text-5xl text-text-primary mb-4"
          >
            Leadership & Activities
          </h2>
          <p className="font-inter text-text-muted max-w-2xl mx-auto">
            Leadership roles and extracurricular involvement that shaped my professional growth
          </p>
        </motion.div>

        {/* Leadership Cards */}
        <div className="space-y-6">
          {leadershipRoles.map((role, index) => (
            <motion.div
              key={role.role}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ x: 8 }}
              className="group relative"
            >
              {/* Gradient border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-orange to-primary-accent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative flex items-center gap-6 bg-surface border border-border rounded-2xl p-6 hover:border-transparent transition-all">
                {/* Icon */}
                <div className="flex-shrink-0 p-4 bg-gradient-to-br from-accent-orange/20 to-primary-accent/20 rounded-xl">
                  {index === 0 ? (
                    <Users size={28} className="text-accent-orange" />
                  ) : (
                    <Trophy size={28} className="text-primary-accent" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-space font-bold text-xl text-text-primary mb-1 group-hover:text-primary-accent transition-colors">
                    {role.role}
                  </h3>
                  <p className="font-inter text-text-muted">
                    {role.organization}
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 p-2 bg-background rounded-lg">
                  <Star size={20} className="text-secondary-accent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
