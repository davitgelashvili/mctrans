import React from 'react'
import logo from "../../../assets/images/logo.png"
import styles from './styles.module.scss'

export default function Logo() {
  return (
    <div className={styles.header__logo}>
      <img src={logo} alt='logo'/>
    </div>
  )
}
