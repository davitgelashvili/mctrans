import React from 'react'
import styles from './styles.module.scss'
import { CustomButton } from '../Common/CustomButton'
import { Link } from 'react-router-dom'
import pin from "../../assets/icons/pin.svg"
import post from "../../assets/icons/post.svg"
import person from "../../assets/icons/person.svg"
import vector from "../../assets/icons/Vector.svg"
import isari from "../../assets/icons/isari.svg"
import petrol from "../../assets/icons/petrol.svg"
import kutxis from "../../assets/icons/kutxis.svg"


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
                {item?.location && <div className="d-flex justify-content-center align-items-center"><CustomButton >
                    <Link to="/test" className={styles['btn__link']} style={{ height: 5 }}>
                        <div className='d-flex justify-content-center align-items-center'>
                            <p style={{ position: "fixed" }}>მოგვწერეთ</p>
                        </div>
                    </Link>
                </CustomButton></div>}
                {/* car */}
                {item?.fwd && (
                    <div className={styles.cardetail} >
                        <div>
                            <div><p className={styles.iconMid}><img src={isari} alt='isari' />{item?.fwd}</p></div>
                        </div>
                        <div >
                            <div><p className={styles.iconMid}><img src={vector} alt='vector' />{item?.kolofi}</p></div>
                        </div>
                        <div>
                            <div><p className={styles.iconMid}><img src={petrol} alt='petrol' />{item?.dzravi}</p></div>
                        </div>
                    </div>
                )}
                {item?.price && (
                    <div>
                        <p className={styles.pricetxt}>
                            {item?.price}
                        </p>
                    </div>
                )}
                {item?.price && (
                    <div className={styles.Linkcontainer}>
                        <Link to="/test" className={styles.cornerlink}>
                            View Details<img src={kutxis} alt='kutxis' style={{ position: "absolute", display: "inline-flex", 
                                marginLeft: 5, width: 13, height: 13, marginTop: 3}}/>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}
