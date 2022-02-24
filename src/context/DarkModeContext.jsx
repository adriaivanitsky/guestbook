import { useState, createContext, useContext } from 'react';

export const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const darkModeEnabled = localStorage.getItem('dark-mode-enabled');
  const [darkMode, setDarkMode] = useState(() => {
    if (darkModeEnabled === true) return true;
  });

  const toggle = () => {
    if (!darkMode) {
      localStorage.setItem('dark-mode-enabled', true);
      setDarkMode(true);
    } else {
      localStorage.setItem('dark-mode-enabled', false);
      setDarkMode(false);
    }
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggle }}>{children}</DarkModeContext.Provider>
  );
};

const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};

export { DarkModeProvider, useDarkMode };
