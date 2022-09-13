import React from 'react'

export default function InputSignUpPassword(props){
    const{sendPasswordToParent,valueData}=props;
    const handleOnChange=(e)=>{
        sendPasswordToParent(e.target.value);
    }
    return (
        <div className="input-password">
            <input className='signup-input-password' type="password" value={valueData} placeholder="Password" required 
            onChange={handleOnChange}></input>
        </div>
        )
    }