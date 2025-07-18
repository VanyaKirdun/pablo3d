import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next) // bind react-i18next to the instance
	.init({
		debug: true,
		initImmediate: false,
		preload: ["es", "ca", "en", "ru"],
		fallbackLng: "es",
		lng: "es"
	});

export default i18n;
