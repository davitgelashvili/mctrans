import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './styles.module.scss'
import { Form } from '../Form';
import { CustomButton } from '../Common/CustomButton';
import contactimg1 from "../../assets/images/contactimg1.svg"
import contactimg2 from "../../assets/images/contactimg2.svg"
import contactimg3 from "../../assets/images/contactimg3.svg"
import { CustomInput } from '../Common/CustomInput';

export const Contact = () => {

    const [values, setValues] = useState({
        fullname: "",
        phonenumber: "",
    })

    function handleChange(e) {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/contact', {
                name: values.fullname,
                phone: values.phonenumber,
            });
            alert('მაილი გაიგზავნა წარმატებით');
        } catch (err) {
            alert('დაფიქსირდა შეცდომა');
        }
    };

    return (
        <div className={`${styles['contact']}`}>
            <Form
                smallImage1={contactimg2}
                smallImage2={contactimg3}
                bigImage={contactimg1}
                title="Fill Form">
                <div>
                    <p className={styles.contact__firstp}>One step closer to your new car! Just complete the short
                        form and our sales manager will contact you shortly.</p>
                    <CustomInput
                        type={'text'}
                        title={'Full name'}
                        name={'fullname'}
                        value={values.fullname}
                        placeholder={'Enter your full name'}
                        onChange={handleChange}
                    />
                    <CustomInput
                        type={'text'}
                        title={'Phone number'}
                        name={'phonenumber'}
                        value={values.phonenumber}
                        placeholder={'Enter your phone number'}
                        onChange={handleChange}
                    />
                    <CustomButton>
                        <p className={styles.contact__btn} onClick={handleSubmit}>Submit Form</p>
                    </CustomButton>
                </div>
            </Form>
        </div>
    )
}
