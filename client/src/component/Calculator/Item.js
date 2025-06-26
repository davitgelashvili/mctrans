import React from 'react'
import styles from './styles.module.scss'

export default function Item({ item }) {
    return (
        <div className={styles.item}>
            <figure className={styles.item__icon}>
                <img src='' alt='' />
            </figure>
            <h3 className={styles.item__title}>title</h3>
            <p>desc</p>
        </div> 
    )
}
