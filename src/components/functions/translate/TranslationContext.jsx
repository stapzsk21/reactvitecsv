import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { loadTranslations } from './translationsLoader';

const TranslationContext = createContext();

export function TranslationProvider({ children, initialLanguage }) {
  const [translationState, setTranslationState] = useState({
    language: initialLanguage,
    translations: {}
  });

  // Загрузка переводов при первом рендере
  useEffect(() => {
    const loadInitialTranslations = async () => {
      try {
        const data = await loadTranslations();
        setTranslationState(prev => ({
          ...prev,
          translations: data[initialLanguage] || {}
        }));
      } catch (error) {
        console.error('Error loading initial translations:', error);
      }
    };

    loadInitialTranslations();
  }, [initialLanguage]);

  const setLanguage = useCallback(async (newLanguage) => {
    try {
      const data = await loadTranslations();
      setTranslationState({
        language: newLanguage,
        translations: data[newLanguage] || {}
      });
    } catch (error) {
      console.error('Error loading translations:', error);
    }
  }, []);

  return (
    <TranslationContext.Provider value={{ 
      translations: translationState.translations, 
      language: translationState.language,
      setLanguage 
    }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}
