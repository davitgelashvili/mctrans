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
import rightarrow from "../../assets/icons/rightarrow.svg"
import leftarrow from "../../assets/icons/leftarrow.svg"

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

    const PrevArrow = ({ onClick }) => (
        <button
            className={`btn btn-outline-primary me-2 rounded-circle shadow-sm ${styles.leftbutton}`}
            onClick={onClick}
        >
            <img src={leftarrow} />
        </button>
    );

    const NextArrow = ({ onClick }) => (
        <button
            className={styles.rightbutton}
            onClick={onClick}
        >
            <img src={rightarrow} />
        </button>
    );

    const settings = {
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        rows: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                }
            }
        ]
    };

    return (
        <Section smollTitle={'გაყიდვების გუნდი'} background>
            <div className={`${styles['salesmanager']}`}>
                {!data && <Loading />}
                <div className='row'>
                    <Slider {...settings}>
                        {data?.map((item) => {
                            return (
                                <div className="p-1" key={item._id}>
                                    <div className='bg-light p-2 border rounded' style={{ textAlign: "center" }}>
                                        <CardItem item={item} name="teams" />
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </Section>
    )
}
