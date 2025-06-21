import React from 'react'
import styles from './styles.module.scss'
import { CustomButton } from '../Common/CustomButton'
import coupe from "../../assets/icons/coupe.svg"
import hatckback from "../../assets/icons/hatchback.svg"
import hybrid from "../../assets/icons/hybrid.svg"
import sedan from "../../assets/icons/sedan.svg"
import suv from "../../assets/icons/suv.svg"
import kutxisS from "../../assets/icons/kutxisshavi.svg"
import kutxisT from "../../assets/icons/kutxis2.svg"
import { Link } from 'react-router-dom'


export default function Body() {

    const data = [
        { link: "/test", icon: `${suv}`, name: "SUV" },
        { link: "/test", icon: `${sedan}`, name: "Sedan" },
        { link: "/test", icon: `${hatckback}`, name: "Hatckback" },
        { link: "/test", icon: `${coupe}`, name: "Coupe" },
        { link: "/test", icon: `${hybrid}`, name: "Hybrid" },
    ]


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
                        <img src={kutxisT} style={{
                            position: "absolute", display: "inline-flex",
                            marginLeft: 4, width: 11, height: 11, marginTop: 2
                        }} />
                    </p>
                </CustomButton>
                <CustomButton light>
                    <p className={`${styles.btn} ${styles.btn__white}`}>
                        Contact Us
                        <img src={kutxisS} style={{
                            position: "absolute", display: "inline-flex",
                            marginLeft: 4, width: 11, height: 11, marginTop: 2
                        }} />
                    </p>
                </CustomButton>
            </div>
            <p className={styles.tag2}>Or Browse Featured Model</p>
            <div className={styles.features}>
                {data.map((item) => {
                    return (
                        <CustomButton light>
                            <Link to={item.link} className={styles.minibtn} style={{ marginTop: 5 }}><img src={item.icon} />
                                <p className={styles.linktxt} style={{ display: "inline-flex", paddingBottom: 5 }}>{item.name}</p>
                            </Link>
                        </CustomButton>
                    )
                })}
            </div>
        </div>
    )
}
