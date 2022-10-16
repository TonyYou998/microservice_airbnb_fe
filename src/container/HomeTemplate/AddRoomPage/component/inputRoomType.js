
import React, { useState } from 'react'
import 'font-awesome/css/font-awesome.min.css';

export default function InputRoomType(props) {
  const { sendRoomTypeToParent } = props;

  const { valueData } = props;

  const handleOnChange = (e) => {
    sendRoomTypeToParent(e.target.value);
  }
  return (
    <div class='container'>
      <div className='input-room-type' class='row'>
            <label class='col-sm-8 p-0'>Room Type</label>

            <select className='input-room-select col-sm-4 p-0' value={valueData} required onChange={handleOnChange}>
                <option value="0">Value 1</option>
                <option value="1">Value 2</option>
                <option value="2">Value 3</option>
            </select>

    </div>

    </div>
  )
}