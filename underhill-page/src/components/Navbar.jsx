import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div>
          <nav className="navbar navbar-expand fixed-top ">
            <div className="container-fluid ">
                <Link className="nav-link" to="welcome" offset={-60} smooth={true} duration={100}>en link til toppen</Link>
                <div className="justify-content-end">
                <div className="navbar-nav">
                    <Link className="nav-link" to="welcome" offset={-60} smooth={true} duration={100}>home</Link>
                    <Link className="nav-link" to="about" offset={-55} smooth={true} duration={100}>about</Link>
                    <Link className="nav-link" to="projects" offset={-55} smooth={true} duration={100}>projects</Link>
                    <Link className="nav-link" to="contact" offset={-55} smooth={true} duration={100}>contact</Link>
                </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar