import React from 'react';
import './App.css';
import About from './component/about/About'
import Home from './component/home/Home'
import Portfolio from './component/portfolio/Portfolio'
import Resume from './component/resume/Resume'
import Skills from './component/skills/Skills'
import Sidebar from './component/sidebar/Sidebar'
import Testimonial from './component/testimonials/Testimonial'
import Blog from './component/blog/Blog'
import Contact from './component/contact/Contact'
import PreLoader from './component/preLoader/PreLoader';
function App() {
  return (
         <>
              <PreLoader/>
              <Sidebar/>
              <main className='main'>
                 <Home/>
                 <About/>
                 <Skills/>
                 <Resume/>
                 <Portfolio/>
                 <Testimonial/>
                 <Blog/>
                 <Contact/>
              </main>
         </>
  );
}

export default App;
