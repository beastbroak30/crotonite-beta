import React, { useContext } from 'react';
import { Zap } from 'lucide-react';
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
    { name: 'Contact', href: '/crotonite-beta/contact' },
  ];

  const handleSignUpClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate('/crotonite-beta/signup');
    }
  };

  const handleLoginClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate('/crotonite-beta/login');
    }
  };

  // Apply conditional styles based on visibility state
  const navbarStyles = isVisible
    ? "bg-gray-900/60 backdrop-blur-lg"
    : "bg-gray-900/30 backdrop-blur-sm"; // More translucent when not visible

  // If navbar should be hidden, don't render it at all
  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed w-full top-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
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
              <a
                href="/crotonite-beta/login"
                onClick={handleLoginClick}
                className="bg-gray-800/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700/80 transition-colors"
              >
                Log In
              </a>
              <a
                href="/crotonite-beta/signup"
                onClick={handleSignUpClick}
                className="bg-blue-500/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600/80 transition-colors"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}