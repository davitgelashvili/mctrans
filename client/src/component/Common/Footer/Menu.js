import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

export const Menu = () => {
  return (
    <ul className={`${styles['footer__menu']} d-flex flex-row flex-wrap`}>
      <li>
        <Link to="/">მთავარი</Link>
      </li>
      <li>
        <Link to="/cars">MS Trans ლაუნჯი</Link>
      </li>
      <li>
        <Link to="/teams">გაყიდვების გუნდი</Link>
      </li>
      <li>
        <Link to="/vin">VIN: ძებნა</Link>
      </li>
      <li>
        <Link to="/news">სიახლეები</Link>
      </li>
      <li>
        <Link to="/cars">კატალოგები</Link>
      </li>
      <li>
        <Link to="/calculator">განბაჟება</Link>
      </li>
    </ul> 
  )
}
