import React from 'react'
import { Section } from '../Common/Section'

export const Result = ({ item }) => {
    return (
        <Section smollTitle={`vin: ${item?.vin}`}>
            <div className='container'>
                <div className='row'>
                    <div className='col-8'>
                        <div className=''>
                            {item?.PhotoList?.map((img)=>{
                                return (
                                    <div key={img}>
                                         <img src={img} alt='img' />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='col-8'>
                        <div className=''>
                            <h2>vehicle information</h2>
                            <ul>
                                <li>vin: ${item?.vin}</li>
                                <li>name: ${item?.ContainerEntryDate}</li>
                                <li>name: ${item?.ContainerOpenDate}</li>
                                <li>name: ${item?.ContainerNumber}</li>
                                <li>name: ${item?.ContainerLine}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </Section>
    )
}
