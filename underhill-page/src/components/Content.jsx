import React from 'react'
import Welcome from './Content/Welcome'
import About from './Content/About'
import Projects from './Content/Projects'
import Contact from './Content/Contact'
import { Element } from 'react-scroll'

const Content = () => {

  return (
    <div className ="content-wrapper text-center">
        <Element name="welcome"><Welcome/></Element>
        <Element name="about"><About/></Element>
        <Element name="projects"><Projects/></Element>
        <Element name="contact"><Contact/></Element>        
    </div>
  )
}

export default Content