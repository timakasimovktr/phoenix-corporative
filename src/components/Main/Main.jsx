import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IMaskInput } from "react-imask";
import { Autoplay, Navigation, EffectCards } from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css";

import { APP_ROUTES } from "../../router/Route";
import "./Main.scss";

import "react-toastify/dist/ReactToastify.css";
import { Outlet, Link } from "react-router-dom";

//images
import euphoriaRefferal from "../../images/Euphoria-refferal.png";
import quotationMark from "../../images/“.svg";
import girl1 from "../../images/girl1.jpg";
import girl2 from "../../images/girl2.jpg";
import boy1 from "../../images/boy1.jpg";
import boy2 from "../../images/boy2.jpg";
import boy3 from "../../images/boy3.jpg";
import commentsRight from "../../images/commentsRight.png";
import commentsLeft from "../../images/commnetsLeft.png";
import person from "../../images/person.png";

import urionBefore from "../../images/urionBefore.png";
import urionAfter from "../../images/urionAfter.png";
import VisuBefore from "../../images/VisuCapsBefore.png";
import VisuAfter from "../../images/VisecapsAfter.png";
import hypertBefore from "../../images/hyperBefore.png";
import hypertAfter from "../../images/hyperAfter.png";
import diabeticBefore from "../../images/diabeticBefore.png";
import diabeticAfter from "../../images/diabeticAfter.png";
import mensAfter from "../../images/mensBefore.png";
import mensBefore from "../../images/mensAfter.png";
import ParazitOFFBefore from "../../images/ParazitOFFBefore.png";
import ParazitOFFAfter from "../../images/ParazitOFFAfter.png";
import slimftBefore from "../../images/slimftBefore.png";
import slimftAfter from "../../images/slimftAfter.png";
import growBefore from "../../images/geowBefore.png";
import growAfter from "../../images/growAfter.png";

import AOS from "aos";
import "aos/dist/aos.css";

//sections
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Questions from "../Questions/Questions";
import { motion, useScroll, useTransform } from "framer-motion";
import styled from "styled-components";
import Tabs from "./Tabs";
import ParallaxText from "./FramerText";

