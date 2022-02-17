import React from "react";
import "./meet.css";

function Meet() {
  return (
    <div className="meet">
      <div className="heading">Let's Meet</div>
      <div className="container">
        <div className="contact-us">
          <h3>Contact Us</h3>
          <form>
            <input type="text" placeholder="Name" name="user_name"/>
            <input type="email" placeholder="Email" name = "user_email" />
            <input type="text" placeholder="Enter Your Query" name = "user_message"/>
            <button type="Submit">Submit</button>
          </form>
        </div>
        <div className="map" style={{display:"block"}}>
          <iframe
            title="mits-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1950.2336512738757!2d78.20536477129471!3d26.231300861991052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c14c64938e5f%3A0x87b3d6a725f7b077!2sMadhav%20Institute%20of%20Technology%20%26%20Science!5e0!3m2!1sen!2sin!4v1642385358926!5m2!1sen!2sin"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Meet;
