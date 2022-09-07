import React, {useState} from "react";

export default function InputEmail(props){
    //boc tach phan tu
    console.log(props);
    const{sendEmailToParent}=props;
    console.log(sendEmailToParent);

    const handleOnChange=(e)=>{
        sendEmailToParent(e.target.value);
    }

    return(
        <div className='input-email'>
            <input type ="text" placeholder="Email Address" className="name"
            onChange={handleOnChange}></input>
        </div>
    )
}