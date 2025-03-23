import React from 'react';
import { Users, Atom, Globe } from 'lucide-react';
import { Timeline } from './Timeline';

export function About() {
  const teamMembers = [
    {
      name: 'Antarip Kar',
      role: 'Founder & Techinician',
      description: 'A student to aspire the particles to the next level and a embedded dev',
      icon: Atom
    },
    {
      name: 'Someone',
      role: 'Researcher & co-founder',
      description: 'My friend who has great theory and passion to make it happen.',
      icon: Globe
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#0a0a0f] overflow-hidden py-24 space-y-12">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0f172a] to-[#0a0a0f] opacity-90"></div>

      {/* Mobile Logo Section */}
      <div className="md:hidden flex items-center justify-center pt-2 pb-4 px-6">
        <div className="flex items-center space-x-3">
          <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 transform hover:scale-105 transition-all duration-300">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white"
            >
              <path
                d="M13 3L4 14H12L11 21L20 10H12L13 3Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-2xl font-bold text-white drop-shadow-lg">Crotonite</span>
        </div>
      </div>

      {/* 3D Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute h-40 w-40 rounded-lg bg-blue-500/5 floating-element"
             style={{ top: '15%', right: '15%', transform: 'rotate(15deg)', animationDelay: '0.5s' }} />
        <div className="absolute h-32 w-32 rounded-lg bg-indigo-500/5 floating-element"
             style={{ bottom: '20%', left: '10%', transform: 'rotate(-10deg)', animationDelay: '1.1s' }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white sm:text-5xl drop-shadow-lg mb-6">
            Revolutionizing Particle Acceleration
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            At Crotonite, we're pushing the boundaries of particle accelerator technology,
            making it more accessible, efficient, and sustainable than ever before.
          </p>
        </div>

        {/* Mission Section */}
        <div className="relative bg-gray-900/40 rounded-2xl p-8 backdrop-blur-sm border border-gray-800/50 mb-16 transform hover:scale-[1.02] transition-transform duration-300">
          <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            We believe that advanced particle acceleration technology should be accessible to research institutions worldwide.
            Our mission is to democratize scientific research by providing cutting-edge accelerator solutions at a fraction
            of the traditional cost, while maintaining the highest standards of safety and reliability.
          </p>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="product-card w-full max-w-sm relative rounded-xl border border-gray-800/20 bg-gray-900/30 p-6 backdrop-blur-sm flex flex-col items-center"
                style={{
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.3s ease',
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div className="card-content w-full flex flex-col items-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 rounded-full bg-gray-800/30 shadow-inner">
                      <member.icon className="h-8 w-8 text-blue-400" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white text-center mb-2">{member.name}</h3>
                  <p className="text-blue-400 text-sm text-center mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm text-center">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Section */}
        <div className="relative bg-gray-900/40 rounded-2xl p-8 backdrop-blur-sm border border-gray-800/50 transform hover:scale-[1.02] transition-transform duration-300 mb-16">
          <h2 className="text-2xl font-semibold text-white mb-4">Our Vision</h2>
          <p className="text-gray-300 leading-relaxed">
            We envision a future where particle accelerator technology plays a pivotal role in solving humanity's greatest
            challenges - from cancer treatment to clean energy solutions. Through continuous innovation and dedication to
            excellence, we're making this future a reality.
          </p>
        </div>
        
        {/* Timeline Component */}
        <Timeline />
      </div>

      {/* Floating Funding Box */}
      <div className="fixed md:bottom-8 bottom-20 right-8 bg-gray-900/40 backdrop-blur-lg rounded-2xl border border-gray-700/50 md:p-6 p-4 transform hover:scale-105 transition-all duration-300 hover:border-blue-500/50 shadow-lg hover:shadow-blue-500/10 z-50">
        <h3 className="text-lg font-semibold text-white mb-2 md:mb-3">Support Us On</h3>
        <div className="space-y-2 md:space-y-3">
          <a
            href="https://www.kickstarter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-[#05ce78] text-white px-4 py-1.5 md:py-2 rounded-lg font-medium hover:bg-[#05b76c] transition-colors text-sm md:text-base"
          >
            Kickstarter
          </a>
          <a
            href="https://www.indiegogo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-[#eb1478] text-white px-4 py-1.5 md:py-2 rounded-lg font-medium hover:bg-[#d31069] transition-colors text-sm md:text-base"
          >
            Indiegogo
          </a>
        </div>
      </div>
    </div>
  );
}