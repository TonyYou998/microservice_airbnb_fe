import React, {useState} from 'react'
import 'font-awesome/css/font-awesome.min.css';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import Grid from "@mui/material/Grid";
import { Button } from 'bootstrap';
import { IconButton } from '@mui/material';

export default function AddBeds(){
    const [bedCount, setBedCount]=useState(0);
    const [errorMsg, setErrorMsg]=useState('');

    const handleRemoveBed=(e)=>{
        setErrorMsg('')

        setBedCount(bedCount - 1)

        if (bedCount < 1){
            setErrorMsg("The number of beds can't be a negative number.")
            setBedCount(0);
        }

        
    }

    const handleAddBed=(e)=>{
        setErrorMsg('')
        setBedCount(bedCount + 1)
    }
    return(
        <div className='add-beds-column'>
            <div className='add-beds-row'>
            
                <text className='add-beds-header' type='text'>Add Beds</text>
                <div>
                <IconButton className='remove-btn' onClick={handleRemoveBed}>
                    <RemoveCircleOutlineRoundedIcon/>
                </IconButton>
                <text className='add-beds-count' value={bedCount}>{bedCount}</text>
                <IconButton className='add-btn' onClick={handleAddBed}>
                    <AddCircleOutlineRoundedIcon/>
                </IconButton>    
                </div>           
            </div>
            {<div className='error-msg'>{errorMsg}</div>}
        </div>
    )
}