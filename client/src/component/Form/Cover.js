import React from 'react'

export const Cover = ({smallImage1,smallImage2, bigImage}) => {
  return (
    <div className='row'>
        <div className='col-6'>
            <figure>
                <img src={smallImage1} alt='cover' />
            </figure>
            <figure>
                <img src={smallImage2} alt='cover' />
            </figure>
        </div>
        <div className='col-6'>
            <figure>
                <img src={bigImage} alt='cover' />
            </figure>
        </div>
    </div>
  )
}
