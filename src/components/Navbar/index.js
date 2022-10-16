import React from 'react'
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
<>
 
<nav className="navbar navbar__home navbar-expand px-5">
  
  {/* <a className="navbar-brand" href="#">logo</a> */}
  
  <h4 className='' style={{fontStyle:"italic"}}>Rental<span style={{color:"blue",fontWeight:"700",fontStyle:"italic"}}>.com</span></h4>
  {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button> */}
  <div  className='navbar__list' id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active ">
        <NavLink  className="nav-link" to={"/"}>
            Home <span className="sr-only">(current)</span>
        </NavLink>
        {/* <a href="#"></a> */}
      </li>
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
      
    </ul>
  </div>
  
 
</nav>

</>


  )
}
