import React from 'react'
import './Css/Contact.css'

function Contact() {
  return (
    <div id="contact_section">
      <div className="container">
        <div className="row m-0">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div>
              <h3 className="heading">Contact Me <span style={{'color': '#F87652'}}>:-</span></h3>
              <hr/>
              <p className="txt">Feel free to contact with me </p>
              <form>
                <div className="form-group">
                  <input className="form-control" placeholder="Your Name" type="text" required/>
                </div>

                <div className="form-group">
                  <input className="form-control" placeholder="Subject" type="text" required/>
                </div>

                <div className="form-group">
                  <textarea className="form-control" placeholder="type your message ...." name="" id="" cols="30" rows="10" required></textarea>
                </div>

                <div className="form-group">
                  <button className="btn btn-light animate_animated" type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div>
            <ul className="list-unstyled">
              <li>
                <i className="fa fa-envelope-o"></i> souravkundu1920@gmail.com
              </li>
              <li>
                <i className="fa fa-phone"></i> +91 9382397762
              </li>
            </ul>
          </div>
          <div className="map_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59007.272608277926!2d87.28354384030013!3d22.430736875386554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d5b398c19fb15%3A0x5e88bcfa42e549cd!2sMidnapore%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1673801973076!5m2!1sen!2sin" width="400" height="413" style={{'border':'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>   
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact