import React, {useState} from 'react'
import 'font-awesome/css/font-awesome.min.css';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import Grid from "@mui/material/Grid";
import { Button } from 'bootstrap';
import { IconButton } from '@mui/material';

export default function AddBathroom(){
    const [bathroomCount, setBathroomCount]=useState(0);
    const [errorMsg, setErrorMsg]=useState('');
    
    const handleRemoveBathroom=(e)=>{
        setErrorMsg('')

        setBathroomCount(bathroomCount - 1)

        if (bathroomCount < 1){
            setErrorMsg("The number of bathrooms can't be a negative number.")
            setBathroomCount(0);
        }

        
    }

    const handleAddBathroom=(e)=>{
        setErrorMsg('')
        setBathroomCount(bathroomCount + 1)
    }
    return(
        <div className='add-bathroom-column'>
            <div className='add-bathroom-row'>
            
                <text className='add-bathroom-header' type='text'>Add Bathrooms</text>
                <div>
                <IconButton className='remove-btn' onClick={handleRemoveBathroom}>
                    <RemoveCircleOutlineRoundedIcon/>
                </IconButton>
                <text className='add-bathroom-count' value={bathroomCount}>{bathroomCount}</text>
                <IconButton className='add-btn' onClick={handleAddBathroom}>
                    <AddCircleOutlineRoundedIcon/>
                </IconButton>    
                </div>           
            </div>
            {<div className='error-msg'>{errorMsg}</div>}
        </div>
    )
}