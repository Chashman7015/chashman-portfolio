'use client';

import { Heart, Code } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-background-light border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-accent to-secondary-accent flex items-center justify-center">
              <span className="font-space font-bold text-lg text-white">C</span>
            </div>
            <span className="font-space font-bold text-xl text-text-primary">Chashman</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/chashman-zafar-225089242"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-surface border border-border rounded-lg text-text-muted hover:text-primary-accent hover:border-primary-accent transition-colors text-sm font-inter"
            >
              LinkedIn
            </a>
            <a
              href="mailto:chashman7015@gmail.com"
              className="px-4 py-2 bg-surface border border-border rounded-lg text-text-muted hover:text-primary-accent hover:border-primary-accent transition-colors text-sm font-inter"
            >
              Email
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="font-inter text-sm text-text-muted">
            © {currentYear} Chashman. All rights reserved.
          </p>
          <p className="flex items-center gap-2 font-inter text-sm text-text-muted">
            Built with <Heart size={14} className="text-red-500" /> and <Code size={14} className="text-primary-accent" /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
