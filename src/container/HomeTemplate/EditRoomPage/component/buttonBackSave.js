import React, {useState} from 'react'
import 'font-awesome/css/font-awesome.min.css';
import Grid from "@mui/material/Grid";
import { Button } from 'bootstrap';
import { IconButton } from '@mui/material';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import {NavLink, Redirect,useHistory} from "react-router-dom";

export default function ButtonBackSave(){
    const history=useHistory();

    return(
        <div className='btn-row'>
            <NavLink to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <IconButton>
                    <ArrowBackIosNewRoundedIcon/>
                    <text>Back</text>
                </IconButton>
            </NavLink>
                <button className='next-btn'>Save</button>
        </div>
    )
}