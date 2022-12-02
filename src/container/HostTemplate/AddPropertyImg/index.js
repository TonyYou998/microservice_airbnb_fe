import { Button } from '@mui/material'
import AddPropertyStepBar from 'components/AddPropertyStepBar'
import ImageComponent from 'components/ImageComponent/ImageComponent'
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


import { NavLink } from 'react-router-dom'
import { actAddPropertyApi } from '../modules/actions'
import Upload from './components/Upload';



export default function AddPropertyImg() {


  return (
    <div className='d-flex'>
    <div className='col-6 image__container'>
      <ImageComponent img={"./img/Upload.svg"} />
    </div>

    <div className='col-6 options__container'>
      <AddPropertyStepBar tittle={"Upload Property's photos"} />
      <Upload/>
     
      <div className='navigate__components'>
        <div className='d-flex justify-content-between'>
          <NavLink to="/description">
            <button className='btn   back__btn'>Back</button>
          </NavLink>
          <NavLink to="/price" >
            <button  className='btn  next__btn'>Next</button>
          </NavLink>

        </div>

      </div>
    </div>
    </div>
    
  )
}
