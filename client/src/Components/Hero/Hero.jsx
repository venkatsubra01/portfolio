import React, { useEffect } from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import runBackGroundScript from "../../Components/Hero/app.js"
import { motion } from "framer-motion"
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
    useEffect(() => {
        runBackGroundScript();
    }, []);
  return (
    <motion.div id='home' className='hero' initial = {{x: -100, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.7, ease: "easeOut" }}>
        <div className="left-section">
          <h1>I'm <span>Venkat, a software engineer</span></h1>
          <p>Sophomore at Princeton University studying Computer Science, ML, and neuroscience</p>
          <div className="hero-action">
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/venkat-subramanian5">
                <div className="hero-connect">Connect with me</div>
              </a>
              <div className="hero-contact"><AnchorLink className='anchor-link' offset={50} href='#contact'>Contact me</AnchorLink></div>
          </div>
        </div>
        <div className="right-section">
          <img src={profile_img} alt="" width="300px" height="300px"/>
        </div>
        

        <canvas id="dotsCanvas"></canvas>
        
    </motion.div>

   
  )
}

export default Hero