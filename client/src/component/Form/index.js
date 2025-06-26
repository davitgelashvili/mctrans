import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import getApi from '../../http/getApi';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { CardItem } from '../CardItem';
import { Section } from '../Common/Section';
import { Cover } from './Cover';
import calcbigimg from "../../assets/images/calcbigimg.svg"
import calcimg1 from "../../assets/images/calcimg1.svg"
import calcimg2 from "../../assets/images/calcimg2.svg"

export const Form = ({smallImage1,smallImage2, bigImage, title, children}) => {

    return ( 
        <div className={`${styles['formpage']}`}>
            <div className='container'>
                <div className='row'>
                    <div className='col-5'>
                        <Cover smallImage1={calcimg1} smallImage2={calcimg2} bigImage={calcbigimg}/>
                    </div>
                    <div className='col-7'>
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
