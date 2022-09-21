import React, {useState} from 'react'
import 'font-awesome/css/font-awesome.min.css';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import Grid from "@mui/material/Grid";
import { Button } from 'bootstrap';
import { IconButton } from '@mui/material';

export default function AddToilets(){
    const [toiletCount, setToiletCount]=useState(0);
    const [errorMsg, setErrorMsg]=useState('');

    const handleRemoveToilet=(e)=>{
        setErrorMsg('')

        setToiletCount(toiletCount - 1)

        if (toiletCount < 1){
            setErrorMsg("The number of toilets can't be a negative number.")
            setToiletCount(0);
        }

        
    }

    const handleAddToilet=(e)=>{
        setErrorMsg('')
        setToiletCount(toiletCount + 1)
    }
    return(
        <div className='add-toilet-column'>
            <div className='add-toilet-row'>
            
                <text className='add-toilet-header' type='text'>Add Toilets</text>
                <div>
                <IconButton className='remove-btn' onClick={handleRemoveToilet}>
                    <RemoveCircleOutlineRoundedIcon/>
                </IconButton>
                <text className='add-toilet-count' value={toiletCount}>{toiletCount}</text>
                <IconButton className='add-btn' onClick={handleAddToilet}>
                    <AddCircleOutlineRoundedIcon/>
                </IconButton>
                </div>           
            </div>
            {<div className='error-msg'>{errorMsg}</div>}
        </div>
    )
}