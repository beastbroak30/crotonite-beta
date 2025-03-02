import React, { useEffect, useRef } from 'react';

interface LoadingScreenProps {
  isVisible: boolean;
  onComplete?: () => void;
  duration?: number;
}

export function LoadingScreen({ isVisible, onComplete, duration = 1000 }: LoadingScreenProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  
  useEffect(() => {
    if (!isVisible) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      if (canvas && containerRef.current) {
        canvas.width = containerRef.current.clientWidth;
        canvas.height = containerRef.current.clientHeight;
      }
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Particle class
    class Particle {
      x: number;
      y: number;
      radius: number;
      color: string;
      velocity: { x: number; y: number };
      life: number;
      opacity: number;
      
      constructor(x: number, y: number, radius: number, color: string, velocity: { x: number; y: number }) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
        this.life = 100;
        this.opacity = 1;
      }
      
      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
        ctx.restore();
      }
      
      update() {
        this.draw();
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.life -= 1;
        this.opacity = this.life / 100;
      }
    }
    
    // Electron beam class
    class ElectronBeam {
      x: number;
      y: number;
      width: number;
      targetX: number;
      particles: Particle[];
      color: string;
      
      constructor(x: number, y: number, width: number, targetX: number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.targetX = targetX;
        this.particles = [];
        this.color = '#3b82f6';
      }
      
      draw() {
        if (!ctx || !canvas) return;
        
        // Draw beam line
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.targetX, this.y);
        
        // Create gradient for beam
        const gradient = ctx.createLinearGradient(this.x, this.y, this.targetX, this.y);
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0.8)');
        gradient.addColorStop(0.5, 'rgba(99, 102, 241, 0.9)');
        gradient.addColorStop(1, 'rgba(139, 92, 246, 0.8)');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = this.width;
        ctx.lineCap = 'round';
        ctx.shadowColor = '#3b82f6';
        ctx.shadowBlur = 20;
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
        
        // Generate particles along the beam
        if (Math.random() < 0.3) {
          const particleX = this.x + Math.random() * (this.targetX - this.x);
          const particleY = this.y + (Math.random() - 0.5) * this.width * 0.8;
          const radius = Math.random() * 2 + 1;
          const color = `hsl(${210 + Math.random() * 30}, 100%, 70%)`;
          const velocity = {
            x: (Math.random() - 0.5) * 2,
            y: (Math.random() - 0.5) * 2
          };
          
          this.particles.push(new Particle(particleX, particleY, radius, color, velocity));
        }
        
        // Update and remove dead particles
        this.particles.forEach((particle, index) => {
          particle.update();
          if (particle.life <= 0) {
            this.particles.splice(index, 1);
          }
        });
      }
      
      update() {
        this.draw();
      }
    }
    
    // Create electron beam
    const beam = new ElectronBeam(
      0, 
      canvas.height / 2, 
      6, 
      canvas.width
    );
    
    // Animation loop
    let progress = 0;
    const startTime = Date.now();
    
    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background
      ctx.fillStyle = 'rgba(10, 10, 15, 1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update beam
      beam.update();
      
      // Calculate progress
      const elapsed = Date.now() - startTime;
      progress = Math.min(elapsed / duration, 1);
      
      // Draw progress text
      ctx.save();
      ctx.fillStyle = '#ffffff';
      ctx.font = '16px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(`${Math.floor(progress * 100)}%`, canvas.width / 2, canvas.height / 2 + 40);
      ctx.restore();
      
      // Draw accelerator elements
      drawAcceleratorElements(ctx, canvas.width, canvas.height);
      
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        // Animation complete
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 200);
      }
    };
    
    // Draw accelerator elements
    const drawAcceleratorElements = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      // Draw accelerator components
      const numComponents = 5;
      const componentWidth = width / (numComponents + 1);
      
      for (let i = 1; i <= numComponents; i++) {
        const x = i * componentWidth;
        
        // Draw component
        ctx.save();
        ctx.beginPath();
        ctx.rect(x - 15, height / 2 - 20, 30, 40);
        ctx.fillStyle = 'rgba(30, 30, 40, 0.8)';
        ctx.strokeStyle = 'rgba(59, 130, 246, 0.6)';
        ctx.lineWidth = 2;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        
        // Draw glow
        ctx.beginPath();
        ctx.arc(x, height / 2, 5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(59, 130, 246, 0.8)';
        ctx.shadowColor = '#3b82f6';
        ctx.shadowBlur = 15;
        ctx.fill();
        ctx.closePath();
        ctx.restore();
      }
    };
    
    // Start animation
    animationRef.current = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible, duration, onComplete]);
  
  if (!isVisible) return null;
  
  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0f]"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease'
      }}
    >
      <div className="w-full h-full">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>
      <div className="absolute bottom-10 left-0 right-0 text-center">
        <p className="text-blue-400 text-lg font-medium">Initializing Electron Accelerator</p>
      </div>
    </div>
  );
}