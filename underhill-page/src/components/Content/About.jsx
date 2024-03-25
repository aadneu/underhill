import React from 'react'

const About = () => {
  return (
    <div className ="about min-vh-100">
        <div id="aboutbgpic">
           {/* <img src="./src/images/speil2.png" className='img-fluid' alt=""/> */}

          <div className="container vh-100 d-flex  align-items-center">

           <div className="row justify-content-center" >

            <div className="col-md-8 col-lg-6 fs-5 about-bg text-start mb-4 zind " >
                <div className="my-4 balle">
                      HVEM ER JEG?
                  </div >
              
                <div className="my-4 balle">
                      Jeg heter Ådne, og jeg er for tiden 35 år gammel og aspirerende fullstack-utvikler. 
                      Blant mine interesser er familien min, uformelle samtaler om livet, 
                      nyte en god kopp sort gull, lage vafler, lytte til musikk, drikke øl og lage fredagspizza.
                  </div >
                  <div className="my-4 balle">
                      Jeg liker formel 1, fotball, styrketrening og kampsport. 
                      På vinteren liker jeg også både langrenn og alpint. 
                      I tillegg liker jeg Rocket League og Heroes of Newerth.

                      
                  </div >
                  <div className="my-4 balle">
                      Ferdighetene mine inkluderer foreløpig HTML, CSS, Bootstrap, 
                      JavaScript og React, noe som gjør meg kjent med frontend 
                      webutvikling. I tillegg har jeg noe erfaring med Node.js, C#, PHP og MySQL, 
                      for å kunne håndtere backend og database.
                    
                  </div>
                  <div className="my-4 balle">
                      Jeg jobber hele tiden for å bli litt bedre enn gårsdagen.
                  </div>

            </div>
            </div>
          </div>
                    
        
        </div>
          {/* <div id="aboutpic" className="col-6 justify-content-end d-none d-lg-block">
            
          </div> */}
        

      
          
    </div>
  )
}

export default About