import styles from './styles.module.scss'
import React, { useEffect, useState } from "react";
import logo from "../../../assets/images/logo.png"
import burger from "../../../assets/icons/burger.svg"
import ixsiki from "../../../assets/icons/ixsiki.svg"
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation();


  const data = [
    { link: "/", title: t("menu.home") },
    { link: "/news", title: t("menu.news") },
    { link: "/cars", title: "MS Trans ლაუნჯი" },
    { link: "/cars", title: "კატალოგები" },
    { link: "/teams", title: "გაყიდვების გუნდი" },
    { link: "/calculator", title: "განბაჟება" },
    { link: "/vin", title: "VIN:ძებნა" },
  ]

  return (
    <nav>
      <div className="d-flex align-items-center justify-content-between">
        <div className='d-none d-lg-block'>
          {data?.map((item) => {
            return (
              <Link className={styles.header__item} to={item.link} key={item.title}>{item.title}</Link>
            )
          })}
        </div>
        <button className="d-block d-lg-none" onClick={() => setIsOpen(!isOpen)} style={{ border: "none", background: "white" }}>
          {!isOpen ? (
            <img src={burger} onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }} />
          ) : (
            <img src={ixsiki} onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }} />
          )}
        </button>
      </div>

      <div className={`${isOpen ? "d-block" : "d-none"} d-lg-none`}>
        <div className={styles.header__open}>
          <div className={styles.header__boxrow}>
            {data?.map((item) => {
              return (
                <Link onClick={() => setIsOpen(!isOpen)} className={styles.header__minibox} to={item.link} key={item.title}>{item.title}</Link>
              )
            })}
          </div>

          <img src={logo} alt='logo' className='d-block d-lg-none img-fluid mx-auto mt-1' style={{width: '100%'}} />
        </div>
      </div>
    </nav>
  );
}
