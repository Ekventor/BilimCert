import { useContext } from 'react';
import { AccessibilityContext } from '../context/AccessibilityContext';

export const useAccessibility = () => {
  const {
    isHighContrastMode,
    toggleHighContrastMode,
    fontSize,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
  } = useContext(AccessibilityContext);

  return {
    isHighContrastMode,
    toggleHighContrastMode,
    fontSize,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
  };
};
