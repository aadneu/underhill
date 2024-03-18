import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div>
          <nav className="navbar navbar-expand-lg fixed-top " data-bs-theme='dark'>
            <div className="container-fluid ">
                <Link className="nav-link" to="welcome" offset={-60} smooth={true} duration={100}>en link til toppen</Link>
                <div className="justify-content-end">
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav ">
                    
                      <Link className="nav-link active" to="welcome" offset={-60} smooth={true} duration={100}>home</Link>
                      <Link className="nav-link" to="about" offset={-55} smooth={true} duration={100}>about</Link>
                      <Link className="nav-link" to="projects" offset={-55} smooth={true} duration={100}>projects</Link>
                      <Link className="nav-link" to="contact" offset={-55} smooth={true} duration={100}>contact</Link>
                  </div>
                  </div>
                </div>
            </div>
        </nav>
        {/* <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme='dark'>
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
      </div>
    </div>
  </div>
</nav> */}
    </div>
  )
}

export default Navbar