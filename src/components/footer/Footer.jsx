import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

function Footer() {
    return (
         <div className="footer">
             <div className="container1">
                 <p className='footer-title'>Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
                 <p className='footer-content'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus suscipit, voluptatibus voluptate perferendis accusamus tempore, repellat optio doloremque totam eligendi illo reprehenderit laborum neque quae?</p>
                 <a href="/">Join</a>
             </div>
             <div className="container2">
                  <p>acm students chapter mits</p>
                  <div className="footer-links">
                      <Link className='link' to="/">Home</Link>
                      <Link className='link' to="/about">About</Link>
                      <Link className='link' to="/contact">Contact Us</Link>
                      <Link className='link' to="/blog">Blogs</Link>
                      <Link className='link' to="/event">Events</Link>
                      <Link className='link' to="/join">Join</Link>
                  </div>
                  <div className="social-links">
                      <a href="/"><i className="fab fa-facebook-square"></i></a>
                      <a href="/"><i className="fab fa-instagram-square"></i></a>
                      <a href="/"><i className="fab fa-twitter-square"></i></a>
                      <a href="/"><i className="fab fa-linkedin"></i></a>
                      <a href="/"><i className='fab fa-facebook-square'></i></a>
                  </div>
                  <div className="rights">
                      <p>&copy; ACM MITS all rights resered.</p>
                  </div>
                  <div className="devloper">
                      <p><span>Privacy Policy | Terms & condition | </span><span>Devloped By | </span><span>Sandeep Nayak</span></p>
                  </div>
                   
             </div>
         </div>
    )
}

export default Footer
