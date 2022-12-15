import { Input } from "@mui/material";

import React, {useState} from 'react';



export default function InfoPage() {

  const [Night, setNight]=useState('');
  const handleNightChange=(e)=>{
    setNight(e.target.value);
  }
  if (Night<0){
    setNight(0);
  }
  if (Night>30){
    setNight(30);
  }
  const Price = 100; //price per night
    return (
        <div className="container">
          <div className="info_page">
          <p className="large_text text_color">Airbnb it.</p> 
          <p className="large_text">You could earn</p> 
          <p className="max_large_text"> {Price*Night}$ </p> 
          <p> <Input type="number" onChange={handleNightChange}></Input> </p>
          <p> {Night} night at an estimated {Price*Night} a night</p>
          <p>Learn how we estimate your earnings</p>
          </div> 
       </div>
    
    )
  }
  