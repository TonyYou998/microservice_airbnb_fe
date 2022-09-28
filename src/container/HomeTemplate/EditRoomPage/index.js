import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import Navbar from '../../../components/Navbar';
import { mainApi } from '../../../api';
import ButtonBackSave from './component/buttonBackNext';
import InputBathrooms from './component/inputBathroom';
import InputBedrooms from './component/inputBedrooms';
import InputInfo from './component/inputInfo';
import InputNumberOfBeds from './component/inputNumberOfBeds';
import InputPricePerNight from './component/inputPricePerNight';
import InputRoomType from './component/inputRoomType';


export default function EditRoomPage() {
  const history = useHistory;
  const [info, setInfo]=useState('');
  const [bedrooms, setBedRooms]=useState('');
  const [bathrooms, setBathRoom]=useState('');
  const [beds, setBeds]=useState('');
  const [price, setPrice]=useState('');
  const [RoomType, setRoomType]=useState('');

  const EDIT_ROOM_API_URL = '/edit/edit-a-room'
  const ADD_ROOM_API_URL = '/create/create-a-room'

  const handleInfoChange=(e)=>{  
   
    setInfo(e.target.value);
  }

  const sendInfoDataToParent=(data)=>{
    setInfo(data);

    console.log(data)
  }

  const handleBedRoomsChange=(e)=>{  
   
    setBedRooms(e.target.value);
  }

  const sendBedRoomsDataToParent=(data)=>{
    setBedRooms(data);

    console.log(data)
  }

  const handleBathRoomsChange=(e)=>{  
   
    setBathRoom(e.target.value);
  }

  const sendBathRoomDataToParent=(data)=>{
    setBathRoom(data);

    console.log(data)
  }

  const handleNumberOfBedsChange=(e)=>{  
   
    setBeds(e.target.value);
  }

  const sendNumberOfBedsDataToParent=(data)=>{
    setBeds(data);

    console.log(data)
  }

  const handlePricePerNightChange=(e)=>{  
   
    setPrice(e.target.value);
  }

  const sendPricePerNightDataToParent=(data)=>{
    setPrice(data);

    console.log(data)
  }

  const handleRoomTypeChange=(e)=>{  
   
    setRoomType(e.target.value);
  }

  const sendRoomTypeDataToParent=(data)=>{
    setRoomType(data);

    console.log(data)
  }

  const handleFormSubmit = async(e) => {
    e.preventDefault();
    // api
     mainApi.put(EDIT_ROOM_API_URL ,{
      id : "74c7b502-53c9-4629-9436-fd2d8eb10a1b",
      roomType: RoomType,
      pricePerNight:  price,
      bedRoomCount: bedrooms,
      bathRoomCount: bathrooms,
      bedCount: beds,
      status: info      
    })
  }

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   // api
  //   mainApi.post(ADD_ROOM_API_URL,{
  //     roomType: "null",
  //     pricePerNight:  price,
  //     bedRoomCount: bedrooms,
  //     bathRoomCount: bathrooms,
  //     bedCount: beds,
  //     status: "false"      
  //   })
  // }

  return (
    <div>
      <>
        {/* <Navbar/> */}
      </>
      <div className='edit-room-page-main'>
        <div className='edr-left'></div>

        <form  className='edr-right' onSubmit={handleFormSubmit}>
          <br className='edr-right-empty-box'></br>
          <text className='edr-header'>Edit room</text>

          <div className='edr-right-input-column'>
            <InputRoomType onChange={handleRoomTypeChange} valueData={RoomType} sendRoomTypeToParent={sendRoomTypeDataToParent}/>
            <InputBedrooms onChange={handleBedRoomsChange} valueData={bedrooms} sendBedroomsToParent={sendBedRoomsDataToParent}/>
            <InputNumberOfBeds onChange={handleNumberOfBedsChange} valueData={beds} sendNumberOfBedsToParent={sendNumberOfBedsDataToParent}/>
            <InputBathrooms onChange={handleBathRoomsChange} valueData={bathrooms} sendBathroomsToParent={sendBathRoomDataToParent}/>
            <InputPricePerNight onChange={handlePricePerNightChange} valueData={price} sendPricePerNightToParent={sendPricePerNightDataToParent}/>
            <InputInfo onChange={handleInfoChange} valueData={info} sendInfoToParent={sendInfoDataToParent}/>
          </div>

          <ButtonBackSave/>

        </form >

      </div>



      

    </div>

  )
}
