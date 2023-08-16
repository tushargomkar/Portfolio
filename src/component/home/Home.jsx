import React from 'react'
import './home.css'

import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'
import Shapes from './Shapes'
import Me from "../../assets/avatar-1.svg"
const Home = () => {
  return (
   <section className='home container' id='home'>
     <div className='intro'>
         <img src={Me} alt="Tushar" className="home_img" />
          <h1 className="home__name">Tushar Gomkar</h1>
          <span className="home__education">I am a MERN Stack Developer</span>

          <HeaderSocials/>

          <a href="#contact" className="btn">Hire Me</a>
          <ScrollDown/>
     </div>

     <Shapes/>

   </section>
  )
}

export default Home