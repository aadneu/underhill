import React from 'react'
import Overview from './Projects/Overview'
import Snake from './Projects/Snake'
import Tictactoe from './Projects/Tictactoe'
import DecisionmakerApp from './Projects/Decisionmaker/DecisionmakerApp'


import {Routes, Route, NavLink as ProjectLink} from 'react-router-dom'



const Projects = () => {



  return (
       
    <div className='projects container-fluid'>
      <div className="container">
        <div style={{minHeight: '86vh'}}className="col ">

          <div className="row pt-4 mb-1">
              <ProjectLink  to ="/"><button type="button" className="btn btn-sm btn-warning" >Prosjekter</button></ProjectLink>
          </div>
      
          <div className="row">
              <Routes>
                  <Route index element={<Overview/>}/>
                  <Route path='snake' element={<Snake/>}/>
                  <Route path='tictac' element={<Tictactoe/>}/>
                  <Route path='decision' element={<DecisionmakerApp/>}/>
              </Routes>
          </div>
      
        </div> 
      </div>
    </div>
    

    
  )
}

export default Projects
