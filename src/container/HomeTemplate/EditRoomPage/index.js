import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import Navbar from '../../../components/Navbar';
import ButtonBackSave from './component/buttonBackSave';
import InputNumberOfBathrooms from './component/inputBathroom';
import InputNumberOfBedrooms from './component/inputBedrooms';
import InputStatus from './component/inputStatus';
import InputNumberOfBeds from './component/inputNumberOfBeds';
import InputPricePerNight from './component/inputPricePerNight';
import InputRoomType from './component/inputRoomType';

export default function EditRoomPage() {
  const history = useHistory();
  const [status, setStatus] = useState('');
  const [roomtype, setRoomtype] = useState('');
  const [beds, setBeds] = useState('');
  const [bedroom, setBedroom] = useState('');
  const [bathroom, setBathroom] = useState('');
  const [price, setPrice] = useState('');


  const handleRoomTypeChange = (e) => {

    setRoomtype(e.target.value);
  }

  const sendRoomTypeDataToParent = (data) => {
    setRoomtype(data);

  }

  const handleStatusChange = (e) => {

    setStatus(e.target.value);
  }

  const sendStatusDataToParent = (data) => {
    setStatus(data);

  }

  const handleNumberOfBedsChange = (e) => {

    setBeds(e.target.value);
  }

  const sendNumberOfBedsDataToParent = (data) => {
    setBeds(data);

  }

  const handleBedroomsChange = (e) => {

    setBedroom(e.target.value);
  }

  const sendBedroomsDataToParent = (data) => {
    setBedroom(data);
  }

  const handleBathroomsChange = (e) => {
    setBathroom(e.target.value);
  }

  const sendBathroomsDataToParent = (data) => {
    setBathroom(data);
  }



  const handlePricePerNightChange = (e) => {

    setPrice(e.target.value);

  }

  const sendPricePerNightDataToParent = (data) => {
    setPrice(data);

  }

  const handleFormSubmit = () => {
    // api
  
  }


  return (
    <div>
      <>
        {/* <Navbar/> */}
      </>
      <div className='edit-room-page-main'>
        <div className='edr-left'></div>

        <form className='edr-right' onSubmit={handleFormSubmit}>
          <br className='edr-right-empty-box'></br>
          <text className='edr-header'>Edit room</text>

          <div className='edr-right-input-column'>
            <InputRoomType onChange={handleRoomTypeChange} valueData={roomtype} sendRoomTypeToParent={sendRoomTypeDataToParent} />
            <InputNumberOfBedrooms onChange={handleBedroomsChange} valueData={bedroom} sendBedroomsToParent={sendBedroomsDataToParent} />
            <InputNumberOfBeds onChange={handleNumberOfBedsChange} valueData={beds} sendNumberOfBedsToParent={sendNumberOfBedsDataToParent} />
            <InputNumberOfBathrooms onChange={handleBathroomsChange} valueData={bathroom} sendBathroomsToParent={sendBathroomsDataToParent} />
            <InputPricePerNight onChange={handlePricePerNightChange} valueData={price} sendPricePerNightToParent={sendPricePerNightDataToParent} />
            <InputStatus onChange={handleStatusChange} valueData={status} sendStatusToParent={sendStatusDataToParent} />
          </div>

          <ButtonBackSave />

        </form>

      </div>

    </div>

  )
}