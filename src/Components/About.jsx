import React from 'react'
import './Css/About.css'

function About() {
  return (
    <div id="about_section">
      <div class="container">
        <div class="row m-0">
          <div class="col-lg-6 col-md-6 col-ms-12 col-xs-12">
            <h2 id="heading">Welcome to Everyone</h2>
            <div>
              <h5 class="lets_talk">Let's Talk <span style={{'color': '#E03B8B'}}>------------------</span> </h5>
            </div>
            <h4 id="info_gmail">souravkundu1920@gmail.com</h4>
            <div class="contact_info">
              <h5>@souravproj</h5>
              <h5>+91 9382397762</h5>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-ms-12 col-xs-12 about_me_right_section">
            <h2 id="heading">About Me</h2>
            <hr/>
            <p id="txt">Hello , I'm Sourav Kundu a 4th year B.tech CSE student of GMIT College</p>
            <table class="table">
              <tr>
                <td>Name</td>
                <td>:</td>
                <td>Sourav Kundu</td>
              </tr>

              <tr>
                <td>Email</td>
                <td>:</td>
                <td>souravkundu1920@gmail.com</td>
                </tr>

            </table>
            <a href="assets/img/Sourav_Kundu.pdf" download="Sourav's_resume">
              <p>
            <button class="btn btn-light btn-sm animate_animated">Download CV</button>
          </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

