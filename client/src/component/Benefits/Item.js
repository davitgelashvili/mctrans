import React from 'react'
import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next';

export default function Item({ item }) {

    const { t } = useTranslation();

    return (
        <div className={styles.item}>
            <h1>{t("benefits.benefit1")}</h1>
            <img src='starts' alt='' />
            <p>{t("benefits.benefit2")}</p>
            <img src='logo' alt='' />
        </div>
    )
}
