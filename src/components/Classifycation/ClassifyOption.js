import { Button } from '@mui/material'
import { actAddCategory } from 'container/HostTemplate/modules/actions';
import React from 'react'
import { useDispatch } from 'react-redux';

export default function ClassifyOption(props) {
    const {img,name,value,fun}=props;
   
  
    return (
        <div className='option__container my-2'>
            <div className='w-100'>
                <button className='d-flex option__btn btn ' onClick={()=>fun(value)}>
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
