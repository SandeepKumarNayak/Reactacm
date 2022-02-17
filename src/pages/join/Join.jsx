import React from 'react';
import Footer from '../../components/footer/Footer';
import Hero from '../../components/hero/Hero';
import MembershipBenifits from '../../components/memberbenifits/MembershipBenifits';
import NavBar from '../../components/navbar/NavBar';

function Join() {
  return <div id='join'>
  <NavBar/>
  <Hero image="https://media.istockphoto.com/photos/futuristic-city-vr-wire-frame-with-group-of-people-picture-id1299624974?b=1&k=20&m=1299624974&s=170667a&w=0&h=ZP1-ILC_09VLmaHoa1_4jYnwX7CFuGkxtoRyXNKcET0=" content = "ACM MITS Membership"/>
  <MembershipBenifits/>
  <Footer/>
  </div>;
}

export default Join;

