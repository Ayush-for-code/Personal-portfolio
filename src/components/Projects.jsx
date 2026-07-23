import React from 'react'
import project from "/images/project1.png"
import project1 from "/images/project2.jpg"
import project3 from "/images/project3.png"
import project4 from "/images/project4.png"

function Projects() {
  return (
    <div>
      <div className="container">
        <h1> Recent Projects</h1>
       <a href="" className="project-container">
         <img src={project3} alt="" />
        <div className="context-area">
           <h3>Music portfoio</h3>
           <div className="project-skill">
            <span>react</span> 
            <span>express</span> 
            <span>figma</span> 
           </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aut quam minima</p>
        </div>  
       </a>
       
    </div>
      <div className="container">
      <a href="" className="project-container">
          <img src={project4} alt="" />
        <div className="context-area">
           <h3>E-commerce</h3>
             <div className="project-skill">
            <span>react</span> 
            <span>express</span> 
            <span>monogo</span> 
           </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aut quam minima</p>
        </div> 
      </a>
       
    </div>
    </div>
  )
}

export default Projects
