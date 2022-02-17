import React from 'react'
import './contact1.css'
function Contact1() {
  return (
    <div className="contact1">
        <h2 className='heading'>Get in Touch</h2>
        <div className="container">
            <div className="contact-card">
                <p><i className="fas fa-home"></i></p>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <p>Cse department Mits Gwalior</p>
            </div>
            <div className="contact-card">
                <p><i className="fas fa-phone-alt"></i></p>
                <p>Lorem ipsum dolor sit amet. lorem ffdf </p>
                <p>+91 9131562239</p>
            </div>
            <div className="contact-card">
                <p><i className="far fa-envelope"></i></p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <p>acmmits@gmail.com</p>
            </div>
        </div>
    </div>
  )
}

export default Contact1