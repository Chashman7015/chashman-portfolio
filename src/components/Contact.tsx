'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Linkedin, Phone, Send, MessageCircle } from 'lucide-react';
import { contactInfo } from '@/data/portfolio';

const iconMap: Record<string, React.ElementType> = {
  Mail,
  Linkedin,
  Phone,
};

const contactColors = [
  { bg: 'from-primary-accent/20 to-blue-600/20', icon: 'text-primary-accent', border: 'hover:border-primary-accent' },
  { bg: 'from-[#0077b5]/20 to-blue-800/20', icon: 'text-[#0077b5]', border: 'hover:border-[#0077b5]' },
  { bg: 'from-accent-green/20 to-emerald-600/20', icon: 'text-accent-green', border: 'hover:border-accent-green' },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background-light"
      aria-labelledby="contact-heading"
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
            <span className="font-mono text-xs text-accent-orange uppercase tracking-wider">Let&apos;s Connect</span>
          </span>
          <h2
            id="contact-heading"
            className="font-space font-bold text-4xl md:text-5xl text-text-primary mb-4"
          >
            Get In Touch
          </h2>
          <p className="font-inter text-text-muted max-w-2xl mx-auto">
            Open to opportunities in industrial automation, control systems, and embedded engineering. Let&apos;s discuss how I can contribute to your team.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map((contact, index) => {
            const Icon = iconMap[contact.icon] || Mail;
            const colorStyle = contactColors[index];
            const isExternal = contact.href.startsWith('http');

            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group relative bg-gradient-to-br ${colorStyle.bg} border border-border ${colorStyle.border} rounded-2xl p-8 text-center transition-all duration-300`}
                aria-label={`${contact.label}: ${contact.value}`}
              >
                {/* Icon */}
                <div className="inline-flex p-4 rounded-2xl bg-surface border border-border mb-6 group-hover:border-transparent transition-colors">
                  <Icon
                    size={32}
                    className={`${colorStyle.icon}`}
                    aria-hidden="true"
                  />
                </div>

                {/* Label */}
                <p className="font-mono text-xs text-secondary-accent uppercase tracking-wider mb-2">
                  {contact.label}
                </p>

                {/* Value */}
                <p className="font-inter text-lg text-text-primary font-medium truncate mb-4">
                  {contact.value}
                </p>

                {/* Action hint */}
                <div className="inline-flex items-center gap-2 text-sm text-text-muted group-hover:text-primary-accent transition-colors">
                  <span>{isExternal ? 'Visit' : 'Connect'}</span>
                  <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-surface border border-border rounded-full">
            <MessageCircle size={18} className="text-secondary-accent" />
            <p className="font-inter text-text-muted text-sm">
              I typically respond within 24 hours
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
