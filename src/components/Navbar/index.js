import React from 'react'
import $ from "jquery";
import { NavLink, useHistory } from 'react-router-dom'
import getCookie, { jwtDecoder } from 'api/utils/helper';
import { Fragment } from 'react';

export default function Navbar() {
  const history=useHistory();
  $(window).scroll(() => {

    if ($(window).scrollTop() > 90) {

      $(".navbar__home").addClass("active__navbar");

    }
    else {
      $(".active__navbar").removeClass("active__navbar");

    }
  });
  const cookie=getCookie("token");

 
  const showOptions = () => {
    if (cookie!==null) {
      const { header, payload } = jwtDecoder(cookie);
      if(header.role!=="Host")
      return (
        // <li  className="profile-button"> <h6>{payload.sub}</h6></li>
      
          <Fragment>
            <NavLink to={"/mylist"}>
            <button className='dashboard__btn'>
            <div>{payload.sub}</div></button>
            </NavLink>
              
            <button className='dashboard__btn' onClick={()=>{
              document.cookie = "token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
              history.replace("/");

            }}>
            <div>Logout</div></button>
          </Fragment>
         
        
      )
      return   <Fragment>
      <NavLink to={"/host-dashboard"}>
      <button className='dashboard__btn'>
      <div>{payload.sub}</div></button>
      </NavLink>
        
      <button className='dashboard__btn' onClick={()=>{
 
              document.cookie = "token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
              console.log("run");
              history.replace("/");
            }}>
            <div>Logout</div></button>
    </Fragment>
    }
    else {
      return (
        <Fragment>
          <li className="nav-item ">
            <NavLink  className="nav-link" to={"/signup"}>
              Sign up
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={"/login"}>
              Sign In
            </NavLink>
          </li>
        </Fragment>
      )
    }
     


  }

  return (
    <>

      <nav className=" navbar navbar__home navbar-expand px-5">

        {/* <a className="navbar-brand" href="#">logo</a> */}
        <NavLink to={"/"}>
          <h4 className='' style={{ fontStyle: "italic" }}>Rental<span style={{ color: "blue", fontWeight: "700", fontStyle: "italic" }}>.com</span></h4>
        </NavLink>

        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button> */}
        <div className='navbar__list' id="navbarNav">
          <ul className="navbar-nav">
            {showOptions()}


          </ul>
        </div>


      </nav>

    </>


  )
}
