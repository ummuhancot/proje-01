"use client"
import React from 'react'
import {Swiper, SwiperSlide }from 'swiper/react';
import "swiper/css";
import slider from "@/helpers/data/slider.json";
import Image from 'next/image';



//menu 
const Slider = () => {
  return (
      <Swiper style={{marginTop:"30px",
        marginBottom:"30px"
      }}
      spaceBetween={50}
      slidesPerView={3}
      autoplay={{
        delay:100,
        disableOnInteraction:false
      }}
      pagination={{
        clickable:true
      }}
      navigation={true}
     
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >

      {slider.map((item) => (
        <SwiperSlide key={item.id} style={{ height: "200px", width: "200px" , position:"relative"}}>
          <Image src={`/minato/${item.image}`} fill />
          
          
        
          {item.title}
         
        </SwiperSlide>
      ))}
    </Swiper>

  /*   <Carousel fade interval={3000} controls={false} indicators={true} className='m-5'>
      {slider.map((item) => (
        <Carousel.Item key={item.id}>
          {item.title}
          <Image
            src={`/minato/${item.image}`}
            width={600}
            height={642}
            alt="carousel"
          />
        </Carousel.Item>
      ))}
    </Carousel> */
  );
}

export default Slider