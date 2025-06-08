import React from 'react'
import styles from './styles.module.scss'
import Box from './Box'
import { CustomButton } from '../Common/CustomButton'
import { Section } from '../Common/Section'
import { Link } from 'react-router-dom'

export const RequestBox = () => {
    return (
        <Section>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <Box
                            color={'#E9F2FF'}
                            title={'ეძებ ახალ მანქანას ? '}
                            desc={'test'}
                            icon={'test'}
                        >
                            <CustomButton>
                                <Link to={'/test'} className={''}>
                                გაგზავნა
                                </Link>
                            </CustomButton>
                        </Box>
                    </div>
                    <div className='col-lg-6'>
                        <Box
                            color={'#FFE9F3'}
                            title={'გახდი ჩვენი დილერი'}
                            desc={'test'}
                            icon={'test'}
                        >
                            <CustomButton dark>
                                <Link to={'/test'} className={''}>
                                გაგზავნა
                                </Link>
                            </CustomButton>
                        </Box>
                    </div>
                </div>
            </div>
        </Section>
    )
}
