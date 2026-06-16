'use client';

import { useEffect, useRef, useState } from 'react';

export default function DotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const draw = () => {
      time += 0.008;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const spacing = 35;
      const cols = Math.ceil(canvas.width / spacing) + 1;
      const rows = Math.ceil(canvas.height / spacing) + 1;

      // Color palette for vibrant effect
      const colors = [
        { r: 59, g: 130, b: 246 },   // Blue
        { r: 6, g: 182, b: 212 },    // Cyan
        { r: 139, g: 92, b: 246 },   // Purple
      ];

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing;
          const y = j * spacing;

          // Multi-layered pulsing for more dynamic effect
          const pulse1 = Math.sin(time + i * 0.15 + j * 0.1) * 0.5 + 0.5;
          const pulse2 = Math.sin(time * 0.7 + i * 0.1 - j * 0.15) * 0.5 + 0.5;
          const combinedPulse = (pulse1 + pulse2) / 2;

          // Size variation
          const baseSize = 1.5;
          const size = baseSize + combinedPulse * 1.5;

          // Color selection based on position
          const colorIndex = (i + j) % colors.length;
          const color = colors[colorIndex];

          // Gradient opacity based on distance from center
          const centerX = canvas.width / 2;
          const centerY = canvas.height / 2;
          const distX = (x - centerX) / canvas.width;
          const distY = (y - centerY) / canvas.height;
          const distFromCenter = Math.sqrt(distX * distX + distY * distY);
          
          const baseOpacity = 0.15 + (1 - distFromCenter) * 0.2;
          const opacity = baseOpacity + combinedPulse * 0.25;

          // Draw glow effect
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 3);
          gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity})`);
          gradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`);
          
          ctx.beginPath();
          ctx.arc(x, y, size * 3, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();

          // Draw core dot
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity + 0.2})`;
          ctx.fill();
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, [prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
