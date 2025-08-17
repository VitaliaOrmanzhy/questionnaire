import i18next from "i18next";
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from "@/i18n/translations/en-translation.json";
import translationUK from "@/i18n/translations/uk-translation.json";

const resources = {
    en: {
        translation: translationEN
    },
    ua: {
        translation: translationUK
    }
}

i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        resources
    })