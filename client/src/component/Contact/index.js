import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { Form } from '../Form';

export const Contact = () => {


    return (
        <div className={`${styles['contact']}`}>
            <Form
                smallImage1="1"
                smallImage2="2"
                bigImage="3"
                title="კონტაქტი">
                1111
            </Form>
        </div>
    )
}
