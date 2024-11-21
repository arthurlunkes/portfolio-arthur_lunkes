import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <p>O tema atual é: {theme}</p>
      <button onClick={toggleTheme}>Alternar Tema</button>
    </div>
  );
};

export default ThemeSwitcher;
