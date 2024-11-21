import { THEME_STORAGE_KEY, DEFAULT_THEME } from '../../constants';

export const setTheme = (theme: string) => localStorage.setItem(THEME_STORAGE_KEY, theme);

export const getTheme = () => localStorage.getItem(THEME_STORAGE_KEY) || DEFAULT_THEME;

export const removeTheme = () => localStorage.removeItem(THEME_STORAGE_KEY);
