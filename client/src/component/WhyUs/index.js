import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import getApi from '../../http/getApi';
import { Link } from 'react-router-dom';
import { Section } from '../Common/Section';
import Item from './Item';
import expoffers from "../../assets/icons/expoffers.svg"
import dealership from "../../assets/icons/dealership.svg"
import expricing from "../../assets/icons/expricing.svg"
import service from "../../assets/icons/service.svg"

export const WhyUs = () => {

    return (
        <Section bigTitle={'რატომ ჩვენ ?'} background> 
            <div className={`${styles['']}`}>
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-3'>
                        <Item icon={expoffers} title="Special Financing Offers" item="Our stress-free finance department that can find financial solutions to save you money"/>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3'>
                        <Item icon={dealership} title="Trusted Car Dealership" item="Our stress-free finance department that can find financial solutions to save you money"/>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3'>
                        <Item icon={expricing} title="Transparent Pricing" item="Our stress-free finance department that can find financial solutions to save you money"/>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3'>
                        <Item icon={service} title="Expert Car Service" item="Our stress-free finance department that can find financial solutions to save you money"/>
                    </div>
                </div> 
            </div>
        </Section>
    )
}
