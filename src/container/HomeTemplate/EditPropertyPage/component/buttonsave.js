import React, { useState } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import Grid from "@mui/material/Grid";
import { Button } from 'bootstrap';
import { IconButton } from '@mui/material';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { NavLink, Redirect, useHistory } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';




export default function ButtonSave(){
    return(
        <>
            <Row >
                <Col >
                <div>
                <NavLink to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <IconButton>
                        <ArrowBackIosNewRoundedIcon />
                        <text >Back</text>
                    </IconButton>
                </NavLink>
                </div>
                </Col>

        <Col ></Col>
        
           <Col >
           <IconButton >Done</IconButton>
           </Col>

            </Row>
           
        </>
    )
}