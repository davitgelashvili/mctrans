import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import getApi from '../../http/getApi';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { CardItem } from '../CardItem';
import { Section } from '../Common/Section';

export const SalesManagers = () => {
    const [data, setData] = useState();
    const [params, setParams] = useState({
        page: 1,
        limit: 4
    });
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        async function fetchData() {
            try {
                const queryString = new URLSearchParams(params).toString();
                const blogs = await getApi.getData(`/teams?${queryString}`);
                setData(blogs.data); // თუ გაქვს pagination სტრუქტურა, დაარეგულირე
                setTotalPages(blogs.totalPages); // თუ გიგზავნის საერთო გვერდებს
            } catch (err) {
                console.error('Error fetching blogs:', err);
            }
        }

        fetchData();
    }, [params]);

    return (
        <Section smollTitle={'გაყიდვების გუნდი'} background>
            <div className={`${styles['salesmanager']}`}>
                <div className='container'>
                    {!data && <Loading />}
                    <div className='row'>
                        {data?.map((item) => {
                            return (
                                <div className='col-6 col-lg-3 d-flex' key={item._id}>
                                    <CardItem item={item} name="teams"/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Section>
    )
}
