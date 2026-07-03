import React from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * Wrapper de seção com âncora (id), container centralizado e animação de entrada.
 */
const Section: React.FC<SectionProps> = ({ id, className = '', children }) => (
  <section id={id} className={`section ${className}`}>
    <div className='container reveal'>{children}</div>
  </section>
);

export default Section;
