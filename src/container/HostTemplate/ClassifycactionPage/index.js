import { Cookie } from '@mui/icons-material'
import { Button } from '@mui/material'
import AddPropertyStepBar from 'components/AddPropertyStepBar'
import ImageComponent from 'components/ImageComponent/ImageComponent'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { NavLink } from 'react-router-dom'
import ClassifyOption from '../../../components/Classifycation/ClassifyOption';

import { actAddCategory } from '../modules/actions'
import { actGetCategoryApi } from './modules/action'



export default function Classifycation() {
const result=useSelector(state=>state.categoryReducer);
let dispatch=useDispatch();
useEffect(()=>{
  dispatch(actGetCategoryApi(document.cookie));
},[]);


  const handleOnClick=(categoryId)=>{
    
    dispatch(actAddCategory(categoryId));
  }

  const renderCategory=(result)=>{
    if(result.data){
      const{Content}=result.data;
       return Content.map((item,index)=>{
        
        return<ClassifyOption key={index} img={"./img/house.png"} name={item.name} value={item.id} fun={handleOnClick} />
    })
    }
   

  

  }

  return (

    <div className='d-flex'>
      <div className='col-6 image__container'>
        <ImageComponent img={"./img/Schedule.svg"} />
      </div>

      <div className='col-6 options__container'>
        <AddPropertyStepBar tittle={"Kind of your property"} />
        <div className='option__items'>
          {/* <ClassifyOption img={"./img/house.png"} name={"House"} value={"1bc38725-5709-4bfe-b07b-18c19dc276cb"} fun={handleOnClick} />
          <ClassifyOption img={"./img/apartment.png"} name={"Apartment"} value={"1bc38725-5709-4bfe-b07b-18c19dc276cb"} fun={handleOnClick}  />
          <ClassifyOption img={"./img/villa.png"} name={"Villa"} />
          <ClassifyOption img={"./img/apartment.png"} name={"Homestay"} />
          <ClassifyOptionWithInput name={"Other"} /> */}
          {renderCategory(result)}
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
