import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IMaskInput } from "react-imask";
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
import marketingImgBlock from "../../images/marketingImgBlock1.Png";
import productItem from "../../images/productItem.png";
import productItemAfter from "../../images/productItemAfter.png";
import euphoriaRefferal from "../../images/Euphoria-refferal.png";
import sliderArrow from "../../images/sliderArrow.png";
import quotationMark from "../../images/“.svg";
import girl1 from "../../images/girl1.jpg";
import girl2 from "../../images/girl2.jpg";
import boy1 from "../../images/boy1.jpg";
import boy2 from "../../images/boy2.jpg";
import boy3 from "../../images/boy3.jpg";
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

import euphoria from "../../images/euphoria 1.png";
import arbit from "../../images/arbit 1.png";
import phoenix from "../../images/PhoenixLogo.svg";
import rcd from "../../images/rcd 1 1.png";

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

import { useTranslation } from "react-i18next";
import TimelineComponent from "./timeline";

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
  const { t } = useTranslation();
  const [isLoader, setIsLoader] = useState(true);
  const [isQuestions, setIsQuestions] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const phoneMask = "+998 (00) 000-00-00";
  const Mask = [
    {
      mask: phoneMask,
    },
  ];

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
      description: `${t("blocks.productsBlock.description1")}`,
      cardImage: Anfa,
      imageAlt: "Anfa",
    },
    {
      id: 2,
      title: "Visu Caps",
      description: `${t("blocks.productsBlock.description2")}`,
      cardImage: Visu,
      imageAlt: "Visu",
    },
    {
      id: 3,
      title: "Гипертофорт",
      description: `${t("blocks.productsBlock.description3")}`,
      cardImage: hypert,
      imageAlt: "hypert",
    },
    {
      id: 4,
      title: "Диабетик Форте",
      description: `${t("blocks.productsBlock.description4")}`,
      cardImage: diabetic,
      imageAlt: "diabetic",
    },
    {
      id: 5,
      title: "Men's Power",
      description: `${t("blocks.productsBlock.description5")}`,
      cardImage: mens,
      imageAlt: "mens",
    },
    {
      id: 6,
      title: "ParazitOFF",
      description: `${t("blocks.productsBlock.description6")}`,
      cardImage: ParazitOFF,
      imageAlt: "ParazitOFF",
    },

    {
      id: 7,
      title: "SLIMFIT",
      description: `${t("blocks.productsBlock.description7")}`,
      cardImage: slimft,
      imageAlt: "slimft",
    },
    {
      id: 8,
      title: "Power KETO",
      description: `${t("blocks.productsBlock.description8")}`,
      cardImage: Power,
      imageAlt: "Power",
    },
  ];

  const mainBannerCardsItems = [
    {
      id: 1,
      imgBefore: AnfaWihoutBg,
      imgAfter: AnfaWihoutBg,
      sideTitle: "Anfa Oku Vital",
      sideSubtitle: `${t("blocks.mainBlock.sale")}`,
    },
    {
      id: 2,
      imgBefore: VisuWithoutBg,
      imgAfter: VisuWithoutBg,
      sideTitle: "Visu Caps",
      sideSubtitle: `${t("blocks.mainBlock.sale")}`,
    },
    {
      id: 3,
      imgBefore: hypertWithoutBg,
      imgAfter: hypertWithoutBg,
      sideTitle: "Гипертофорт",
      sideSubtitle: `${t("blocks.mainBlock.sale")}`,
    },
    {
      id: 4,
      imgBefore: diabeticWithoutBg,
      imgAfter: diabeticWithoutBg,
      sideTitle: "Диабетик Форте",
      sideSubtitle: `${t("blocks.mainBlock.sale")}`,
    },
    {
      id: 5,
      imgBefore: mensWithoutBg,
      imgAfter: mensWithoutBg,
      sideTitle: "Men's Power",
      sideSubtitle: `${t("blocks.mainBlock.sale")}`,
    },
    {
      id: 6,
      imgBefore: ParazitOFFWithoutBg,
      imgAfter: ParazitOFFWithoutBg,
      sideTitle: "ParazitOFF",
      sideSubtitle: `${t("blocks.mainBlock.sale")}`,
    },
    {
      id: 7,
      imgBefore: slimftWithoutBg,
      imgAfter: slimftWithoutBg,
      sideTitle: "SLIMFIT",
      sideSubtitle: `${t("blocks.mainBlock.sale")}`,
    },
    {
      id: 8,
      imgBefore: PowerWihoutBg,
      imgAfter: PowerWihoutBg,
      sideTitle: "Power KETO",
      sideSubtitle: `${t("blocks.mainBlock.sale")}`,
    },
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
                {t("headings.main")}
              </h1>
              <p
                data-aos='fade-right'
                data-aos-duration='700'
                data-aos-delay='800'
              >
                {t("blocks.mainBlock.subtitle")}
              </p>
              <div className='mainBannerPartners'>
                <Link
                  // reloadDocument
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

                <Link
                  // reloadDocument
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
                  // reloadDocument
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
            <div className='partnersContainer'>
              <div className='imgContainer'>
                <img
                  src={arbit}
                  alt=''
                />
              </div>
              <div className='imgContainer'>
                <img
                  src={euphoria}
                  alt=''
                />
              </div>

              <div className='imgContainer'>
                <img
                  src={rcd}
                  alt=''
                />
              </div>
              <div className='imgContainer'>
                <img
                  src={phoenix}
                  alt=''
                />
              </div>
            </div>
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
              {t("headings.bodySupport")}
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
                    link='/catalog'
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
              {t("headings.bioAdds")}
            </h2>
            <p
              data-aos='fade-right'
              data-aos-duration='700'
              data-aos-offset='20'
            >
              {t("blocks.bioAdds.subtitle")}
            </p>
            <img
              src={marketingLine}
              alt={marketingLine}
              data-aos='fade-right'
              data-aos-duration='700'
              data-aos-offset='20'
            />
            {/* <p
              data-aos='fade-right'
              data-aos-duration='700'
              data-aos-offset='20'
            >
              Далеко-далеко за, словесными горами в стране гласных и согласных живут рыбные тексты. Рот, использовало.
              Рекламных семь маленькая он сих агентство своего. Необходимыми диких алфавит встретил строчка имеет они
              запятых дорогу, до то большой, сбить даль.
            </p> */}
            {/* <Link
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
            </Link> */}
            <Link
              onClick={() => setIsQuestions(true)}
              className='br10'
            >
              {t("blocks.bioAdds.buttonText")}
            </Link>
          </div>
          <div className='marketingImg'>
            <img
              src={marketingImgBlock}
              alt={marketingImgBlock}
            />
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
                      <p>{t("blocks.reviewsSlider.text1")}</p>
                      <div className='iconPerson'>
                        <img
                          src={boy1}
                          alt={person}
                        />
                      </div>
                      <h3>{t("blocks.reviewsSlider.name1")} </h3>
                      {/* <h4>Кандидат наук в отрасли бадов</h4> */}
                    </SwiperSlide>
                    <SwiperSlide className='slideWrapper'>
                      <div className='quote'>
                        <img
                          src={quotationMark}
                          alt={quotationMark}
                        />
                      </div>
                      <p>{t("blocks.reviewsSlider.text2")}</p>
                      <div className='iconPerson'>
                        <img
                          src={girl1}
                          alt={person}
                        />
                      </div>
                      <h3>{t("blocks.reviewsSlider.name2")}</h3>
                      {/* <h4>Кандидат наук в отрасли бадов</h4> */}
                    </SwiperSlide>

                    <SwiperSlide className='slideWrapper'>
                      <div className='quote'>
                        <img
                          src={quotationMark}
                          alt={quotationMark}
                        />
                      </div>
                      <p>{t("blocks.reviewsSlider.text3")}</p>
                      <div className='iconPerson'>
                        <img
                          src={boy2}
                          alt={person}
                        />
                      </div>
                      <h3>{t("blocks.reviewsSlider.name3")}</h3>
                      {/* <h4>Кандидат наук в отрасли бадов</h4> */}
                    </SwiperSlide>

                    <SwiperSlide className='slideWrapper'>
                      <div className='quote'>
                        <img
                          src={quotationMark}
                          alt={quotationMark}
                        />
                      </div>
                      <p>{t("blocks.reviewsSlider.text4")}</p>
                      <div className='iconPerson'>
                        <img
                          src={boy3}
                          alt={person}
                        />
                      </div>
                      <h3>{t("blocks.reviewsSlider.name4")} </h3>
                      {/* <h4>Кандидат наук в отрасли бадов</h4> */}
                    </SwiperSlide>
                    <SwiperSlide className='slideWrapper'>
                      <div className='quote'>
                        <img
                          src={quotationMark}
                          alt={quotationMark}
                        />
                      </div>
                      <p>{t("blocks.reviewsSlider.text5")}</p>
                      <div className='iconPerson'>
                        <img
                          src={girl2}
                          alt={person}
                        />
                      </div>
                      <h3>{t("blocks.reviewsSlider.name5")}</h3>
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
                      <p>{t("blocks.reviewsSlider.text2")}</p>
                      <div className='iconPerson'>
                        <img
                          src={girl1}
                          alt={person}
                        />
                      </div>
                      <h3>{t("blocks.reviewsSlider.name2")}</h3>
                    </SwiperSlide>
                    <SwiperSlide className='slideWrapper'>
                      <div className='quote'>
                        <img
                          src={quotationMark}
                          alt={quotationMark}
                        />
                      </div>
                      <p>{t("blocks.reviewsSlider.text3")}</p>
                      <div className='iconPerson'>
                        <img
                          src={boy2}
                          alt={person}
                        />
                      </div>
                      <h3>{t("blocks.reviewsSlider.name3")}</h3>
                    </SwiperSlide>
                    <SwiperSlide className='slideWrapper'>
                      <div className='quote'>
                        <img
                          src={quotationMark}
                          alt={quotationMark}
                        />
                      </div>
                      <p>{t("blocks.reviewsSlider.text4")}</p>
                      <div className='iconPerson'>
                        <img
                          src={boy3}
                          alt={person}
                        />
                      </div>
                      <h3>{t("blocks.reviewsSlider.name4")}</h3>
                    </SwiperSlide>
                    <SwiperSlide className='slideWrapper'>
                      <div className='quote'>
                        <img
                          src={quotationMark}
                          alt={quotationMark}
                        />
                      </div>
                      <p>{t("blocks.reviewsSlider.text5")}</p>
                      <div className='iconPerson'>
                        <img
                          src={girl2}
                          alt={person}
                        />
                      </div>
                      <h3>{t("blocks.reviewsSlider.name5")}</h3>
                      {/* <h4>Кандидат наук в отрасли бадов</h4> */}
                    </SwiperSlide>
                    <SwiperSlide className='slideWrapper'>
                      <div className='quote'>
                        <img
                          src={quotationMark}
                          alt={quotationMark}
                        />
                      </div>
                      <p>{t("blocks.reviewsSlider.text1")}</p>
                      <div className='iconPerson'>
                        <img
                          src={boy1}
                          alt={person}
                        />
                      </div>
                      <h3>{t("blocks.reviewsSlider.name1")}</h3>
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
                {t("headings.referal")}
              </h2>
              <h3
                data-aos='fade-right'
                data-aos-duration='700'
                data-aos-offset='20'
              >
                {t("blocks.referalBlock.subtitle")}
              </h3>
              <Link
                // reloadDocument
                to={APP_ROUTES.REFERRAL}
                className='br10'
                data-aos='fade-right'
                data-aos-duration='700'
                data-aos-offset='20'
              >
                {t("blocks.referalBlock.buttonText")}
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
        <section className='sectionTimeLine'>
          <TimelineComponent />
        </section>

        <section className='survey'>
          <div className='container'>
            <div className='surveyHeading'>
              <h2>{t("headings.whyWe")}</h2>
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
            {/* <Link
              onClick={() => setIsQuestions(true)}
              className='br10'
            >
              Пройти опрос
            </Link> */}
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
                {t("headings.doYouNeedHelp")}
              </h2>
              <p
                data-aos='fade-right'
                data-aos-duration='700'
                data-aos-offset='20'
              >
                {t("blocks.contactsBlock.subtitle")}
              </p>
            </div>
            <div className='contactForm'>
              <form
                className='form'
                action='POST'
              >
                <div className='formTitle'>
                  <h2 className='title'>{t("blocks.contactsBlock.form.title")}</h2>
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
                  <span>{t("blocks.contactsBlock.form.name")}</span>
                </div>
                <div className='inputBox'>
                  <input
                    type='text'
                    name='surname'
                    required
                  />
                  <span>{t("blocks.contactsBlock.form.lastName")}</span>
                </div>
                <div className='inputBox'>
                  {/* <input
                    type='tel'
                    name='phone'
                    pattern='[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}'
                    required
                    maxLength={13}
                  /> */}
                  <IMaskInput
                    type='tel'
                    name='phone'
                    mask={Mask}
                    pattern='[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}'
                    maxLength={19}
                    required
                  />
                  <span>{t("blocks.contactsBlock.form.phone")}</span>
                </div>
                <div className='inputBox'>
                  <textarea
                    name='sms'
                    required
                  ></textarea>
                  <span>{t("blocks.contactsBlock.form.message")}</span>
                </div>
                <div className='formBtn'>
                  <button type='submit'>{t("blocks.contactsBlock.form.buttonText")}</button>
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
