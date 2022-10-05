import React, {useState} from 'react'
import 'font-awesome/css/font-awesome.min.css';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import Grid from "@mui/material/Grid";
import { Button } from 'bootstrap';
import { IconButton } from '@mui/material';

export default function AddBathroom(props){
    const [bathroomCount, setBathroomCount]=useState(0);
    const [errorMsg, setErrorMsg]=useState('');
    
    const{sendBathroomToParent}=props;


    //const{valueData}=props;

    const handleRemoveBathroom=(e)=>{
        setErrorMsg('')
        setBathroomCount(bathroomCount - 1)

        if (bathroomCount < 1){
            setErrorMsg("The number of bathrooms can't be a negative number.")
            setBathroomCount(0);
        }

        if(bathroomCount  > 0) {
            sendBathroomToParent(bathroomCount - 1);
        } 
        
        
    }

    const handleAddBathroom=(e)=>{
        setErrorMsg('')
        setBathroomCount(bathroomCount + 1)

        if(bathroomCount  > 0) {
            sendBathroomToParent(bathroomCount + 1);
        }
      
        
    }

  
    return(
        <div class='container'>
            <div className='add-bathroom' class='row'>
                <text className='add-bathroom-header col-sm-8 p-0' type='text' class=''>Add Bathrooms</text>
                <div className='col-sm-4 p-0'>
                <IconButton className='remove-btn' onClick={handleRemoveBathroom}>
                    <RemoveCircleOutlineRoundedIcon/>
                </IconButton>
                <text className='add-bathroom-count' value={bathroomCount}>{bathroomCount}</text>
                <IconButton className='add-btn' onClick={handleAddBathroom}>
                    <AddCircleOutlineRoundedIcon/>
                </IconButton>    
                </div>           
            {<div className='error-msg'>{errorMsg}</div>}
        </div>

        </div>
    )
}