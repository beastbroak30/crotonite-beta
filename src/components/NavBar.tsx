import React, { useContext } from 'react';
import { Zap, Home, Mail, Boxes, BookOpenText } from 'lucide-react';
import { NavbarContext } from './NavbarProvider';

interface NavBarProps {
  onNavigate?: (to: string) => void;
}

export function NavBar({ onNavigate }: NavBarProps) {
  // Get navbar visibility state from context
  const navbarContext = useContext(NavbarContext);
  const isVisible = navbarContext ? navbarContext.isNavbarVisible : true;
  
  const navigation = [
    { name: 'About', href: '/crotonite-beta/about' },
    { name: 'Products', href: 'productpage' },
    { name: 'Join Us', href: '/crotonite-beta/join-us' },
    { name: 'Contact', href: '/crotonite-beta/contact' },
  ];



  // Apply conditional styles based on visibility state
  const navbarStyles = isVisible
    ? "bg-gray-900/60 backdrop-blur-lg"
    : "bg-gray-900/30 backdrop-blur-sm"; // More translucent when not visible

  // If navbar should be hidden, don't render it at all
  if (!isVisible) {
    return null;
  }

  return (
    <>
      {/* Desktop Navigation */}
      <div className="fixed w-full top-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300 hidden md:block">
        <nav className={`${navbarStyles} rounded-2xl border border-gray-800/50 transition-all duration-300`}>
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <a href="/crotonite-beta/" className="flex items-center">
                  <Zap className="h-6 w-6 text-blue-400" />
                  <span className="ml-2 text-lg font-medium text-white">Crotonite</span>
                </a>
              </div>

              <div className="flex items-center space-x-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </a>
                ))}

              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-4 left-0 right-0 z-50 px-4 md:hidden">
        <nav className={`${navbarStyles} rounded-2xl border border-gray-800/50 transition-all duration-300 py-2`}>
          <div className="max-w-sm mx-auto px-4">
            <div className="flex justify-between items-center">
              <a href="/crotonite-beta/" className="flex flex-col items-center group">
                <Home className="h-6 w-6 transition-colors duration-300 group-hover:text-blue-400" style={{ color: window.location.pathname === '/crotonite-beta/' || window.location.pathname === '/' ? '#60a5fa' : '#d1d5db' }} />
                <span className="text-xs mt-1 transition-colors duration-300 group-hover:text-blue-400" style={{ color: window.location.pathname === '/crotonite-beta/' || window.location.pathname === '/' ? '#60a5fa' : '#d1d5db' }}>Home</span>
              </a>
              <a href="/crotonite-beta/about" className="flex flex-col items-center group">
                <BookOpenText className="h-6 w-6 transition-colors duration-300 group-hover:text-blue-400" style={{ color: window.location.pathname === '/crotonite-beta/about' ? '#60a5fa' : '#d1d5db' }} />
                <span className="text-xs mt-1 transition-colors duration-300 group-hover:text-blue-400" style={{ color: window.location.pathname === '/crotonite-beta/about' ? '#60a5fa' : '#d1d5db' }}>About</span>
              </a>
              <a href="/crotonite-beta/productpage" className="flex flex-col items-center group">
                <Boxes className="h-6 w-6 transition-colors duration-300 group-hover:text-blue-400" style={{ color: window.location.pathname === '/crotonite-beta/productpage' ? '#60a5fa' : '#d1d5db' }} />
                <span className="text-xs mt-1 transition-colors duration-300 group-hover:text-blue-400" style={{ color: window.location.pathname === '/crotonite-beta/productpage' ? '#60a5fa' : '#d1d5db' }}>Products</span>
              </a>
              <a href="/crotonite-beta/join-us" className="flex flex-col items-center group">
                <svg className="h-6 w-6 transition-colors duration-300 group-hover:text-blue-400" style={{ color: window.location.pathname === '/crotonite-beta/join-us' ? '#60a5fa' : '#d1d5db' }} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span className="text-xs mt-1 transition-colors duration-300 group-hover:text-blue-400" style={{ color: window.location.pathname === '/crotonite-beta/join-us' ? '#60a5fa' : '#d1d5db' }}>Join Us</span>
              </a>
              <a href="/crotonite-beta/contact" className="flex flex-col items-center group">
                <Mail className="h-6 w-6 transition-colors duration-300 group-hover:text-blue-400" style={{ color: window.location.pathname === '/crotonite-beta/contact' ? '#60a5fa' : '#d1d5db' }} />
                <span className="text-xs mt-1 transition-colors duration-300 group-hover:text-blue-400" style={{ color: window.location.pathname === '/crotonite-beta/contact' ? '#60a5fa' : '#d1d5db' }}>Contact</span>
              </a>

            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
