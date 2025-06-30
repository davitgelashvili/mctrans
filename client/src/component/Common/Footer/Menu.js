import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

export const Menu = () => {
  return (
    <ul className={`${styles['footer__menu']} d-flex flex-row flex-wrap`}>
      <li>
        <Link to="">მთავარი</Link>
      </li>
      <li>
        <Link to="">MS Trans ლაუნჯი</Link>
      </li>
      <li>
        <Link to="">გაყიდვების გუნდი</Link>
      </li>
      <li>
        <Link to="">VIN: ძებნა</Link>
      </li>
      <li>
        <Link to="">სიახლეები</Link>
      </li>
      <li>
        <Link to="">კატალოფები</Link>
      </li>
      <li>
        <Link to="">განბაჟება</Link>
      </li>
    </ul> 
  )
}
