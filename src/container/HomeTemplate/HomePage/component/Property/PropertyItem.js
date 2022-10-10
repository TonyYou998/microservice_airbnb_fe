import React from 'react'

export default function PropertyItem() {
  return (
    <div className='item__container px-4 col-4'>
        <img className='item__img' src='https://a0.muscache.com/im/pictures/8e3c4402-e52b-4d98-9646-ab38f9af7e43.jpg?im_w=720'/>
        <div className='item__content'>

            <h6 className='property__name'>Sapa, Vietnam</h6>
            <p className='property__location'>Hoang Lien national park</p>
            <p className='property__price'><span style={{fontWeight:"600"}}>14$ </span>night</p>

        </div>
    </div>
  )
}
