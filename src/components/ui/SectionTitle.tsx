import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

/** Título padronizado de seção, com prefixo mono estilo terminal. */
const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => (
  <header className='section-title'>
    <h2>
      <span className='section-title__mark'>#</span>
      {title}
    </h2>
    {subtitle && <p className='section-title__subtitle'>{subtitle}</p>}
  </header>
);

export default SectionTitle;
