import React from 'react';
import Comingmoon from '../comingsoon/Comingmoon';
import './upcoming.css'
function Upcoming() {
  return <div>
      <div className="upcoming">
          <div className="heading">Upcoming Event</div>
          <div className="upcoming-poster">
              <div className="image">
                  <img src="images/acmtalk.jpeg" alt="" />
              </div>
              <div className="coming-soon-page">
                  <h2>ACM Talks Starts in</h2>
                  <Comingmoon/>
                  <div className="links">
                      <a href="/">Register</a>
                      <a href="/">Learn More...</a>
                  </div>
              </div>
          </div>
      </div>
  </div>;
}

export default Upcoming;
