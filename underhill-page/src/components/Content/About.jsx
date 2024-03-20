import React from 'react'

const About = () => {
  return (
    <div className ="container">
      
      
        <div className="row justify-content-center align-items-center min-vh-100 " >
          
          <div className="col text-start mb-4" >
              <div className="my-4 fs-5">
                    Jeg heter Ådne, og jeg er for tiden 35 år gammel og aspirerende fullstack-utvikler. 
                    Blant mine interesser er familien min, uformelle samtaler om livet, 
                    nyte en god kopp sort gull, lage vafler, lytte til musikk, drikke øl og lage fredagspizza.
                </div >
                <div className="my-4 fs-5">
                    Jeg liker fotball, styrketrening og kampsport. 
                    Om vinteren liker jeg både langrenn og alpint. 
                    I tillegg liker jeg Rocket League og Heroes of Newerth.

                    
                </div >
                <div className="my-4 fs-5">
                    Ferdighetene mine inkluderer foreløpig HTML, CSS, Bootstrap, 
                    JavaScript og React, noe som gjør meg godt kjent med front-end 
                    webutviklingsteknologier. I tillegg har jeg noe erfaring med Node.js, C#, PHP og MySQL, for å kunne håndtere backend og database.
                   
                </div>
                <div className="my-4 fs-5">
                    Jeg jobber hele tiden for å bli litt bedre enn gårsdagen.
                </div>

          </div>
          <div className="col justify-content-end d-none d-md-block">
            <img src="./src/images/ådnespeil.png" className='img-fluid' alt=""/>
          </div>

        
      </div>
    </div>
  )
}

export default About