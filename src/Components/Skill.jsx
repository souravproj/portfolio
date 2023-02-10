import './Css/Skill.css'
import React from 'react'
 function Skill() {
//    const skills=[
//      {
//     name:'Web Development',
//     width: '75%'
//   },
//   {
//     name:'JavaScript',
//     width: '60%'
//   },
//   {
//     name:'React JS',
//     width: '50%'
//   },
//   {
//     name:'Node JS',
//     width: '50%'
//   },
//   {
//     name:'Express Js',
//     width: '50%'
//   },
//   {
//     name:'Mongodb',
//     width: '60%'
//   },
//   {
//     name: 'JAVA',
//     width: '75%'
//   }
// ]

//   const ListOfSkills=skills.map((element,index)=>{
//     return (
//       <>
//       <span>{element.name}</span>
//               <div className="progress">
//                 <div className="progress-bar bg-success" role="progressbar" style={{'width': '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
//               </div>
//               </>
//     )
//   })
    
    
    
   















   const Semiskills=['web Design','Web Development','Core Java']
   const ListOfSemiSkills=Semiskills.map((element)=>{
      return(
    <li className="list-group-item">
       <a>{element}</a>
  </li>
      )
   })

  return (
    <div id="skills_section">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 skills_section_left_section">
          <div>
            <h1 className="text-white" id="heading">My Skills <span style={{'color': '#E03B8B'}}>.</span></h1>
          <hr/>
          <p>I am expertise in <span style={{'color': '#E03B8B'}}>.</span></p>
          <div className="social_media_icons">
            <ul className="list-group">
             {ListOfSemiSkills}
              
            </ul>
          </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 skills_section_right_section">
          <div>
            <div className="each_skills">
              <span>Web Development</span>
              <div className="progress">
                <div className="progress-bar bg-success" role="progressbar" style={{'width': '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>

              
              <span>JavaScript</span>
              <div className="progress">
                <div className="progress-bar bg-success" role="progressbar" style={{'width': '60%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>

              <span>React JS</span>
              <div className="progress">
                <div className="progress-bar bg-success" role="progressbar" style={{'width': '50%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>

              <span>Node JS</span>
              <div className="progress">
                <div className="progress-bar bg-success" role="progressbar" style={{'width': '50%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>

              <span>Express Js</span>
              <div className="progress">
                <div className="progress-bar bg-success" role="progressbar" style={{'width': '50%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>

              <span>Mongodb</span>
              <div className="progress">
                <div className="progress-bar bg-success" role="progressbar" style={{'width': '65%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>

              <span>JAVA</span>
              <div className="progress">
                <div className="progress-bar bg-success" role="progressbar" style={{'width': '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
export default Skill
