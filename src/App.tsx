import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Products } from './components/Products';

import { CursorGradient } from './components/CursorGradient';
import { LoadingScreen } from './components/LoadingScreen';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { NotFound } from './components/NotFound';
import ProductPage from './components/productpage';
import { NavbarProvider } from './components/NavbarProvider';
import { JoinUs } from './components/JoinUs';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [redirectTo, setRedirectTo] = useState<string | null>(null);
  // Update baseUrl for GitHub Pages
  const baseUrl = '/crotonite-beta';
  const path = window.location.pathname;
  const currentPath = path.startsWith(baseUrl) 
    ? path.slice(baseUrl.length) 
    : path;
  // Handle navigation with loading screen
  const handleNavigation = (to: string) => {
    setIsLoading(true);
    setRedirectTo(to);
  };
  // Handle loading completion
  const handleLoadingComplete = () => {
    if (redirectTo) {
      window.location.href = `${window.location.origin}${baseUrl}${redirectTo}`;
    }
    setIsLoading(false);
    setRedirectTo(null);
  };


  if (currentPath === '/about' || currentPath === '/crotonite-beta/about') {
    return (
      <NavbarProvider>
        <>
          <Analytics />
          <SpeedInsights />
          <CursorGradient 
            colors={['#3b82f6', '#6366f1', '#8b5cf6']} 
            size={800}
            opacity={0.15}
            blur={120}
          />
          <Layout>
            <About />
          </Layout>
        </>
      </NavbarProvider>
    );
  }

  if (currentPath === '/productpage' || currentPath === '/productpage') {
    return (
      <NavbarProvider>
        <>
          <Analytics />
          <SpeedInsights />
          <CursorGradient 
            colors={['#3b82f6', '#6366f1', '#8b5cf6']} 
            size={800}
            opacity={0.15}
            blur={120}
          />
          <Layout>
            <ProductPage />
          </Layout>
        </>
      </NavbarProvider>
    );
  }

  if (currentPath === '/join-us' || currentPath === '/crotonite-beta/join-us') {
    return (
      <NavbarProvider>
        <>
          <Analytics />
          <SpeedInsights />
          <CursorGradient 
            colors={['#3b82f6', '#6366f1', '#8b5cf6']} 
            size={800}
            opacity={0.15}
            blur={120}
          />
          <Layout>
            <JoinUs />
          </Layout>
        </>
      </NavbarProvider>
    );
  }

  if (currentPath === '/contact' || currentPath === '/crotonite-beta/contact') {
    return (
      <NavbarProvider>
        <>
          <Analytics />
          <SpeedInsights />
          <CursorGradient 
            colors={['#3b82f6', '#6366f1', '#8b5cf6']} 
            size={800}
            opacity={0.15}
            blur={120}
          />
          <Layout>
            <Contact />
          </Layout>
        </>
      </NavbarProvider>
    );
  }

  // Default route for home page
  if (currentPath === '/' || currentPath === '' || currentPath === '/crotonite-beta' || currentPath === '/crotonite-beta/') {
    return (
      <NavbarProvider>
        <>
          <Analytics />
          <SpeedInsights />
          {isLoading && (
            <LoadingScreen 
              isVisible={isLoading} 
              onComplete={handleLoadingComplete}
              duration={2000 + Math.random() * 3000}
            />
          )}
          <CursorGradient 
            colors={['#3b82f6', '#6366f1', '#8b5cf6']} 
            size={800}
            opacity={0.15}
            blur={120}
          />
          <Layout>
            <Hero onNavigate={handleNavigation} />
            <Benefits />
            <Products />
          </Layout>
        </>
      </NavbarProvider>
    );
  }

  // NotFound route for undefined paths
  return (
    <NavbarProvider>
      <>
        <Analytics />
        <SpeedInsights />
        <CursorGradient 
          colors={['#3b82f6', '#6366f1', '#8b5cf6']} 
          size={800}
          opacity={0.15}
          blur={120}
        />
        <NotFound />
      </>
    </NavbarProvider>
  );
}

export default App;