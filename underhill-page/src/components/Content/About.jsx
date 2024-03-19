import React from 'react'

const About = () => {
  return (
    <div className ="container">
      
      <div className="container">
        <div className="row justify-content-end align-items-center" style={{ height: "100vh" }}>
          <div className="col ">
            
            <img src="./src/images/ådne3.png"  alt="" style={{ height: "80vh", width: 'auto' }}/>
          </div>
          <div className="col text-start">
           <div className="fs-4 ">
                    Jeg heter Ådne, og jeg er for tiden 35 år gammel. 
                    Blant mine interesser er familien min, uformelle samtaler om livet, 
                    nyte en god kopp sort gull, lage vafler, lytte til musikk.
                </div >
                <div className="fs-4 ">
                    Jeg liker å holde meg i form gjennom regelmessige treningsøkter, 
                    tidligere var det fotball, nå er det helst styrketrening eller kampsport. 
                    Om vinteren liker jeg både langrenn og alpint. I tillegg til disse hobbyene, 
                    liker jeg også å spille spill, spesielt Rocket League og Heroes of Newerth.
                </div >
                <div className="fs-4 ">
                    Når det gjelder mine ferdigheter, behersker jeg HTML, CSS, Bootstrap, 
                    JavaScript og React, noe som gjør meg godt kjent med front-end 
                    webutviklingsteknologier. I tillegg har jeg noe erfaring med C#. 
                    Disse ferdighetene gjør at jeg kan bidra til webutviklingsprosjekter 
                    og oppgaver innen programvareutvikling.
                </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default About