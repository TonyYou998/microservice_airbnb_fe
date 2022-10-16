import React from 'react'

export default function AttractiveComponentUp(props) {
    const{img, placeName}=props;

  return (
    <div className='modal__container__up modal__container' style={{  background: `url(${img})`}}>
        <div className='attractive__name px-4 py-3'>
            <h3>{placeName}</h3>
        </div>


    </div>
  )
}
