import React from 'react'
import MovingComponent from "react-moving-text";
import { NavLink } from 'react-router-dom';
export default function StartComponent() {
  return (
    <div className='start__container w-100'>
      <h1 className='text-center '>
           
      Let lease your empty room
        </h1>
     
      
      <h4 className='text-center my-3'><MovingComponent
        type="shadow"
        duration="1000ms"
        delay="0s"
        direction="alternate"
        timing="ease-in-out"
        iteration="infinite"
        fillMode="none">
       Join us and earn money
      </MovingComponent></h4>
      <NavLink to="/classifycation">
      <button className='btn '>
          Let's start
      </button>
      </NavLink>
    </div>
  )
}
