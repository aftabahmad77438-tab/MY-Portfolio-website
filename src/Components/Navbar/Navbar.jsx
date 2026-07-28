import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = ({ mood, setmood }) => {


  const [menu, setmenu] = useState('home');
  const toggletheme = () => {
    if (mood.backgroundColor === 'white') {
      setmood({
        backgroundColor: 'black',
        color: '#F5F5F7'
      })
    } else {
      setmood({ backgroundColor: 'white', color: '#0D1117' })
    }
  }
  return (
    <div className='navbar'>

      <div className="logo">
        <h4>__aftab ahmad</h4>
      </div>

      <div className="li">
        <ul>
          <li onClick={() => setmenu('home')}>
            <Link to='/'>Home</Link>
            {menu === 'home' && <hr className={mood.backgroundColor === 'white' ? 'a' : 'b'} />}
          </li>

          <li onClick={() => setmenu('about')}>
            <Link to='/about'>About Me</Link>
            {menu === 'about' && <hr className={mood.backgroundColor === 'white' ? 'a' : 'b'} />}
          </li>

          <li onClick={() => setmenu('project')}>
            <Link to='/project'>Projects</Link>
            {menu === 'project' && <hr className={mood.backgroundColor === 'white' ? 'a' : 'b'} />}
          </li>

          <li onClick={() => setmenu('contact')}>
            <Link to='/contact'>Contacts</Link>
            {menu === 'contact' && <hr className={mood.backgroundColor === 'white' ? 'a' : 'b'} />}
          </li>

         
        </ul>

      </div>

      <div className="ld">

        <div className="moods">
          {mood.backgroundColor === 'white' ? <i onClick={toggletheme} className="fa-solid fa-sun"></i> : <i onClick={toggletheme} className="fa-regular fa-moon"></i>}

        </div>

        <div className="email">
      <a href='https://www.linkedin.com/in/aftab-ahmad-9a4aa1412?utm_source=share_via&utm_content=profile&utm_medium=member_ios'><i className="fa-brands fa-linkedin"></i></a>  
        </div>


      </div>

    </div>
  )
}

export default Navbar
