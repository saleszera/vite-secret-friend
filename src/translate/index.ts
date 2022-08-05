import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import br from './languages/br';
import en from './languages/en';
import es from './languages/es';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: process.env.NODE_ENV !== 'production',
    fallbackLng: 'br',
    resources: { en, br, es },
  });

export default i18n;
