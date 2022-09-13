import React from 'react'

export default function InputPhone(props) {
    const{sendPhoneToParent,valueData}=props;
    const handleOnChange=(e)=>{
        sendPhoneToParent(e.target.value);
    }
    return (
        <div className="input-phone">
            <input type='number' placeholder="Phone Number" value={valueData} required onChange={handleOnChange}/>
        </div>)
}
