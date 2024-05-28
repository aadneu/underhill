import React from 'react'
import {useState} from 'react'

const About = () => {

  const [showWho, setShowWho] = useState(true)
  const [showWhat, setShowWhat] = useState(false)

  const viewWho = () => {
    setShowWhat(false)
    setShowWho(true)
  }
  const viewWhat = () => {
    setShowWho(false)
    setShowWhat(true)
  }

  return (
    <div className ="about min-vh-100">
        <div id="aboutbgpic">
           {/* <img src="./src/images/speil2.png" className='img-fluid' alt=""/> */}

          <div className="container d-flex flex-column justify-content-center vh-100 ">

           <div className="row" >
              <div className='col-md-8 col-lg-6 mx-auto zind d-flex'>
                <h2 onClick={viewWho} className="balle">HVEM ER JEG</h2>
                <h2 className="balle mx-3">|</h2>
                <h2 onClick={viewWhat} className="balle">HVA GJØR JEG</h2 >
              </div>
            </div>

            <div className="row ">
              <div className="col-md-8 col-lg-6 fs-5  zind mx-auto" >
                
                { showWho && <div>
                    <p className="my-4 balle">
                        Jeg heter Ådne, og jeg er for tiden 35 år gammel og aspirerende fullstack-utvikler. 
                        Blant mine interesser er familien min, uformelle samtaler om livet, 
                        nyte en god kopp sort gull, lage vafler, lytte til musikk, drikke øl og lage fredagspizza.
                    </p >
                    <p className="my-4 balle">
                        Jeg liker formel 1, fotball, styrketrening og kampsport. 
                        På vinteren liker jeg også både langrenn og alpint. 
                        I tillegg liker jeg Rocket League og Heroes of Newerth.
                    </p >
                    <p className="my-4 balle">
                        Ferdighetene mine inkluderer foreløpig HTML, CSS, Bootstrap, 
                        JavaScript og React, noe som gjør meg kjent med frontend 
                        webutvikling. I tillegg har jeg noe erfaring med Node.js, C#, .NET, og Microsoft SQL, 
                        for å kunne håndtere backend og database.
                    </p>
                    <p className="my-4 balle">
                        Jeg jobber hele tiden for å bli litt bedre enn gårsdagen, og jeg er alltid åpen for å sette meg inn i og lære noe nytt.
                    </p>
                </div>}
                {showWhat && <div>
                  <p className="my-4 balle">dette er en test</p>
                  
                  </div> }
                  

              </div>
            </div>
          </div>
        
                    
        
        </div>  
    </div>
  )
}

export default About