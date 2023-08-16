import React from 'react'
import './testimonial.css'
import Image1 from '../../assets/avatar-1.svg'
import Image3 from '../../assets/avatar-2.svg'

import { Pagination } from 'swiper/modules';
import {Swiper ,SwiperSlide} from 'swiper/react'

import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    image: Image1,
    title: "Tushar Gomkar",
    subtitle: "Product designer at Dribble",
    comment:
      "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
  },
  {
    id: 2,
    image: Image3,
    title: "Ram Gopal",
    subtitle: "Product designer at Dribble",
    comment:
      "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
  },
];
const Testimonial = () => {
  return (
     <section className='testimonials container section'>
        <h2 className='section__title'>Reviews</h2>

        <Swiper className='testimonials__container grid'
        //install Swipper modules
        modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}   
          loop={true}      
          grabCursor={true} 
          pagination={{ clickable: true }}      

        >
          {data.map(({id,image,title,subtitle,comment})=>{
              return(
                <SwiperSlide className='testimonial__item' key={id}>
                  <div className='thumb'>
                     <img src={image} alt="" />
                  </div>
                  <h3 className='testimonials__title'>{title}</h3>
                  <span className='subtitle'>{subtitle}</span>
                  <div className='comment'>{comment}</div>
             </SwiperSlide>
              )
          })}
        </Swiper>
     </section>
  )
}

export default Testimonial