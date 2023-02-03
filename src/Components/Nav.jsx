import React from 'react'
import './Css/Nav.css'

function Nav() {
  return (
    <div className="container">
        <div className="nav_section">
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand text-white" href="#">
                    Sourav <span>Kundu</span>
                </a>
                <button className="navbar-toggler" style={{'border': 'none'}} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <i className="text-white fa fa-bars"></i>
                </button>
              
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <a className="nav-link" href="#" style={{'color':'#E03B8B'}} >Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about_section">About</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#skills_section">Skills</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#portfolio_section">Project</a>
                      </li>
                      
                      <li className="nav-item">
                        <a className="nav-link" href="#contact_section">Contact</a>
                      </li>
                  </ul>
                </div>
              </nav>
        </div>
    </div>
  )
}

export default Nav