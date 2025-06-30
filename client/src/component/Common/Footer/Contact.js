import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'
import facebook from "../../../assets/icons/facebook.svg"
import instagram from "../../../assets/icons/instagram.svg"
import linkedin from "../../../assets/icons/linkedin.svg"
import twitter from "../../../assets/icons/twitter.svg"

export const Contact = () => {
  return (
    <div className={styles['footer__social']}>
      <h3 className={styles['footer__title']}>Connect With Us</h3>
      <ul className={styles['footer__social--list']}>
        <li>
          <Link to="">
            <img src={facebook} alt='icon' /> 
          </Link>
        </li>
        <li>
          <Link to="">
            <img src={twitter} alt='icon' />
          </Link>
        </li>
        <li>
          <Link to="">
            <img src={instagram} alt='icon' />
          </Link>
        </li>
        <li>
          <Link to="">
            <img src={linkedin} alt='icon' />
          </Link>
        </li>
      </ul>
    </div>
  )
}
