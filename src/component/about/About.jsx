import React from 'react'
import './about.css'
import AboutAv from "../../assets/avatar-2.svg";
import AboutBox from './AboutBox';
const About = () => {
  return (
   <section className='about container section' id='about'>
        <h2 className="section_title">
          About Me
        </h2>

        <div className='about__container grid'>
          <img src={AboutAv} alt="AboutAv" className='about__img' />
          
          <div className='about__data grid'>
              <div className='about__info'>
                <p className='about__description'>
                I am Tushar Gomkar, web developer from Nagpur, India. 
                I have rich experience in web site design and building and customization, also I am good at MERN.
                </p>
                <a href="https://github.com/tushargomkar/tushargomkar/blob/main/Tushar_Gomkar-Resume.pdf" className='btn'>  
                    Download CV
                </a>
                
              </div>

               <div className='about__skills grid '>
                   <div className='skills__data' > 
                          <div className='skills__titles'>
                                 <h3 className='skills__name'> 
                                 Front End                            
                                 </h3>
                                 <span className='skills__number '>90%</span>
                          </div>
                          <div className='skills__bar'>

                            <span className='skills__percentage developement'></span>
                          </div>

                          <div className='skills__titles'>
                                 <h3 className='skills__name'> 
                                 Back End                           
                                 </h3>
                                 <span className='skills__number '>80%</span>
                          </div>
                          <div className='skills__bar'>

                            <span className='skills__percentage deve1'></span>
                          </div>


                          <div className='skills__titles'>
                                 <h3 className='skills__name'> 
                                 SQL                            
                                 </h3>
                                 <span className='skills__number '>70%</span>
                          </div>
                          <div className='skills__bar'>

                            <span className='skills__percentage deve2'></span>
                          </div>

                   </div>
               </div>
          </div>
        </div>

        <AboutBox/>
   </section>
  )
}

export default About