import React from 'react'
import {useState} from 'react'
import Coinflip from './Coinflip'
import './decision.css'
 
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
      <>
      <div className='text-center'>
      <button onClick={resetState} className='btn btn-light btn-sm mb-4'>RESET</button>

      </div>
      <div style={{borderRadius: '5px'}} className='container bg-light text-dark decision col-lg-5 col-md-6'>
        <div style={{ textTransform: 'uppercase' }} className=' text-center justify-content-center p-3 '>

      {/* STARTPAGE */}
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
      </>

    )
  }

export default DecisionmakerApp