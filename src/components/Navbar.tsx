'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { navLinks } from '@/data/portfolio';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/95 backdrop-blur-lg border-b border-border shadow-lg shadow-black/10'
            : 'bg-transparent'
        }`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#"
              className="group flex items-center gap-2"
              aria-label="Chashman - Home"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-accent to-secondary-accent flex items-center justify-center">
                <span className="font-space font-bold text-lg text-white">C</span>
              </div>
              <span className="font-space font-bold text-xl text-text-primary group-hover:text-primary-accent transition-colors">
                Chashman
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 font-inter text-sm text-text-muted hover:text-primary-accent hover:bg-primary-accent/5 rounded-lg transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="/cv.pdf"
                className="group flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-accent to-primary-light text-white font-inter font-medium text-sm rounded-lg hover:shadow-lg hover:shadow-primary-accent/25 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2.5 bg-surface border border-border rounded-lg text-text-primary hover:text-primary-accent hover:border-primary-accent transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-background/98 backdrop-blur-lg md:hidden"
          onClick={handleLinkClick}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="font-space text-3xl text-text-primary hover:text-primary-accent transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <a
                href="/cv.pdf"
                onClick={handleLinkClick}
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-accent to-primary-light text-white font-inter font-semibold rounded-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={20} />
                Download CV
              </a>
            </motion.div>
          </div>
        </motion.div>
      )}
    </>
  );
}
