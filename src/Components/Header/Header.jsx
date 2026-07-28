import React from 'react'
import './Header.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
const Header = () => {
  const navigate=useNavigate();
  return (
    <div className='header'>
        <div className='headerleft'>
        <h2 style={{color:'#F5F5F7'}}>HI,</h2> 
            <h2>I'm Aftab ahmad</h2>
            <h2>Frontend developer</h2>

            <button onClick={()=>{navigate('/contact')}}>Get in touch <i className="fa-solid fa-link"></i></button>
            
        </div>
      
    </div>
  )
}

export default Header