import { useTranslation } from "react-i18next";
import TimelineComponent from "./timeline";
import CircularText from "./bioAdds";
import PartnersSlider from "./partners";
import ProductSlider from "./productSlider";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

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

  const mainBannerCardsItems = [
    {
      id: 1,
      imgBefore: urionBefore,
      imgAfter: urionAfter,
      sideTitle: "Urion",
      sideSubtitle: `${t("blocks.mainBlock.sale")}`,
    },
    {
      id: 2,
      imgBefore: VisuBefore,
      imgAfter: VisuAfter,
      sideTitle: "Visu Caps",
      sideSubtitle: `${t("blocks.mainBlock.sale")}`,
    },
    {
      id: 3,
      imgBefore: hypertBefore,
      imgAfter: hypertAfter,
      sideTitle: "Гипертофорт",
      sideSubtitle: `${t("blocks.mainBlock.sale")}`,
    },
    {
      id: 4,
      imgBefore: diabeticBefore,
      imgAfter: diabeticAfter,
      sideTitle: "Диабетик Форте",
      sideSubtitle: `${t("blocks.mainBlock.sale")}`,
    },
    {
      id: 5,
      imgBefore: mensBefore,
      imgAfter: mensAfter,
      sideTitle: "Mens Power",
      sideSubtitle: `${t("blocks.mainBlock.sale")}`,
    },
    {
      id: 6,
      imgBefore: ParazitOFFBefore,
      imgAfter: ParazitOFFAfter,
      sideTitle: "ParazitOFF",
      sideSubtitle: `${t("blocks.mainBlock.sale")}`,
    },
    {
      id: 7,
      imgBefore: slimftBefore,
      imgAfter: slimftAfter,
      sideTitle: "SLIMFIT",
      sideSubtitle: `${t("blocks.mainBlock.sale")}`,
    },
    {
      id: 8,
      imgBefore: growBefore,
      imgAfter: growAfter,
      sideTitle: "GrowX",
      sideSubtitle: `${t("blocks.mainBlock.sale")}`,
    },
  ];
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sanitizedPhone = formData.phone.replace(/[^\d+]/g, "");
    const sanitizedData = { ...formData, phone: sanitizedPhone };
    try {
      const response = await axios.post("https://euphoria-group.uz/api/bid", sanitizedData);
      console.log("Form submitted successfully:", response.data);
      toast.success(`${t("tests.textAlert.alert4")}`);
      setFormData({
        name: "",
        surname: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting the form:", error);
      toast.error(`${t("tests.textAlert.alert5")}`);
    }
  };
  const [changeLanguage, setChangeLanguage] = useState(false);
  return (
    <>
      <ToastContainer />
      <Header
        hiddenLoader={isLoader}
        changeLanguage={changeLanguage}
        setChangeLanguage={setChangeLanguage}
      ></Header>
      <Questions
        visible={isQuestions}
        setIsQuestions={setIsQuestions}
      />
      <main onClick={() => setChangeLanguage(false)}>
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
                  {t("headings.marketing")}
                </Link>

                <Link
                  to={APP_ROUTES.CALLCENTER}
                  className='partner bigPartner'
                  data-aos='fade-up'
                  data-aos-duration='700'
                  data-aos-delay='600'
                >
                  {t("headings.callCenter")}
                </Link>
                <Link
                  to={APP_ROUTES.LOGISTICS}
                  className='partner'
                  data-aos='fade-right'
                  data-aos-duration='700'
                  data-aos-delay='600'
                >
                  {t("headings.logistic")}
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
                        <div>{item.sideTitle}</div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>

        <PartnersSlider />
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
          </div>
          <ProductSlider />
        </section>
        <CircularText setIsQuestions={setIsQuestions} />
        <section
          className='comments'
          id='commentsSection'
        >
          <div className='commentsLeft commentsSlides comentsBgPosition'>
            {/* <Index background='#181c23' /> */}
            <div
              className='commentsBgWrapper comentsPositionUnder'
              style={{ backgroundImage: `url(${commentsLeft})` }}
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
            {/* <IndexSecond background='#fff' /> */}
            <div
              className='commentsBgWrapper commetRightPositionWrapper'
              style={{ backgroundImage: `url(${commentsRight})` }}
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
        <section className='sectioReferal'>
          <div className='container'>
            <div className='referalContainer'>
              <div className='referalInfo'>
                <div className='referalTitle'>
                  <h3 className='title'>{t("headings.referal")}</h3>
                </div>
                <div className='referalSubtitle'>
                  <p className='subtitle'>{t("blocks.referalBlock.subtitle")}</p>
                </div>
                <div className='referalLink'>
                  <Link to={APP_ROUTES.REFERRAL}>{t("blocks.referalBlock.buttonText")}</Link>
                </div>
              </div>
              <div className='referalImage'>
                <img
                  src={euphoriaRefferal}
                  alt={euphoriaRefferal}
                />
              </div>
            </div>
          </div>
        </section>

        <section className='sectionTimeline'>
          <div className='container'>
            <div className='sectionTimelineInfo'>
              <div className='timelineInfo'>
                <div className='sectionTitle'>
                  <h3 className='title'>{t("blocks.header.contacts")}</h3>
                </div>
              </div>
              <TimelineComponent />
              <div className='btnContainer'>
                <Link
                  to='/contacts'
                  className='btn'
                >
                  {t("blocks.referalBlock.buttonText")}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className='survey'>
          <div className='container'>
            <div className='surveyHeading'>
              <h2>{t("headings.whyWe")}</h2>
              <div className='surveyLine'></div>
            </div>
            <Tabs
              tab1={t("blocks.tabsBlock.title1")}
              tab2={t("blocks.tabsBlock.title2")}
              tab3={t("blocks.tabsBlock.title3")}
              tab4={t("blocks.tabsBlock.title4")}
              title1={t("blocks.tabsBlock.subtitle1")}
              subtitle1={t("blocks.tabsBlock.text1")}
              title2={t("blocks.tabsBlock.subtitle2")}
              subtitle2={t("blocks.tabsBlock.text2")}
              title3={t("blocks.tabsBlock.subtitle3")}
              subtitle3={t("blocks.tabsBlock.text3")}
              title4={t("blocks.tabsBlock.subtitle4")}
              subtitle4={t("blocks.tabsBlock.text4")}
            />
          </div>
          <div className='surveyText'>
            <ParallaxText baseVelocity={-5}>Euphoria</ParallaxText>
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
                onSubmit={handleSubmit}
              >
                <div className='formTitle'>
                  <h2 className='title'>{t("blocks.contactsBlock.form.title")}</h2>
                </div>
                <div className='inputBox'>
                  <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <span>{t("blocks.contactsBlock.form.name")}</span>
                </div>
                <div className='inputBox'>
                  <input
                    type='text'
                    name='surname'
                    required
                    value={formData.surname}
                    onChange={handleChange}
                  />
                  <span>{t("blocks.contactsBlock.form.lastName")}</span>
                </div>
                <div className='inputBox'>
                  <IMaskInput
                    type='tel'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    mask={Mask}
                    pattern='[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}'
                    maxLength={19}
                    required
                  />
                  <span>{t("blocks.contactsBlock.form.phone")}</span>
                </div>
                <div className='inputBox'>
                  <input
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
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
