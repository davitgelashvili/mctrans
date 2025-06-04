import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import getApi from '../../http/getApi';
import { Link } from 'react-router-dom';
import { Section } from '../Common/Section';
import Item from './Item';

export const Calculator = () => {


    return (

        <div className={`${styles['calculator']}`}>
            <div className='container'>
                <div className='row'>
                    <div className='col-5'>
                        <figure>
                            <img src='' alt='' />
                        </figure>
                    </div>
                    <div className='col-7'>
                        <form />
                    </div>
                </div>
            </div>
        </div>
    )
}
