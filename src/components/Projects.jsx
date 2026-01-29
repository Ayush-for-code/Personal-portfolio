import React from 'react'
import project from "/images/project1.png"
import project1 from "/images/project2.jpg"

function Projects() {
  return (
    <div>
      <div className="container">
        <h1> Recent Projects</h1>
        <div className="project-container">
        <div className="image-container">
          <img src={project} alt="" />
        </div>
        <div className="context-area">
           <h3>Project name</h3>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aut quam minima</p>
        </div>      
    </div>
       
    </div>
      <div className="container">
        <div className="project-container">
        <div className="image-container">
          <img src={project1} alt="" />
        </div>
        <div className="context-area">
           <h3>Project name</h3>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aut quam minima</p>
        </div>      
    </div>
       
    </div>
    </div>
  )
}

export default Projects
