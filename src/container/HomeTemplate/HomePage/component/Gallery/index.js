import React from 'react'
import Slider from 'react-slick';

export default function Gallery() {
    const settings = {
    
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:1000,
        rows: 1,
        dot:true,
        dotClass: 'slick-dots'
      };
  return (
    <div className=''>
        <h3 className='container'>Feed back</h3>
        <Slider className='container gallary__content'>
            <div>dads</div>
            <div>dads</div>
            <div>dads</div>
            <div>dads</div>
            <div>dads</div>
            <div>dads</div>
            <div>dads</div>
        </Slider>
    </div>
  )
}
