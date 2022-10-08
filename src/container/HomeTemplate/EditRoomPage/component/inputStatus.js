import React, { useState } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import Grid from "@mui/material/Grid";
import { Button } from 'bootstrap';
import { IconButton } from '@mui/material';
export default function InputStatus(props) {
    const { sendStatusToParent } = props;

    const { valueData } = props;

    const handleOnChange = (e) => {
        sendStatusToParent(e.target.value);
    }
    return (
        <div className='input-status' >
            <label >Room status</label>

            <select value={valueData} required onChange={handleOnChange}>
                <option value="0">True</option>
                <option value="1">False</option>
            </select>
        </div>
    )
}