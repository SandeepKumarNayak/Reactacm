import React from 'react';
import Contact1 from '../../components/contact1/Contact1';
import Footer from '../../components/footer/Footer';
import Hero from '../../components/hero/Hero';
import NavBar from '../../components/navbar/NavBar';
import Meet from '..//../components/meet/Meet';

function Contact() {
  return<div id='contact'>
      <NavBar/>
      <Hero image="https://media.istockphoto.com/photos/cyber-security-it-engineer-working-on-protecting-network-against-picture-id1322517295?b=1&k=20&m=1322517295&s=170667a&w=0&h=x4Kmx8fQytr6VPfuKwE381xf-rfiBFctyXvpb7o5ju8=" content="Acm Contact Page"/>
      <Meet/>
      <Contact1/>
      <Footer/>
  </div>
}

export default Contact;
