import React, {useState} from 'react'

export default function InputRoomType(props) {
  const [errorMsg, setErrorMsg]=useState('');

  const{sendRoomTypeToParent}=props;


  const{valueData}=props;
  

  const handleOnChange=(e)=>{
    sendRoomTypeToParent(e.target.value);
      if (valueData < 0){
          setErrorMsg("RoomType can't be a negative number")
          
      }
      else {
          setErrorMsg('')
      }
  }
  return (
    <div className='input-room-type'>
            <input type="text" placeholder="Room Type" value={valueData}
                        onChange={handleOnChange} required />
    </div>
  )
}
