import React from 'react'
import styles from './styles.module.scss'

export default function Box({title, desc, icon, children, color}) {
  return (
    <div className={styles.requestbox__item} style={{backgroundColor: color}}>
        <h2 className={styles.requestbox__title}>{title}</h2>
        <p className={styles.requestbox__desc}>{desc}</p>
        <div className='d-flex align-items-center justify-content-between'>
            {children}
            <img src={icon} alt='icon' />
        </div>
    </div>
  )
}
