import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { Form } from '../Form';
import { Input } from './Input';
import { CustomButton } from '../Common/CustomButton';

export const VinSearch = () => {

    return (
        <div className={`${styles['vin']}`}>
            <Form
                smallImage1="1"
                smallImage2="2"
                bigImage="3"
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
