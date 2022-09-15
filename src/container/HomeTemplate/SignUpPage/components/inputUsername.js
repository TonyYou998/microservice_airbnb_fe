import React from 'react'

export default function InputUsername(props) {
    const{sendUsernameToParent}=props;

    const{valueData}=props;

    const handleOnChange=(e)=>{
        sendUsernameToParent(e.target.value);
    }
    return (
            <div className="input-username">
                <input className='username' type="text" placeholder="Username" required value={valueData} onChange={handleOnChange}/>
            </div>
    )
}
