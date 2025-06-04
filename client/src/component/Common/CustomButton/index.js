import React from 'react'
import styles from './styles.module.scss'

export const CustomButton = ({children, light, dark}) => {
  return (
    <button className={`${styles.custombutton} ${light && styles.custombutton__light} ${dark && styles.custombutton__dark}`}>
      {children}
    </button>
  )
}
