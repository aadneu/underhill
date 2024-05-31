import React from 'react'
import Contact from './Content/Contact'
import { useState } from 'react'
const Footer = () => {


  const [showContact, setShowContact] = useState(false)

  const toggleContactform = () => {
    setShowContact(prev => !prev)
    setTimeout(() => {
      document.body.scrollIntoView({ behavior: 'smooth', block: 'end' })

    },50)
  }

  return (
    <div className="footer contact py-1 mt-3">

          
          {showContact ? <Contact toggleContactform={toggleContactform}/> : 
          (<p onClick={toggleContactform} className='text-center cursor'>Har du en idé, eller vil du snakke med meg? <br className='linjeskift'/> Trykk her!</p>)}
            

          <div className='d-flex justify-content-center fs-5'>
            
            <p><a href="https://github.com/aadneu" target="_blank">GitHub</a></p>
            <p className='mx-1'>|</p>
            <p><a href="https://www.linkedin.com/in/%C3%A5dne-underhaug-075652b0/" target="_blank">LinkedIn</a></p>
            <p className='mx-1'>|</p>
            <p><a href="#">Hjem</a></p>
          </div>
          <div id="bottomdiv" className="text-center">
            
            <p>© 2024 Ådne Underhaug. <br className='linjeskift'/> Alle rettigheter reservert.</p>
          </div>

        


    </div>
  )
}

export default Footer