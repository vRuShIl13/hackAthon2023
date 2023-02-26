import React from 'react'

const NavBar = () => {
  return (
    <div className="navbar">

    <img className='imgLogo' src={require("../assets/UM-logo-horizontal-reverse-rgb (1).png")} alt='img'>
    </img>
  <a href="#home">Home</a>
  <a href="#news">News</a>
  <div className="dropdown">
    <button className="dropbtn">Faculty
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
      <a href="https://umanitoba.ca/science/computer-science">Computer-Science</a>
      <a href="#">Asper School of Business</a>
      <a href="#">Biology</a>
    </div>
  </div> 
</div>

  )
}

export default NavBar