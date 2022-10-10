import React from 'react'

export default function DatePickerComponent(props) {
  const {label}=props;

 
  return (
    <div className='date__picker__component d-flex mx-2'>
        <i className="fa fa-calendar" />

        <div className='date__picker__label'>{label}</div>
    </div>

  )
}
