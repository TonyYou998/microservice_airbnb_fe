import React, {useState} from 'react'
import 'font-awesome/css/font-awesome.min.css';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import Grid from "@mui/material/Grid";
import { Button } from 'bootstrap';
import { IconButton } from '@mui/material';

export default function AddPrice(props){
    const [errorMsg, setErrorMsg]=useState('');

    const{sendPriceToParent}=props;


    const{valueData}=props;
    

    const handleOnChange=(e)=>{
        sendPriceToParent(e.target.value);
       
        if (valueData < 0){
            setErrorMsg("Price can't be a negative number")
            
        }
        else {
            setErrorMsg('')
        }
    }

    return(
        <div className='add-price container'>
            
            <div className='row'>
            <text className='add-price-header col-sm-8 p-0' type='text'>Price Per Night($)</text>
                <div className='input-price col-sm-3 p-0'>
                    <input type ="number" className="price-input" value={valueData} min='0'
                        onChange={handleOnChange}></input>
                    </div>
                </div>
        </div>
    )
}