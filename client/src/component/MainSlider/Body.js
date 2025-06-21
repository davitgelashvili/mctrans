import React from 'react'
import styles from './styles.module.scss'
import { CustomButton } from '../Common/CustomButton'
import coupe from "../../assets/icons/coupe.svg"
import hatckback from "../../assets/icons/hatchback.svg"
import hybrid from "../../assets/icons/hybrid.svg"
import sedan from "../../assets/icons/sedan.svg"
import suv from "../../assets/icons/suv.svg"


export default function Body() {
    return (
        <div className={styles.body}>
            <p className={styles.tag1}>Find cars for sale and for rent near you</p>
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
            <p className={styles.tag2}>Or Browse Featured Model</p>
            <div className={styles.features}>
                <li><img src={suv}/>SUV</li>
                <li><img src={sedan}/>Sedan</li>
                <li><img src={hatckback}/>Hatchback</li>
                <li><img src={coupe}/>Coupe</li>
                <li><img src={hybrid}/>Hybrid</li>
            </div>
        </div>
    )
}
