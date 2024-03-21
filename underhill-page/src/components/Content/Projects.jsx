import React from 'react'
import Overview from './Projects/Overview'
import Snake from './Projects/Snake'
import Tictactoe from './Projects/Tictactoe'


import {Routes, Route, NavLink as ProjectLink} from 'react-router-dom'
import Footer from '../Footer'


const Projects = () => {

  // const OverviewBtn = (text) => {
  //   return `<ProjectLink  to ="/"><button type="button" class="btn btn-sm btn-outline-warning" >${text}</button></ProjectLink>`
  // }

  return (
    
    

    <div className='projects container-fluid'>
      <div className="container">

      <div className="col min-vh-100 ">

        <div className="row py-4 mb-5">
          
              <ProjectLink  to ="/"><button type="button" className="btn btn-sm btn-warning" >Prosjekter</button></ProjectLink>
              {/* <ProjectLink to="snake"><button type="button" class="btn btn-sm btn-outline-warning" >Snake</button></ProjectLink>
              <ProjectLink to="tictac"><button type="button" class="btn btn-sm btn-outline-warning">Tic tac toe</button></ProjectLink>
            <button type="button" class="btn btn-sm btn-outline-warning" disabled>Spotify App</button> */}
          
        </div>
     
        <div className="row">
          <div>

              <Routes>
                  <Route index element={<Overview/>}/>
                  <Route path='snake' element={<Snake/>}/>
                  <Route path='tictac' element={<Tictactoe/>}/>
              </Routes>
          </div>
        </div>
        
      </div> 
      
      </div>
      
    </div>
    

    
  )
}

export default Projects
