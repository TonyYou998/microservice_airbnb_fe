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
        <div className='edit-input-room-status row p-3' >
            <label className='room-status-label col'>Room status</label>

            <select className='room-status-label col-6 align-self-center' value={valueData} required onChange={handleOnChange}>
                <option value="0">True</option>
                <option value="1">False</option>
            </select>
        </div>
    )
}