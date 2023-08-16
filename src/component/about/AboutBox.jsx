import React from 'react'

const AboutBox = () => {
  return (
    <div className='about__boxes grid'>
      <div className="about__box">
          <i className="about__icon icon-fire"></i>

          <div>
             <h3 className="about__title">19</h3>
             <span className="about__subtile">Project completed</span>
          </div>
       
      </div> 


      <div className="about__box">
          <i className="about__icon icon-cup"></i>

          <div>
             <h3 className="about__title">10</h3>
             <span className="about__subtile">Cup of coffee</span>
          </div>
       
      </div>


     <div className="about__box">
          <i className="about__icon icon-screen-desktop"></i>

          <div>
             <h3 className="about__title ">3</h3>
             <span className="about__subtile">Ongoing Project</span>
          </div>
       
      </div>


      <div className="about__box">
          <i className="about__icon icon-badge"></i>

          <div>
             <h3 className="about__title">1</h3>
             <span className="about__subtile">Certificate</span>
          </div>
       
      </div>




    </div>
  )
}

export default AboutBox