import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './styles.module.scss'
import { Form } from '../Form';
import { CustomButton } from '../Common/CustomButton';
import contactimg1 from "../../assets/images/contactimg1.svg"
import contactimg2 from "../../assets/images/contactimg2.svg"
import contactimg3 from "../../assets/images/contactimg3.svg"
import { CustomInput } from '../Common/CustomInput';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
    const { t } = useTranslation();
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
                title={t("contact.title")}>
                <div>
                    <p className={styles.contact__firstp}>{t("contact.firstp")}</p>
                    <CustomInput
                        type={'text'}
                        title={t("contact.inputtitle1")}
                        name={'fullname'}
                        value={values.fullname}
                        placeholder={t("contact.plcholder1")}
                        onChange={handleChange}
                    />
                    <CustomInput
                        type={'text'}
                        title={t("contact.inputtitle2")}
                        name={'phonenumber'}
                        value={values.phonenumber}
                        placeholder={t("contact.plcholder2")}
                        onChange={handleChange}
                    />
                    <CustomButton>
                        <p className={styles.contact__btn} onClick={handleSubmit}>{t("contact.submit")}</p>
                    </CustomButton>
                </div>
            </Form>
        </div>
    )
}
