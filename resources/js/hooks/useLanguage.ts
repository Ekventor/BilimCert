import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

// Импортируем переводы
import kzTranslations from '../locales/kz';
import ruTranslations from '../locales/ru';
import enTranslations from '../locales/en';

// Объединяем все переводы
const translations = {
  kz: kzTranslations,
  ru: ruTranslations,
  en: enTranslations,
};

export const useLanguage = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const availableLanguages = [
    { code: 'kz', name: 'Kazakh', nativeName: 'Қазақша', displayName: 'Kazakh' },
    { code: 'ru', name: 'Russian', nativeName: 'Русский', displayName: 'Russian' },
    { code: 'en', name: 'English', nativeName: 'English', displayName: 'English' }
  ];

  const changeLanguage = async (newLanguage: 'kz' | 'ru' | 'en') => {
    try {
      // Сохраняем выбор языка на сервере (если нужно)
      await fetch('/api/users/language', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '',
        },
        body: JSON.stringify({ language: newLanguage }),
      });

      // Обновляем язык в контексте
      setLanguage(newLanguage);
    } catch (error) {
      console.error('Failed to change language:', error);
    }
  };

  // Функция для получения переведенного текста
  const t = (key: string, params: Record<string, string> = {}) => {
    const keys = key.split('.');
    let value = translations[language];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Возвращаем ключ, если перевод не найден
      }
    }

    if (typeof value === 'string') {
      // Заменяем параметры в строке перевода
      return Object.entries(params).reduce(
        (str, [param, val]) => str.replace(`{{${param}}}`, val),
        value
      );
    }

    return key;
  };

  return {
    currentLanguage: language,
    changeLanguage,
    availableLanguages,
    t,
  };
};
