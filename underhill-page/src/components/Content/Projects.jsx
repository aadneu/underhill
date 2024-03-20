import React from 'react'
import Overview from './Projects/Overview'
import Snake from './Projects/Snake'
import Tictactoe from './Projects/Tictactoe'


import {Routes, Route, NavLink as ProjectLink} from 'react-router-dom'


const Projects = () => {

  // const OverviewBtn = (text) => {
  //   return `<ProjectLink  to ="/"><button type="button" class="btn btn-sm btn-outline-warning" >${text}</button></ProjectLink>`
  // }

  return (
    
    

    <div className='container'>
      <div className="col min-vh-100 ">

        <div className="row mx-1 mb-5">
          <nav className="navbar navbar-expand m">
              <ProjectLink  to ="/"><button type="button" className="btn btn-sm btn-outline-warning" >Projects overview</button></ProjectLink>
              {/* <ProjectLink to="snake"><button type="button" class="btn btn-sm btn-outline-warning" >Snake</button></ProjectLink>
              <ProjectLink to="tictac"><button type="button" class="btn btn-sm btn-outline-warning">Tic tac toe</button></ProjectLink>
              <button type="button" class="btn btn-sm btn-outline-warning" disabled>Spotify App</button> */}
          </nav>
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
    

    
  )
}

export default Projects
