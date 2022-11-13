import React from 'react'
import StartComponent from './components/StartComponent'
import VideoComponent from './components/VideoComponent'

export default function BecomeAHostPage() {
    return (
       
        <div className='d-flex container__background '>
            <div className='col-5'>
                <VideoComponent/>
            </div>
            <div className='col-7 start__component'>
                <StartComponent/>
            </div>
        </div>



    )
}
