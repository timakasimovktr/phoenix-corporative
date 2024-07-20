import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import arbit from "../../../images/3 (3).png";
import phoenix from "../../../images/PhoenixLogo 1.png";
import rcd from "../../../images/rcd 1 1.png";
import ofb from "../../../images/OFB-01 (2).png";
import anor from "../../../images/Anorbank-01.png";
import nbu from "../../../images/NBU-01_bdybU3Y.png";

import "./styles.sass";
import "swiper/css";

const PartnersSlider = () => {
  const partnersLogos = [
    { id: 1, logo: arbit },
    { id: 2, logo: phoenix },
    { id: 3, logo: rcd },
    { id: 4, logo: ofb },
    { id: 5, logo: anor },
    { id: 6, logo: nbu },
  ];
  return (
    <div id='partners'>
      <Swiper
        spaceBetween={50}
        slidesPerView={6}
        loop={true}
        autoplay={{ delay: 100 }}
        freeMode={true}
        modules={[Autoplay]}
        speed={1200}
        className='partnersSlider'
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          420: {
            slidesPerView: 2,
          },
          577: {
            slidesPerView: 3,
          },
          911: {
            slidesPerView: 3,
          },
          1100: {
            slidesPerView: 5,
          },
        }}
      >
        {partnersLogos.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='imagesBlock'>
              <img
                src={item.logo}
                alt={item.logo}
                className='img'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PartnersSlider;
