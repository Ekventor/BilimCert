import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../../hooks/useLanguage';

interface SpeechReaderProps {
  text: string;
  className?: string;
}

export const SpeechReader: React.FC<SpeechReaderProps> = ({ text, className = '' }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null);
  const { currentLanguage } = useLanguage();
  
  // Очищаем ресурсы при размонтировании компонента
  useEffect(() => {
    return () => {
      if (utterance) {
        window.speechSynthesis.cancel();
      }
    };
  }, [utterance]);
  
  // Функция для определения языка для синтеза речи
  const getVoiceLanguage = () => {
    switch (currentLanguage) {
      case 'kz':
        return 'kk-KZ'; // Казахский
      case 'ru':
        return 'ru-RU'; // Русский
      case 'en':
        return 'en-US'; // Английский
      default:
        return 'en-US';
    }
  };
  
  // Функция для начала озвучивания текста
  const speak = () => {
    if (!window.speechSynthesis) {
      console.error('Speech synthesis not supported');
      return;
    }
    
    // Отменяем предыдущее озвучивание, если оно было
    window.speechSynthesis.cancel();
    
    const newUtterance = new SpeechSynthesisUtterance(text);
    newUtterance.lang = getVoiceLanguage();
    
    // Пытаемся найти подходящий голос для выбранного языка
    const voices = window.speechSynthesis.getVoices();
    const voice = voices.find(v => v.lang.includes(getVoiceLanguage().split('-')[0]));
    if (voice) {
      newUtterance.voice = voice;
    }
    
    setUtterance(newUtterance);
    
    newUtterance.onstart = () => setIsSpeaking(true);
    newUtterance.onend = () => setIsSpeaking(false);
    newUtterance.onerror = () => setIsSpeaking(false);
    
    window.speechSynthesis.speak(newUtterance);
  };
  
  // Функция для остановки озвучивания
  const stop = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };
  
  return (
    <button
      className={`inline-flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-md transition-colors ${className}`}
      onClick={() => (isSpeaking ? stop() : speak())}
      aria-label={isSpeaking ? 'Stop reading' : 'Read aloud'}
    >
      {isSpeaking ? (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
          </svg>
          <span>Stop</span>
        </>
      ) : (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
          </svg>
          <span>Read Aloud</span>
        </>
      )}
    </button>
  );
};
