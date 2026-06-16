'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Cpu, Settings, Heart } from 'lucide-react';
import { leadershipRoles } from '@/data/portfolio';

export default function Leadership() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const getIcon = (index: number, role: string) => {
    // PR Secretary and outreach programs use Users icon
    if (index === 0 || role.toLowerCase().includes('outreach') || role.toLowerCase().includes('exhibition') || role.toLowerCase().includes('foundation')) {
      return <Users size={24} className="text-accent-orange" />;
    }
    // Director Technical uses Cpu icon
    if (role.toLowerCase().includes('director')) {
      return <Cpu size={24} className="text-primary-accent" />;
    }
    return <Users size={24} className="text-accent-orange" />;
  };

  const getBgGradient = (index: number, role: string) => {
    if (index === 0 || role.toLowerCase().includes('outreach') || role.toLowerCase().includes('exhibition') || role.toLowerCase().includes('foundation')) {
      return 'from-accent-orange/20 to-accent-orange/5';
    }
    if (role.toLowerCase().includes('director')) {
      return 'from-primary-accent/20 to-primary-accent/5';
    }
    return 'from-secondary-accent/20 to-secondary-accent/5';
  };

  return (
    <section
      id="leadership"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background-light to-background"
      aria-labelledby="leadership-heading"
    >
      <div className="max-w-5xl mx-auto">
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

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {leadershipRoles.map((role, index) => (
            <motion.div
              key={role.role}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              whileHover={{ y: -4 }}
              className="group relative"
            >
              {/* Gradient border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-orange to-primary-accent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative h-full bg-surface border border-border rounded-xl p-5 hover:border-transparent transition-all">
                {/* Icon */}
                <div className={`w-12 h-12 bg-gradient-to-br ${getBgGradient(index, role.role)} rounded-lg flex items-center justify-center mb-4`}>
                  {getIcon(index, role.role)}
                </div>

                {/* Content */}
                <h3 className="font-space font-bold text-base text-text-primary mb-1 group-hover:text-primary-accent transition-colors line-clamp-2">
                  {role.role}
                </h3>
                <p className="font-inter text-xs text-text-muted">
                  {role.organization}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
