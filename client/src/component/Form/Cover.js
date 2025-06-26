import React from 'react'
import styles from './styles.module.scss'

export const Cover = ({smallImage1,smallImage2, bigImage}) => {
  return (
    <div className='row'>
        <div className='col-6'>
            <figure>
                <img src={smallImage1} alt='cover' />
            </figure>
            <figure>
                <img className={styles.smallimg2}  src={smallImage2} alt='cover' />
            </figure>
        </div>
        <div className='col-6'>
            <figure>
                <img className={styles.bigimg} src={bigImage} alt='cover' />
            </figure>
        </div>
    </div>
  )
}
