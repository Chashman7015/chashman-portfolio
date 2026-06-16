'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDown, Download, MapPin, Mail, Phone, Linkedin, Zap } from 'lucide-react';
import DotGrid from './DotGrid';
import { personalInfo } from '@/data/portfolio';

export default function Hero() {
  const handleViewWork = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Dot Grid Background */}
      <DotGrid />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12">
        {/* Profile Picture - Centered */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col items-center mb-8"
        >
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-primary-accent to-secondary-accent rounded-full blur-xl opacity-40" />
            
            {/* Profile container */}
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-surface shadow-2xl shadow-primary-accent/20">
              <Image
                src="/chashman.png"
                alt={`${personalInfo.name} - Profile Picture`}
                width={176}
                height={176}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Info - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-green/10 border border-accent-green/30 rounded-full mb-4">
            <span className="w-2 h-2 bg-accent-green rounded-full animate-pulse" />
            <span className="font-mono text-xs text-accent-green">Available for opportunities</span>
          </div>

          {/* Name */}
          <h1 className="font-space font-bold text-4xl sm:text-5xl md:text-6xl text-text-primary tracking-tight mb-3">
            {personalInfo.name}
          </h1>

          {/* Title */}
          <p className="font-space font-semibold text-lg sm:text-xl text-primary-accent mb-2">
            {personalInfo.title}
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-1.5 mb-6">
            <MapPin size={14} className="text-secondary-accent" />
            <span className="font-inter text-sm text-text-muted">{personalInfo.location}</span>
          </div>

          {/* Tagline */}
          <p className="font-mono text-sm text-text-light max-w-md mx-auto mb-8 leading-relaxed">
            {personalInfo.tagline}
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <a
              href="mailto:chashman7015@gmail.com"
              className="flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-full text-sm text-text-muted hover:border-primary-accent hover:text-primary-accent transition-colors"
            >
              <Mail size={16} className="text-primary-accent" />
              <span className="hidden sm:inline">chashman7015@gmail.com</span>
            </a>
            <a
              href="tel:+923415810670"
              className="flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-full text-sm text-text-muted hover:border-secondary-accent hover:text-secondary-accent transition-colors"
            >
              <Phone size={16} className="text-secondary-accent" />
              <span className="hidden sm:inline">+92-341-5810670</span>
            </a>
            <a
              href="https://linkedin.com/in/chashman-zafar-225089242"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-full text-sm text-text-muted hover:border-accent-purple hover:text-accent-purple transition-colors"
            >
              <Linkedin size={16} className="text-accent-purple" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleViewWork}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-primary-accent to-primary-light text-white font-inter font-semibold rounded-xl hover:shadow-lg hover:shadow-primary-accent/30 transition-all"
            >
              View My Work
              <ArrowDown size={18} />
            </button>
            <a
              href="/cv.pdf"
              download
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-surface border-2 border-border text-text-primary font-inter font-semibold rounded-xl hover:border-primary-accent hover:text-primary-accent transition-all"
            >
              Download CV
              <Download size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
