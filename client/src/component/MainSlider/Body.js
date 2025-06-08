import React from 'react'
import styles from './styles.module.scss'
import { CustomButton } from '../Common/CustomButton'

export default function Body() {
    return (
        <div className={styles.body}>
            <h1 className={styles.title}>
                4,675 Vehicles
                Available
            </h1>
            <div className={styles.btns}>
                <CustomButton>
                    <p className={styles.btn}>
                        View Inventory
                    </p>
                </CustomButton>
                <CustomButton light>
                    <p className={`${styles.btn} ${styles.btn__white}`}>
                    Contact Us
                    </p>
                </CustomButton>
            </div>
            <div>
                <li>erti</li>
                <li>ori</li>
                <li>sami</li>
                <li>erti</li>
            </div>
        </div>
    )
}
