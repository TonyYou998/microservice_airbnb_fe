import { Button } from '@mui/material'
import AddPropertyStepBar from 'components/AddPropertyStepBar'
import ImageComponent from 'components/ImageComponent/ImageComponent'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'


import { NavLink } from 'react-router-dom'
import { actAddDescription } from '../modules/actions'
import Content from '../TitlePage/components/Content'





export default function DescriptionPage() {
  const [description,setDescription]=useState("");
  const dispatch=useDispatch();
  const handleOnClick=(description)=>{
      dispatch(actAddDescription(description));

  }
  return (
    <div className='d-flex'>
    <div className='col-6 image__container'>
      <ImageComponent img={"./img/Stay.svg"} />
    </div>

    <div className='col-6 options__container'>
      <AddPropertyStepBar tittle={"Describe your property"} />
      <Content title={"Enter description"} fun={setDescription}/>
      <div className='navigate__components'>
        <div className='d-flex justify-content-between'>
          <NavLink to="/title">
            <button className='btn   back__btn'>Back</button>
          </NavLink>
          <NavLink onClick={()=>handleOnClick(description)} to="/price">
            <button  className='btn  next__btn'>Next</button>
          </NavLink>

        </div>

      </div>
    </div>
    </div>
    
  )
}
