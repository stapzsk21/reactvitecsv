import { createContext, useContext, useState } from 'react';

const BurgerContext = createContext();

export function BurgerProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('hidden');
  };

  return (
    <BurgerContext.Provider value={{ isMenuOpen, toggleMenu }}>
      {children}
    </BurgerContext.Provider>
  );
}

export function useBurger() {
  const context = useContext(BurgerContext);
  if (!context) {
    throw new Error('useBurger must be used within a BurgerProvider');
  }
  return context;
} 