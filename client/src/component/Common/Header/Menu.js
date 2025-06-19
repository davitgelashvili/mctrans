import styles from './styles.module.scss'
import React, { useEffect, useState } from "react";
import logo from "../../../assets/images/logo.png"
import burger from "../../../assets/icons/burger.svg"
import ixsiki from "../../../assets/icons/ixsiki.svg"

export default function Menu() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav>
      <div className="d-flex align-items-center justify-content-between">
        <div className='d-none d-lg-block'>
          <a href='/' className={styles.header__item}>მთავარი</a>
          <a href='#' className={styles.header__item}>სიახლეები</a>
          <a href='#' className={styles.header__item}>MS Trans ლაუნჯი</a>
          <a href='#' className={styles.header__item}>კატალოგები</a>
          <a href='#' className={styles.header__item}>გაყიდვების გუნდი</a>
          <a href='#' className={styles.header__item}>განბაჟება</a>
          <a href='#' className={styles.header__item}>VIN:ძებნა</a>

        </div>
        <button className="d-block d-lg-none" onClick={() => setIsOpen(!isOpen)} style={{ border: "none", background: "white"}}>
          {!isOpen ? (
            <img src={burger} onClick={() => setIsOpen(!isOpen)} style={{cursor: 'pointer'}}/>
          ) : (
            <img src={ixsiki} onClick={() => setIsOpen(!isOpen)} style={{cursor: 'pointer'}}/>
          )}
        </button>
      </div>

      <div className={`${isOpen ? "d-block" : "d-none"} d-lg-none`}>
        <div className={styles.header__open}>
          <div className={styles.header__boxrow}>
            <a href='/' className={styles.header__minibox}>მთავარი</a>
            <a href='#' className={styles.header__minibox}>სიახლეები</a>
            <a href='#' className={styles.header__minibox}>MS Trans ლაუნჯი</a>
            <a href='#' className={styles.header__minibox}>კატალოგები</a>
            <a href='#' className={styles.header__minibox}>გაყიდვების გუნდი</a>
            <a href='#' className={styles.header__minibox}>განბაჟება</a>
            <a href='#' className={styles.header__minibox}>VIN:ძებნა</a>
          </div>

          <img src={logo} alt='logo' className='d-block d-lg-none img-fluid mx-auto'/>
        </div>
      </div>
    </nav>
  );
}
