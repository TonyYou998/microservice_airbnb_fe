import React, {useState} from 'react'
import 'font-awesome/css/font-awesome.min.css';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import Grid from "@mui/material/Grid";
import { Button } from 'bootstrap';
import { IconButton } from '@mui/material';

export default function AddBedrooms(props){
    const [bedroomCount, setBedroomCount]=useState(0);
    const [errorMsg, setErrorMsg]=useState('');


    const{sendBadroomToParent}=props;

    const handleRemoveBedroom=(e)=>{
        setErrorMsg('')

        setBedroomCount(bedroomCount - 1)

        if (bedroomCount < 1){
            setErrorMsg("The number of guests can't be a negative number.")
            setBedroomCount(0);
        }

        if(bedroomCount  > 0) {
            sendBadroomToParent(bedroomCount + 1);
        }

        
    }

    const handleAddBedroom=(e)=>{
        setErrorMsg('')
        setBedroomCount(bedroomCount + 1)

        if(bedroomCount  > 0) {
            sendBadroomToParent(bedroomCount + 1);
        }
    }
    return(
        <div class="container">
            <div className='add-bedroom' class="row">

            <text className='add-bedroom-header col-sm-8 p-0' type='text'>Add Bedroom</text>
                <div className="col-sm-4 p-0">
                <IconButton className='remove-btn' onClick={handleRemoveBedroom}>
                    <RemoveCircleOutlineRoundedIcon/>
                </IconButton>
                <text className='add-bedroom-count' value={bedroomCount}>{bedroomCount}</text>
                <IconButton className='add-btn' onClick={handleAddBedroom}>
                    <AddCircleOutlineRoundedIcon/>
                </IconButton>
            </div>
        </div>
        </div>
    )
}