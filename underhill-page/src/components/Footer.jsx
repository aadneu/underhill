import React from 'react'
import Contact from './Content/Contact'
const Footer = () => {
  return (
    <div className="footer py-1 mt-3">

          <Contact/>
          
          <div className='d-flex justify-content-center fs-5'>
            
            <p><a href="https://github.com/aadneu" target="_blank">GitHub</a></p>
            <p className='mx-1'>|</p>
            <p><a href="https://www.linkedin.com/in/%C3%A5dne-underhaug-075652b0/" target="_blank">LinkedIn</a></p>
          </div>
          <div className="text-center">
            <div>© 2024 Ådne Underhaug. </div>
            <p>Alle rettigheter reservert.</p>
          </div>

        


    </div>
  )
}

export default Footer