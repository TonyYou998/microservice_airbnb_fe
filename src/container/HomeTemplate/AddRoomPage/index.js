import React, {useState} from 'react'
import Navbar from '../../../components/Navbar';
import { NavLink } from 'react-router-dom';
import {Redirect,useHistory} from "react-router-dom";
import AddGuests from './component/addGuests';
import AddBeds from './component/addBeds';
import AddBathroom from './component/addBathrooms';
import AddToilets from './component/addToilets';
import ButtonRow from './component/buttonRow';
import { Button } from 'bootstrap';


export default function AddRoomPage() {
  const history=useHistory();
  return (
    <div>
        <>
          <Navbar/>
        </>
        <div className='add-room-page-main'>
          <div className='ar-left'></div>

          <div className='ar-right'>
            <br className='ar-right-empty-box'></br>
            <text className='ar-header'>Add a room</text>
                
            <div className='ar-right-add-column'>
            <>
              <AddGuests/>
              <AddBeds/>
              <AddBathroom/>
              <AddToilets/>
              </>
            </div>

              <ButtonRow/>

          </div>
            
        </div>

    </div>
  
  )
}