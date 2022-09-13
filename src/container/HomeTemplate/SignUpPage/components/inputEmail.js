import React from 'react'

export default function InputSingupEmail(props) {

    const{sendEmailToParent}=props;


    const{valueData}=props;
    

    const handleOnChange=(e)=>{
        sendEmailToParent(e.target.value);
    }

    return(
        <div className='input-email'>
            <input type ="email" placeholder="Email Address" className="input-email" value={valueData}
            onChange={handleOnChange}></input>
        </div>
    )
}