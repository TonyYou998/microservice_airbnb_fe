import React from 'react'

export default function InputSingupEmail(props) {

    const{sendEmailToParent}=props;


    const{valueData}=props;
    

    const handleOnChange=(e)=>{
        sendEmailToParent(e.target.value);
    }

    return(
        <div className='input-email'>
            <input type ="text" placeholder="Email Address" value={valueData}
            onChange={handleOnChange}></input>
        </div>
    )
}