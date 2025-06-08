import React from 'react'
import styles from './styles.module.scss'

export default function Item({ item }) {
    return (
        <div className={styles.item}>
            <h1>GREAT</h1>
            <img src='starts' alt='' />
            <p>desc</p>
            <img src='logo' alt='' />
        </div>
    )
}
