'use client';

import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { leadershipRoles } from '@/data/portfolio';

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="py-24 px-4 sm:px-6 lg:px-8"
      aria-labelledby="leadership-heading"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          id="leadership-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="font-space font-bold text-3xl sm:text-4xl text-text-primary mb-12"
        >
          Leadership
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          {leadershipRoles.map((role, index) => (
            <motion.div
              key={role.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start gap-4 bg-surface border border-border rounded-xl p-6 hover:border-primary-accent/30 transition-colors"
            >
              <div className="p-2 bg-secondary-accent/10 rounded-lg mt-1">
                <Users
                  size={20}
                  className="text-secondary-accent"
                  aria-hidden="true"
                />
              </div>
              <div>
                <h3 className="font-space font-bold text-lg text-text-primary">
                  {role.role}
                </h3>
                <p className="font-inter text-text-muted text-sm">
                  {role.organization}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
