import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import getApi from '../../http/getApi';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { CardItem } from '../CardItem';
import { Section } from '../Common/Section';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export const LoungeCars = () => {
    const [data, setData] = useState();
    const [params, setParams] = useState({
        page: 1,
        limit: 20
    });
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        async function fetchData() {
            try {
                const queryString = new URLSearchParams(params).toString();
                const blogs = await getApi.getData(`/cars?${queryString}`);
                setData(blogs.data); // თუ გაქვს pagination სტრუქტურა, დაარეგულირე
                setTotalPages(blogs.totalPages); // თუ გიგზავნის საერთო გვერდებს
            } catch (err) {
                console.error('Error fetching blogs:', err);
            }
        }

        fetchData();
    }, [params]);

    const settings = {
        infinite: true,
        dots: true,
        arrows: true,
        centerPadding: '60px',
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        rows: 2,
        centerPadding: '20px',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    rows: 1,
                }
            }
        ]
    };


    return (
        <Section smollTitle={'მანქანები'} background>
            <div className={`${styles['cars']}`}>
                <div className='container'>
                    {!data && <Loading />}
                    <Slider {...settings}>
                        {data?.map((item) => {
                            return (
                                <div  key={item._id} >
                                    <CardItem item={item} name="cars" className={styles.carditem} />
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </Section>
    )
}
