import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const getUserLanguage = () =>
  window.navigator.userLanguage || window.navigator.language;

const userLanguage = getUserLanguage();

i18n
  .use(initReactI18next)
  .use(Backend)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: {
          size: "Size",
          founders: "People",
          locations: "Location/s",
          url: "URL",
          founded_date: "Founded date",
          resistance: "Resistance infrastructures",
          about_us: "About us",
          list_of_content: "List of contents",
        },
      },
      pl: {
        translation: {
          size: "Wielkość",
          founders: "Ludzie",
          locations: "Miejsce/a",
          url: "URL",
          founded_date: "Data założenia",
          resistance: "Infrastruktury oporu",
          about_us: "O projekcie",
          list_of_content: "Spis treści",
        },
      },
      ua: {
        translation: {
          size: "Розмір",
          founders: "Люди",
          locations: "Місця",
          url: "URL",
          founded_date: "дата створення",
          resistance: "Інфраструктури опору",
          about_us: "Про проект",
          list_of_content: "Содержание",
        },
      },
      ru: {
        translation: {
          size: "Размер",
          founders: "Люди",
          locations: "Места",
          url: "URL",
          founded_date: "Дата создания",
          resistance: "Инфраструктуры сопротивления",
          about_us: "О проекте",
          list_of_content: "Зміст",
        },
      },
    },
    debug: true,
    ng: `${userLanguage}`,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
