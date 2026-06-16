import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0f1e',
        'background-light': '#0f1629',
        surface: '#111827',
        'surface-hover': '#1a2332',
        'primary-accent': '#3b82f6',
        'primary-light': '#60a5fa',
        'secondary-accent': '#06b6d4',
        'secondary-light': '#22d3ee',
        'accent-green': '#10b981',
        'accent-purple': '#8b5cf6',
        'accent-orange': '#f59e0b',
        'text-primary': '#f1f5f9',
        'text-muted': '#94a3b8',
        'text-light': '#cbd5e1',
        border: '#1e2d40',
        'border-light': '#2d3a4d',
      },
      fontFamily: {
        space: ['var(--font-space-grotesk)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
