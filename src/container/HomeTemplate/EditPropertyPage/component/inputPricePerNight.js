import React, { useState } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import Grid from "@mui/material/Grid";

export default function InputPricePerNight(props) {
    const [errorMsg, setErrorMsg] = useState('');

    const { sendPricePerNightToParent } = props;


    const { valueData } = props;


    const handleOnChange = (e) => {
        sendPricePerNightToParent(e.target.value);

        if (valueData < 0) {
            setErrorMsg("Price can't be a negative number")

        }
        else {
            setErrorMsg('')
        }
    }

    return (
        <div className='edit-price row p-3'>
           
                <input type="number" min="0" className="input-price col" placeholder=' Price Per Night ($)' value={valueData}
                    onChange={handleOnChange}>
                </input>
          
            {<div className='error-msg'>{errorMsg}</div>}
        </div>
    )
}