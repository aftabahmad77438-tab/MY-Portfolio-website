import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header';
import About from './Components/About/About'
import Project from './Components/Project/Project'
import Contact from './Components/Contact/Contact'
import { Routes, Route } from 'react-router-dom';
import Headerpage from './Pages/Headerpage';
import Aboutpage from './Pages/Aboutpage';
import Projectpage from './Pages/Projectpage';
import Contactpage from './Pages/Contactpage';

const App = () => {

  const [mood, setmood] = useState({
    backgroundColor: 'black',
    color: 'white'
  });
  return (
    <div style={{
      backgroundColor: mood.backgroundColor,
      color: mood.color
    }}>


      <Navbar mood={mood} setmood={setmood} />
   
        <Routes>
          <Route path='/' element={<Headerpage />} />
          <Route path='/about' element={<Aboutpage />} />
          <Route path='/project' element={<Projectpage />} />
          <Route path='/contact' element={<Contactpage />} />


        </Routes>







    



    </div>
  )
}

export default App
