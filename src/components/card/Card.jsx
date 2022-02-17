import React from "react";
import './card.css'
function Card(props) {
  return (
    <div className="card" data-aos="fade-up" data-aos-duration="1500">
      <div className="content">
        <div className="img-container">
          <img className="card-img" src={props.imgadd} />
        </div>
        <h4>{props.name}</h4>
        <h6>{props.position}</h6>
        <ul className="social-links">
          <li className="sci-item">
            <i className="fab fa-facebook-f"></i>
          </li>
          <li className="sci-item">
            <i className="fab fa-instagram"></i>
          </li>
          <li className="sci-item">
            <i className="fab fa-twitter"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;