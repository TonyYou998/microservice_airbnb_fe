import React from 'react'
import AddPropertyStepBar from 'components/AddPropertyStepBar'
import ImageComponent from 'components/ImageComponent/ImageComponent'
import { NavLink } from 'react-router-dom'
import Message from './components/Message'

export default function CongrastPage() {
  return (
    <div className='d-flex'>
    <div className='col-6 image__container'>
      <ImageComponent img={"./img/Thank.svg"} />
    </div>

    <div className='col-6 options__container'>
      <AddPropertyStepBar tittle={"Add Property Success"} />
      <div className='message__wrapper'>
        <Message/>
      </div>
        
      <div className='navigate__components'>
        <div className='d-flex justify-content-between'>
          <NavLink to="/price">
            <button className='btn   back__btn'>Back</button>
          </NavLink>
          <NavLink to="/" >
            <button  className='btn  next__btn'>Next</button>
          </NavLink>

        </div>

      </div>
    </div>
  </div>
  )
}
