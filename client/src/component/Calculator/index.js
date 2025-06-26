import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { Form } from '../Form';

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
                1111
            </Form>
        </div>
    )
}
