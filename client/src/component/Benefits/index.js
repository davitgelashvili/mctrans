import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import getApi from '../../http/getApi';
import { Link } from 'react-router-dom';
import { Section } from '../Common/Section';
import Item from './Item';
import { useTranslation } from 'react-i18next';

export const Benefits = () => {

    const { t } = useTranslation();

    return (
        // <Section>
            <div className={`${styles['benefits']}`}>
                <div className='container'>
                    <div className={`${styles['benefits__container']}`}>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-3'>
                                    <h3>{t("benefits.title")}</h3>
                                    <p>
                                        {t("benefits.firstp")}
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
        // </Section>
    )
}
