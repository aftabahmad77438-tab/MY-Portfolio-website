import React from 'react'
import './Project.css'
import news from '../../assets/news.jpeg'
import digitalsolution from '../../assets/digitalsolution.jpeg'
import fooddelivery from '../../assets/fooddelivery.jpeg'
import ecommerce from '../../assets/ecommerce.jpeg'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGithub } from "react-icons/fa";
const Project = () => {
  const array=[
          {_image:news,
            name:'News webpage',
            desc:'A news webpage that fetch latest news from an API.'

          },
          {_image:digitalsolution,
            name:'Agency website',
            desc:'Agency website through which you an convert your ideas into digital world.'

          },
          {_image:fooddelivery,
            name:'Food delivery website',
            desc:'order your food now in just 5 minutes.'

          },
          {_image:ecommerce,
            name:'Ecommerce website',
            desc:'online shop which faciliate you to do shopping from your home.'

          }

  ]
  return (
    <div className='project'>

            <div className="tools">
              <h2>Tools</h2>
              <hr/>

              <ul className='div'>
                <li><FaHtml5 className='icon'/>HTML</li>
                <li><FaCss3Alt className='icon'/>CSS</li>
                <li><FaJs className='icon'/>JAVASCRIPT</li>
                <li><FaReact className='icon'/>REACT</li>
                <li><FaBootstrap className='icon'/>BOOTSTRAP</li>
                <li><FaGithub className='icon'/>GITHUB</li>
              </ul>


              
            </div>

          <h2>MY Projects</h2>
          <hr/>

          <div className="proj">

                  {array.map((item,index)=>{
                    return (
                      <div key={index} className="separate">

                        <img src={item._image}/>
                        <h3>{item.name}</h3>
                        <p>{item.desc}</p>

                        <button > <a href='https://github.com/aftabahmad77438-tab'>check out at github<i className="fa-brands fa-github"></i></a> </button>

                      </div>

                    )
                  })}



          </div>

        <div className="end">
          <p>if you are intrested in my work,check it out all my projects on  my github account.</p>
          <button > <a href='https://github.com/aftabahmad77438-tab'>My github <i className="fa-brands fa-github"></i></a> </button>

        </div>


      
    </div>
  )
}

export default Project
