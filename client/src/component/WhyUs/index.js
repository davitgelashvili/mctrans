import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import getApi from '../../http/getApi';
import { Link } from 'react-router-dom';
import { Section } from '../Common/Section';
import Item from './Item';

export const WhyUs = () => {

    return (
        <Section bigTitle={'რატომ ჩვენ'} background>
            <div className={`${styles['']}`}>
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-3'>
                        <Item />
                    </div>
                    <div className='col-12 col-md-6 col-lg-3'>
                        <Item />
                    </div>
                    <div className='col-12 col-md-6 col-lg-3'>
                        <Item />
                    </div>
                    <div className='col-12 col-md-6 col-lg-3'>
                        <Item />
                    </div>
                </div>
            </div>
        </Section>
    )
}
