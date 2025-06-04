import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import getApi from '../../http/getApi';
import { Link } from 'react-router-dom';
import { Section } from '../Common/Section';
import Item from './Item';

export const Benefits = () => {


    return (
        <Section>
            <div className={`${styles['benefits']}`}>
                <div className='container'>
                    <div className={`${styles['benefits__container']}`}>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-3'>
                                    <h3>ჩვენი ბენეფიტები</h3>
                                    <p>
                                        Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt
                                        mollit anim id es
                                    </p>
                                </div>
                                <div className='col-3'>
                                    <Item />
                                </div>
                                <div className='col-3'>
                                    <Item />
                                </div>
                                <div className='col-3'>
                                    <Item />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Section>
    )
}
