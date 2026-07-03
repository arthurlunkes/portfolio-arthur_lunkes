import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { THEMES } from '../../constants';
import { ui } from '../../data/ui';

interface NavItem {
  href: string;
  labelKey: keyof typeof ui;
}

const NAV_ITEMS: NavItem[] = [
  { href: '#about', labelKey: 'navAbout' },
  { href: '#experience', labelKey: 'navExperience' },
  { href: '#projects', labelKey: 'navProjects' },
  { href: '#skills', labelKey: 'navSkills' },
  { href: '#education', labelKey: 'navEducation' },
  { href: '#contact', labelKey: 'navContact' },
];

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLanguage();
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <nav className='navbar'>
      <div className='container navbar__inner'>
        <a href='#top' className='navbar__logo' onClick={close}>
          <span className='navbar__logo-bracket'>&lt;</span>
          AL
          <span className='navbar__logo-bracket'>/&gt;</span>
        </a>

        <div className={`navbar__links ${open ? 'is-open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} onClick={close}>
              {t(ui[item.labelKey])}
            </a>
          ))}
        </div>

        <div className='navbar__actions'>
          <button
            type='button'
            className='navbar__lang'
            onClick={toggleLang}
            aria-label='Change language'
          >
            {lang === 'pt' ? 'PT' : 'EN'}
          </button>

          <button
            type='button'
            className='navbar__theme'
            onClick={toggleTheme}
            aria-label={t(ui.toggleThemeAria)}
          >
            {theme === THEMES.DARK ? '☀️' : '🌙'}
          </button>

          <button
            type='button'
            className={`navbar__burger ${open ? 'is-open' : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-label={t(ui.toggleMenuAria)}
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
