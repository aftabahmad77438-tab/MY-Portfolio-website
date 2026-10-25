import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'
import aboutimage from '../../assets/aboutimage.jpeg'
import resume from '../../assets/resume.pdf'
const About = () => {
  return (
    <div className='about'>
      <div className="parag">

        <h2>About Me <i className="fa-solid fa-circle-user"></i></h2>
        <div className="first">
          <p>
            I'm a passionate MERN stack  Developer<br></br> who loves turning complex 
          problems  into elegant,<br></br> user-friendly interfaces.With a strong foundation <br></br>
         in modern   JavaScript and a keen eye for design, <br></br>I specialize in building responsive,
            high-performance <br></br>web applications that deliver exceptional user experiences.
          </p>
        </div>
        <div className="second">
          <p>
            My journey in web development began with a<br></br> curiosity for how things work
            online, and today<br></br> I'm dedicated to creating digital solutions that make a<br></br>
            difference. When I'm not coding, I explore new technologies,<br></br> contribute to
            open-source projects, and continuously push <br></br>the boundaries of what's possible
            on the web.
          </p>
        </div>
      <button> <a className='resume' href={resume}> Download resume <i className="fa-solid fa-download"></i></a>     </button>   
        
        </div>

        <div className="image">
          <img src={aboutimage}/>
        </div>


      


    </div>
  )
}

export default About
