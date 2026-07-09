import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * Wrapper de seção com âncora (id), container centralizado e animação de
 * entrada disparada ao rolar a página (IntersectionObserver).
 */
const Section: React.FC<SectionProps> = ({ id, className = '', children }) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id={id} className={`section ${className}`}>
      <div
        ref={ref}
        className={`container reveal${isVisible ? ' reveal--visible' : ''}`}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
