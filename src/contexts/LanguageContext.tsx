import React, { createContext, useState, useContext, useCallback } from 'react';
import { Lang, LanguageContextType, LanguageProviderProps } from '../interfaces/language';
import { LocalizedText } from '../interfaces/content';
import { LANGS, DEFAULT_LANG, LANG_STORAGE_KEY } from '../constants';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    const stored = localStorage.getItem(LANG_STORAGE_KEY);
    return (stored as Lang) || DEFAULT_LANG;
  });

  const setLang = useCallback((newLang: Lang) => {
    localStorage.setItem(LANG_STORAGE_KEY, newLang);
    document.documentElement.lang = newLang;
    setLangState(newLang);
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((prev) => {
      const newLang = prev === LANGS.PT ? LANGS.EN : LANGS.PT;
      localStorage.setItem(LANG_STORAGE_KEY, newLang);
      document.documentElement.lang = newLang;
      return newLang;
    });
  }, []);

  const t = useCallback((text: LocalizedText) => text[lang as 'pt' | 'en'], [lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage deve ser usado dentro de um LanguageProvider');
  }
  return context;
};

/** Atalho para consumir apenas o essencial de tradução. */
export const useT = useLanguage;
