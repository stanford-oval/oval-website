// src/components/MySwiper.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function MySwiper() {
  return (
    <Swiper>
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
    </Swiper>
  );
}