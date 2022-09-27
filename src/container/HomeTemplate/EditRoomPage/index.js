import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import Navbar from '../../../components/Navbar';
import ButtonBackSave from './component/buttonBackNext';
import InputBathrooms from './component/inputBathroom';
import InputBedrooms from './component/inputBedrooms';
import InputInfo from './component/inputInfo';
import InputNumberOfBeds from './component/inputNumberOfBeds';
import InputPricePerNight from './component/inputPricePerNight';
import InputRoomType from './component/inputRoomType';

export default function EditRoomPage() {
  const history = useHistory;

  return (
    <div>
      <>
        {/* <Navbar/> */}
      </>
      <div className='edit-room-page-main'>
        <div className='edr-left'></div>

        <div className='edr-right'>
          <br className='edr-right-empty-box'></br>
          <text className='edr-header'>Edit room</text>

          <div className='edr-right-input-column'>
            <InputRoomType/>
            <InputBedrooms/>
            <InputNumberOfBeds/>
            <InputBathrooms/>
            <InputPricePerNight/>
            <InputInfo/>
          </div>

          <ButtonBackSave/>

        </div>

      </div>

    </div>

  )
}
