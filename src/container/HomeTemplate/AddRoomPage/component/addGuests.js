import React, {useState} from 'react'
import 'font-awesome/css/font-awesome.min.css';

export default function AddGuests(){
    return(
        <div>
            <text className='add-guests-header' type='text'>Add Guests</text>
            <i class="fa-solid fa-circle-minus"></i>
            <i class="fa-solid fa-circle-plus"></i>
            
        </div>
    )
}