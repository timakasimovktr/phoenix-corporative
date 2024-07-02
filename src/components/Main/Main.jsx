import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCards, FreeMode } from "swiper/modules";
import "swiper/css/bundle";

import { APP_ROUTES } from "../../router/Route";
import axios from "axios";
import "./Main.scss";
import { useNavigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

//images
import complexSupport from "../../images/Complex-Sup-Woman.png";
import marketingLine from "../../images/Marketing-Line.svg";
import marketingLineBG from "../../images/Marketing-Half-line.svg";
import productItem from "../../images/productItem.png";
import productItemAfter from "../../images/productItemAfter.png";
import euphoriaRefferal from "../../images/Euphoria-refferal.png";
import sliderArrow from "../../images/sliderArrow.png";
import quotationMark from "../../images/“.svg";
import commentsRight from "../../images/commentsRight.png";
import commentsLeft from "../../images/commnetsLeft.png";
import person from "../../images/person.png";
import logistics from "../../images/logistics.jpg";
import callcenter from "../../images/callcenter.jpg";
import marketing from "../../images/marketing.png";

import Anfa from "../../images/Anfa.png";
import Visu from "../../images/Visu.png";
import hypert from "../../images/hypert.png";
import diabetic from "../../images/diabetic.png";
import mens from "../../images/mens.png";
import ParazitOFF from "../../images/ParazitOFF.png";
import slimft from "../../images/slimft.png";
import Power from "../../images/Power.png";

import mensWithoutBg from "../../images/mensWithoutBg.png";
import diabeticWithoutBg from "../../images/diabeticWithoutBg.png";
import VisuWithoutBg from "../../images/VisuWithoutBg.png";
import ParazitOFFWithoutBg from "../../images/ParazitOFFWithoutBg.png";
import hypertWithoutBg from "../../images/hypertWithoutBg.png";
import slimftWithoutBg from "../../images/slimftWithoutBg.png";
import PowerWihoutBg from "../../images/PowerWihoutBg.png";
import AnfaWihoutBg from "../../images/AnfaWihoutBg.png";

import euphoria from "../../images/5.png";
import arbit from "../../images/3.png";
import phoenix from "../../images/PhoenixLogo.svg";

import AOS from "aos";
import "aos/dist/aos.css";

//sections
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Questions from "../Questions/Questions";
import { motion, useScroll, useTransform } from "framer-motion";
import styled from "styled-components";
import Tabs from "./Tabs";
import ProductsCard from "./ProductsCard";
import ParallaxText from "./FramerText";
import Index from "../floatingShape";
import IndexSecond from "../floatingShape/secondFloating";

export const Title = styled(motion.h1)`
  font-family: var(--font-primary);
  color: white;
  font-size: 8em;
  z-index: 1;
  margin: 0;
  white-space: nowrap;
  margin-top: auto;
  transition: all 2s ease-in-out;
`;

function Main() {
  const [isLoader, setIsLoader] = useState(true);
  const [isQuestions, setIsQuestions] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    AOS.init();
    setIsLoader(false);
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const sectionId = document.getElementById(hash.slice(1));
      if (sectionId) {
        sectionId.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, 1000]);

  const ProductSliderItems = [
    {
      id: 1,
      title: "Anfa Oku Vital",
      description:
        "Восполняет баланс Омега-3 жирных кислот в организме. Оказывает комплексное антиоксидантное действие на сетчатку глаза, предотвращает синдром «сухого глаза»",
      cardImage: Anfa,
      imageAlt: "Anfa",
    },
    {
      id: 2,
      title: "Visu Caps",
      description:
        "Защищает глаза от усталости, раздражения и нарушений зрения. Поддерживает органы зрения важными питательными веществами, витаминами и микроэлементами",
      cardImage: Visu,
      imageAlt: "Visu",
    },
    {
      id: 3,
      title: "Гипертофорт",
      description:
        "Помогает расширить и очистить кровеносные сосуды. Стабилизирует деятельность системы кровообращения и работу сердечной мышцы ",
      cardImage: hypert,
      imageAlt: "hypert",
    },
    {
      id: 4,
      title: "Диабетик Форте",
      description: "Способствует нормализации уровеня сахара в крови. Снимает симптомы сахарного диабета и снижает вес",
      cardImage: diabetic,
      imageAlt: "diabetic",
    },
    {
      id: 5,
      title: "Men's Power",
      description:
        "Помогает в решении проблемы с перенесенным простатитом. Для профилактики или лечения острого простатита и аденомы предстательной железы",
      cardImage: mens,
      imageAlt: "mens",
    },
    {
      id: 6,
      title: "ParazitOFF",
      description:
        "Активно борется с стафилококком, стрептококком, гонококком и гельминтами. Благодаря высокому содержанию цинеола, обладает бактерицидными свойствами.",
      cardImage: ParazitOFF,
      imageAlt: "ParazitOFF",
    },

    {
      id: 7,
      title: "SLIMFIT",
      description:
        "Снижает аппетит и помогает контролировать чувство голода. Капсулы включают витамины и макроэлементы, и организм получает необходимые ему вещества",
      cardImage: slimft,
      imageAlt: "slimft",
    },
    {
      id: 8,
      title: "Power KETO",
      description:
        "Способствует снижению веса. Содержащейся в комплексе компоненты способствуют в ускорении обмена веществ.",
      cardImage: Power,
      imageAlt: "Power",
    },
  ];

  const mainBannerCardsItems = [
    { id: 1, imgBefore: AnfaWihoutBg, imgAfter: AnfaWihoutBg, sideTitle: "Anfa Oku Vital", sideSubtitle: "скидка 30" },
    { id: 2, imgBefore: VisuWithoutBg, imgAfter: VisuWithoutBg, sideTitle: "Visu Caps", sideSubtitle: "скидка 30" },
    {
      id: 3,
      imgBefore: hypertWithoutBg,
      imgAfter: hypertWithoutBg,
      sideTitle: "Гипертофорт",
      sideSubtitle: "скидка 30",
    },
    {
      id: 4,
      imgBefore: diabeticWithoutBg,
      imgAfter: diabeticWithoutBg,
      sideTitle: "Диабетик Форте",
      sideSubtitle: "скидка 30",
    },
    { id: 5, imgBefore: mensWithoutBg, imgAfter: mensWithoutBg, sideTitle: "Men's Power", sideSubtitle: "скидка 30" },
    {
      id: 6,
      imgBefore: ParazitOFFWithoutBg,
      imgAfter: ParazitOFFWithoutBg,
      sideTitle: "ParazitOFF",
      sideSubtitle: "скидка 30",
    },
    { id: 7, imgBefore: slimftWithoutBg, imgAfter: slimftWithoutBg, sideTitle: "SLIMFIT", sideSubtitle: "скидка 30" },
    { id: 8, imgBefore: PowerWihoutBg, imgAfter: PowerWihoutBg, sideTitle: "Power KETO", sideSubtitle: "скидка 30" },
  ];

  return (
    <>
      <Header hiddenLoader={isLoader}></Header>
      <Questions
        visible={isQuestions}
        setIsQuestions={setIsQuestions}
      />
      <main>
        <section className='mainBanner'>
          <div className='container'>
            <div className='mainBannerHeading'>
              <h1
                data-aos='fade-right'
                data-aos-duration='700'
                data-aos-delay='500'
              >
                Для здоровой и активной жизни выбирай Эйфорию.
              </h1>
              <p
                data-aos='fade-right'
                data-aos-duration='700'
                data-aos-delay='800'
              >
                Только природные компоненты. Все средства безопасны для здоровья
              </p>
              <div className='mainBannerPartners'>
                <Link
                  reloadDocument
                  to={APP_ROUTES.LOGISTICS}
                  className='partner'
                  data-aos='fade-right'
                  data-aos-duration='700'
                  data-aos-delay='600'
                >
                  <img
                    src={logistics}
                    alt={logistics}
                  />
                </Link>
                <Link
                  reloadDocument
                  to={APP_ROUTES.CALLCENTER}
                  className='partner bigPartner'
                  data-aos='fade-up'
                  data-aos-duration='700'
                  data-aos-delay='600'
                >
                  <img
                    src={callcenter}
                    alt={callcenter}
                  />
                </Link>
                <Link
                  reloadDocument
                  to={APP_ROUTES.MARKETING}
                  className='partner'
                  data-aos='fade-left'
                  data-aos-duration='700'
                  data-aos-delay='600'
                >
                  <img
                    src={marketing}
                    alt={marketing}
                  />
                </Link>
              </div>
            </div>
            <div className='mainBannerCards'>
              <Swiper
                modules={[Autoplay, EffectCards]}
                loop={true}
                speed={500}
                autoplay={{
                  delay: 3000,
                  pauseOnMouseEnter: true,
                }}
                effect='cards'
                grabCursor={true}
              >
                {mainBannerCardsItems.map((item, index) => (
                  <SwiperSlide
                    className='slideWrapper'
                    key={item.id}
                  >
                    <div className='swiperSlide'>
                      <img
                        className='imgBefore'
                        src={item.imgBefore}
                        alt={item.imgBefore}
                      />
                      <img
                        className='imgAfter'
                        src={item.imgAfter}
                        alt={item.imgAfter}
                      />
                      <div className='sideTitle'>
                        <div className='offer'>{item.sideSubtitle}</div>
                        <div>{item.sideTitle}</div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>

        <section className='partnersSwiper'>
          <div
            className='container'
            data-aos='fade-right'
            data-aos-duration='700'
            data-aos-delay='700'
          >
            <Swiper
              modules={[Autoplay, Navigation, FreeMode]}
              // speed={2000}
              // loop={true}
              // autoplay={{
              //   delay: 3000,
              // }}
              // centeredSlides
              // slidesPerView={5}
              spaceBetween={30}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                320: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                992: {
                  slidesPerView: 5,
                  spaceBetween: 30,
                },
              }}
            >
              <SwiperSlide
                className='slideWrapper'
                style={{ height: "150px" }}
              >
                <img
                  style={{ height: "100%", objectFit: "cover" }}
                  src={euphoria}
                  alt=''
                />
              </SwiperSlide>
              <SwiperSlide
                className='slideWrapper'
                style={{ height: "150px" }}
              >
                {" "}
                <img
                  style={{ height: "100%", objectFit: "cover" }}
                  src={arbit}
                  alt='arbit'
                />
              </SwiperSlide>
              <SwiperSlide
                className='slideWrapper'
                style={{ height: "150px" }}
              >
                <img
                  style={{ height: "100%", objectFit: "contain" }}
                  src={phoenix}
                  alt='phoenix'
                />
              </SwiperSlide>
              {/* <SwiperSlide className='slideWrapper'>LOGO NAME</SwiperSlide>
              <SwiperSlide className='slideWrapper'>LOGO NAME</SwiperSlide>
              <SwiperSlide className='slideWrapper'>LOGO NAME</SwiperSlide>
              <SwiperSlide className='slideWrapper'>LOGO NAME</SwiperSlide>
              <SwiperSlide className='slideWrapper'>LOGO NAME</SwiperSlide> */}
            </Swiper>
          </div>
        </section>

        <section
          className='imgWithTxt'
          id='aboutUs'
        >
          <div className='imgWithTxtHeading'>
            <h2
              data-aos='fade-right'
              data-aos-duration='700'
            >
              Комплексная поддержка организма
            </h2>
            {/* <p
              data-aos='fade-right'
              data-aos-duration='700'
              data-aos-offset='20'
            >
              "Euphoria group"нинг дунёсига хуш келибсиз! Биз битта умумий миссия: одамларга соғлом турмуш тарзини олиб
              боришга ёрдам бериш учун бирлаштирилган учта динамик компаниялармиз. Битта бренд остида тўпланган
              колл-марказлар жамоалари, маркетинг ва логистика мутахассислари саккиз йилдан ортиқ вақт давомида сизнинг
              фаровонлигингизга ҳисса қўшадиган юқори сифатли маҳсулотлар ва хизматларни тақдим этиш учун биргаликда
              ишламоқда.
            </p> */}
            {/* <Link
              reloadDocument
              to={APP_ROUTES.CATALOG}
              className='br10'
              data-aos='fade-right'
              data-aos-duration='700'
            >
              Каталог
            </Link> */}
          </div>
          <div className='imgWithTxtImg'>
            <Swiper
              modules={[Autoplay, Navigation, FreeMode]}
              speed={2000}
              loop={true}
              autoplay={{
                delay: 3000,
              }}
              slidesPerView={5}
              spaceBetween={30}
              centeredSlides
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                620: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                911: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1440: {
                  slidesPerView: 4,
                  spaceBetween: 30,
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
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <section
          className='marketing'
          id='marketingSection'
        >
          <div className='marketingHeading'>
            <h2
              data-aos='fade-right'
              data-aos-duration='700'
              data-aos-offset='20'
            >
              Маркетинговая линейка
            </h2>
            <p
              data-aos='fade-right'
              data-aos-duration='700'
              data-aos-offset='20'
            >
              Далеко-далеко за, словесными горами в стране гласных и согласных живут рыбные тексты. Рот, использовало.
              Рекламных семь маленькая он сих агентство своего. Необходимыми диких алфавит встретил строчка имеет они
              запятых дорогу, до то большой, сбить даль.
            </p>
            <img
              src={marketingLine}
              alt={marketingLine}
              data-aos='fade-right'
              data-aos-duration='700'
              data-aos-offset='20'
            />
            <p
              data-aos='fade-right'
              data-aos-duration='700'
              data-aos-offset='20'
            >
              Далеко-далеко за, словесными горами в стране гласных и согласных живут рыбные тексты. Рот, использовало.
              Рекламных семь маленькая он сих агентство своего. Необходимыми диких алфавит встретил строчка имеет они
              запятых дорогу, до то большой, сбить даль.
            </p>
            <Link
              reloadDocument
              to={APP_ROUTES.PRODUCTS}
              className='br10'
              data-aos='fade-right'
              data-aos-duration='700'
              data-aos-offset='20'
            >
              Подробнее
              <img
                src={sliderArrow}
                alt={sliderArrow}
              />
            </Link>
          </div>
          <div className='marketingImg'>
            {/* <img
              src={marketingLineBG}
              alt={marketingLineBG}
            /> */}
          </div>
        </section>

        <section
          className='comments'
          id='commentsSection'
        >
          <div className='commentsLeft commentsSlides comentsBgPosition'>
            <Index background='#181c23' />
            <div
              className='commentsBgWrapper comentsPositionUnder'
              // style={{ backgroundImage: `url(${commentsLeft})` }}
            >
              <div className='commentsSideBgWrapper'>
                <div className='commentsSideBgSecondWrapper'>
                  <Swiper
                    modules={[Autoplay, Navigation]}
                    speed={2000}
                    loop={true}
                    autoplay={{
                      delay: 3000,
                      pauseOnMouseEnter: true,
                    }}
                    navigation={true}
                    spaceBetween={50}
                    slidesPerView={1}
                  >
                    <SwiperSlide className='slideWrapper'>
                      <div className='quote'>
                        <img
                          src={quotationMark}
                          alt={quotationMark}
                        />
                      </div>
                      <p>
                        Благодарен Euphoria за их слаженную и быструю работу, логистика на высшем уровне, все очень
                        оперативно доставили!
                      </p>
                      <div className='iconPerson'>
                        <img
                          src={person}
                          alt={person}
                        />
                      </div>
                      <h3>Артур Гиясов </h3>
                      {/* <h4>Кандидат наук в отрасли бадов</h4> */}
                    </SwiperSlide>
                    <SwiperSlide className='slideWrapper'>
                      <div className='quote'>
                        <img
                          src={quotationMark}
                          alt={quotationMark}
                        />
                      </div>
                      <p>
                        Пропила курс SlimFit результаты не заставили себя ждать, уже через месяц ушли объемы в талии и
                        бедрах. Хорошие показатели и на весах.
                      </p>
                      <div className='iconPerson'>
                        <img
                          src={person}
                          alt={person}
                        />
                      </div>
                      <h3>Одина Исломова</h3>
                      {/* <h4>Кандидат наук в отрасли бадов</h4> */}
                    </SwiperSlide>

                    <SwiperSlide className='slideWrapper'>
                      <div className='quote'>
                        <img
                          src={quotationMark}
                          alt={quotationMark}
                        />
                      </div>
                      <p>
                        Хочу сказать спасибо команде специалистов, которые грамотно и доходчиво проконсультировали.
                        Очень вежливые и внимательные операторы в call-center.
                      </p>
                      <div className='iconPerson'>
                        <img
                          src={person}
                          alt={person}
                        />
                      </div>
                      <h3>Шерзод Махмудов</h3>
                      {/* <h4>Кандидат наук в отрасли бадов</h4> */}
                    </SwiperSlide>

                    <SwiperSlide className='slideWrapper'>
                      <div className='quote'>
                        <img
                          src={quotationMark}
                          alt={quotationMark}
                        />
                      </div>
                      <p>
                        Редко пишу отзывы, но после 3 месяцев использования Anfa Oku Vital, глаза после длительного
                        рабочего дня совсем не устают, нет красноты и сухости. Рекомендую!
                      </p>
                      <div className='iconPerson'>
                        <img
                          src={person}
                          alt={person}
                        />
                      </div>
                      <h3>Алишер Абдуллаев </h3>
                      {/* <h4>Кандидат наук в отрасли бадов</h4> */}
                    </SwiperSlide>
                    <SwiperSlide className='slideWrapper'>
                      <div className='quote'>
                        <img
                          src={quotationMark}
                          alt={quotationMark}
                        />
                      </div>
                      <p>
                        Начала пить «Сустафлекс» ещё в начале мая, через неделю применения чувствуется, что колени уже
                        не ноют на погоду, и вечерние прогулки даются легче.
                      </p>
                      <div className='iconPerson'>
                        <img
                          src={person}
                          alt={person}
                        />
                      </div>
                      <h3>Людмила Прохорова</h3>
                      {/* <h4>Кандидат наук в отрасли бадов</h4> */}
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
          <div className='commentsRight commentsSlides commetRightPosition'>
            <IndexSecond background='#fff' />
            <div
              className='commentsBgWrapper commetRightPositionWrapper'
              // style={{ backgroundImage: `url(${commentsRight})` }}
            >
              <div className='commentsSideBgWrapper'>
                <div className='commentsSideBgSecondWrapper rightSwiperComments'>
                  <Swiper
                    modules={[Autoplay, Navigation]}
                    speed={2000}
                    loop={true}
                    autoplay={{
                      delay: 3000,
                      pauseOnMouseEnter: true,
                    }}
                    navigation={true}
                    spaceBetween={50}
                    // onSlideChange={() => console.log("slide change")}
                    // onSwiper={(swiper) => console.log(swiper)}
                    slidesPerView={1}
                  >
                    <SwiperSlide className='slideWrapper'>
                      <div className='quote'>
                        <img
                          src={quotationMark}
                          alt={quotationMark}
                        />
                      </div>
                      <p>
                        Благодарен Euphoria за их слаженную и быструю работу, логистика на высшем уровне, все очень
                        оперативно доставили!
                      </p>
                      <div className='iconPerson'>
                        <img
                          src={person}
                          alt={person}
                        />
                      </div>
                      <h3>Артур Гиясов </h3>
                      {/* <h4>Кандидат наук в отрасли бадов</h4> */}
                    </SwiperSlide>
                    <SwiperSlide className='slideWrapper'>
                      <div className='quote'>
                        <img
                          src={quotationMark}
                          alt={quotationMark}
                        />
                      </div>
                      <p>
                        Пропила курс SlimFit результаты не заставили себя ждать, уже через месяц ушли объемы в талии и
                        бедрах. Хорошие показатели и на весах.
                      </p>
                      <div className='iconPerson'>
                        <img
                          src={person}
                          alt={person}
                        />
                      </div>
                      <h3>Одина Исломова</h3>
                      {/* <h4>Кандидат наук в отрасли бадов</h4> */}
                    </SwiperSlide>

                    <SwiperSlide className='slideWrapper'>
                      <div className='quote'>
                        <img
                          src={quotationMark}
                          alt={quotationMark}
                        />
                      </div>
                      <p>
                        Хочу сказать спасибо команде специалистов, которые грамотно и доходчиво проконсультировали.
                        Очень вежливые и внимательные операторы в call-center.
                      </p>
                      <div className='iconPerson'>
                        <img
                          src={person}
                          alt={person}
                        />
                      </div>
                      <h3>Шерзод Махмудов</h3>
                      {/* <h4>Кандидат наук в отрасли бадов</h4> */}
                    </SwiperSlide>

                    <SwiperSlide className='slideWrapper'>
                      <div className='quote'>
                        <img
                          src={quotationMark}
                          alt={quotationMark}
                        />
                      </div>
                      <p>
                        Редко пишу отзывы, но после 3 месяцев использования Anfa Oku Vital, глаза после длительного
                        рабочего дня совсем не устают, нет красноты и сухости. Рекомендую!
                      </p>
                      <div className='iconPerson'>
                        <img
                          src={person}
                          alt={person}
                        />
                      </div>
                      <h3>Алишер Абдуллаев </h3>
                      {/* <h4>Кандидат наук в отрасли бадов</h4> */}
                    </SwiperSlide>
                    <SwiperSlide className='slideWrapper'>
                      <div className='quote'>
                        <img
                          src={quotationMark}
                          alt={quotationMark}
                        />
                      </div>
                      <p>
                        Начала пить «Сустафлекс» ещё в начале мая, через неделю применения чувствуется, что колени уже
                        не ноют на погоду, и вечерние прогулки даются легче.
                      </p>
                      <div className='iconPerson'>
                        <img
                          src={person}
                          alt={person}
                        />
                      </div>
                      <h3>Людмила Прохорова</h3>
                      {/* <h4>Кандидат наук в отрасли бадов</h4> */}
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='referral'>
          <div className='container'>
            <div className='referralTxt'>
              <h2
                data-aos='fade-right'
                data-aos-duration='700'
                data-aos-offset='20'
              >
                Получите все привелегии Эйфории
              </h2>
              <h3
                data-aos='fade-right'
                data-aos-duration='700'
                data-aos-offset='20'
              >
                Реферальная платформа создана для того что бы каждый мог зарабатывать на том на чем он будет
                зарабатывать
              </h3>
              <Link
                reloadDocument
                to={APP_ROUTES.REFERRAL}
                className='br10'
                data-aos='fade-right'
                data-aos-duration='700'
                data-aos-offset='20'
              >
                Подробнее
              </Link>
            </div>
            <div className='referralImg'>
              <img
                data-aos='fade-left'
                data-aos-duration='700'
                data-aos-offset='20'
                src={euphoriaRefferal}
                alt={euphoriaRefferal}
              />
            </div>
          </div>
        </section>

        <section className='survey'>
          <div className='container'>
            <div className='surveyHeading'>
              <h2>Почему мы?</h2>
              <div className='surveyLine'></div>
            </div>
            {/* <div className='surveyCards'>
              <div>
                <div className='cardItem yellowCard'>Как часто вы измеряете артериальное давление?</div>
                <div className='cardItem yellowCard'>
                  Какие факторы, на ваш взгляд, влияют на ваше кровяное давление?
                </div>
              </div>
              <div>
                <div className='cardItem'>Принимаете ли вы лекарства для контроля артериального давления?</div>
                <div className='cardItem'>Курите ли вы или употребляете алкоголь?</div>
              </div>
            </div> */}
            <Tabs />
            <Link
              onClick={() => setIsQuestions(true)}
              className='br10'
            >
              Пройти опрос
            </Link>
            <div className='surveyText'>
              <ParallaxText baseVelocity={-5}>Euphoria</ParallaxText>
              <ParallaxText baseVelocity={5}>AirohpuE</ParallaxText>
            </div>
          </div>
        </section>

        <section
          className='contactUs'
          id='contactUsSection'
        >
          <div className='container'>
            <div className='contactUsTxt'>
              <h2
                data-aos='fade-right'
                data-aos-duration='700'
                data-aos-offset='20'
              >
                Нужна помощь?
              </h2>
              <p
                data-aos='fade-right'
                data-aos-duration='700'
                data-aos-offset='20'
              >
                Если у вас остались дополнительные вопросы или нужна помощь в подборе товара, заполните форму справа и
                наши специалисты свяжутся с вами в ближайшее время.
              </p>
            </div>
            <div className='contactForm'>
              <form
                className='form'
                action='POST'
              >
                <div className='formTitle'>
                  <h2 className='title'>Оставьте свою заявку</h2>
                </div>
                {/* <div className='formSubtitle'>
                  <p className='subTitle'>
                    Если у вас остались вопросы, или хотите больше узнать о Proskill Academy , оставьте заявку — и мы
                    вам перезвоним.
                  </p>
                </div> */}
                <div className='inputBox'>
                  <input
                    type='text'
                    name='name'
                    required
                  />
                  <span>Имя</span>
                </div>
                <div className='inputBox'>
                  <input
                    type='text'
                    name='surname'
                    required
                  />
                  <span>Фамилия</span>
                </div>
                <div className='inputBox'>
                  <input
                    type='tel'
                    name='phone'
                    pattern='[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}'
                    required
                    maxLength={13}
                  />
                  <span>Номер телефона</span>
                </div>
                <div className='inputBox'>
                  <textarea
                    name='sms'
                    required
                  ></textarea>
                  <span>Ваше сообщение</span>
                </div>
                <div className='formBtn'>
                  <button type='submit'>Отправить</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
      <Outlet />
    </>
  );
}

export default Main;
