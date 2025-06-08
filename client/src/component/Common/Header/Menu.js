import React from 'react'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <ul className={styles.header__menu}>
        <li className={styles.nav_item}>
            მთავარი
        </li>
        <li className={styles.nav_item}>
          სიახლეები
        </li >
        <li className={styles.nav_item}>
          ლაუნჯი
        </li>
        <li className={styles.nav_item}>
          კატალოგები
        </li>
        <li className={styles.nav_item}>
          გუნდი
        </li>
        <li className={styles.nav_item}>
          განბაჟება
        </li>
        <li className={styles.nav_item}>
          VIN: ძებნა
        </li>
    </ul>
  )
}
