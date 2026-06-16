'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDown, Download } from 'lucide-react';
import DotGrid from './DotGrid';
import { personalInfo } from '@/data/portfolio';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function Hero() {
  const handleViewWork = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Dot Grid Background */}
      <DotGrid />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Profile Picture */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary-accent/30 shadow-xl shadow-primary-accent/20">
                <Image
                  src="/chashman.png"
                  alt={`${personalInfo.name} - Profile Picture`}
                  width={224}
                  height={224}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary-accent/20 -m-2 animate-pulse-slow" />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="font-space font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-text-primary tracking-tight"
          >
            {personalInfo.name}
          </motion.h1>

          {/* Title */}
          <motion.p
            variants={itemVariants}
            className="font-space font-semibold text-xl sm:text-2xl md:text-3xl text-primary-accent"
          >
            {personalInfo.title}
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="font-mono text-sm sm:text-base md:text-lg text-text-muted max-w-2xl mx-auto"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <button
              onClick={handleViewWork}
              className="group flex items-center gap-2 px-6 py-3 bg-primary-accent text-white font-inter font-medium rounded-lg hover:bg-primary-accent/90 transition-all hover:shadow-lg hover:shadow-primary-accent/25"
              aria-label="View my work"
            >
              View Work
              <ArrowDown
                size={18}
                className="group-hover:translate-y-1 transition-transform"
              />
            </button>
            <a
              href="/cv.pdf"
              download
              className="group flex items-center gap-2 px-6 py-3 border border-border text-text-primary font-inter font-medium rounded-lg hover:border-primary-accent hover:text-primary-accent transition-colors"
              aria-label="Download CV PDF"
            >
              Download CV
              <Download
                size={18}
                className="group-hover:translate-y-0.5 transition-transform"
              />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-text-muted rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1 h-2 bg-text-muted rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
