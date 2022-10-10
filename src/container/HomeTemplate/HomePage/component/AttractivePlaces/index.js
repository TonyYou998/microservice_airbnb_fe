import React from 'react'
import AttractiveComponentDown from '../AttractiveComponentDown'
import AttractiveComponentUp from '../AttractiveComponentUp'

export default function AttractivePlace() {
  return (
    <div className='container attractive'>
        <div className='attractive__header py-3'>
            <h3>Most attractive places</h3>

        </div>
        <div className='row'>
            <div className='col-6 modal__item'>
            <AttractiveComponentUp img={"/img/danang.png"} placeName={"Danang"}/>
            </div>
            <div className='col-6 modal__item'>
            <AttractiveComponentUp img={"/img/hue.png"} placeName={"Hue"}/>
            </div>
        </div>
        <div className='row pt-4'>
            <div className='col-4'>
               <AttractiveComponentDown img={"/img/hoian.jpg"} placeName={"Hoi An"}/>
            </div>
            <div className='col-4'>
                <AttractiveComponentDown img={"/img/hanoi.jpg"} placeName={"Hanoi"}/>
            </div>
            <div className='col-4'>
                <AttractiveComponentDown img={"/img/hcm.jpg"} placeName={"Ho Chi Minh City"}/>
            </div>
        </div>
       
           
    </div>
  )
}
