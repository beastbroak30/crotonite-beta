import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onNavigate?: (to: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const handleGetStartedClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/signup');
    }
  };

  return (
    <div className="relative hero-gradient overflow-hidden pt-10">
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
          <span className="text-2xl font-bold text-white">Crotonite</span>
        </div>
      </div>
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          <div className="absolute h-96 w-96 rounded-full bg-blue-500/10 animate-pulse" 
               style={{ top: '10%', left: '50%', transform: 'translateX(-50%)' }} />
          <div className="absolute h-64 w-64 rounded-full bg-blue-600/5 animate-pulse delay-300" 
               style={{ top: '30%', left: '30%' }} />
          <div className="absolute h-80 w-80 rounded-full bg-indigo-500/5 animate-pulse delay-700" 
               style={{ top: '20%', left: '70%' }} />
        </div>
      </div>

      {/* Electron Gun Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Electron Gun Structure */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-24 h-48 bg-gradient-to-r from-gray-800 to-gray-900 rounded-r-3xl border-r-4 border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-12 bg-blue-500/20 rounded-full blur-sm"></div>
        </div>
        
        {/* Electron Particles */}
        <div className="electron-particle absolute h-4 w-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] animate-electron-1"
             style={{ top: '45%', left: '10%' }}>
          <div className="absolute inset-0 bg-blue-400 rounded-full animate-pulse"></div>
        </div>
        <div className="electron-particle absolute h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)] animate-electron-2"
             style={{ top: '48%', left: '5%' }}>
          <div className="absolute inset-0 bg-blue-400 rounded-full animate-pulse"></div>
        </div>
        <div className="electron-particle absolute h-5 w-5 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)] animate-electron-3"
             style={{ top: '52%', left: '8%' }}>
          <div className="absolute inset-0 bg-blue-400 rounded-full animate-pulse"></div>
        </div>
        
        {/* Electron Trails */}
        <div className="absolute top-1/2 -translate-y-1/2 left-24 w-full h-1 bg-gradient-to-r from-blue-500/50 to-transparent rounded-full blur-sm"></div>
        <div className="absolute top-[45%] -translate-y-1/2 left-24 w-full h-0.5 bg-gradient-to-r from-blue-500/30 to-transparent rounded-full blur-sm"></div>
        <div className="absolute top-[55%] -translate-y-1/2 left-24 w-full h-0.5 bg-gradient-to-r from-blue-500/30 to-transparent rounded-full blur-sm"></div>
      </div>
      <style>{`
        @keyframes electron-move-1 {
          0% { transform: translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(1500px); opacity: 0; }
        }
        @keyframes electron-move-2 {
          0% { transform: translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(1500px); opacity: 0; }
        }
        @keyframes electron-move-3 {
          0% { transform: translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(1500px); opacity: 0; }
        }
        .animate-electron-1 {
          animation: electron-move-1 8s infinite;
        }
        .animate-electron-2 {
          animation: electron-move-2 8s infinite 2s;
        }
        .animate-electron-3 {
          animation: electron-move-3 8s infinite 4s;
        }
      `}</style>
      <style>{`
        /* Custom Scrollbar Styling */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.3);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.3);
          border-radius: 5px;
          border: 2px solid rgba(15, 23, 42, 0.2);
          transition: all 0.3s ease;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.5);
        }
      `}</style>
      {/* Floating 3D Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute h-20 w-20 rounded-lg bg-blue-500/10 floating-element"
             style={{ top: '15%', left: '15%', transform: 'rotate(15deg)', animationDelay: '0.5s' }} />
        <div className="absolute h-16 w-16 rounded-lg bg-blue-400/10 floating-element"
             style={{ top: '60%', left: '80%', transform: 'rotate(-10deg)', animationDelay: '1.5s' }} />
        <div className="absolute h-24 w-24 rounded-lg bg-indigo-500/10 floating-element"
             style={{ top: '70%', left: '25%', transform: 'rotate(30deg)', animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
          <div className="text-center md:text-left md:flex-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight drop-shadow-lg mb-4">
              <span className="block transform transition-transform hover:scale-105 duration-500">Support the Future</span>
              <span className="block text-blue-400 mt-1 transform transition-transform hover:scale-105 duration-500">of Particle Physics</span>
              <span className="block text-gray-300 text-2xl sm:text-3xl md:text-4xl mt-2 font-medium transform transition-transform hover:scale-105 duration-500">Electron Accelerators For Everyone</span>
            </h1>
            
            <p className="mt-4 text-xl text-gray-300 max-w-2xl">
              Join our crowdfunding campaign to revolutionize particle physics.
              Help us reach our goal of $250,000!
            </p>
            
            <div className="mt-6 flex justify-center md:justify-start">
              <a
                href="/signup"
                onClick={handleGetStartedClick}
                className="bg-blue-500 inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-white hover:bg-blue-600 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="md:flex-1 w-full md:w-auto space-y-4 mt-8 sm:mt-0">
            {/* Progress Bar */}
            <div className="bg-gray-900/40 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-4 sm:p-6 floating-element transform hover:scale-105 transition-all duration-300 hover:border-blue-500/50 shadow-lg hover:shadow-blue-500/10" style={{ animationDelay: '0.7s' }}>
              <div className="flex justify-between text-xs sm:text-sm text-gray-300 mb-2">
                <span>$0 raised</span>
                <span>$250,000 goal</span>
              </div>
              <div className="h-3 sm:h-4 bg-gray-700/50 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: '0%' }}></div>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm mt-2">Be one of the first backers to support this project</p>
            </div>

            {/* Crowdfunding Section */}
            <div className="bg-gray-900/40 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-4 sm:p-8 transform hover:scale-105 transition-all duration-300 hover:border-blue-500/50 shadow-lg hover:shadow-blue-500/10">
              <h2 className="text-xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">Crowd Fund Us</h2>
              <p className="text-base sm:text-xl text-gray-300 mb-4 sm:mb-8">Join the Revolution in Particle Physics</p>
              
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                <a
                  href="https://www.indiegogo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4 border border-gray-700 rounded-xl bg-[#eb1478]/90 backdrop-blur-xl text-white hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300 font-semibold text-sm sm:text-base"
                >
                  Indiegogo
                </a>

                <a 
                  href="https://www.kickstarter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4 border border-gray-700 rounded-xl bg-[#05ce78]/90 backdrop-blur-xl text-white hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300 font-semibold text-sm sm:text-base"
                >
                  Kickstarter
                </a>
              </div>

              <p className="text-gray-400 text-xs sm:text-sm mt-4 sm:mt-6 text-center">
                Help us revolutionize particle physics education and research.
                Every contribution brings us closer to our goal!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="wave-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                fill="#0a0a0f" fillOpacity="0.8"></path>
        </svg>
      </div>
    </div>
  );
}