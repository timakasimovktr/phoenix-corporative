import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from './localization';

i18n
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: ["ru", "uz"],
    interpolation: {
      escapeValue: false, 
    },
    resources
  });

export default i18n;