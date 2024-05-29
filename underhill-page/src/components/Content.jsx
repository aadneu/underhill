import React, { useState } from 'react'
import Welcome from './Content/Welcome'
import About from './Content/About'
import Projects from './Content/Projects'


import { Element, animateScroll,Link } from 'react-scroll'
import Footer from './Footer'


const Content = () => {

  

  return (
    <div className ="content-wrapper ">
        <Element name="welcome" id="top-div"><Welcome/></Element> 
        <Element name="about"><About/></Element>
        <Element name="projects"><Projects/></Element>
        <Element name="footer"><Footer/></Element>  
    </div>
  )
}

export default Content