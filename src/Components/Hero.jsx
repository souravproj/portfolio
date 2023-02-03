import React from 'react'
import './Css/Hero.css'

function Hero() {
  return (
    <div className="hero_section">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-6 col-ms-12 col-xs-12">
                <h3>Hello</h3>
                <h1>I<span>'</span>m Sourav Kundu</h1>
                <h2>I am a Full Stack Web Developer who loves to make a web application</h2>
               
            </div>
            <div className="col-lg-6 col-md-6 col-ms-12 col-xs-12">
                <center>
                    <img src="assets/img/pic.jpg" alt=""/>
                </center>
            </div>
            
        </div>
    </div>
</div> 
  )
}

export default Hero