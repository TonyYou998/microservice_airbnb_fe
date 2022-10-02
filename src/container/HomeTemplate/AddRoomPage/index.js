import React, {useState} from 'react'
import Navbar from '../../../components/Navbar';
import { NavLink } from 'react-router-dom';
import {Redirect,useHistory} from "react-router-dom";
import AddBedrooms from './component/addBedroom';
import AddBeds from './component/addBeds';
import AddBathroom from './component/addBathrooms';
import ButtonRow from './component/buttonRow';
import { Button } from 'bootstrap';
import AddPrice from './component/addPrice';
import { mainApi } from '../../../api';


export default function AddRoomPage() {
  const history=useHistory();
  const [beds, setBeds]=useState('');
  const [bedroom, setBedroom]=useState('');
  const [bathroom, setBathroom]=useState('');
  const [price, setPrice]=useState('');

  const ADD_ROOM_API_URL = '/create/create-a-room'

  const handleBedsChange=(e)=>{  
   
    setBeds(e.target.value);
  }

  const sendBedsDataToParent=(data)=>{
    setBeds(data);
    
  }

  const handleBedroomChange=(e)=>{  
   
    setBedroom(e.target.value);
  }

  const sendBedroomDataToParent=(data)=>{
    setBedroom(data);
    
   
  }

  const handleBathroomChange=(e)=>{  
   
    setBathroom(e.target.value);



  }

  const sendBathroomDataToParent=(data)=>{
    setBathroom(data);
  }

  

  const handlePriceChange=(e)=>{  
   
    setPrice(e.target.value);

  }

  const sendPriceDataToParent=(data)=>{
    setPrice(data);
    
  }
  
  const handleFormSubmit = () => {
    // api
    mainApi.post(ADD_ROOM_API_URL,{
      roomType: "null",
      pricePerNight:  price,
      bedRoomCount: bedroom,
      bathRoomCount: bathroom,
      bedCount: beds,
      status: "false"      
    })
  }

  return (
    <div>
   
        <div className='add-room-page-main'>
          <div className='ar-left'></div>

          <form className='ar-right' onSubmit={handleFormSubmit}>
            <br className='ar-right-empty-box'></br>
            <text className='ar-header'>Add a room</text>
                
            <div className='ar-right-add-column'>
            <>
              <AddBedrooms onChange={handleBedroomChange} valueData={bedroom} sendBadroomToParent={sendBedroomDataToParent}/>
              <AddBeds onChange={handleBedsChange} valueData={beds} sendBadsToParent={sendBedsDataToParent}/>
              <AddBathroom onChange={handleBathroomChange} valueData={bathroom} sendBathroomToParent={sendBathroomDataToParent}/>
              <AddPrice onChange={handlePriceChange} valueData={price} sendPriceToParent={sendPriceDataToParent}/>
              </>
            </div>
              <><ButtonRow/></>
              

             
            
          </form>
            
        </div>

    </div>
  
  )
}