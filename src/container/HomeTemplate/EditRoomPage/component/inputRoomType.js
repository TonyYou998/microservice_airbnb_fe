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
    <div className='edit-input-room-type row p-3'>
            <label className='room-type-label col'>Room Type</label>

            <select className='room-type-select col-6 center-block text-center align-self-center' value={valueData} required onChange={handleOnChange}>
                <option value="0">Value 1</option>
                <option value="1">Value 2</option>
                <option value="2">Value 3</option>
            </select>
    </div>
  )
}