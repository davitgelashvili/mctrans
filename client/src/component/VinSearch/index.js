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
                    <p className={styles.vin__firstp}>Vehicle information</p> 
                    <p className={styles.vin__secondp}>Enter VIN code or Enter container number</p>
                    <CustomInput
                        type={'text'}
                        title={'VIN code'}
                        name={'vin'}
                        value={values.vin}
                        placeholder={'Enter VIN code'}
                        onChange={handleChange}
                    />
                    <CustomInput
                        type={'text'}
                        title={'Container number'}
                        name={'container'}
                        value={values.container}
                        placeholder={'Enter container number'}
                        onChange={handleChange}
                    />
                    <CustomButton>
                        <p className={styles.vin__btn}>Search</p>
                    </CustomButton>
                </div>
            </Form>
        </div>
    )
}
