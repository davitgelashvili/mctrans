import React from 'react'
import logo from "../../../assets/images/logo.png"
import styles from './styles.module.scss'

export default function Logo() {
  return (
    <div className={styles.img}>
      <img src={logo} className={styles.img}/>
    </div>
  )
}
