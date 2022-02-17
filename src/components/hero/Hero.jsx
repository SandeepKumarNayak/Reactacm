import React from 'react'
import { Parallax } from 'react-parallax'
import { Link } from 'react-router-dom';
import './hero.css'

function Hero(props) {
    // console.log(props.image);
    return (
        <div className="hero">
            <Parallax bgImage={props.image} style={{ height:"100vh",width:'100%',position:'relative'}} bgImageStyle={{width:'100%',height:'100%'}} strength={500}>
                <div className="hero-content" style={{width:'100%',background:`rgb(0 0 0 / 47%)`,height:"100vh",boxSizing:'border-box',position:'abslute',display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}>
                    <div className="heading-section" style={{color:'white',textAlign:'center'}}>
                        <span className='welcome' data-text = "Welcome to mits amc">{props.content}</span><br />
                        <div className='tag'>Student chapter @mitsgwalior</div>
                    </div>
                    <div className="links">
                        <Link to="/join">Join</Link>
                        <Link to="/">Events</Link>
                    </div>
                </div>
            </Parallax>
        </div>
    )
}

export default Hero

 