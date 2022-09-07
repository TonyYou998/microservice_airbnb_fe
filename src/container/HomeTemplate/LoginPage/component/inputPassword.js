import React from "react";

export default function InputPassword(props){
    console.log(props);
    const{sendPasswordToParent}=props;
    console.log(sendPasswordToParent);

    const handleOnChange=(e)=>{
        sendPasswordToParent(e.target.value);
    }
    return(
        <div className='input-password'>
            <input type ="password" placeholder="Password" className="password input"
            onChange={handleOnChange}></input>
        </div>
    )
}