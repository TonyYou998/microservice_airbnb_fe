import React, { useState } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import Grid from "@mui/material/Grid";
import { Button } from 'bootstrap';
import { IconButton } from '@mui/material';
export default function InputNumberOfBedrooms(props) {

  const { sendBedroomsToParent } = props;

  const { valueData } = props;

  const handleOnChange = (e) => {
    sendBedroomsToParent(e.target.value);
  }
  return (
    <div className='input-bedrooms'>
      <input type="number" min="0" placeholder="Number Of Bedrooms" value={valueData} required onChange={handleOnChange}></input> 
    </div>
  )
}