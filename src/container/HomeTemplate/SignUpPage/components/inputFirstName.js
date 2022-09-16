import React from 'react'

export default function InputFirstName(props) {
    const{sendFirstNameToParent}=props;

    const{valueData}=props;

    const handleOnChange=(e)=>{
        sendFirstNameToParent(e.target.value);
    }
    return (
            <div className="input-name">
                <input className='firstname' type="text" placeholder="First Name" required value={valueData} onChange={handleOnChange}/>
            </div>
    )
}
