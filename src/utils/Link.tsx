import React from 'react';

interface LinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({ to, children, className, onClick }) => {
  // This is a simple link component that could be replaced with a proper router link
  // when implementing routing
  return (
    <a href={to} className={className} onClick={onClick}>
      {children}
    </a>
  );
};