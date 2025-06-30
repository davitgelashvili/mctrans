import React from 'react'
import styles from './styles.module.scss'
import { Logo } from './Logo'
import { Menu } from './Menu'
import { WorkInfo } from './WorkInfo'
import { Contact } from './Contact'

export const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <div className='row'>
        <div className='col-4'> 
          <Logo />
        </div>
        <div className='col-8'>
          <div className='row'>
            <div className='col-6'>
              <Menu />
            </div>
            <div className='col-6 d-flex justify-content-between'>
              <WorkInfo />
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
