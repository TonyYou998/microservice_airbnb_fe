import { Button } from '@mui/material'
import AddPropertyStepBar from 'components/AddPropertyStepBar'
import ImageComponent from 'components/ImageComponent/ImageComponent'
import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import ClassifyOption from "../../../components/Classifycation/ClassifyOption";
import ClassifyOptionWithInput from '../../../components/Classifycation/ClassifyOptionWithInput';
import { actAddPrivacy } from '../modules/actions'

export default function PrivacyPage() {
  let dispatch=useDispatch();
  const handleOnclickOption=(privacyType)=>{
    dispatch(actAddPrivacy(privacyType));
}
  return (
    <div className='d-flex'>
    <div className='col-6 image__container'>
      <ImageComponent img={"./img/Group.png"}/>
    </div>

    <div className='col-6 options__container'>
      <AddPropertyStepBar  tittle={"Privacy option"}/>
      <div className='option__items'>
        <ClassifyOption img={"./img/house.png"} name={"Entire place"} value={"entire"} fun={handleOnclickOption} />
        <ClassifyOption img={"./img/apartment.png"} name={"Private room"} value={"private"} fun={handleOnclickOption} />
        <ClassifyOption img={"./img/villa.png"} name={"Share room"} value={"share"} fun={handleOnclickOption} />
        <ClassifyOptionWithInput name={"Other"} value={"other"} fun={handleOnclickOption} />
        <div className='navigate__components'>
          <div className='d-flex justify-content-between'>
            <NavLink to="/classifycation">
              <button className='btn   back__btn'>Back</button>
            </NavLink>
            <NavLink  to="/location">
              <button  className='btn  next__btn'>Next</button>
            </NavLink>

          </div>

        </div>
      </div>

    </div>


  </div>
  )
}
