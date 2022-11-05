import { Button } from '@mui/material'
import AddPropertyStepBar from 'components/AddPropertyStepBar'
import ImageComponent from 'components/ImageComponent/ImageComponent'
import React from 'react'
import { NavLink } from 'react-router-dom'
import ClassifyOption from "../../../components/Classifycation/ClassifyOption";
import ClassifyOptionWithInput from '../../../components/Classifycation/ClassifyOptionWithInput';

export default function PrivacyPage() {
  return (
    <div className='d-flex'>
    <div className='col-6 image__container'>
      <ImageComponent img={"./img/Group.png"}/>
    </div>

    <div className='col-6 options__container'>
      <AddPropertyStepBar  tittle={"Privacy option"}/>
      <div className='option__items'>
        <ClassifyOption img={"./img/house.png"} name={"Entire place"} />
        <ClassifyOption img={"./img/apartment.png"} name={"Private room"} />
        <ClassifyOption img={"./img/villa.png"} name={"Share room"} />
        <ClassifyOptionWithInput name={"Other"} />
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
