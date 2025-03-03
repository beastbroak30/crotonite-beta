import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  life: number;
}

export function NotFound() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();
  const leakTimeoutRef = useRef<NodeJS.Timeout>();
  const isLeakingRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
    };

    initParticles();

    // Create pipe crack effect
    const createCrack = () => {
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(100, canvas.height / 2 - 50);
      ctx.lineTo(150, canvas.height / 2);
      ctx.lineTo(100, canvas.height / 2 + 50);
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.restore();
    };

    // Create pipe
    const createPipe = () => {
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, canvas.height / 2 - 50, 100, 100);
      ctx.fillStyle = '#1e293b';
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 3;
      ctx.fill();
      ctx.stroke();
      createCrack();
      ctx.restore();
    };

    // Add new particles from the crack
    const addNewParticles = () => {
      if (!isLeakingRef.current) return;

      for (let i = 0; i < 3; i++) {
        const angle = (Math.random() - 0.5) * Math.PI / 2;
        const speed = 2 + Math.random() * 3;
        particlesRef.current.push({
          x: 120,
          y: canvas.height / 2,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: Math.random() * 3 + 1,
          color: `hsl(${210 + Math.random() * 30}, 100%, 70%)`,
          life: 100
        });
      }
    };

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    
      createPipe();
    
      if (isLeakingRef.current) {
        addNewParticles();
      }
    
      particlesRef.current.forEach((particle, index) => {
        // Calculate distance to mouse
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
    
        // Apply mouse interaction force
        if (distance < 150) {
          const force = 0.5;
          particle.vx += (dx / distance) * force;
          particle.vy += (dy / distance) * force;
        }
    
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
    
        // Bounce off walls
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -0.8;
          particle.x = Math.max(0, Math.min(particle.x, canvas.width));
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -0.8;
          particle.y = Math.max(0, Math.min(particle.y, canvas.height));
        }
    
        // Apply forces
        particle.vy += 0.02; // reduced gravity
        particle.vx *= 0.995; // air resistance
        particle.vy *= 0.995; // air resistance
    
        // Draw particle with glow effect
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
    
        // Add glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = particle.color;
    
        // Only remove particles that go off screen
        if (particle.x < -50 || particle.x > canvas.width + 50 || 
            particle.y < -50 || particle.y > canvas.height + 50) {
          particlesRef.current.splice(index, 1);
        }
      });
    
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Stop the leak after 5 seconds
    leakTimeoutRef.current = setTimeout(() => {
      isLeakingRef.current = false;
    }, 5000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (leakTimeoutRef.current) {
        clearTimeout(leakTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
      />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <motion.h1
          className="text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          404
        </motion.h1>
        <motion.h2
          className="text-2xl text-blue-400 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Vacuum Chamber Breach Detected
        </motion.h2>
        <motion.p
          className="text-gray-300 mb-8 max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Our electron accelerator's vacuum chamber has sprung a leak! Electrons are escaping into the digital void. Please Acclerate it manually  while we fix this anomaly.
        </motion.p>
        <motion.a
          href="/"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Return to Safety
        </motion.a>
      </div>
    </div>
  );
}