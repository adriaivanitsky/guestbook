import { useState, createContext, useContext } from 'react';

export const EntryContext = createContext();

const EntryProvider = ({ children }) => {
  const [entry, setEntry] = useState([]);
  return <EntryContext.Provider value={{ entry, setEntry }}> {children}</EntryContext.Provider>;
};

const useEntry = () => {
  const context = useContext(EntryContext);
  if (context === undefined) {
    throw new Error('useEntry must be used within an EntryProvider');
  }
  return context;
};

export { EntryProvider, useEntry };
