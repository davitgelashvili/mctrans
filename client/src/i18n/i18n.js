import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import header from './../component/Common/Header/header.module'
import mainslider from './../component/MainSlider/mainslider.module'
import requestbox from './../component/RequestBox/requestbox.module'
import carditem from './../component/CardItem/carditem.module'
import footer from './../component/Common/Footer/footer.module'
import calculator from './../component/Calculator/calculator.module'

i18n
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        resources: {
            en: {
                translation: {
                    ...header.en,
                    ...mainslider.en,
                    ...requestbox.en,
                    ...carditem.en,
                    ...footer.en,
                    ...calculator.en,
                }
            },
            ka: {
                translation: {
                    ...header.ka,
                    ...mainslider.ka,
                    ...requestbox.ka,
                    ...carditem.ka,
                    ...footer.ka,
                    ...calculator.ka,
                }
            },
            ru: {
                translation: {
                    ...header.ru,
                    ...mainslider.ru,
                    ...requestbox.ru,
                    ...carditem.ru,
                    ...footer.ru,
                    ...calculator.ru,
                }
            }
        }
    })

export default i18n