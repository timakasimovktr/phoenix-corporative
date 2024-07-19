import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// import urionBefore from "../../../images/urionBefore.png";
import VisuBefore from "../../../images/VisuCapsBefore.png";
import hypertBefore from "../../../images/hyperBefore.png";
import diabeticBefore from "../../../images/diabeticBefore.png";
import mensBefore from "../../../images/mensAfter.png";
import ParazitOFFBefore from "../../../images/ParazitOFFBefore.png";
import slimftBefore from "../../../images/slimftBefore.png";
import growBefore from "../../../images/geowBefore.png";

import "swiper/css";
import ProductsCard from "../ProductsCard";
import { useTranslation } from "react-i18next";

const ProductSlider = () => {
  const { t } = useTranslation();
  const ProductSliderItems = [
    {
      id: 1,
      title: "Visu Caps",
      description: `${t("blocks.productsBlock.description2")}`,
      cardImage: VisuBefore,
      imageAlt: "Visu",
    },
    {
      id: 2,
      title: "Гипертофорт",
      description: `${t("blocks.productsBlock.description3")}`,
      cardImage: hypertBefore,
      imageAlt: "hypert",
    },
    {
      id: 3,
      title: "Диабетик Форте",
      description: `${t("blocks.productsBlock.description4")}`,
      cardImage: diabeticBefore,
      imageAlt: "diabetic",
    },
    {
      id: 4,
      title: "Mens Power",
      description: `${t("blocks.productsBlock.description5")}`,
      cardImage: mensBefore,
      imageAlt: "mens",
    },
    {
      id: 5,
      title: "ParazitOFF",
      description: `${t("blocks.productsBlock.description6")}`,
      cardImage: ParazitOFFBefore,
      imageAlt: "ParazitOFF",
    },

    {
      id: 6,
      title: "SLIMFIT",
      description: `${t("blocks.productsBlock.description7")}`,
      cardImage: slimftBefore,
      imageAlt: "slimft",
    },
    {
      id: 7,
      title: "Grow X",
      description: `${t("blocks.productsBlock.description8")}`,
      cardImage: growBefore,
      imageAlt: "Power",
    },
  ];
  return (
    <div className='imgWithTxtImg'>
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
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
            slidesPerView: 1,
          },
          577: {
            slidesPerView: 2,
          },
          650: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          911: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {ProductSliderItems.map((item, index) => (
          <SwiperSlide
            className='slideWrapper'
            key={index}
          >
            <ProductsCard
              cardImage={item.cardImage}
              imageAlt={item.imageAlt}
              title={item.title}
              description={item.description}
              link='/catalog'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
