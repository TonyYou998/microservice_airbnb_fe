import React from 'react'

export default function InputAddress(props) {
    const{sendAddressToParent}=props;

    const{valueData}=props;

    const handleOnChange=(e)=>{
        sendAddressToParent(e.target.value);
    }
    return (
        <div className="input-address">
            <input type="text" placeholder="Address" value={valueData} required onChange={handleOnChange} />
        </div>)
}
