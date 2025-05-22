import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface AccessibilityContextType {
  isHighContrastMode: boolean;
  toggleHighContrastMode: () => void;
  fontSize: number;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  resetFontSize: () => void;
}

export const AccessibilityContext = createContext<AccessibilityContextType>({
  isHighContrastMode: false,
  toggleHighContrastMode: () => { },
  fontSize: 16,
  increaseFontSize: () => { },
  decreaseFontSize: () => { },
  resetFontSize: () => { },
});

interface AccessibilityProviderProps {
  children: ReactNode;
}

export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({ children }) => {
  // Initialize state from localStorage if available
  const [isHighContrastMode, setIsHighContrastMode] = useState<boolean>(() => {
    return localStorage.getItem('highContrastMode') === 'true';
  });

  const [fontSize, setFontSize] = useState<number>(() => {
    const savedFontSize = localStorage.getItem('fontSize');
    return savedFontSize ? parseInt(savedFontSize, 10) : 16;
  });

  // Update localStorage and apply high contrast mode
  useEffect(() => {
    localStorage.setItem('highContrastMode', isHighContrastMode.toString());

    if (isHighContrastMode) {
      document.documentElement.classList.add('high-contrast');

      // Apply high contrast CSS variables
      document.documentElement.style.setProperty('--text-color', '#ffffff');
      document.documentElement.style.setProperty('--bg-color', '#000000');
      document.documentElement.style.setProperty('--link-color', '#ffff00');
      document.documentElement.style.setProperty('--heading-color', '#ffffff');
      document.documentElement.style.setProperty('--border-color', '#ffffff');

      // Apply additional high contrast styles
      document.body.style.backgroundColor = '#000000';
      document.body.style.color = '#ffffff';

      // Enhance focus styles for better visibility
      const style = document.createElement('style');
      style.id = 'high-contrast-focus-styles';
      style.textContent = `
        a:focus, button:focus, input:focus, select:focus, textarea:focus {
          outline: 3px solid #ffff00 !important;
          outline-offset: 2px !important;
        }
      `;
      document.head.appendChild(style);
    } else {
      document.documentElement.classList.remove('high-contrast');

      // Reset CSS variables
      document.documentElement.style.removeProperty('--text-color');
      document.documentElement.style.removeProperty('--bg-color');
      document.documentElement.style.removeProperty('--link-color');
      document.documentElement.style.removeProperty('--heading-color');
      document.documentElement.style.removeProperty('--border-color');

      // Reset body styles
      document.body.style.backgroundColor = '';
      document.body.style.color = '';

      // Remove enhanced focus styles
      const style = document.getElementById('high-contrast-focus-styles');
      if (style) {
        document.head.removeChild(style);
      }
    }
  }, [isHighContrastMode]);

  // Update localStorage and apply font size
  useEffect(() => {
    localStorage.setItem('fontSize', fontSize.toString());
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  // Functions to manage settings
  const toggleHighContrastMode = () => {
    setIsHighContrastMode(prev => !prev);
  };

  const increaseFontSize = () => {
    setFontSize(prev => Math.min(prev + 2, 24)); // Maximum font size 24px
  };

  const decreaseFontSize = () => {
    setFontSize(prev => Math.max(prev - 2, 12)); // Minimum font size 12px
  };

  const resetFontSize = () => {
    setFontSize(16); // Reset to standard size
  };

  return (
    <AccessibilityContext.Provider
      value={{
        isHighContrastMode,
        toggleHighContrastMode,
        fontSize,
        increaseFontSize,
        decreaseFontSize,
        resetFontSize,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};
