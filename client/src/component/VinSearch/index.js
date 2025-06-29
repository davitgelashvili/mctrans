import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { Form } from '../Form';
import { CustomButton } from '../Common/CustomButton';
import calcbigimg from "../../assets/images/calcbigimg.svg"
import calcimg1 from "../../assets/images/calcimg1.svg"
import calcimg2 from "../../assets/images/calcimg2.svg"
import { CustomInput } from '../Common/CustomInput';

export const VinSearch = () => {
    const [values, setValues] = useState({
        vin: "",
        container: "",
    })

    function handleChange(e){
        setValues({
            ...values
        })
    }

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
                    <CustomInput
                        type={'text'}
                        title={'vin code'}
                        name={'vin'}
                        value={values.vin}
                        placeholder={'enter vin code'}
                        onChange={handleChange}
                    />
                    <CustomInput
                        type={'text'}
                        title={'container number'}
                        name={'container'}
                        value={values.container}
                        placeholder={'enter container number'}
                        onChange={handleChange}
                    />
                    <CustomButton>
                        <p>Search</p>
                    </CustomButton>
                </div>
            </Form>
        </div>
    )
}
