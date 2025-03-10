import React, { useEffect } from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import runBackGroundScript from "../../Components/Hero/app.js"

const Hero = () => {
    useEffect(() => {
        runBackGroundScript();
    }, []);
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" width="300px" height="300px"/>
        <h1>I'm <span>Venkat, a software engineer</span></h1>
        <p>Sophomore at Princeton University studying Computer Science, ML, and neuroscience</p>
        <div className="hero-action">
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/venkat-subramanian5">
              <div className="hero-connect">Connect with me</div>
            </a>
            <div className="hero-resume">My resume</div>
        </div>

        <canvas id="dotsCanvas"></canvas>
        
    </div>

   
  )
}

export default Hero