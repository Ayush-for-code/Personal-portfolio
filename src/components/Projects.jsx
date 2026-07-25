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

<div className="demo">
<a href="https://music-portfolio-blond.vercel.app/" target='_blank'>
   <span>Live demo</span>
             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/></svg>
</a>
<a href="https://github.com/Ayush-for-code/E-commerce" target='_blank'>
   <span>GitHub</span>
             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/></svg>
</a>

</div>
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
           

<div className="demo">
<a href="https://e-commerce-pink-eta-92.vercel.app/" target='_blank'>
   <span>Live demo</span>
             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/></svg>
</a>
<a href="https://github.com/Ayush-for-code/E-commerce" target='_blank'>
   <span>GitHub</span>
             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/></svg>
</a>

</div>        </div> 
      </a>
       
    </div>
    </div>
  )
}

export default Projects
