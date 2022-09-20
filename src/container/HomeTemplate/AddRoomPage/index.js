import React, {useState} from 'react'
import Navbar from '../../../components/Navbar';
import { NavLink } from 'react-router-dom';
import {Redirect,useHistory} from "react-router-dom";
import AddGuests from './component/addGuests';

export default function AddRoomPage() {
  return (
    <div>
        <>
          <Navbar/>
        </>
        <div className='add-room-page-main'>
            <div className='ar-left'>
                
            </div>
            <div className='ar-right'>
                <text className='ar-header'>Add a room</text>
                
                <>
                    <AddGuests/>
                </>
            </div>
            
        </div>

    </div>
  
  )
}