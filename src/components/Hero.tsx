'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDown, Download, MapPin, Mail, Phone, Linkedin, Briefcase, GraduationCap, Zap } from 'lucide-react';
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
      <div className="absolute inset-0 bg-gradient-to-br from-primary-accent/5 via-transparent to-secondary-accent/5 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-accent to-secondary-accent rounded-full blur-2xl opacity-30 animate-pulse" />
              
              {/* Profile container */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-gradient-to-r from-primary-accent to-secondary-accent shadow-2xl shadow-primary-accent/30">
                <Image
                  src="/chashman.png"
                  alt={`${personalInfo.name} - Profile Picture`}
                  width={288}
                  height={288}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -left-4 lg:-left-8 top-8 bg-surface border border-border rounded-full px-3 py-1.5 flex items-center gap-2 shadow-lg"
              >
                <Briefcase size={14} className="text-primary-accent" />
                <span className="font-mono text-xs text-text-muted">Working</span>
                <span className="w-2 h-2 bg-accent-green rounded-full animate-pulse" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute -right-4 lg:-right-8 top-16 bg-surface border border-border rounded-full px-3 py-1.5 flex items-center gap-2 shadow-lg"
              >
                <GraduationCap size={14} className="text-secondary-accent" />
                <span className="font-mono text-xs text-text-muted">UET Lahore</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Greeting */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <Zap size={18} className="text-accent-orange" />
              <span className="font-mono text-sm text-accent-orange">Available for opportunities</span>
            </div>

            {/* Name */}
            <h1 className="font-space font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-text-primary tracking-tight mb-2">
              {personalInfo.name}
            </h1>

            {/* Title */}
            <div className="inline-block bg-gradient-to-r from-primary-accent/20 to-secondary-accent/20 border border-primary-accent/30 rounded-full px-4 py-1.5 mb-4">
              <p className="font-space font-semibold text-lg sm:text-xl text-primary-light">
                {personalInfo.title}
              </p>
            </div>

            {/* Location */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <MapPin size={16} className="text-secondary-accent" />
              <span className="font-inter text-text-muted">{personalInfo.location}</span>
            </div>

            {/* Tagline */}
            <p className="font-mono text-sm sm:text-base text-text-light max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              {personalInfo.tagline}
            </p>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              <div className="bg-surface/80 border border-border rounded-xl p-4 text-center hover:border-primary-accent/50 transition-colors">
                <Mail size={20} className="mx-auto mb-2 text-primary-accent" />
                <p className="font-mono text-xs text-text-muted">Email</p>
                <p className="font-inter text-sm text-text-primary truncate">chashman7015@gmail.com</p>
              </div>
              <div className="bg-surface/80 border border-border rounded-xl p-4 text-center hover:border-secondary-accent/50 transition-colors">
                <Phone size={20} className="mx-auto mb-2 text-secondary-accent" />
                <p className="font-mono text-xs text-text-muted">Phone</p>
                <p className="font-inter text-sm text-text-primary">+92-341-5810670</p>
              </div>
              <div className="bg-surface/80 border border-border rounded-xl p-4 text-center hover:border-accent-purple/50 transition-colors">
                <Linkedin size={20} className="mx-auto mb-2 text-accent-purple" />
                <p className="font-mono text-xs text-text-muted">LinkedIn</p>
                <p className="font-inter text-sm text-text-primary truncate">Chashman7015</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={handleViewWork}
                className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-accent to-primary-light text-white font-inter font-semibold rounded-xl hover:shadow-lg hover:shadow-primary-accent/30 transition-all hover:-translate-y-0.5"
              >
                View My Work
                <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
              </button>
              <a
                href="/cv.pdf"
                download
                className="group flex items-center gap-3 px-8 py-4 bg-surface border-2 border-border text-text-primary font-inter font-semibold rounded-xl hover:border-primary-accent hover:text-primary-accent transition-all hover:-translate-y-0.5"
              >
                Download CV
                <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-8 h-12 border-2 border-primary-accent/50 rounded-full flex justify-center pt-2 cursor-pointer hover:border-primary-accent transition-colors"
        >
          <motion.div className="w-1.5 h-3 bg-primary-accent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
