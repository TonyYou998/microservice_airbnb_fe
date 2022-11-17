import React from 'react'

export default function PropertyItem(props) {
  const{info}=props;
  console.log(info);
  return (
    <div className='item__container '>
        <img className='item__img' src='https://a0.muscache.com/im/pictures/8e3c4402-e52b-4d98-9646-ab38f9af7e43.jpg?im_w=720'/>
        <div className='item__content'>

            <h6 className='property__name'>{info&&info.propertyName}</h6>
            <p className='property__location'>{info&&info.address}</p>
            <p className='property__price'><span style={{fontWeight:"600"}}>{info&&info.price}$</span> /night</p>

        </div>
    </div>
  )
}
