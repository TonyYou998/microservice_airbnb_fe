import React from "react";

export default function InputUsername(props){
    //boc tach phan tu

    const{sendUsernameToParent}=props;


    const{valueData}=props;
    

    const handleOnChange=(e)=>{
        sendUsernameToParent(e.target.value);
    }

    return(
        <div className='input-username'>
            <input type ="text" placeholder="Email Address" className="username-input" value={valueData}
            onChange={handleOnChange}></input>
        </div>
    )
}