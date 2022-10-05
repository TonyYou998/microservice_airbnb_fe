import React from 'react'

export default function Navbar() {
  return (
<>
 
<nav className="navbar navbar__home navbar-expand px-4">
  
  {/* <a className="navbar-brand" href="#">logo</a> */}
  <h4 className=''>Logo</h4>
  {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button> */}
  <div  className='navbar__list' id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active ">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item ">
        <a className="nav-link" href="#">Sign Up</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Sign In</a>
      </li>
      
    </ul>
  </div>
  
 
</nav>

</>


  )
}
