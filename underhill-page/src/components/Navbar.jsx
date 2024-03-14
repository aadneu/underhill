import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div>
       


        <nav className="navbar navbar-expand">
            <div className="container-fluid ">
                <a className="nav-link"><Link to="welcome" smooth={true} duration={100}>welcome</Link></a>
                <div className="justify-content-end">
                <div className="navbar-nav">
                    <a className="nav-link"><Link to="about" smooth={true} duration={100}>about</Link></a>
                    <a className="nav-link"><Link to="projects" smooth={true} duration={100}>projects</Link></a>
                    <a className="nav-link"><Link to="contact" smooth={true} duration={100}>contact</Link></a>
                </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar