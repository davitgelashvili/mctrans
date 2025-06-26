import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { Form } from '../Form';
import { Input } from './Input';
import { CustomButton } from '../Common/CustomButton';


export const Calculator = () => {
    const [jami, setJami] = useState('')
    const [selected, seSelected] = useState({
        cartype: "",
        sache: "",
        gaformeba: "",
    })

    function handleChange(e) {
        seSelected({ ...selected, [e.target.name]: e.target.value })
        console.log(selected)
    }

    const cartype = [
        {
            value: "400",
            text: "ბენზინი/დიზელი"
        },
        {
            value: "800",
            text: "ელექტრო"
        },
        {
            value: "450",
            text: "ჰიბრიდი"
        },
    ]

    const sache = [
        {
            value: "150",
            text: "მარცხენა"
        },
        {
            value: "250",
            text: "მარჯვენა"
        }
    ]

    const gaformeba = [
        {
            value: "400",
            text: "ერთმაგი"
        },
        {
            value: "700",
            text: "ორმაგი"
        }
    ]


    return (
        <div className={`${styles['calculator']}`}>
            <Form
                smallImage1="1"
                smallImage2="2"
                bigImage="3"
                title="კალკულატორი">
                <div className='row'>
                    <div className='col-12'>
                        <p>მანქანის ტიპი</p>
                        <div className='row'>
                            {cartype?.map(el => {
                                return (
                                    <div className='col-auto' key={el.text}>
                                        <Input
                                            name="cartype"
                                            value={el.value}
                                            text={el.text}
                                            onChange={handleChange}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='col-auto'>
                        <p>მანქანის საჭე</p>
                        <div className='row'>
                            {sache?.map(el => {
                                return (
                                    <div className='col-auto' key={el.text}>
                                        <Input
                                            name="sache"
                                            value={el.value}
                                            text={el.text}
                                            onChange={handleChange}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='col-auto'>
                        <p>მანქანის გაფორმება</p>
                        <div className='row'>
                            {gaformeba?.map(el => {
                                return (
                                    <div className='col-auto' key={el.text}>
                                        <Input
                                            name="gaformeba"
                                            value={el.value}
                                            text={el.text}
                                            onChange={handleChange}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='col-6'>
                        <div>
                            <p>გამოშვების წელი</p>
                            <select>
                                <option disabled>2025</option>
                                <option>2024</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div>
                            <p>ძრავის მოცულობა</p>
                            <select>
                                <option disabled>1</option>
                                <option>2.0</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-12'>
                        <CustomButton>
                            <p
                                className={`${styles['calculator__btn']}`}
                                onClick={() => setJami(Number(selected.cartype) + Number(selected.gaformeba) + Number(selected.sache))}>
                                    {jami || '$'}
                                </p>
                        </CustomButton>
                    </div>
                </div>
            </Form> 
        </div>
    )
}
