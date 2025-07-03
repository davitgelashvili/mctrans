import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next';

export const Menu = () => {

  const { t } = useTranslation();

  return (
    <ul className={`${styles['footer__menu']} d-flex flex-row flex-wrap`}>
      <li>
        <Link to="/">{t("footer.home")}</Link>
      </li>
      <li>
        <Link to="/cars">{t("footer.mstrans")}</Link>
      </li>
      <li>
        <Link to="/teams">{t("footer.salesteam")}</Link>
      </li>
      <li>
        <Link to="/vin">{t("footer.vin")}</Link>
      </li>
      <li>
        <Link to="/news">{t("footer.news")}</Link>
      </li>
      <li>
        <Link to="/cars">{t("footer.catalog")}</Link>
      </li>
      <li>
        <Link to="/calculator">{t("footer.customcl")}</Link>
      </li>
    </ul> 
  )
}
