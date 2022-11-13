import { Button } from '@mui/material'
import AddPropertyStepBar from 'components/AddPropertyStepBar'
import ImageComponent from 'components/ImageComponent/ImageComponent'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { NavLink } from 'react-router-dom'
import { actAddCategory, actAddTitle } from '../modules/actions'
import Content from './components/Content'



export default function TitlePage() {

  const dispatch=useDispatch();
  const [title,setTitle]=useState("");
  const handleOnClick=(data)=>{
      dispatch(actAddTitle(data));
  }
  return (

    <div className='d-flex'>
      <div className='col-6 image__container'>
        <ImageComponent img={"./img/Work.svg"} />
      </div>

      <div className='col-6 options__container'>
        <AddPropertyStepBar tittle={"Name your property"} />
        <Content title={"Create a title"} fun={setTitle}/>
        <div className='navigate__components'>
          <div className='d-flex justify-content-between'>
            <NavLink to="/location">
              <button className='btn   back__btn'>Back</button>
            </NavLink>
            <NavLink  onClick={()=>handleOnClick(title)} to="/description">
              <button  className='btn  next__btn'>Next</button>
            </NavLink>

          </div>

        </div>
      </div>
    </div>
  )
}
