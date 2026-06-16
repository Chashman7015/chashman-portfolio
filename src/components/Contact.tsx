'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Phone } from 'lucide-react';
import { contactInfo } from '@/data/portfolio';

const iconMap: Record<string, React.ElementType> = {
  Mail,
  Linkedin,
  Phone,
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-surface/30"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          id="contact-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="font-space font-bold text-3xl sm:text-4xl text-text-primary mb-6"
        >
          Get in Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-inter text-text-muted mb-12"
        >
          Open to opportunities in industrial automation, railway systems, and control engineering.
        </motion.p>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {contactInfo.map((contact, index) => {
            const Icon = iconMap[contact.icon] || Mail;

            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group bg-surface border border-border rounded-xl p-6 hover:border-primary-accent/50 hover:shadow-lg hover:shadow-primary-accent/10 transition-all"
                aria-label={`${contact.label}: ${contact.value}`}
              >
                <div className="p-3 bg-primary-accent/10 rounded-xl w-fit mx-auto mb-4 group-hover:bg-primary-accent/20 transition-colors">
                  <Icon
                    size={24}
                    className="text-primary-accent"
                    aria-hidden="true"
                  />
                </div>
                <p className="font-mono text-xs text-secondary-accent uppercase tracking-wider mb-2">
                  {contact.label}
                </p>
                <p className="font-inter text-sm text-text-primary truncate">
                  {contact.value}
                </p>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
