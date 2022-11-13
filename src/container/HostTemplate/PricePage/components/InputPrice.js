import React from 'react'
import { useState } from 'react';
import CurrencyInput from 'react-currency-input-field';

export default function InputPrice({fun}) {

    const handelOnChange=(e)=>{
        fun(e.target.value);
    }


    return (

        <div className='price__wrapper container'>
            <div className='price__container'>
            <CurrencyInput
             className='input__price'
                id="input-example"
                name="input-name"
                placeholder="$0"
                onChange={handelOnChange}
                decimalsLimit={2}
              
            />
            
        </div>
        <p className='text-center my-2 price__label'>Per night</p>    
        <p className='price__note'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration </p>
        </div>
        
        
    )
}
