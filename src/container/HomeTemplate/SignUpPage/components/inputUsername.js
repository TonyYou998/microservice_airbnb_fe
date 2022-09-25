import React from 'react'

export default function InputUsername(props) {
    const { sendUserNameToParent } = props;

    const { valueData } = props;

    const handleOnChange = (e) => {
        sendUserNameToParent(e.target.value);
    }
    return (
        <div className="input-user-name">
            <input type="text" placeholder="Username" required value={valueData}
                onChange={handleOnChange} />
        </div>
    )
}
