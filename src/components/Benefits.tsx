import React from 'react';
import { DollarSign, Gauge, Wrench, Users } from 'lucide-react';

const benefits = [
  {
    title: 'Affordable',
    description: 'Revolutionary pricing starting at $49,999, making electron acceleration accessible to more institutions.',
    icon: DollarSign,
  },
  {
    title: 'Easy to Use',
    description: 'Simplified controls and intuitive interface designed for researchers of all experience levels.',
    icon: Users,
  },
  {
    title: 'Low Maintenance',
    description: 'Minimal upkeep requirements and readily available replacement parts.',
    icon: Wrench,
  },
  {
    title: 'Compact Design',
    description: 'Fits in standard laboratory spaces while maintaining professional-grade performance.',
    icon: Gauge,
  },
];

export function Benefits() {
  return (
    <div className="relative py-24 bg-[#0a0a0f] overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0f172a] to-[#0a0a0f] opacity-90"></div>
      
      {/* 3D Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute h-40 w-40 rounded-full bg-blue-500/5 floating-element"
             style={{ top: '10%', left: '5%', animationDelay: '0.2s' }} />
        <div className="absolute h-60 w-60 rounded-full bg-indigo-500/5 floating-element"
             style={{ bottom: '10%', right: '5%', animationDelay: '1.2s' }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl drop-shadow-md">
            Democratizing Particle Physics
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Professional-grade electron acceleration at a fraction of the cost
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title} 
                className="flex items-start transform transition-all duration-500 hover:translate-y-[-5px]"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex-shrink-0 p-3 bg-blue-900/20 rounded-xl shadow-lg">
                  <benefit.icon className="h-8 w-8 text-blue-400" />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
                  <p className="mt-2 text-base text-gray-300">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="section-divider">
        <div className="wave-divider">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
                  fill="#0a0a0f" fillOpacity="0.9"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}