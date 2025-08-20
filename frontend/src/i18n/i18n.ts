import i18next from "i18next";
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

i18next
    .use(HttpBackend)
    .use(initReactI18next)
    .init({
        load: 'languageOnly',
        debug: true,
        ns: ["auth"],
        supportedLngs: ['en', 'uk', 'ru'],
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: "/translations/{{lng}}/{{ns}}.json",
        },
    })

export default i18next;