"use client"
import React from 'react'
import {Swiper, SwiperSlide }from 'swiper/react';
import "swiper/css";
import slider from "@/helpers/data/slider.json";
import Image from 'next/image';
import { Carousel } from 'react-bootstrap';
import {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Mousewheel,
  A11y
} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 



//menu 
const Slider = () => {
  return (
    <Swiper
      style={{ marginTop: "30px", marginBottom: "30px" }}
      spaceBetween={5}
      slidesPerView={1}
      autoplay={{
        delay: 2000, // 2.5 saniyede bir geçiş
        disableOnInteraction: false, // Kullanıcı müdahale etse bile devam et
      }}
      /* effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      pagination={{ clickable: true }}
      coverflowEffect={{
        rotate: 50, // Slaytların döndürülme açısı
        stretch: 0, // Slaytlar arası boşluk
        depth: 100, // Z ekseni derinliği
        modifier: 1, // Efekt yoğunluğu
        scale: 1, // Slayt ölçeği
        slideShadows: true, // Gölge efekti
      }}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      className="mySwiper" */

      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      pagination={{ clickable: true }}
      mousewheel={true} // 👈 Bu satır mousewheel desteğini aktif eder
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        scale: 1,
        slideShadows: true,
      }}
      a11y={{
        enabled: true,
        prevSlideMessage: "Önceki slayt",
        nextSlideMessage: "Sonraki slayt",
        firstSlideMessage: "İlk slayttasınız",
        lastSlideMessage: "Son slayttasınız",
        paginationBulletMessage: "Slayt {{index}}",
      }}
      modules={[EffectCoverflow, Pagination, Autoplay, Mousewheel, A11y]}
      className="mySwiper"
      /*   pagination={{
        clickable: true,
      }} */
      navigation={true}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slider.map((item) => (
        <SwiperSlide
          key={item.id}
          style={{ height: "600px", width: "500px", position: "relative" }}
        >
          <h2 className='swiper'
            style={{
              position: "absolute",
              bottom: "20px", // alta yerleştirildi
              left: "50%",
              transform: "translateX(-50%)", // yatayda ortalamak için
              zIndex: 10,
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.6)", // daha hoş bir şeffaflık
              padding: "12px 20px",
              borderRadius: "12px",
              fontSize: "1.2rem",
              textAlign: "center",
              maxWidth: "90%",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)", // yumuşak gölge efekti
              
              fontWeight: "500",
              margin: "30px",
            }}
          >
            {item.title}
          </h2>

          <Image src={`/minato/${item.image}`} alt="mino" fill />
        </SwiperSlide>
      ))}
    </Swiper>

    /*    <Carousel fade interval={3000} controls={false} indicators={true} className='m-5'>
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