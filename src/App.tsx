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
import ProductPage from './components/productpage';
import { NavbarProvider } from './components/NavbarProvider';

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
  if (currentPath === '/signup' || currentPath === '/crotonite-beta/signup') {
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

  if (currentPath === '/login' || currentPath === '/crotonite-beta/login') {
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

  if (currentPath === '/about' || currentPath === '/crotonite-beta/about') {
    return (
      <NavbarProvider>
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
      </NavbarProvider>
    );
  }

  if (currentPath === '/productpage' || currentPath === '/productpage') {
    return (
      <NavbarProvider>
        <>
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

  if (currentPath === '/contact' || currentPath === '/crotonite-beta/contact') {
    return (
      <NavbarProvider>
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
      </NavbarProvider>
    );
  }

  // Default route for home page
  if (currentPath === '/' || currentPath === '' || currentPath === '/crotonite-beta' || currentPath === '/crotonite-beta/') {
    return (
      <NavbarProvider>
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
      </NavbarProvider>
    );
  }

  // NotFound route for undefined paths
  return (
    <NavbarProvider>
      <>
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