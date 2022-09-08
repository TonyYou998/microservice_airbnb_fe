import React from "react";

export default function InputEmail(props){
    //boc tach phan tu

    const{sendEmailToParent}=props;


    const{valueData}=props;
    

    const handleOnChange=(e)=>{
        sendEmailToParent(e.target.value);
    }

    return(
        <div className='input-email'>
            <input type ="text" placeholder="Email Address" className="name" value={valueData}
            onChange={handleOnChange}></input>
        </div>
    )
}