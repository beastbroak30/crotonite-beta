import React, { createContext, useState, ReactNode } from 'react';

// Define the context type
export interface NavbarContextType {
  isNavbarVisible: boolean;
  setNavbarVisible: (visible: boolean) => void;
}

// Create the context with a default undefined value
export const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

interface NavbarProviderProps {
  children: ReactNode;
}

// Create a provider component
export const NavbarProvider: React.FC<NavbarProviderProps> = ({ children }) => {
  const [isNavbarVisible, setNavbarVisible] = useState(true);

  const value = {
    isNavbarVisible,
    setNavbarVisible,
  };

  return (
    <NavbarContext.Provider value={value}>
      {children}
    </NavbarContext.Provider>
  );
};