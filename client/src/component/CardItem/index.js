import React from 'react'
import styles from './styles.module.scss'
import { CustomButton } from '../Common/CustomButton'
import { Link } from 'react-router-dom'
import pin from "../../assets/icons/pin.svg"
import post from "../../assets/icons/post.svg"
import person from "../../assets/icons/person.svg"

export const CardItem = ({ item, name }) => {
    return (
        <div className={styles.card}>
            <figure className={styles.card__cover}>
                <img src={item?.cover} alt='ტესტ' />
            </figure>
            {name === 'cars' && <h1 className={styles.card__title}>{item?.title}</h1>}
            {name === 'teams' && <h1 className={styles.card__title} style={{ backgroundColor: '#CEE1F2' }}>
                <img src={person} alt='person' style={{ marginLeft: -20, position: "absolute", display: "inline" }} />
                {item?.name}
            </h1>}
            {name === 'blogs' && <h1 className={styles.card__title}>{item?.title?.ka}</h1>}
            <div className={styles.card__body}>
                {/* blog description */}
                {item?.desc && `${item?.desc?.ka}`}
                {item?.location && <div className={styles.icontext}><img src={pin} alt='pin' /><p>{item?.location}</p></div>}
                {item?.location && <div className={styles.icontext}><img src={post} alt='post' /><p>sale@mctrans.ge</p></div>}
                {item?.location && <CustomButton >
                    <Link className={styles['btn__link']} style={{ width: 205, height: 5 }}>
                        <div className='d-flex justify-content-center align-items-center'>
                            <p style={{ position: "fixed" }}>მოგვწერეთ</p>
                        </div>
                    </Link>
                </CustomButton>}
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
