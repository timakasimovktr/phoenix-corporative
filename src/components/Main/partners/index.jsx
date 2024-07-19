import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import arbit from "../../../images/arbit 1.png";
import phoenix from "../../../images/PhoenixLogo.svg";
import rcd from "../../../images/rcd 1 1.png";
import ofb from "../../../images/OFB-01.png";
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
    <div>
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
            slidesPerView: 2,
          },
          420: {
            slidesPerView: 3,
          },
          577: {
            slidesPerView: 4,
          },
          911: {
            slidesPerView: 5,
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
