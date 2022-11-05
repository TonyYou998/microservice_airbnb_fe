import { TextField } from '@mui/material'
import React from 'react'

export default function ClassifyOptionWithInput(props) {
    const {img,name}=props;
    return (
        <div className='option__container'>
            <div className='w-100'>
                <button className='d-flex option__btn btn '>
                    {/* <div className=''>
                        {name}
                    </div> */}
                    <TextField id="standard-basic"  label="Other" className='w-100 ' variant="standard" />
                </button>
            </div>
        </div>
    )
}
