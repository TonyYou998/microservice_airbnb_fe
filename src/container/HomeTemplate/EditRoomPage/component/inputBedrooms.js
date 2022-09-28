import React, {useState} from 'react'

export default function InputBedrooms(props) {

  const [errorMsg, setErrorMsg]=useState('');

  const{sendBedroomsToParent}=props;


  const{valueData}=props;
  

  const handleOnChange=(e)=>{
      sendBedroomsToParent(e.target.value);
      if (valueData < 0){
          setErrorMsg("Bedrooms can't be a negative number")
          
      }
      else {
          setErrorMsg('')
      }
  }
    return (
      <div className='input-bedrooms'>
              <input type="text" placeholder="Bedrooms" alue={valueData}
                        onChange={handleOnChange} required />
      </div>
    )
}
