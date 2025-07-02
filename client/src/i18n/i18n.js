import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import header from './../component/Common/Header/header.module'

i18n
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        resources: {
            en: {
                translation: {
                    ...header.en,
                }
            },
            ka: {
                translation: {
                    ...header.ka,
                }
            },
            ru: {
                translation: {
                    ...header.ru,
                }
            }
        }
    })

export default i18n