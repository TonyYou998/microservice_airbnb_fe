import React, {useState} from 'react'

export default function InputNumberOfBeds(props) {

  const [errorMsg, setErrorMsg]=useState('');

  const{sendNumberOfBedsToParent}=props;


  const{valueData}=props;
  

  const handleOnChange=(e)=>{
      sendNumberOfBedsToParent(e.target.value);
      if (valueData < 0){
          setErrorMsg("NumberOfBeds can't be a negative number")
          
      }
      else {
          setErrorMsg('')
      }
  }
    return (
      <div className='input-number-of-beds'>
              <input type="text" placeholder="Number of beds" value={valueData}
                        onChange={handleOnChange} required />
      </div>
    )
}
