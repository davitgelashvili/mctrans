import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { Form } from '../Form';
import { CustomButton } from '../Common/CustomButton';
import calcbigimg from "../../assets/images/calcbigimg.svg"
import calcimg1 from "../../assets/images/calcimg1.svg"
import calcimg2 from "../../assets/images/calcimg2.svg"
import { CustomInput } from '../Common/CustomInput';
import { useTranslation } from 'react-i18next';

export const VinSearch = () => {

    const { t } = useTranslation();

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
                title={t("vin.company")}>
                <div>
                    <p className={styles.vin__firstp}>{t("vin.info")}</p> 
                    <p className={styles.vin__secondp}>{t("vin.code")}</p>
                    <CustomInput
                        type={'text'}
                        title={t("vin.title1")}
                        name={'vin'}
                        value={values.vin}
                        placeholder={t("vin.plholder1")}
                        onChange={handleChange}
                    />
                    <CustomInput
                        type={'text'}
                        title={t("vin.title2")}
                        name={'container'}
                        value={values.container}
                        placeholder={t("vin.plholder2")}
                        onChange={handleChange}
                    />
                    <CustomButton>
                        <p className={styles.vin__btn}>{t("vin.search")}</p>
                    </CustomButton>
                </div>
            </Form>
        </div>
    )
}
