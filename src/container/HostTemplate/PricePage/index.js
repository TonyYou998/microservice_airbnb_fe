import { Button } from '@mui/material'
import AddPropertyStepBar from 'components/AddPropertyStepBar'
import ImageComponent from 'components/ImageComponent/ImageComponent'
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


import { NavLink } from 'react-router-dom'
import { actAddDescription, actAddPrice, actAddPropertyApi } from '../modules/actions'

import InputPrice from './components/InputPrice'





export default function DescriptionPage() {
  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();
  const data = useSelector(state => state.hostReducer)
  const handleOnClick = (price, data) => {
    const model={
      propertyTypeId:data.propertyTypeId,
    privacy:data.privacy,
    address:data.address,
    longitude:data.longitude,
    latitude:data.latitude,
    propertyName:data.propertyName,
    propertyDescription:data.propertyDescription,
    price,
    }
   
    var form_data = new FormData();
    form_data.append("model", JSON.stringify(model));
    form_data.append("file",data.img);
    // dispatch(actAddPrice(price));
    console.log("run submit");
    dispatch(actAddPropertyApi(form_data));

  }

  return (
    <div className='d-flex'>
      <div className='col-6 image__container'>
        <ImageComponent img={"./img/Investments.svg"} />
      </div>

      <div className='col-6 options__container'>
        <AddPropertyStepBar tittle={"Price per night"} />
        <InputPrice fun={setPrice} />
        <div className='navigate__components'>
          <div className='d-flex justify-content-between'>
            <NavLink to="/description">
              <button className='btn   back__btn'>Back</button>
            </NavLink>
            <NavLink onClick={() => handleOnClick(price, data)} to="/congrast">
              <button className='btn  next__btn'>Next</button>
            </NavLink>

          </div>

        </div>
      </div>
    </div>

  )
}
