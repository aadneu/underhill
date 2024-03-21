import React from 'react'


const Welcome = () => {


  return (
    <div  className ="welcome " >

     

      <div className="container-lg d-flex justify-content-center">
        
        <div className="col-10 d-grid min-vh-100">

          <div className="row align-items-center zind">
              <img src="./src/images/logo.png" className="img-fluid" alt=""/> 
          </div>

          <div className="row text-center zind">
            <blockquote class="blockquote">
              <p>Hva sa høna til musa? Ingenting! Høna kan ikke prate og musa kan ikke språket.</p>
            </blockquote>
          </div>
          
         

        </div>
        
      
       
      </div>

    </div>
  )
}

export default Welcome