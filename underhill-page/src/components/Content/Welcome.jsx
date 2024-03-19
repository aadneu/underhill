import React from 'react'


const Welcome = () => {


  return (
    <div id="top-div" className ="welcome" >
      <div className="container">
        <div className="row justify-content-center align-items-center" style={{ height: "100vh" }}>
          <div className="col">
            <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis repellendus voluptatum velit reprehenderit incidunt, 
            doloremque omnis aperiam veritatis obcaecati inventore, animi modi ratione nesciunt? Non eos explicabo doloremque suscipit ut!</h1>

          </div>

          <div className="col justify-content-end">
            
            <img src="./src/images/ådnesplass.png" style={{ height: "20vh" }} alt=""/>
          </div>
        </div>
       
          
        
      </div>

    </div>
  )
}

export default Welcome