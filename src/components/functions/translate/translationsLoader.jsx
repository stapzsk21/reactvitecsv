import Papa from "papaparse";

// Используем правильный путь к файлам в public/cvs
import enCSV from '/cvs/en.csv?raw';
import ruCSV from '/cvs/ru.csv?raw';
import esCSV from '/cvs/es.csv?raw';

export const loadTranslations = async () => {
  const translations = {};
  const csvFiles = {
    en: enCSV,
    ru: ruCSV,
    es: esCSV
  };

  try {
    for (const [language, csvContent] of Object.entries(csvFiles)) {

      const parsedData = Papa.parse(csvContent, { 
        header: true,
        skipEmptyLines: true // пропускаем пустые строки
      }).data;


      translations[language] = {};
      parsedData.forEach(row => {
        if (row.key && row.text) {
          translations[language][row.key] = row.text;
        }
      });
    }
  } catch (error) {
    console.error("Error loading translations:", error);
  }

  return translations;
};
