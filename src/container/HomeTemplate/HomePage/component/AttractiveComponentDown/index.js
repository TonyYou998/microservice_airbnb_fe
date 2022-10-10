import React from 'react'

export default function AttractiveComponentDown(props) {
    const {img,placeName}=props;

  return (
    <div className='modal__container_down modal__container' style={{ background: `url(${img}) no-repeat center center`}}>
        <div className='attractive__name px-4 py-3'>
            <h3>{placeName}</h3>
        </div>
    </div>
  )
}
