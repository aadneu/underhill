import React from 'react'
import Snake from './Projects/Snake'
import Tictactoe from './Projects/Tictactoe'

const Projects = () => {
  return (
    <div className ="">
      <div className='container'>
            <div className="row d-flex ">
              <div className="col"><Snake/></div>
              <div className="col"><Tictactoe/></div>
            </div>
      </div>
    

    </div>
  )
}

export default Projects
