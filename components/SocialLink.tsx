
import React from 'react';

interface SocialLinkProps {
  href: string;
  'aria-label': string;
  children: React.ReactNode;
}

export const SocialLink: React.FC<SocialLinkProps> = ({ href, 'aria-label': ariaLabel, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="text-slate-400 hover:text-amber-400 transition-colors duration-300 transform hover:scale-110"
    >
      {children}
    </a>
  );
};
