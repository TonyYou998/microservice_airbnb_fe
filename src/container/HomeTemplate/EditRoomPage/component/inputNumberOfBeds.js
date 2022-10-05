import React, { useState } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import Grid from "@mui/material/Grid";
import { Button } from 'bootstrap';
import { IconButton } from '@mui/material';

export default function InputNumberOfBeds(props) {
    const [bedAdd, setBedAdd] = useState(0);
    const [errorMsg, setErrorMsg] = useState('');

    const { sendBedsToParent } = props;

    //const{valueData}=props;

    const handleDecreaseBeds = (e) => {
        setErrorMsg('')
        setBedAdd(bedAdd - 1)

        if (bedAdd < 1) {
            setErrorMsg("The number of beds can't be a negative number.")
            setBedAdd(0);
        }

        if (bedAdd > 0) {
            sendBedsToParent(bedAdd - 1);
        }
    }

    const handleAddBeds = (e) => {
        setErrorMsg('')
        setBedAdd(bedAdd + 1)

        if (bedAdd > 0) {
            sendBedsToParent(bedAdd + 1);
        }
    }

    return (
        <div className='edit-bed'>
            <div className='edit-bed row p-3'>

                <text className='edit-bed-header col' type='text'>Number of Beds</text>
                <div className='edit-bed-btns col-6 center-block text-center' >
                    <IconButton className='decrease-btn' onClick={handleDecreaseBeds}>
                        <RemoveCircleOutlineRoundedIcon />
                    </IconButton>
                    <text className='add-btn m-4 pb-5' value={bedAdd}>{bedAdd}</text>
                    <IconButton className='add-btn' onClick={handleAddBeds}>
                        <AddCircleOutlineRoundedIcon />
                    </IconButton>
                </div>
            </div>
            {<div className='error-msg'>{errorMsg}</div>}
        </div>
    )
}