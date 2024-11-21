import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import { Theme, ThemeContextType, ThemeProviderProps } from '../interfaces/theme';
import { THEMES, DEFAULT_THEME, THEME_STORAGE_KEY } from '../constants';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    return (storedTheme as Theme) || DEFAULT_THEME;
  });

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
      document.body.className = newTheme; // Atualiza o `className` no `body`
      return newTheme;
    });
  }, []);

  useEffect(() => {
    document.body.className = theme; // Garante que o tema seja aplicado no `body`
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider');
  }
  return context;
};
