import React from 'react';
import Activity from '../../components/events/activity/Activity';
import Upcoming from '../../components/events/Upcoming';
import Footer from '../../components/footer/Footer';
import Hero from '../../components/hero/Hero';
import NavBar from '../../components/navbar/NavBar';

function Event() {
  return <div id='event'>
  <NavBar/>
  <Hero image = "https://media.istockphoto.com/photos/technology-abstract-picture-id1148091793?b=1&k=20&m=1148091793&s=170667a&w=0&h=T1XVCDK5e1OD0HKOUSiE6om2vXXnLlVhhLmmp6og6oU=" content = "ACM MITS EVENTS" />
  <Upcoming/>
  <Activity title="WorkShops"/>
  <Activity title="Quizze's"/>
  <Activity title="Coding Comptition & Hackathons"/>
  <Footer/>
  </div>;
}

export default Event;

