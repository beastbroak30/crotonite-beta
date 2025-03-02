import React, { useEffect, useRef } from 'react';
import { Zap, Gauge, Shield } from 'lucide-react';

const products = [
  {
    name: 'EA-100',
    description: 'Entry-level electron accelerator perfect for educational institutions and small research labs.',
    price: '$49,999',
    features: [
      'Energy range: 100 keV - 1 MeV',
      'Compact 2m x 1m footprint',
      'Basic beam control',
      'Standard safety features'
    ],
    icon: Zap
  },
  {
    name: 'EA-500',
    description: 'Professional-grade accelerator with advanced controls and higher energy range.',
    price: '$99,999',
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
    name: 'EA-1000',
    description: 'Research-grade system for advanced applications and specialized research.',
    price: '$199,999',
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

  useEffect(() => {
    const cards = document.querySelectorAll('.product-card');
    
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
          <h2 className="text-3xl font-bold text-white sm:text-4xl drop-shadow-md">
            Choose Your Accelerator
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Professional-grade electron accelerators at revolutionary prices
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={product.name}
              className={`product-card relative rounded-2xl border ${
                product.featured
                  ? 'featured border-blue-500/20 bg-gray-900/60'
                  : 'border-gray-800/20 bg-gray-900/30'
              } p-8 shadow-lg backdrop-blur-sm`}
              style={{ 
                transformStyle: 'preserve-3d',
                transition: 'transform 0.3s ease',
                animationDelay: `${index * 0.2}s`
              }}
            >
              {product.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-blue-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="card-content">
                <div className="flex items-center justify-center">
                  <div className={`p-4 rounded-full ${product.featured ? 'bg-blue-900/20' : 'bg-gray-800/30'} shadow-inner`}>
                    <product.icon className={`h-12 w-12 ${
                      product.featured ? 'text-blue-400' : 'text-gray-400'
                    }`} />
                  </div>
                </div>
                
                <h3 className="mt-6 text-xl font-semibold text-center text-white">
                  {product.name}
                </h3>
                
                <div className="mt-4 text-center">
                  <span className="text-2xl font-bold text-white">{product.price}</span>
                </div>
                
                <p className="mt-4 text-sm text-gray-300 text-center">
                  {product.description}
                </p>
                
                <ul className="mt-8 space-y-3">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
                  <a
                    href="/contact"
                    className={`block w-full text-center py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                      product.featured
                        ? 'bg-blue-500 text-white hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20'
                        : 'border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500 hover:shadow-lg hover:shadow-gray-700/10'
                    }`}
                  >
                    Contact Sales
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}