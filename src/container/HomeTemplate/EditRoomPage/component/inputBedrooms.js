import React, { useState } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import Grid from "@mui/material/Grid";
import { Button } from 'bootstrap';
import { IconButton } from '@mui/material';

export default function InputNumberOfBedrooms(props) {
    const [bedroomAdd, setBedroomAdd] = useState(0);
    const [errorMsg, setErrorMsg] = useState('');

    const { sendBedroomsToParent } = props;

    //const{valueData}=props;

    const handleDecreaseBedrooms = (e) => {
        setErrorMsg('')
        setBedroomAdd(bedroomAdd - 1)

        if (bedroomAdd < 1) {
            setErrorMsg("The number of bedrooms can't be a negative number.")
            setBedroomAdd(0);
        }

        if (bedroomAdd > 0) {
            sendBedroomsToParent(bedroomAdd - 1);
        }
    }

    const handleAddBedrooms = (e) => {
        setErrorMsg('')
        setBedroomAdd(bedroomAdd + 1)

        if (bedroomAdd > 0) {
            sendBedroomsToParent(bedroomAdd + 1);
        }
    }

    return (
        <div className='edit-bedroom'>
            <div className='edit-bedroom row p-3'>

                <text className='edit-bedroom-header col' type='text'>Number of Bedrooms</text>
                <div className='edit-bedroom-btns col-6 center-block text-center'>
                    <IconButton className='decrease-btn' onClick={handleDecreaseBedrooms}>
                        <RemoveCircleOutlineRoundedIcon />
                    </IconButton>
                    <text className='add-btn m-4 pb-5' value={bedroomAdd}>{bedroomAdd}</text>
                    <IconButton className='add-btn' onClick={handleAddBedrooms}>
                        <AddCircleOutlineRoundedIcon />
                    </IconButton>
                </div>
            </div>
            {<div className='error-msg'>{errorMsg}</div>}
        </div>
    )
}