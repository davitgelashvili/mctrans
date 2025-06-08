import React from 'react'
import styles from './styles.module.scss'

export const CardItem = ({ item, name }) => {
    return (
        <div className={styles.card}>
            <figure className={styles.card__cover}>
                <img src={item?.cover} alt='ტესტ' />
            </figure>
            {name === 'cars' && <h1 className={styles.card__title}>{item?.title}</h1>}
            {name === 'teams' && <h1 className={styles.card__title} style={{ backgroundColor: '#CEE1F2' }}>{item?.name}</h1>}
            {name === 'blogs' && <h1 className={styles.card__title}>{item?.title?.ka}</h1>}
            <div className={styles.card__body}>
                {/* blog description */}
                {item?.desc && `${item?.desc?.ka}`}
                {item?.location && <p>{item?.location}</p>}
                {item?.location && <p>sale@mctrans.ge</p>}
                {/* car */}
                {item?.fwd && (
                    <div className={styles.cardetail}>
                        <div>
                            <p>{item?.fwd}</p>
                        </div>
                        <div>
                            <p>{item?.kolofi}</p>
                        </div>
                        <div>
                            <p>{item?.dzravi}</p>
                        </div>
                    </div>
                )}
                {item?.price && (
                    <div>
                        <p>
                            {item?.price}
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}
