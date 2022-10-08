import React, { useState } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import Grid from "@mui/material/Grid";
import { Button } from 'bootstrap';
import { IconButton } from '@mui/material';
export default function InputNumberOfBeds(props) {
  const { sendNumberOfBedsToParent } = props;

  const { valueData } = props;

  const handleOnChange = (e) => {
    sendNumberOfBedsToParent(e.target.value);
  }
  return (
    <div className='input-number-of-beds'>
      <input type="number" min="0" placeholder="Number Of Beds" value={valueData} required onChange={handleOnChange} ></input> 
    </div>
  )
}