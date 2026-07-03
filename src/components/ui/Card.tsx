import React from 'react';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

/** Card base reutilizável. */
const Card: React.FC<CardProps> = ({ className = '', children }) => (
  <div className={`card ${className}`}>{children}</div>
);

export default Card;
