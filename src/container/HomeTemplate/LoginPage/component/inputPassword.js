import React from "react";

export default function InputPassword(props){
    
    const{sendPasswordToParent,valueData}=props;
   

    const handleOnChange=(e)=>{
        sendPasswordToParent(e.target.value);
    }
    return(
        <div className='input-password'>
            <input type ="password" placeholder="Password" value={valueData} className="password-input"
            onChange={handleOnChange}></input>
        </div>
    )
}