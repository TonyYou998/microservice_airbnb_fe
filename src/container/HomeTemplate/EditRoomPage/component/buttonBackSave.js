import React, { useState } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import Grid from "@mui/material/Grid";
import { Button } from 'bootstrap';
import { IconButton } from '@mui/material';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { NavLink, Redirect, useHistory } from "react-router-dom";

export default function ButtonBackSave() {
    const history = useHistory();

    return (
        <div className='edit-btn row p-3'>
            <div className='back-btn col-4 d-flex justify-content-start'>
                <NavLink to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <IconButton>
                        <ArrowBackIosNewRoundedIcon />
                        <text >Back</text>
                    </IconButton>
                </NavLink>
            </div>
            <button className='next-btn col-4 d-flex justify-content-end'>Done</button>
        </div>
    )
}