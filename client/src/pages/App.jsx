import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import MyWork from '../Components/MyWork/MyWork'
import Contact from '../Components/Contact/Contact'
import Experience from '../Components/Experience/Experience'
import Footer from '../Components/Footer/Footer'
import './App.css'


const App = () => {
  return (
    <div className="full-app">
        <Navbar/>
        <Hero/>
        <Experience/>
        <MyWork/>
        <Contact/>
        <Footer/>
        

        
    </div>

    
    
  )
}

export default App