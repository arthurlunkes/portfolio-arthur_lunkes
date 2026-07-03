import { ReactNode } from 'react';
import { LANGS } from '../constants';
import { LocalizedText } from './content';

export type Lang = (typeof LANGS)[keyof typeof LANGS];

export interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  setLang: (lang: Lang) => void;
  /** Resolve um LocalizedText para a string do idioma ativo. */
  t: (text: LocalizedText) => string;
}

export interface LanguageProviderProps {
  children: ReactNode;
}
