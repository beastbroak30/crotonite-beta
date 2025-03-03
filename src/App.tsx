import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Products } from './components/Products';
import { SignUp } from './components/SignUp';
import { Login } from './components/login';
import { CursorGradient } from './components/CursorGradient';
import { LoadingScreen } from './components/LoadingScreen';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { NotFound } from './components/NotFound';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [redirectTo, setRedirectTo] = useState<string | null>(null);

  // Simple client-side routing
  const baseUrl = '/crotonite-beta';
  const path = window.location.pathname.startsWith(baseUrl) 
    ? window.location.pathname.slice(baseUrl.length) 
    : window.location.pathname;

  // Handle navigation with loading screen
  const handleNavigation = (to: string) => {
    setIsLoading(true);
    setRedirectTo(to);
  };

  // Handle loading completion
  const handleLoadingComplete = () => {
    if (redirectTo) {
      window.location.pathname = baseUrl + redirectTo;
    }
    setIsLoading(false);
    setRedirectTo(null);
  };

  if (path === '/signup') {
    return (
      <>
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
        <SignUp onNavigate={handleNavigation} />
      </>
    );
  }

  if (path === '/login') {
    return (
      <>
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
        <Login onNavigate={handleNavigation} />
      </>
    );
  }

  if (path === '/about') {
    return (
      <>
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
    );
  }

  if (path === '/contact') {
    return (
      <>
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
    );
  }

  // Default route for home page
  if (path === '/' || path === '') {
    return (
      <>
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
    );
  }

  // NotFound route for undefined paths
  return (
    <>
      <CursorGradient 
        colors={['#3b82f6', '#6366f1', '#8b5cf6']} 
        size={800}
        opacity={0.15}
        blur={120}
      />
      <NotFound />
    </>
  );
}

export default App;