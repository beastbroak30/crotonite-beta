import React, { useEffect, useRef } from 'react';
import { Zap, Gauge, Shield } from 'lucide-react';

const products = [
  {
    name: 'EA-10',
    description: 'Entry-level electron accelerator perfect for educational institutions and small research labs.',
    price: '$49,999 - $60,000',
    features: [
      'Energy range: 100 keV - 1 MeV',
      'Compact 2m x 1m footprint',
      'Basic beam control',
      'Standard safety features'
    ],
    icon: Zap
  },
  {
    name: 'EA-NEO',
    description: 'Professional-grade accelerator with advanced controls and higher energy range.',
    price: '$99,999 - $120,000',
    features: [
      'Energy range: 500 keV - 5 MeV',
      'Precision beam steering',
      'Advanced diagnostics',
      'Remote operation capability'
    ],
    icon: Gauge,
    featured: true
  },
  {
    name: 'EA-10M',
    description: 'Research-grade system for advanced applications and specialized research.',
    price: '$199,999 - $250,000',
    features: [
      'Energy range: 1 MeV - 10 MeV',
      'Full spectrum diagnostics',
      'Multi-beam configuration',
      'Custom beam profiles'
    ],
    icon: Shield
  }
];

export function Products() {
  const productsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const cards = document.querySelectorAll('.product-card');
    const button = buttonRef.current;
    
    const handleMouseMove = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
      
      // Calculate rotation based on mouse position
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateY = ((x - centerX) / centerX) * 5; // Max 5deg rotation
      const rotateX = ((centerY - y) / centerY) * 5; // Max 5deg rotation
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
    };
    
    const handleMouseLeave = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    };
    
    cards.forEach(card => {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    });
    
    // Add mouse move handler for the button
    if (button) {
      const handleButtonMouseMove = (e: MouseEvent) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        button.style.setProperty('--mouse-x', `${x}px`);
        button.style.setProperty('--mouse-y', `${y}px`);
      };
      
      button.addEventListener('mousemove', handleButtonMouseMove);
      
      return () => {
        cards.forEach(card => {
          card.removeEventListener('mousemove', handleMouseMove);
          card.removeEventListener('mouseleave', handleMouseLeave);
        });
        button.removeEventListener('mousemove', handleButtonMouseMove);
      };
    }
    
    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div id="products" className="relative py-24 bg-[#0a0a0f] overflow-hidden" ref={productsRef}>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0f172a] to-[#0a0a0f] opacity-90"></div>
      
      {/* 3D Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute h-32 w-32 rounded-lg bg-blue-500/5 floating-element"
             style={{ top: '20%', right: '10%', transform: 'rotate(15deg)', animationDelay: '0.7s' }} />
        <div className="absolute h-24 w-24 rounded-lg bg-indigo-500/5 floating-element"
             style={{ bottom: '15%', left: '10%', transform: 'rotate(-10deg)', animationDelay: '1.3s' }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Our Products
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Choose the perfect electron accelerator for your needs
          </p>
        </div>

        <div className="mt-16 grid gap-6 grid-cols-1 sm:gap-8 md:grid-cols-3 lg:gap-12">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.name}
                className={`product-card relative p-5 sm:p-6 md:p-8 bg-[#1a1a2e]/40 backdrop-blur-sm rounded-2xl border border-[#2a2a3e] transition-all duration-300 hover:border-indigo-500/50 ${product.featured ? 'ring-2 ring-indigo-500' : ''}`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(99,102,241,0.15),transparent_50%)] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative flex flex-col h-full">
                  <div className="h-12 w-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-indigo-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">{product.name}</h3>
                  <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-5 min-h-[60px]">{product.description}</p>
                  <p className="text-xl sm:text-2xl font-bold text-white mb-5 sm:mb-7">{product.price}</p>
                  
                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 min-h-[120px]">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-400">
                        <span className="h-1.5 w-1.5 bg-indigo-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <button
            ref={buttonRef}
            onClick={() => {
              window.location.href = '/productpage';
            }}
            className="relative py-3 sm:py-4 px-6 sm:px-8 text-white rounded-lg text-base sm:text-lg font-medium overflow-hidden transition-all duration-200"
            style={{
              background: 'linear-gradient(110deg, #0a1a3f, #0d47a1)',
              boxShadow: '0 4px 15px rgba(10, 26, 63, 0.3)',
            }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),#1e3a8a,transparent_70%)] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10">See the Accelerators</span>
          </button>
        </div>
      </div>
    </div>
  );
}