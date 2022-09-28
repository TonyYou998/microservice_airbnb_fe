import React, { useState } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import Grid from "@mui/material/Grid";
import { Button } from 'bootstrap';
import { IconButton } from '@mui/material';

export default function InputRoomType(props) {
  const { sendRoomTypeToParent } = props;

  const { valueData } = props;

  const handleOnChange = (e) => {
    sendRoomTypeToParent(e.target.value);
  }
  return (
    <div className='input-room-type'>
      <input type="text" placeholder="Room Type" value={valueData} required onChange={handleOnChange}></input>
    </div>
  )
}