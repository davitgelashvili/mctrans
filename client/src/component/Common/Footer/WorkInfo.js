import React from 'react'
import styles from './styles.module.scss'

export const WorkInfo = () => {
  return (
    <div className={styles['footer__work']}>
      <h3 className={styles['footer__title']}>Sale Hours</h3>
      <p>Monday - Friday: 09:00AM - 09:00 PM</p>
      <p>Saturday: 09:00AM - 07:00PM </p>
      <p>Sunday: Closed</p> 
    </div>
  )
}
