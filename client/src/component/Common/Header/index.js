import React from 'react'
import styles from './styles.module.scss'
import Menu from './Menu'
import Logo from './Logo'

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className='container'>
                <Logo />
                <Menu />
            </div>
        </header>
    )
}
