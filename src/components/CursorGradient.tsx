import React, { useEffect, useRef } from 'react';

interface CursorGradientProps {
  colors?: string[];
  size?: number;
  opacity?: number;
  blur?: number;
  transitionSpeed?: number;
}

export function CursorGradient({
  colors = ['#3b82f6', '#6366f1', '#8b5cf6'],
  size = 600,
  opacity = 0.3,
  blur = 100,
  transitionSpeed = 0.2
}: CursorGradientProps) {
  const gradientRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const isMoving = useRef(false);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      if (!isMoving.current) {
        isMoving.current = true;
        rafId.current = requestAnimationFrame(updateGradientPosition);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mousePos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        
        if (!isMoving.current) {
          isMoving.current = true;
          rafId.current = requestAnimationFrame(updateGradientPosition);
        }
      }
    };

    const updateGradientPosition = () => {
      if (gradientRef.current) {
        const { x, y } = mousePos.current;
        
        // Apply the transform with hardware acceleration
        gradientRef.current.style.transform = `translate3d(${x - size/2}px, ${y - size/2}px, 0)`;
      }
      
      rafId.current = requestAnimationFrame(updateGradientPosition);
    };

    // Start with an initial position in the center of the viewport
    if (gradientRef.current && typeof window !== 'undefined') {
      mousePos.current = { 
        x: window.innerWidth / 2, 
        y: window.innerHeight / 2 
      };
      rafId.current = requestAnimationFrame(updateGradientPosition);
    }

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [size]);

  // Create the gradient background
  const gradientBackground = `radial-gradient(circle, ${colors.join(', ')})`;

  return (
    <div 
      ref={gradientRef}
      className="pointer-events-none fixed z-0"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: gradientBackground,
        opacity: opacity,
        filter: `blur(${blur}px)`,
        transition: `opacity ${transitionSpeed}s ease`,
        willChange: 'transform',
        mixBlendMode: 'lighten'
      }}
      aria-hidden="true"
    />
  );
}