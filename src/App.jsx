import { useState } from 'react'
import Navbar from "./components/navbar"
import Hero from "./components/Hero"
import Skills from "./components/skills"
import Contact from "./components/contact"
import Footer from "./components/footer"
import Services from "./components/services"
import Projects from "./components/Projects"

import './App.css'

function App() {

  return (
    <>   
      
       <Navbar/>
       <Hero/>
    
       
      
      <Skills/>
      <Projects/>
      <Services/>
      <Contact/>
      <Footer/>
      
    </>
  )
}

export default App
