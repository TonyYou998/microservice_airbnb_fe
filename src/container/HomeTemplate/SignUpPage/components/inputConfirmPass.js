import React from 'react'

export default function InputConfirmPass(props) {
    const{sendConfirmPasswordToParent}=props;

    const{valueData}=props;

    const handleOnChange=(e)=>{
        sendConfirmPasswordToParent(e.target.value);
    }
    return (
        <div className="input-confirmPassword">
            <input type="password" placeholder="Confirm Password" value={valueData} required onChange={handleOnChange} />
        </div>
    )
}
