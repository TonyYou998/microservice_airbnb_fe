import React, { useState } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import Grid from "@mui/material/Grid";
import { Button } from 'bootstrap';
import { IconButton } from '@mui/material';

export default function InputPricePerNight(props) {
  const { sendPricePerNightToParent } = props;

  const { valueData } = props;

  const handleOnChange = (e) => {
    sendPricePerNightToParent(e.target.value);
  }
  return (
    <div className='input-price-per-night'>
      <input type="text" min="0" placeholder='Price Per Night' class="text-currency" required value={valueData} 
      onChange={handleOnChange}></input>
      <span class="currency-code">$</span>
    </div>
  )
}