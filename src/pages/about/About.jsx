import React from 'react'
import About1 from '../../components/about/About1'
import Contact1 from '../../components/contact1/Contact1'
import Footer from '../../components/footer/Footer'
import Hero from '../../components/hero/Hero'
import NavBar from '../../components/navbar/NavBar'

function About() {
    return (
        <div id='about'>
            <NavBar/>
            <Hero image="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFib3V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" content = "About Us"/>
            <About1/>
            <Contact1/>
            <Footer/>
        </div>
    )
}

export default About
