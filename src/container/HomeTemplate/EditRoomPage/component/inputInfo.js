
import React, {useState} from 'react'

export default function InputInfo(props) {

    const [errorMsg, setErrorMsg]=useState('');

    const{sendInfoToParent}=props;


    const{valueData}=props;
    

    const handleOnChange=(e)=>{
        sendInfoToParent(e.target.value);
        if (valueData < 0){
            setErrorMsg("Price can't be a negative number")
            
        }
        else {
            setErrorMsg('')
        }
    }

    return (
      <div className='input-information'>
              <input type="text" placeholder="Information" required value={valueData}
                        onChange={handleOnChange}/>
      </div>
    )
}
