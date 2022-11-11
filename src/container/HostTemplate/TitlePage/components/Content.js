import React from 'react'

export default function Content({title,fun}) {
    const handleOnChange=(e)=>{
        fun(e.target.value);
    }
    return (
        <div className='content__container'>
            <div>
                <h5 >{title}</h5>
                <p className='content__note'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <div className='textarea'>
                    <textarea rows={3} onChange={handleOnChange} >

                    </textarea>
                </div>

            </div>
        </div>
    )
}
