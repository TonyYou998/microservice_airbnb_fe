import { Button } from '@mui/material'
import AddPropertyStepBar from 'components/AddPropertyStepBar'
import ImageComponent from 'components/ImageComponent/ImageComponent'
import React from 'react'
import { NavLink } from 'react-router-dom'
import ClassifyOption from '../../../components/Classifycation/ClassifyOption';
import ClassifyOptionWithInput from '../../../components/Classifycation/ClassifyOptionWithInput';


export default function Classifycation() {
  return (

    <div className='d-flex'>
      <div className='col-6 image__container'>
        <ImageComponent img={"./img/Schedule.svg"}/>
      </div>

      <div className='col-6 options__container'>
        <AddPropertyStepBar tittle={"Kind of your property"} />
        <div className='option__items'>
          <ClassifyOption img={"./img/house.png"} name={"House"} />
          <ClassifyOption img={"./img/apartment.png"} name={"Apartment"} />
          <ClassifyOption img={"./img/villa.png"} name={"Villa"} />
          <ClassifyOption img={"./img/apartment.png"} name={"Homestay"} />
          <ClassifyOptionWithInput name={"Other"} />
          <div className='navigate__components'>
            <div className='d-flex justify-content-between'>
              <NavLink to="/become-a-host">
                <button className='btn   back__btn'>Back</button>
              </NavLink>
              <NavLink to="/privacy">
                <button className='btn  next__btn'>Next</button>
              </NavLink>

            </div>

          </div>
        </div>

      </div>


    </div>
  )
}
