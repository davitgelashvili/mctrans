import React from 'react'
import styles from './styles.module.scss'
import Box from './Box'
import { CustomButton } from '../Common/CustomButton'
import { Section } from '../Common/Section'
import { Link } from 'react-router-dom'
import electricCar from "../../assets/icons/electric-car.svg.svg"
import electricCar2 from "../../assets/icons/electric-car2.svg"
import kutxis2 from "../../assets/icons/kutxis2.svg"

export const RequestBox = () => {
    return (
        <Section>
            <div className='row'>
                <div className={`col-12 col-lg-6 ${styles.formobile}`}>
                    <Box
                        color={'#E9F2FF'}
                        title={'ეძებ ახალ მანქანას ? '}
                        desc={'ჩვენ მოწადინებულნი ვართ ჩვენს მომხმარებლებს უზრუნველვყოთ გამორჩეული მომსახურება'}
                        icon={electricCar}
                    >
                        <CustomButton>
                            <Link to={'/test'} className={''}>
                                მოთხოვნის გაგზავნა <img src={kutxis2} alt='kutxis2' style={{
                                    position: "absolute", display: "inline-flex",
                                    marginLeft: 5, width: 13, height: 13, marginTop: 3
                                }} />
                            </Link>
                        </CustomButton>
                    </Box>
                </div>
                <div className={`col-12 col-lg-6 ${styles.formobile2}`}>
                    <Box
                        color={'#FFE9F3'}
                        title={'გახდი ჩვენი დილერი'}
                        desc={'გახდი ჩვენი მანქანების ოფიციალური დილერი დარჩი კმაყოფილი ჩვენი სერვისით !'}
                        icon={electricCar2}

                    >
                        <CustomButton dark>
                            <Link to={'/test'} className={''} >
                                მოთხოვნის გაგზავნა <img src={kutxis2} alt='kutxis2' style={{
                                    position: "absolute", display: "inline-flex",
                                    marginLeft: 5, width: 13, height: 13, marginTop: 3, color: "white"
                                }} />
                            </Link>
                        </CustomButton>
                    </Box>
                </div>
            </div>
        </Section>
    )
}
