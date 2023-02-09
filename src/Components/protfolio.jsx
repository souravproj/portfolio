import React from 'react'
import './Css/protfolio.css'

function protfolio() {

    const images=[
      {
        link:'https://souravproj.github.io/Random-Picture-/',
        img:'assets/img/gallary.png'
      },
      {
        link:'https://souravproj.github.io/Live-Weather-App/',
        img:'assets/img/weather.png'
      },
      {
        link:'https://souravproj.github.io/Voice-Calculator/',
        img:'assets/img/Screenshot 2023-01-16 151221.png'
      }
    ]
  
    const ListOfImages=images.map((element,index)=>{
      return(
        <div className="card border-0 padding-0">
        <a href={element.link}>
          <img className="card-img-top" src={element.img} alt=""/>
        </a>
      
      </div>
      )
    })
  
  
    const fullproj=[
      {
        projlink:'https://sourav-news.herokuapp.com/',
        img:'assets/img/newspaper.png'
      }
    ]
    const ListOffullproj=fullproj.map((link,index)=>{
      return(
        <div className="card border-0 padding-0">
        <a href={link.projlink}>
          <img className="card-img-top" src={link.img} alt=""/>
        </a>
      </div>
      )
    })


  return (
    <div id="portfolio_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">

            <h1 className="text-white text-center">My Portfolio <span style={{'color':'#E03B8B'}}>.</span></h1>



          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <nav className="d-flex justify-content-center" >
              <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                <a className="nav-item nav-link active text-white" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Frontend</a>
                <a className="nav-item nav-link text-white" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">FullStack</a>
                 <a className="nav-item nav-link text-white" id="nav-profile-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-profile" aria-selected="false">react JS</a> 
              </div>
            </nav>
            <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
              <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
              <div className="card-columns">
                {ListOfImages}

             
               

              </div>
              </div>
              <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                <div className="card-columns">
                  {ListOffullproj}
                  
                  
                </div>
              </div>
             
               {/* <div className="tab-pane fade" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab">
                Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam. Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit non irure adipisicing aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non minim occaecat. Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.
              </div>  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default protfolio;