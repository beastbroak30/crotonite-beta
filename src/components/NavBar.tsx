import React from 'react';
import { Zap } from 'lucide-react';

interface NavBarProps {
  onNavigate?: (to: string) => void;
}

export function NavBar({ onNavigate }: NavBarProps) {
  const navigation = [
    { name: 'About', href: '/crotonite-beta/about' },
    { name: 'Products', href: '#products' },
    { name: 'Contact', href: '/crotonite-beta/contact' },
  ];

  const handleSignUpClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate('/signup');
    }
  };

  const handleLoginClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate('/login');
    }
  };

  return (
    <div className="fixed w-full top-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <nav className="bg-gray-900/60 backdrop-blur-lg rounded-2xl border border-gray-800/50">
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