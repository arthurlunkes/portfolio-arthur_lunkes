import { ReactNode } from 'react';
import { THEMES } from '../constants';

export type Theme = (typeof THEMES)[keyof typeof THEMES];

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export interface ThemeProviderProps {
  children: ReactNode;
}
