import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const getUserLanguage = () =>
  window.navigator.userLanguage || window.navigator.language;

const checkLanguages = () => {
  let userLanguage = getUserLanguage();
  if (userLanguage === "pl-PL") {
    return "pl";
  } else if (
    userLanguage === "en-US" ||
    userLanguage === "en-UK" ||
    userLanguage === "en-EN"
  ) {
    return "en";
  } else if (userLanguage === "ua-UA") {
    return "ua";
  } else if (userLanguage === "ru-RU" || userLanguage === "ru-UA") {
    return "ru";
  } else {
    return "en";
  }
};

const selectedLanguage = checkLanguages();

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          size: "Size",
          founders: "People",
          locations: "Location/s",
          url: "URL",
          founded_date: "Founded date",
          essay: "Essay",
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
          essay: "Esej",
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
          essay: "Есе",
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
          essay: "Сочинение",
          about_us: "О проекте",
          list_of_content: "Зміст",
        },
      },
    },
    debug: true,
    lng: selectedLanguage,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
