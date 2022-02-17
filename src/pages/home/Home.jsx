import React from 'react'
import Contact1 from '../../components/contact1/Contact1'
import Event from '../../components/event/Event'
import Footer from '../../components/footer/Footer'
import Hero from '../../components/hero/Hero'
import Initiative from '../../components/initiative/Initiative'
import NavBar from '../../components/navbar/NavBar'
import Post from '../../components/posts/Post'
import Team from '../../components/team/Team'
import WhyAcm from '../../components/whyacm/WhyAcm'

function Home() {
    
    return (
         <div id='home'>
         <NavBar/>
         <Hero image="images/298.jpg" content="Welcome to MITS ACM"/>
         <WhyAcm/>
         <Event/>
         <Post val = {3}/>
         <Initiative/>
         <Team/>
         <Contact1/>
         <Footer/>
         </div>
    )
}
export default Home