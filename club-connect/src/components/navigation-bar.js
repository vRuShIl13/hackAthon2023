import React from 'react'

export const NavigationBar = () => {
  return (
        <div class="navbar">

          <img src="https://umanitoba.ca/themes/custom/umanitoba/images/logo.svg" alt="UManitoba Logo"/>
          <a href="#home">Home</a>
          <a href="#news">News</a>
          <div class="dropdown">
              <button class="dropbtn">Faculty
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="https://umanitoba.ca/science/computer-science">Computer-Science</a>
                <a href="#">Asper School of Business</a>
                <a href="#">Biology</a>
              </div>
          </div> 
        </div>
  )
}

export default NavigationBar;