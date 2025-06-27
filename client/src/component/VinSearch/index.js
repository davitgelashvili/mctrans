import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { Form } from '../Form';
import { Input } from './Input';
import { CustomButton } from '../Common/CustomButton';
import calcbigimg from "../../assets/images/calcbigimg.svg"
import calcimg1 from "../../assets/images/calcimg1.svg"
import calcimg2 from "../../assets/images/calcimg2.svg"

export const VinSearch = () => {

    return (
        <div className={`${styles['vin']}`}>
            <Form
                smallImage1={calcimg1}
                smallImage2={calcimg2}
                bigImage={calcbigimg}
                title="INTERNATIONAL SHIPPING COMPANY">
                <div>
                    <p>Vehicle information</p>
                    <p>Enter VIN code or Enter container number</p>
                    <p>VIN code </p>
                    <input type='text' />
                    <p>Container number  </p>
                    <input type='text' />
                    <CustomButton>
                        <p>Search</p>
                    </CustomButton>
                </div>
            </Form>
        </div>
    )
}
