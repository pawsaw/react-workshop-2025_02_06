import React, { useContext, useState } from 'react';
import { Theme } from './Theme';

const ThemeContext = React.createContext<Theme>({
  primaryColor: 'steelblue',
  setPrimaryColor: () => {},
});

export interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [primaryColor, setPrimaryColor] = useState('blue');

  return (
    <ThemeContext.Provider value={{ primaryColor, setPrimaryColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
