import React from 'react'

export default function InputLastName(props) {
    const{sendLastNameToParent}=props;

    const{valueData}=props;

    const handleOnChange=(e)=>{
        sendLastNameToParent(e.target.value);
    }
    return (
            <div className="input-name">
                <input className='lastname' type="text" placeholder="Last Name" required value={valueData} onChange={handleOnChange}/>
            </div>
    )
}
