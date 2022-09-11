import React from 'react'

export default function InputName(props) {
    const{sendNameToParent}=props;

    const{valueData}=props;

    const handleOnChange=(e)=>{
        sendNameToParent(e.target.value);
    }
    return (
            <div className="input-name">
                <input type="text" placeholder="Name" required value={valueData}
        onChange={handleOnChange}/>
            </div>
    )
}
