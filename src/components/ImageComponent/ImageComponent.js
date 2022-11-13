import React from 'react'

export default function ImageComponent(props) {
  const {img}=props;
  return (
    <div className='image__component'>
        <img src={img}/>
    </div>
  )
}
