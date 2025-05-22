import React from 'react';
import { useLanguage } from '../../../hooks/useLanguage';

interface TranslatedTextProps {
  textKey: string;
  params?: Record<string, string>;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export const TranslatedText: React.FC<TranslatedTextProps> = ({
  textKey,
  params = {},
  className = '',
  as: Component = 'span',
}) => {
  const { t } = useLanguage();
  const translatedText = t(textKey, params);
  
  return (
    <Component className={className}>
      {translatedText}
    </Component>
  );
};
