import React from 'react';
import { NavBar } from './NavBar';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  onNavigate?: (to: string) => void;
}

export function Layout({ children, onNavigate }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0a0a0f] via-[#0f172a] to-[#0a0a0f] relative z-10">
      <NavBar onNavigate={onNavigate} />
      <main className="flex-grow relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}