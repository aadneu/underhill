import React from 'react'
import {useState} from 'react'
import Coinflip from './Coinflip'
 
const DecisionmakerApp = () => {

    const [needhelp, setNeedhelp] = useState(true)
    const [yes, setYes] = useState(false)
    const [justdo, setJustdo] = useState(true)
   
  
    const resetState = () => {
      setNeedhelp(true)
      setYes(null)
      setJustdo(true)
     
    }
  
    const handleYes = (answer) => {
      setNeedhelp(false)
      setYes(answer)
    }
  
  
    return (
      <div style={{borderRadius: '5px'}} className='container bg-light text-dark '>
        <div style={{ textTransform: 'uppercase' }} className='row text-center justify-content-center p-3 my-auto'>

      {/* STARTPAGE */}
      <button style={{width: '70px'}} onClick={resetState} className='btn btn-dark btn-sm ms-auto mb-3'>RESET</button>
       { needhelp &&
        <div>
          {/* <img src="https://i.imgur.com/iDjVEG4.jpeg" alt="" srcset="" /> */}
          <h1>need help to decide?</h1>
            <h1> 
                <p onClick={() => handleYes(true)} style={{cursor: 'pointer'}}>yes</p>
                <p onClick={() => handleYes(false)} style={{cursor: 'pointer'}}>no</p>
            </h1>
        </div>
       }
       {/* IF NO */}
       { !needhelp && !yes && 
        <div id="imgdiv">
          <img src="https://media.tenor.com/PkfLtiAdQN0AAAAe/why-are-you-here-adam.png" alt="" srcset="" style={{maxWidth: '100%'}}/>
        </div>
       }
       {/* IF YES */}
       { !needhelp && yes && 
        <Coinflip justdo={justdo} setJustdo={setJustdo}/>
       }
        </div>
    
       
      
      </div>
    )
  }

export default DecisionmakerApp