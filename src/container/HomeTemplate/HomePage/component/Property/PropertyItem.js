import React from 'react'

export default function PropertyItem(props) {
  const{info}=props;
 
  return (
    <div className='item__container '>
        <img className='item__img' src={info&&info.images}/>
        <div className='item__content'>

            <h6 className='property__name'>{info&&info.propertyName}</h6>
            <p className='property__location'>{info&&info.address}</p>
            <p className='property__price'><span style={{fontWeight:"600"}}>{info&&info.price}$</span> /night</p>

        </div>
    </div>
  )
}
