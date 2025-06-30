import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

export const Menu = () => {
  return (
    <ul className={`${styles['footer__menu']} d-flex flex-row flex-wrap`}>
      <li>
        <Link to="">erti</Link>
      </li>
      <li>
        <Link to="">ori</Link>
      </li>
    </ul>
  )
}
