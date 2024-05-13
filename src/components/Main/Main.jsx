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
                ҲАР КУНИ БИЗ БИЛАН ЭЙФОРИЯНГИЗНИ ЯРАТИНГ.
              </h1>
              <p
                data-aos="fade-right"
                data-aos-duration="700"
                data-aos-delay="800"
              >
                Батафсил маълумот учун қайта қўнғироқ қилиш учун сўров қолдиринг
                - Сарлавҳа
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
                      <div className="offer">chegirma 30%</div>
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
                      <div className="offer">chegirma 30%</div>
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
              <SwiperSlide className="slideWrapper">Euphoria</SwiperSlide>
              <SwiperSlide className="slideWrapper">Arbitcom</SwiperSlide>
              <SwiperSlide className="slideWrapper">RCD Logistics</SwiperSlide>
              <SwiperSlide className="slideWrapper">
                Phoenix Solutions
              </SwiperSlide>
              <SwiperSlide className="slideWrapper">Euphoria</SwiperSlide>
              <SwiperSlide className="slideWrapper">Arbitcom</SwiperSlide>
              <SwiperSlide className="slideWrapper">RCD Logistics</SwiperSlide>
              <SwiperSlide className="slideWrapper">
                Phoenix Solutions
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        <section className="imgWithTxt" id="aboutUs">
          <div className="imgWithTxtHeading">
            <h2 data-aos="fade-right" data-aos-duration="700">
              Танани комплекс қўллаб-қувватлаш
            </h2>
            <p
              data-aos="fade-right"
              data-aos-duration="700"
              data-aos-offset="20"
            >
              "Euphoria group"нинг дунёсига хуш келибсиз! Биз битта умумий
              миссия: одамларга соғлом турмуш тарзини олиб боришга ёрдам бериш
              учун бирлаштирилган учта динамик компаниялармиз. Битта бренд
              остида тўпланган колл-марказлар жамоалари, маркетинг ва логистика
              мутахассислари саккиз йилдан ортиқ вақт давомида сизнинг
              фаровонлигингизга ҳисса қўшадиган юқори сифатли маҳсулотлар ва
              хизматларни тақдим этиш учун биргаликда ишламоқда.
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
              Baliq matnlari unli va undoshlar mamlakatida og'zaki tog'lardan
              uzoqda yashaydi. Og'iz, ishlatilgan. Reklama etti kichkina u hali
              ham o'z agentligi. Kerakli yovvoyi alfavit satr bilan uchrashdi,
              ular vergul bilan ajratilgan yo'lga ega, keyin katta, uzoq
              matnlarni yiqitishga qaror qildi, shu paytgacha bizning
              qoidalarimiz bilan nuqta mamlakati subtitr savolning ostiga
              tushdi.
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
              Baliq matnlari unli va undoshlar mamlakatida og'zaki tog'lardan
              uzoqda yashaydi. Og'iz, ishlatilgan. Reklama etti kichkina u hali
              ham o'z agentligi. Kerakli yovvoyi alfavit satr bilan uchrashdi,
              ular vergul bilan ajratilgan yo'lga ega, keyin katta, uzoq
              matnlarni yiqitishga qaror qildi, shu paytgacha bizning
              qoidalarimiz bilan nuqta mamlakati subtitr savolning ostiga
              tushdi.
            </p>
            <Link
              reloadDocument
              to={APP_ROUTES.PRODUCTS}
              className="br10"
              data-aos="fade-right"
              data-aos-duration="700"
              data-aos-offset="20"
            >
              Батафсил
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
                        ODAMLARGA NIMA UCHUN KERAKLIGI HAQIDA MATN NIMA UCHUN
                        MATN BU ODAMLARGA KERAK MATN NIMA UCHUN ODAMLARGA KERAK
                        MATN ODAMLARGA NIMA UCHUN KERAKLIGI HAQIDA NIMA UCHUN BU
                        HAQIDA MATN ODAMLARGA
                      </p>
                      <div className="iconPerson">
                        <img src={person} alt={person} />
                      </div>
                      <h3>Доктор jivan lika</h3>
                      <h4>БФҚ саноати соҳасида фанлар номзоди</h4>
                    </SwiperSlide>
                    <SwiperSlide className="slideWrapper">
                      <div className="quote">
                        <img src={quotationMark} alt={quotationMark} />
                      </div>
                      <p>
                        ODAMLARGA NIMA UCHUN KERAKLIGI HAQIDA MATN NIMA UCHUN
                        MATN BU ODAMLARGA KERAK MATN NIMA UCHUN ODAMLARGA KERAK
                        MATN ODAMLARGA NIMA UCHUN KERAKLIGI HAQIDA NIMA UCHUN BU
                        HAQIDA MATN ODAMLARGA
                      </p>
                      <div className="iconPerson">
                        <img src={person} alt={person} />
                      </div>
                      <h3>Доктор jivan lika</h3>
                      <h4>БФҚ саноати соҳасида фанлар номзоди</h4>
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
                        ODAMLARGA NIMA UCHUN KERAKLIGI HAQIDA MATN NIMA UCHUN
                        MATN BU ODAMLARGA KERAK MATN NIMA UCHUN ODAMLARGA KERAK
                        MATN ODAMLARGA NIMA UCHUN KERAKLIGI HAQIDA NIMA UCHUN BU
                        HAQIDA MATN ODAMLARGA
                      </p>
                      <div className="iconPerson">
                        <img src={person} alt={person} />
                      </div>
                      <h3>Доктор jivan lika</h3>
                      <h4>БФҚ саноати соҳасида фанлар номзоди</h4>
                    </SwiperSlide>
                    <SwiperSlide className="slideWrapper">
                      <div className="quote">
                        <img src={quotationMark} alt={quotationMark} />
                      </div>
                      <p>
                        ODAMLARGA NIMA UCHUN KERAKLIGI HAQIDA MATN NIMA UCHUN
                        MATN BU ODAMLARGA KERAK MATN NIMA UCHUN ODAMLARGA KERAK
                        MATN ODAMLARGA NIMA UCHUN KERAKLIGI HAQIDA NIMA UCHUN BU
                        HAQIDA MATN ODAMLARGA
                      </p>
                      <div className="iconPerson">
                        <img src={person} alt={person} />
                      </div>
                      <h3>Доктор jivan lika</h3>
                      <h4>БФҚ саноати соҳасида фанлар номзоди</h4>
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
                Эйфориянинг барча имтиёзларини олинг
              </h2>
              <h3
                data-aos="fade-right"
                data-aos-duration="700"
                data-aos-offset="20"
              >
                Йўналтирувчи платформа ҳар ким ўзи топадиган нарсадан пул топиши
                учун яратилган
              </h3>
              <Link
                reloadDocument
                to={APP_ROUTES.REFERRAL}
                className="br10"
                data-aos="fade-right"
                data-aos-duration="700"
                data-aos-offset="20"
              >
                Батафсил…
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
                Сўровдан ўтиш
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
                Қаердан бошлашни билмаяпсизми? Тўғри маҳсулотлар тўпламини
                танлаш учун онлайн сўровдан ўтинг
              </p>
            </div>
            <div className="surveyCards">
              <div
                data-aos="fade-right"
                data-aos-duration="700"
                data-aos-offset="20"
              >
                <div className="cardItem yellowCard">
                  Қон босимингизни қанчалик тез-тез ўлчайсиз?
                </div>
                <div className="cardItem yellowCard">
                  Сизнингча, қон босимингизга қандай омиллар таъсир қилади?
                </div>
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="700"
                data-aos-offset="20"
              >
                <div className="cardItem">
                  Қон босимини назорат қилиш учун дори-дармонларни қабул
                  қиласизми?
                </div>
                <div className="cardItem">
                  Сиз чекасизми ёки спиртли ичимлик ичасизми?
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
              Sinab ko'ring
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
                Биз билан боғланинг
              </h2>
              <p
                data-aos="fade-right"
                data-aos-duration="700"
                data-aos-offset="20"
              >
                Биз ҳар куни мижозларимизнинг ҳаётини яхши томонга ўзгартириб,
                уларни фаол ҳаёт тарзи ва соғлиғининг энг яхши ҳолатига
                келтириш учун ишлаб чиқамиз.
              </p>
            </div>
            <div className="contactUsForm">
              <h2
                data-aos="fade-left"
                data-aos-duration="700"
                data-aos-offset="20"
              >
                Biz bilan bog`laning
              </h2>
              <form action="POST">
                <input
                  data-aos="fade-left"
                  data-aos-duration="700"
                  data-aos-offset="20"
                  type="text"
                  name="name"
                  placeholder="Исм"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Телефон раками (+998)"
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
                  Murojat qilish
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
