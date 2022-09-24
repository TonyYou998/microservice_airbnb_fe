import React, {useState} from 'react'
import 'font-awesome/css/font-awesome.min.css';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import Grid from "@mui/material/Grid";
import { Button } from 'bootstrap';
import { IconButton } from '@mui/material';

export default function AddBeds(props){
    
    const [bedCount, setBedCount]=useState({bed: 0});
    const [errorMsg, setErrorMsg]=useState('');

    setBedCount(0);

    const handleRemoveBed=(e)=>{
        setErrorMsg('')

        setBedCount(bed - 1);

        if (bed < 1){
            setErrorMsg("The number of beds can't be a negative number.")
            setBedCount({bed: 0});
        }

        
    }

    const handleAddBed=(e)=>{
        setErrorMsg('')
        setBedCount(bed + 1)
    }

    const{sendBedsToParent}=props;

    const{bed}=props;

    const handleOnChange=(e)=>{
        sendBedsToParent(e.target.value);
    }
    return(
        <div className='add-beds-column'>
            <div className='add-beds-row'>
            
                <text className='add-beds-header' type='text'>Add Beds</text>
                <div>
                <IconButton className='remove-btn' onClick={handleRemoveBed}>
                    <RemoveCircleOutlineRoundedIcon/>
                </IconButton>
                <text className='add-beds-count' value={bed}
                        onChange={handleOnChange}>{bed}</text>
                <IconButton className='add-btn' onClick={handleAddBed}>
                    <AddCircleOutlineRoundedIcon/>
                </IconButton>    
                </div>           
            </div>
            {<div className='error-msg'>{errorMsg}</div>}
        </div>
    )
}
