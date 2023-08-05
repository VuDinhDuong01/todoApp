import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./Language/en/en.json";
import vi from "./Language/vi/vi.json";
const resources = {
  en: {
    translation: en,
  },
  vi: {
    translation: vi,
  },
};
i18n.use(initReactI18next).init({
  resources,
  lng: "vi",
  supportedLanguage:['vi','en'],
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
