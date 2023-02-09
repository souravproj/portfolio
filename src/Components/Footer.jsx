import React from 'react'
import './Css/Footer.css'


function Footer() {

  const skills=['Web Development','Web Design','Machine Learning']
  const ListOfSkills=skills.map((element)=>{
    return(
      <li className="list-group-item border-0 bg-transparent">
         <i className="fa fa-chevron-right"></i> <span>{element}</span>
       </li>
    )
  })
  return (
    <div className="footer-area">
    <div className="container">
      <div className="row py-5">
       <div className="logo-area col-lg-4 col-md-4 col-sm-12 col-12">
         <a href=" " className="navbar-brand text-white">
          Sourav Kundu<span style={{'color': '#F87652'}}></span>
         </a>
         <p>I'm always ready to take webdevloper jobs</p>
         <div className="links">
          <a href="https://www.facebook.com/profile.php?id=100088729851889"><i className="fa fa-facebook-square animate_animated"></i></a>
         <a href="https://github.com/souravproj"><i className="fa fa-github animate_animated"></i></a> 
          <a href="https://www.linkedin.com/in/sourav-kundu-b9b369221/"><i className="fa fa-linkedin px-1 animate_animated"></i></a> 
         </div>
       </div>

       <div className="col-lg-4 col-md-4 col-sm-12 col-12 column">
       <h4 className="heading">Skills<span style={{'color': '#F87652'}}>.</span></h4>
       <ul className="list-group">
         {ListOfSkills}
      
       </ul>
       </div>

       <div className="col-lg-4 col-md-4 col-sm-12 col-12 column">
         <h4 className="heading">Links<span style={{'color': '#F87652'}}>.</span></h4>
         <ul className="list-group">
         <li className="list-group-item border-0 bg-transparent">
           <a href="https://github.com/souravproj">
             <i className="fa fa-chevron-right"></i> <span className="text-white">github</span>
           </a>
           
         </li>
 
         <li className="list-group-item border-0 bg-transparent">
           <a href="https://www.linkedin.com/in/sourav-kundu-b9b369221/">
             <i className="fa fa-chevron-right"></i> <span className="text-white">Linkedin</span>
           </a>
         </li>
 
         
         </ul>
         </div>
      </div>
    </div>
  </div>
  
  )
}

export default Footer