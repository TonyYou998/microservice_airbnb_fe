import React from 'react'

export default function InputFirstName(props) {
    const { sendFirstNameToParent } = props;

    const { valueData } = props;

    const handleOnChange = (e) => {
        sendFirstNameToParent(e.target.value);
    }
    return (
        <div className="input-first-name">
            <input type="text" placeholder="First Name" required value={valueData}
                onChange={handleOnChange} />
        </div>
    )
}
