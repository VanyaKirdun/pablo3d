import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
	.use(initReactI18next) // bind react-i18next to the instance
	.init({
		debug: true,
		initImmediate: false,
		preload: ["es", "ca", "en", "ru"],
		fallbackLng: "es",
		lng: "es",
		resources: {
			es: {
				namespace1: {
					key: "hello from namespace 1"
				},
				namespace2: {
					key: "hello from namespace 2"
				}
			},
			ca: {
				namespace1: {
					key: "hello from namespace 1"
				},
				namespace2: {
					key: "hello from namespace 2"
				}
			},
			ru: {
				namespace1: {
					key: "hello from namespace 1"
				},
				namespace2: {
					key: "hello from namespace 2"
				}
			},
			en: {
				namespace1: {
					key: "hello from namespace 1"
				},
				namespace2: {
					key: "hello from namespace 2"
				}
			}
		}
	});

export default i18n;
