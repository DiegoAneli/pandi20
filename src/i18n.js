import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'; // per rilevare la lingua del browser
import Backend from 'i18next-http-backend'; // per caricare le traduzioni tramite HTTP, facoltativo

// Carica il file di traduzione in formato JSON
import translationEN from './locales/en/translation.json';
import translationIT from './locales/it/translation.json';

i18n
  .use(LanguageDetector) // rilevamento automatico della lingua
  .use(Backend) // opzionale, se vuoi usare il backend per caricare le traduzioni
  .use(initReactI18next) // la parte React del setup
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      it: {
        translation: translationIT,
      },
    },
    fallbackLng: 'en', // lingua di fallback se quella rilevata non è disponibile
    interpolation: {
      escapeValue: false, // React già si occupa dell'escaping
    },
    react: {
      useSuspense: false, // opzionale: se non vuoi che React sospenda il rendering durante il caricamento delle traduzioni
    },
  });

export default i18n;
