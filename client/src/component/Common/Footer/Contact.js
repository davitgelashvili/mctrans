import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

export const Contact = () => {
  return (
    <div>
      <h3 className={styles['footer__title']}>contact</h3>
      <ul className={styles['footer__social']}>
        <li>
          <Link to="">
            <img src='' alt='icon' />
          </Link>
        </li>
        <li>
          <Link to="">
            <img src='' alt='icon' />
          </Link>
        </li>
      </ul>
    </div>
  )
}
