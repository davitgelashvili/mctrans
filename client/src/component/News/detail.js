import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Section } from '../Common/Section';
import getApi from '../../http/getApi';
import styles from './styles.module.scss'

export const NewsDetail = () => {
    const {id} = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchBlog() {
            if (!id) return;
            try {
                const blog = await getApi.getData(`/blogs/${id}`);
                console.log(blog)
                setData({
                    title: {
                        en: blog?.title?.en || '',
                        ka: blog?.title?.ka || '',
                        ru: blog?.title?.ru || '',
                    },
                    desc: {
                        en: blog?.desc?.en || '',
                        ka: blog?.desc?.ka || '',
                        ru: blog?.desc?.ru || '',
                    },
                    cover: blog?.cover || '',
                });
            } catch (err) {
                console.error('ბლოგის ჩატვირთვა ვერ მოხერხდა', err);
            }
        }

        fetchBlog();
    }, [id]);

    return (
        <Section bigTitle={data?.title?.ka}>
            <figure className={`${styles['detail__cover']}`}>
                <img src={data?.cover} alt={data?.title?.ka} />
            </figure>
            <div dangerouslySetInnerHTML={{ __html: data?.desc?.ka}} className={`${styles['detail__desc']}`}>
            </div>

        </Section>
    )
}
