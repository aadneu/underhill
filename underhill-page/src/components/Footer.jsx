import React from 'react'
import Contact from './Content/Contact'
const Footer = () => {
  return (
    <div className="footer py-1 mt-3">

          <Contact/>
          
          <div className='d-flex justify-content-center'>
            
            <h5><a href="https://github.com/aadneu" target="_blank">GitHub</a></h5>
          </div>
          <div className="text-center">
            <p>© 2024 Ådne Underhaug. Alle rettigheter reservert.</p>
          </div>

        


    </div>
  )
}

export default Footer