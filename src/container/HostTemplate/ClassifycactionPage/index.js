import AddPropertyStepBar from 'components/AddPropertyStepBar'
import React from 'react'
import ClassifyOption from './component/ClassifyOption'
import ClassifyOptionWithInput from './component/ClassifyOptionWithInput'
import ImageComponent from './component/ImageComponent'

export default function Classifycation() {
  return (
   
    <div className='d-flex'>
        <div className='col-6 image__container'>
            <ImageComponent/>
        </div>
        
        <div className='col-6 options__container'>
        <AddPropertyStepBar/>
        <div className='option__items'>
        <ClassifyOption  img={"./img/house.png"} name={"House"} />
          <ClassifyOption img={"./img/apartment.png"} name={"Apartment"}/>
          <ClassifyOption img={"./img/villa.png"} name={"Villa"}/>
          <ClassifyOption img={"./img/apartment.png"} name={"Homestay"}/>
          <ClassifyOptionWithInput name={"Other"}/>
        </div>
          
        </div>
    </div>
  )
}
