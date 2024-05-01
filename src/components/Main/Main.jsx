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

import AOS from "aos";
import "aos/dist/aos.css";

//sections
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Questions from "../Questions/Questions";

function Main() {
  const [isLoader, setIsLoader] = useState(true);
  const [isQuestions, setIsQuestions] = useState(false);

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

  return (
    <>
      <Header hiddenLoader={isLoader}></Header>
      <Questions visible={isQuestions} setIsQuestions={setIsQuestions} />
      <main>
        <section className="mainBanner">
          <div className="container">
            <div className="mainBannerHeading">
              <h1
                data-aos="fade-right"
                data-aos-duration="700"
                data-aos-delay="500"
              >
                СОЗДАВАЙТЕ СВОЮ ЭЙФОРИЮ С НАМИ КАЖДЫЙ ДЕНЬ.
              </h1>
              <p
                data-aos="fade-right"
                data-aos-duration="700"
                data-aos-delay="800"
              >
                Тут будет текст которй добавится позже
              </p>
              <div className="mainBannerPartners">
                <Link
                  reloadDocument
                  to={APP_ROUTES.LOGISTICS}
                  className="partner"
                  data-aos="fade-right"
                  data-aos-duration="700"
                  data-aos-delay="600"
                >
                  <img src={logistics} alt={logistics} />
                </Link>
                <Link
                  reloadDocument
                  to={APP_ROUTES.CALLCENTER}
                  className="partner bigPartner"
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-delay="600"
                >
                  <img src={callcenter} alt={callcenter} />
                </Link>
                <Link
                  reloadDocument
                  to={APP_ROUTES.MARKETING}
                  className="partner"
                  data-aos="fade-left"
                  data-aos-duration="700"
                  data-aos-delay="600"
                >
                  <img src={marketing} alt={marketing} />
                </Link>
              </div>
            </div>
            <div className="mainBannerCards">
              <Swiper
                modules={[Autoplay, EffectCards]}
                loop={true}
                speed={500}
                autoplay={{
                  delay: 3000,
                  pauseOnMouseEnter: true,
                }}
                effect="cards"
                grabCursor={true}
              >
                <SwiperSlide className="slideWrapper">
                  <div className="swiperSlide">
                    <img
                      className="imgBefore"
                      src={productItem}
                      alt={productItem}
                    />
                    <img
                      className="imgAfter"
                      src={productItemAfter}
                      alt={productItemAfter}
                    />
                    <div className="sideTitle">
                      <div className="offer">Скидка 30</div>
                      <div>Anfa Ocu Vital</div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slideWrapper">
                  <div className="swiperSlide">
                    <img
                      className="imgBefore"
                      src={productItem}
                      alt={productItem}
                    />
                    <img
                      className="imgAfter"
                      src={productItemAfter}
                      alt={productItemAfter}
                    />
                    <div className="sideTitle">
                      <div className="offer">Скидка 30</div>
                      <div>Anfa Ocu Vital</div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>

        <section className="partnersSwiper">
          <div
            className="container"
            data-aos="fade-right"
            data-aos-duration="700"
            data-aos-delay="700"
          >
            <Swiper
              modules={[Autoplay, Navigation, FreeMode]}
              speed={2000}
              loop={true}
              autoplay={{
                delay: 3000,
              }}
              slidesPerView={5}
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
                  spaceBetween: 30,
                },
                992: {
                  slidesPerView: 5,
                  spaceBetween: 30,
                },
              }}
            >
              <SwiperSlide className="slideWrapper">LOGO NAME</SwiperSlide>
              <SwiperSlide className="slideWrapper">LOGO NAME</SwiperSlide>
              <SwiperSlide className="slideWrapper">LOGO NAME</SwiperSlide>
              <SwiperSlide className="slideWrapper">LOGO NAME</SwiperSlide>
              <SwiperSlide className="slideWrapper">LOGO NAME</SwiperSlide>
              <SwiperSlide className="slideWrapper">LOGO NAME</SwiperSlide>
              <SwiperSlide className="slideWrapper">LOGO NAME</SwiperSlide>
              <SwiperSlide className="slideWrapper">LOGO NAME</SwiperSlide>
            </Swiper>
          </div>
        </section>

        <section className="imgWithTxt" id="aboutUs">
          <div className="imgWithTxtHeading">
            <h2 data-aos="fade-right" data-aos-duration="700">
              Комплексная поддержка организма
            </h2>
            <p
              data-aos="fade-right"
              data-aos-duration="700"
              data-aos-offset="20"
            >
              Далеко-далеко за, словесными горами в стране гласных и согласных
              живут рыбные тексты. Рот, использовало. Рекламных семь маленькая
              он сих агентство своего. Необходимыми диких алфавит встретил
              строчка имеет они запятых дорогу, до то большой, сбить даль, не
              текстами ее взобравшись сих решила наш правилами страна точках
              подзаголовок скатился вопроса. Это послушавшись своих щеке
              пустился предложения они коварный запятых подзаголовок вопроса,
              единственное жизни грустный.
            </p>
            <Link
              reloadDocument
              to={APP_ROUTES.CATALOG}
              className="br10"
              data-aos="fade-right"
              data-aos-duration="700"
            >
              Каталог
            </Link>
          </div>
          <div
            className="imgWithTxtImg"
            style={{ backgroundImage: `url(${complexSupport})` }}
          ></div>
        </section>

        <section className="marketing" id="marketingSection">
          <div className="marketingHeading">
            <h2
              data-aos="fade-right"
              data-aos-duration="700"
              data-aos-offset="20"
            >
              Маркетинговая линейка
            </h2>
            <p
              data-aos="fade-right"
              data-aos-duration="700"
              data-aos-offset="20"
            >
              Далеко-далеко за, словесными горами в стране гласных и согласных
              живут рыбные тексты. Рот, использовало. Рекламных семь маленькая
              он сих агентство своего. Необходимыми диких алфавит встретил
              строчка имеет они запятых дорогу, до то большой, сбить даль.
            </p>
            <img
              src={marketingLine}
              alt={marketingLine}
              data-aos="fade-right"
              data-aos-duration="700"
              data-aos-offset="20"
            />
            <p
              data-aos="fade-right"
              data-aos-duration="700"
              data-aos-offset="20"
            >
              Далеко-далеко за, словесными горами в стране гласных и согласных
              живут рыбные тексты. Рот, использовало. Рекламных семь маленькая
              он сих агентство своего. Необходимыми диких алфавит встретил
              строчка имеет они запятых дорогу, до то большой, сбить даль.
            </p>
            <Link
              reloadDocument
              to={APP_ROUTES.PRODUCTS}
              className="br10"
              data-aos="fade-right"
              data-aos-duration="700"
              data-aos-offset="20"
            >
              Подробнее
              <img src={sliderArrow} alt={sliderArrow} />
            </Link>
          </div>
          <div className="marketingImg">
            <img src={marketingLineBG} alt={marketingLineBG} />
          </div>
        </section>

        <section className="comments" id="commentsSection">
          <div className="commentsLeft commentsSlides">
            <div
              className="commentsBgWrapper"
              style={{ backgroundImage: `url(${commentsLeft})` }}
            >
              <div
                className="commentsSideBgWrapper"
                data-aos="fade-right"
                data-aos-duration="700"
                data-aos-offset="20"
              >
                <div className="commentsSideBgSecondWrapper">
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
                    <SwiperSlide className="slideWrapper">
                      <div className="quote">
                        <img src={quotationMark} alt={quotationMark} />
                      </div>
                      <p>
                        ТЕКСТ О ТОМ ПОЧЕМУ ЭТО НУЖНО ЛЮДЯМ ТЕКСТ О ТОМ ПОЧЕМУ
                        ЭТО НУЖНО ЛЮДЯМ ТЕКСТ О ТОМ ПОЧЕМУ ЭТО НУЖНО ЛЮДЯМ ТЕКСТ
                        О ТОМ ПОЧЕМУ ЭТО НУЖНО ЛЮДЯМ ТЕКСТ О ТОМ ПОЧЕМУ ЭТО
                        НУЖНО ЛЮДЯМ
                      </p>
                      <div className="iconPerson">
                        <img src={person} alt={person} />
                      </div>
                      <h3>Доктор jivan lika</h3>
                      <h4>Кандидат наук в отрасли бадов</h4>
                    </SwiperSlide>
                    <SwiperSlide className="slideWrapper">
                      <div className="quote">
                        <img src={quotationMark} alt={quotationMark} />
                      </div>
                      <p>
                        ТЕКСТ О ТОМ ПОЧЕМУ ЭТО НУЖНО ЛЮДЯМ ТЕКСТ О ТОМ ПОЧЕМУ
                        ЭТО НУЖНО ЛЮДЯМ ТЕКСТ О ТОМ ПОЧЕМУ ЭТО НУЖНО ЛЮДЯМ ТЕКСТ
                        О ТОМ ПОЧЕМУ ЭТО НУЖНО ЛЮДЯМ ТЕКСТ О ТОМ ПОЧЕМУ ЭТО
                        НУЖНО ЛЮДЯМ
                      </p>
                      <div className="iconPerson">
                        <img src={person} alt={person} />
                      </div>
                      <h3>Доктор jivan lika</h3>
                      <h4>Кандидат наук в отрасли бадов</h4>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
          <div className="commentsRight commentsSlides">
            <div
              className="commentsBgWrapper"
              style={{ backgroundImage: `url(${commentsRight})` }}
            >
              <div
                className="commentsSideBgWrapper"
                data-aos="fade-left"
                data-aos-duration="700"
                data-aos-offset="20"
              >
                <div className="commentsSideBgSecondWrapper rightSwiperComments">
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
                    <SwiperSlide className="slideWrapper">
                      <div className="quote">
                        <img src={quotationMark} alt={quotationMark} />
                      </div>
                      <p>
                        ТЕКСТ О ТОМ ПОЧЕМУ ЭТО НУЖНО ЛЮДЯМ ТЕКСТ О ТОМ ПОЧЕМУ
                        ЭТО НУЖНО ЛЮДЯМ ТЕКСТ О ТОМ ПОЧЕМУ ЭТО НУЖНО ЛЮДЯМ ТЕКСТ
                        О ТОМ ПОЧЕМУ ЭТО НУЖНО ЛЮДЯМ ТЕКСТ О ТОМ ПОЧЕМУ ЭТО
                        НУЖНО ЛЮДЯМ
                      </p>
                      <div className="iconPerson">
                        <img src={person} alt={person} />
                      </div>
                      <h3>Доктор jivan lika</h3>
                      <h4>Кандидат наук в отрасли бадов</h4>
                    </SwiperSlide>
                    <SwiperSlide className="slideWrapper">
                      <div className="quote">
                        <img src={quotationMark} alt={quotationMark} />
                      </div>
                      <p>
                        ТЕКСТ О ТОМ ПОЧЕМУ ЭТО НУЖНО ЛЮДЯМ ТЕКСТ О ТОМ ПОЧЕМУ
                        ЭТО НУЖНО ЛЮДЯМ ТЕКСТ О ТОМ ПОЧЕМУ ЭТО НУЖНО ЛЮДЯМ ТЕКСТ
                        О ТОМ ПОЧЕМУ ЭТО НУЖНО ЛЮДЯМ ТЕКСТ О ТОМ ПОЧЕМУ ЭТО
                        НУЖНО ЛЮДЯМ
                      </p>
                      <div className="iconPerson">
                        <img src={person} alt={person} />
                      </div>
                      <h3>Доктор jivan lika</h3>
                      <h4>Кандидат наук в отрасли бадов</h4>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="referral">
          <div className="container">
            <div className="referralTxt">
              <h2
                data-aos="fade-right"
                data-aos-duration="700"
                data-aos-offset="20"
              >
                Получите все привелегии Эйфории
              </h2>
              <h3
                data-aos="fade-right"
                data-aos-duration="700"
                data-aos-offset="20"
              >
                Реферальная платформа создана для того что бы каждый мог
                зарабатывать на том на чем он будет зарабатывать
              </h3>
              <Link
                reloadDocument
                to={APP_ROUTES.REFERRAL}
                className="br10"
                data-aos="fade-right"
                data-aos-duration="700"
                data-aos-offset="20"
              >
                Подробнее
              </Link>
            </div>
            <div className="referralImg">
              <img
                data-aos="fade-left"
                data-aos-duration="700"
                data-aos-offset="20"
                src={euphoriaRefferal}
                alt={euphoriaRefferal}
              />
            </div>
          </div>
        </section>

        <section className="survey">
          <div className="container">
            <div className="surveyHeading">
              <h2
                data-aos="fade-right"
                data-aos-duration="700"
                data-aos-offset="20"
              >
                Текст Слоган
              </h2>
              <div
                className="surveyLine"
                data-aos="fade-right"
                data-aos-duration="700"
                data-aos-offset="20"
              ></div>
              <p
                data-aos="fade-right"
                data-aos-duration="700"
                data-aos-offset="20"
              >
                Далеко-далеко за словесными горами в стране гласных и согласных
                живут рыбные тексты. Все от всех за буквенных грустный свой
                сбить пор снова рекламных.
              </p>
            </div>
            <div className="surveyCards">
              <div
                data-aos="fade-right"
                data-aos-duration="700"
                data-aos-offset="20"
              >
                <div className="cardItem yellowCard">
                  Как часто вы измеряете артериальное давление?
                </div>
                <div className="cardItem yellowCard">
                  Какие факторы, на ваш взгляд, влияют на ваше кровяное
                  давление?
                </div>
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="700"
                data-aos-offset="20"
              >
                <div className="cardItem">
                  Принимаете ли вы лекарства для контроля артериального
                  давления?
                </div>
                <div className="cardItem">
                  Курите ли вы или употребляете алкоголь?
                </div>
              </div>
            </div>
            <Link
              onClick={() => setIsQuestions(true)}
              className="br10"
              data-aos="fade-left"
              data-aos-duration="700"
              data-aos-offset="20"
            >
              Пройти опрос
            </Link>
          </div>
        </section>

        <section className="contactUs" id="contactUsSection">
          <div className="container">
            <div className="contactUsTxt">
              <h2
                data-aos="fade-right"
                data-aos-duration="700"
                data-aos-offset="20"
              >
                Далеко-далеко за словесными горами.
              </h2>
              <p
                data-aos="fade-right"
                data-aos-duration="700"
                data-aos-offset="20"
              >
                Далеко-далеко за словесными горами в стране, гласных и согласных
                живут рыбные тексты. Свой вершину своих буквоград не, живет
                запятых, вдали страну агентство текста подзаголовок предложения
                ручеек о.
              </p>
            </div>
            <div className="contactUsForm">
              <h2
                data-aos="fade-left"
                data-aos-duration="700"
                data-aos-offset="20"
              >
                Свяжитесь с нами
              </h2>
              <form action="POST">
                <input
                  data-aos="fade-left"
                  data-aos-duration="700"
                  data-aos-offset="20"
                  type="text"
                  name="name"
                  placeholder="Имя"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Номер телефона (+998)"
                  pattern="[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
                  required
                  maxLength={13}
                  data-aos="fade-left"
                  data-aos-duration="700"
                  data-aos-offset="20"
                />
                <button
                  type="submit"
                  data-aos="fade-left"
                  data-aos-duration="1300"
                  data-aos-offset="20"
                >
                  Оставить заявку
                </button>
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
