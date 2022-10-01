
import React, { useState } from 'react'
import 'font-awesome/css/font-awesome.min.css';

export default function InputRoomType(props) {
  const { sendRoomTypeToParent } = props;

  const { valueData } = props;

  const handleOnChange = (e) => {
    sendRoomTypeToParent(e.target.value);
  }
  return (
    <div className='input-room-type-column'>
            <div className='input-room-type-row'>
            <label >Room Type</label>

                <select value={valueData} required onChange={handleOnChange}>
                    <option value="0">Value 1</option>
                    <option value="1">Value 2</option>
                    <option value="2">Value 3</option>
                </select>
            </div>
    </div>
  )
}