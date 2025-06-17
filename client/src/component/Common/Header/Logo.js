import React from 'react'
import logo from "../../../assets/images/logo.png"
import smallLogo from "../../../assets/images/small_logo.png"
import styles from './styles.module.scss'

export default function Logo() {
  return (
    <div className={styles.header__logo}>
      <img src={logo} alt='logo' className='d-none d-md-block'/>
      <img src={smallLogo} alt='smalllogo' className='d-block d-md-none'/>
    </div>
  )
}
