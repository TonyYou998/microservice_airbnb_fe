import React, {useState} from 'react'
import 'font-awesome/css/font-awesome.min.css';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import Grid from "@mui/material/Grid";
import { Button } from 'bootstrap';
import { IconButton } from '@mui/material';

export default function AddGuests(){
    const [guestCount, setGuestCount]=useState(0);
    const [errorMsg, setErrorMsg]=useState('');

    var i = 1;

    const handleRemoveGuest=(e)=>{
        setErrorMsg('')

        setGuestCount(guestCount - 1)

        if (guestCount < 1){
            setErrorMsg("The number of guests can't be a negative number.")
            setGuestCount(0);
        }

        
    }

    const handleAddGuest=(e)=>{
        setErrorMsg('')
        setGuestCount(guestCount + 1)
    }
    return(
        <div className='add-guests-column'>
            <div className='add-guests-row'>
            
                <text className='add-guests-header' type='text'>Add Guests</text>
                <div>
                <IconButton className='remove-btn' onClick={handleRemoveGuest}>
                    <RemoveCircleOutlineRoundedIcon/>
                </IconButton>
                <text className='add-guests-count' value={guestCount}>{guestCount}</text>
                <IconButton className='add-btn' onClick={handleAddGuest}>
                    <AddCircleOutlineRoundedIcon/>
                </IconButton>
                </div>           
            </div>
            {<div className='error-msg'>{errorMsg}</div>}
        </div>
    )
}