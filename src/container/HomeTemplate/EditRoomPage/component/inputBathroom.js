import React, {useState} from 'react'

export default function InputBathrooms(props) {

  const [errorMsg, setErrorMsg]=useState('');

  const{sendBathroomsToParent}=props;


  const{valueData}=props;
  

  const handleOnChange=(e)=>{
      sendBathroomsToParent(e.target.value);
      if (valueData < 0){
          setErrorMsg("Bathrooms can't be a negative number")
          
      }
      else {
          setErrorMsg('')
      }
  }
    return (
      <div className='input-bathrooms'>
              <input type="text" placeholder="Bathrooms" value={valueData}
                        onChange={handleOnChange} required />
      </div>
    )
}
