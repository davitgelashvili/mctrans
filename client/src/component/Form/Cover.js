import React from 'react'
import styles from './styles.module.scss'

export const Cover = ({ smallImage1, smallImage2, bigImage }) => {
    return (
        <div className={styles.cover}>
            <div className='row'>
                <div className='col-6'>
                    <figure>
                        <img src={smallImage1} alt='cover' />
                    </figure>
                    <figure className={styles.smallimg2}>
                        <img src={smallImage2} alt='cover' />
                    </figure>
                </div>
                <div className='col-6 d-flex align-items-end'>
                    <figure className={styles.bigimg}>
                        <img src={bigImage} alt='cover' />
                    </figure>
                </div>
            </div>
        </div>
    )
}
