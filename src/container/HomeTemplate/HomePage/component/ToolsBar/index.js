import { Button } from 'bootstrap';
import React from 'react'
import DatePickerComponent from './DatePickerComponent';
import GuestComponent from './GuestComponent';

import InputComponent from './InputComponent';


export default function ToolsBar() {
  
  return (
    <div className='tools__bar d-flex justify-content-between px-4 mx-4'>
         <InputComponent/>
         <div className='d-flex  ' style={{marginRight:"100px"}}>
         
         <DatePickerComponent label={"check in"}/>
          <DatePickerComponent label={"check out"}/>
          <GuestComponent/>
         <button className='btn btn-primary tool__bar__btn'>search</button>
         </div>
        
    </div>
   
  )
}
