import React, {useState} from 'react'
export default function InputPricePerNight(props) {
  const [errorMsg, setErrorMsg]=useState('');

  const{sendPricePerNightToParent}=props;


  const{valueData}=props;
  

  const handleOnChange=(e)=>{
      sendPricePerNightToParent(e.target.value);
      if (valueData < 0){
          setErrorMsg("PricePerNight can't be a negative number")
          
      }
      else {
          setErrorMsg('')
      }
  }
    return (
      <div className='input-price-per-night'>
              <input type="text" placeholder="Price per night" value={valueData}
                        onChange={handleOnChange} required />
      </div>
    )
}
