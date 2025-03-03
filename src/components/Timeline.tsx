import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../styles/timeline.css';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const items = containerRef.current.querySelectorAll('.timeline-item');
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      let newActiveIndex = 0;
      items.forEach((item, index) => {
        const itemTop = item.getBoundingClientRect().top - containerTop;
        if (itemTop < windowHeight * 0.6) {
          newActiveIndex = index;
        }
      });
      
      setActiveIndex(newActiveIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const timelineItems: TimelineItem[] = [
    {
      year: "2024",
      title: "Project Inception",
      description: "Initial concept development and theoretical framework established."
    },
    {
      year: "2025 Jan(Phase I Build)",
      title: "Gathering the Work and Phase work ",
      description: "First of the Crotonite accelerator designed and simulated."
    },
    {
      year: "2025 March - April",
      title: "Funding Crowdfunding and Investment",
      description: "Major funding milestone achieved, enabling full-scale development."
    },
    {
      year: "2025 April - Sept",
      title: "Development and Testing Phase",
      description: "Detailed development and testing of the accelerator."
    },
    {
      year: "2025 Nov",
      title: "Pre-order and launch",
      description: "The first accelerator consumer level is now on the market."
    },
    {
      year: "2026",
      title: "Development on Parts and Documentation",
      description: "The accelerator is now in development for the next phase of the project."
    },
    {
      year: "2026 - 2027",
      title: "Phase 2 Development",
      description: "To Develop and grow  Crotonite"
    },
  ];
  const electronY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  const electronScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.8, 1.2, 0.8]
  );

  const electronBrightness = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.5, 1, 0.5]
  );

  return (
    <div className="perspective-container" ref={containerRef}>
      <div className="timeline-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white tracking-tight drop-shadow-lg mb-4">
            Our Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Follow the evolution of the Crotonite project from concept to breakthrough discoveries.
          </p>
        </div>

        <div className="relative">
          <div className="timeline-line"></div>
          
          <motion.div 
            className="electron"
            style={{ 
              y: electronY,
              scale: electronScale,
              filter: useTransform(electronBrightness, brightness => `brightness(${brightness})`),
              position: 'fixed',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 20
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-5 h-5 bg-blue-400 rounded-full shadow-lg shadow-blue-500/50 relative">
              <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-75"></div>
              <div className="absolute -inset-2 bg-blue-400/30 rounded-full animate-pulse"></div>
              <div className="absolute -inset-4 bg-blue-400/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </motion.div>

          <div className="timeline-grid">
            {timelineItems.map((item, index) => {
              let itemClass = "timeline-item ";
              if (index === activeIndex) {
                itemClass += "active";
              } else if (index < activeIndex) {
                itemClass += "before";
              } else {
                itemClass += "after";
              }

              return (
                <motion.div
                  key={index}
                  className={itemClass}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="timeline-content">
                    <div className="text-blue-400 font-bold text-xl mb-2">{item.year}</div>
                    <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}