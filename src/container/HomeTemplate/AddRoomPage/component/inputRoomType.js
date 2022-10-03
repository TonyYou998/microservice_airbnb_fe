
import React, { useState } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";


export default function InputRoomType(props) {
  const { sendRoomTypeToParent } = props;

  const { valueData } = props;

  const handleOnChange = (e) => {
    sendRoomTypeToParent(e.target.value);
  }
  return (
    <div className='input-room-type'>
            

            <Grid
            container spacing={9}
            direction="row"
            justifyContent="center"
            alignItems="center">
            <Grid item>
            <label >Room Type</label>
            </Grid>

            <Grid item>
            <select value={valueData} required onChange={handleOnChange}>
              <option value="0">Value 1</option>
              <option value="1">Value 2</option>
              <option value="2">Value 3</option>
            </select>
            </Grid>
            </Grid>
    </div>
    
  )
}