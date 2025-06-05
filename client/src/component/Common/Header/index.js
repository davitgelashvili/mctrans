import React from 'react'
import styles from './styles.module.scss'
import Menu from './Menu'
import Logo from './Logo'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header__content}>
                    <Logo />
                    <Menu />
                </div>
                <div className={styles.header__right}>
                    <button className={styles.header__submit}>
                        <p className={styles.header__element}>
                            მოთხოვნის გაგზავნა
                        </p>
                    </button>
                </div>
            </div>
        </header>
    )
}
