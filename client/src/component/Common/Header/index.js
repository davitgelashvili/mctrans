import React, { useState } from 'react'
import styles from './styles.module.scss'
import Menu from './Menu'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import { CustomButton } from '../CustomButton'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

export const Header = () => {
    const [isMenu, setIsMenu] = useState(true)
    return (
        <header className={styles.header}>
            <div className={`${styles.header__content} d-flex align-items-center justify-content-between`}>
                <Logo />
                <div className="order-2 order-lg-1">
                        {isMenu && <Menu />}
                </div>
                <div className={`order-1 order-lg-2 ${styles.btnmobile}`}>
                    <CustomButton >
                        <Link to={'/contact'} className={styles['header__btn--link']}>
                            მოთხოვნის გაგზავნა
                        </Link>
                    </CustomButton>
                </div>
            </div>
        </header>
    )
}
