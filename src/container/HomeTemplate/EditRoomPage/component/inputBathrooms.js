
import React, { useState } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import Grid from "@mui/material/Grid";
import { Button } from 'bootstrap';
import { IconButton } from '@mui/material';

export default function InputNumberOfBathrooms(props) {
    const [bathroomAdd, setBathroomAdd] = useState(0);
    const [errorMsg, setErrorMsg] = useState('');

    const { sendBathroomsToParent } = props;

    const handleDecreaseBathrooms = (e) => {
        setErrorMsg('')
        setBathroomAdd(bathroomAdd - 1)

        if (bathroomAdd < 1) {
            setErrorMsg("The number of bathrooms can't be a negative number.")
            setBathroomAdd(0);
        }
        if (bathroomAdd > 0) {
            sendBathroomsToParent(bathroomAdd - 1);
        }
    }

    const handleAddBathrooms = (e) => {
        setErrorMsg('')
        setBathroomAdd(bathroomAdd + 1)

        if (bathroomAdd > 0) {
            sendBathroomsToParent(bathroomAdd + 1);
        }
    }

    return (
        <div className='edit-bathroom'>
            <div className='edit-bathroom row p-3'>

                <text className='edit-bathroom-header col' type='text'>Number of Bathrooms</text>
                <div className='edit-bathroom-btns col-6 center-block text-center'>
                    <IconButton className='decrease-btn' onClick={handleDecreaseBathrooms}>
                        <RemoveCircleOutlineRoundedIcon />
                    </IconButton>
                    <text className='add-btn m-4 pb-5' value={bathroomAdd}>{bathroomAdd}</text>
                    <IconButton className='add-btn' onClick={handleAddBathrooms}>
                        <AddCircleOutlineRoundedIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}