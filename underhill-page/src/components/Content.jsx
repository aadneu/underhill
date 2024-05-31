import React, { useState } from 'react'
import Welcome from './Content/Welcome'
import About from './Content/About'
import Projects from './Content/Projects'


import { Element, animateScroll,Link } from 'react-scroll'
import Footer from './Content/Footer'
import Contact from './Content/Contact'


const Content = () => {

  const [showContact, setShowContact] = useState(false)

  return (
    <div className ="content-wrapper ">
        <Element name="welcome" id="top-div"><Welcome/></Element> 
        <Element name="about"><About setShowContact={setShowContact}/></Element>
        <Element name="projects"><Projects/></Element>
        {/* <Element name="contact"><Contact/></Element> */}
        <Element name="footer"><Footer showContact={showContact} setShowContact={setShowContact}/></Element>  
    </div>
  )
}

export default Content