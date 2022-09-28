import React, { useState } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import Grid from "@mui/material/Grid";
import { Button } from 'bootstrap';
import { IconButton } from '@mui/material';
export default function InputBathrooms(props) {

  const { sendBathroomsToParent } = props;

  const { valueData } = props;

  const handleOnChange = (e) => {
    sendBathroomsToParent(e.target.value);
  }
  return (
    <div className='input-bathrooms'>
      <input type="number" min="0" placeholder="Bathrooms" required value={valueData} onChange={handleOnChange}></input> 
    </div>
  )
}