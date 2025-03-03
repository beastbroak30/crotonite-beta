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
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Our Products
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Choose the perfect electron accelerator for your needs
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.name}
                className={`product-card relative p-6 bg-[#1a1a2e]/40 backdrop-blur-sm rounded-2xl border border-[#2a2a3e] transition-all duration-300 hover:border-indigo-500/50 ${product.featured ? 'ring-2 ring-indigo-500' : ''}`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(99,102,241,0.15),transparent_50%)] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative">
                  <div className="h-12 w-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                  <p className="text-gray-400 mb-4">{product.description}</p>
                  <p className="text-2xl font-bold text-white mb-6">{product.price}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-400">
                        <span className="h-1.5 w-1.5 bg-indigo-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    onClick={() => window.location.href = `/crotonite-beta/contact?product=${encodeURIComponent(product.name)}`}
                    className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                  >
                    Contact Sales
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}