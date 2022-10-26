import { Button } from '@mui/material'
import React from 'react'

export default function ClassifyOption(props) {
    const {img,name}=props;
    return (
        <div className='option__container my-2'>
            <div className='w-100'>
                <button className='d-flex option__btn btn '>
                    <div className='w-100'>
                        {name}
                    </div>
                    <div className='btn__img'>
                        <img src={img}></img>
                    </div>
                </button>
            </div>
        </div>
    )
}
