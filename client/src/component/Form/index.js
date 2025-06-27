import React from 'react'
import styles from './styles.module.scss'
import { Cover } from './Cover';

export const Form = ({smallImage1,smallImage2, bigImage, title, children}) => {

    return ( 
        <div className={`${styles['formpage']}`}>
            <div className="container">
                <div className={`row ${styles.formobile}`}>
                    <div className={`col-5 ${styles.rowmobile}`}>
                        <Cover smallImage1={smallImage1} smallImage2={smallImage2} bigImage={bigImage}/>
                    </div>
                    <div className={`col-7 ${styles.colmobile}`}>
                        <div className={`${styles['form']}`}>
                            <h1>{title}</h1>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
