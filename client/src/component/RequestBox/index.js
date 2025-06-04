import React from 'react'
import styles from './styles.module.scss'
import Box from './Box'
import { CustomButton } from '../Common/CustomButton'
import { Section } from '../Common/Section'

export const RequestBox = () => {
    return (
        <Section>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <Box
                            color={'#E9F2FF'}
                            title={'ეძებ ახალ მანქანას ? '}
                            desc={'test'}
                            icon={'test'}
                        >
                            <CustomButton>
                                <p>გაგზავნა</p>
                            </CustomButton>
                        </Box>
                    </div>
                    <div className='col-6'>
                        <Box
                            color={'#FFE9F3'}
                            title={'გახდი ჩვენი დილერი'}
                            desc={'test'}
                            icon={'test'}
                        >
                            <CustomButton dark>
                                <p className={styles.dark}>გაგზავნა</p>
                            </CustomButton>
                        </Box>
                    </div>
                </div>
            </div>
        </Section>
    )
}
