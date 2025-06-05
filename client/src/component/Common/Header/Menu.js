import React from 'react'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <ul className={styles.nav_layout}>
        <li className={styles.nav_item}>
            მთავარი
        </li>
        <li className={styles.nav_item}>
          სიახლეები
        </li >
        <li className={styles.nav_item}>
          MS Trans ლაუნჯი
        </li>
        <li className={styles.nav_item}>
          კატალოგები
        </li>
        <li className={styles.nav_item}>
          გაყიდვების გუნდი
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
