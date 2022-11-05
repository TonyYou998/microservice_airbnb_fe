import React from 'react'
import AddPropertyStepBar from 'components/AddPropertyStepBar'
import ImageComponent from 'components/ImageComponent/ImageComponent'
import { NavLink } from 'react-router-dom'  
export default function LocationPage() {
  return (
    <div className='d-flex'>
    <div className='col-6 image__container'>
      <ImageComponent img={"./img/location.png"}/>
    </div>

    <div className='col-6 options__container'>
      <AddPropertyStepBar  tittle={"Privacy option"}/>
      <div className='option__items'>
       
        <div className='navigate__components'>
          <div className='d-flex justify-content-between'>
            <NavLink to="/classifycation">
              <button className='btn   back__btn'>Back</button>
            </NavLink>
            <NavLink to="/location">
              <button className='btn  next__btn'>Next</button>
            </NavLink>

          </div>

        </div>
      </div>

    </div>


  </div>
  )
}
