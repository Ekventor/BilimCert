import React from 'react';
import { MainNav } from '../main-nav-fixed';

interface FullWidthHeaderProps {
  className?: string;
}

export function FullWidthHeader({ className = '' }: FullWidthHeaderProps) {
  return (
    <header className={`sticky top-0 z-40 w-full backdrop-blur-md bg-white/80 border-b border-gray-200/50 ${className}`}>
      <div className="w-full flex flex-col items-center">
        <div className="container mx-auto w-[95%] md:w-[90%] max-w-[1400px]">
          <MainNav />
        </div>
      </div>
    </header>
  );
}
