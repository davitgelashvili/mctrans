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
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

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
            className="btn btn-outline-primary me-2 rounded-circle shadow-sm"
            onClick={onClick}
            style={{
                position: "absolute", left: -30, top: "50%", zIndex: 1, borderRadius: "50%", display: "flex",
                justifyContent: "center", alignItems: "center", cursor: "pointer", background: "#ddd", color: "#333",
                transition: "background-color 0.3s ease", border: "none"
            }}
        >
            <MdKeyboardArrowLeft />
        </button>
    );

    const NextArrow = ({ onClick }) => (
        <button
            className=""
            onClick={onClick}
            style={{
                position: "absolute", right: -30, top: "50%", zIndex: 1, borderRadius: "100%", display: "flex",
                justifyContent: "center", alignItems: "center", cursor: "pointer", background: "#ddd", color: "#333",
                transition: "background-color 0.3s ease", border: "none"
            }}
        >
            <MdKeyboardArrowRight />
        </button>
    );

    const settings = {
        infinite: true,
        arrows: true,
        centerPadding: '60px',
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
                    slidesToShow: 2,
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
                                <div className="p-1">
                                    <div className='bg-light p-2 border rounded' style={{ textAlign: "center" }} key={item._id}>
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
