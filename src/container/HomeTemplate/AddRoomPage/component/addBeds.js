import React, {useState} from 'react'
import 'font-awesome/css/font-awesome.min.css';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import Grid from "@mui/material/Grid";
import { Button } from 'bootstrap';
import { IconButton } from '@mui/material';

export default function AddBeds(props){
    
    const [bedCount, setBedCount]=useState(0);
    const [errorMsg, setErrorMsg]=useState('');

    //setBedCount(0);

    const{sendBadsToParent}=props;

    const handleRemoveBed=(e)=>{
        setErrorMsg('')

        setBedCount(bedCount - 1);

        if (bedCount < 1){
            setErrorMsg("The number of beds can't be a negative number.")
            setBedCount(0);
        }

        if(bedCount  > 0) {
            sendBadsToParent(bedCount + 1);
        }

        
    }

    const handleAddBed=(e)=>{
        setErrorMsg('')
        setBedCount(bedCount + 1)

        if(bedCount  > 0) {
            sendBadsToParent(bedCount + 1);
        }
    }

 

    // const handleOnChange=(e)=>{
    //     sendBedsToParent(e.target.value);
    // }
    return(
        <div className='add-beds container'>
            
                <div class='row'>
                <text className='add-beds-header col-sm-8 p-0' type='text'>Add Beds</text>
                <div className='col-sm-4 p-0'>
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
