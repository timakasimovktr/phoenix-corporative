import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCards, FreeMode } from "swiper/modules";
import "swiper/css/bundle";

import "./Contacts.scss";
import { Outlet, Link } from "react-router-dom";
import { APP_ROUTES } from "../../router/Route";
import productItem from "../../images/productItem.png";
import productItemAfter from "../../images/productItemAfter.png";
import phoneIcon from "../../images/Phone-Icon.svg";
import locationIcon from "../../images/Location-Icon.svg";
import mailIcon from "../../images/Mail-Icon.svg";
import complexSupport from "../../images/filial-Map.png";

//images
import rightArrow from "../../images/sliderArrow.png";
import asiaMap from "../../images/asiamap.png";

//sections
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Contacts() {
  return (
    <>
      <Header />
      <main>
        <section className='imgWithTxt imgWithTxtContacts'>
          <div className='container'>
            <div className='imgWithTxtHeading'>
              <h2>Бизнес-экосистема</h2>
              <p>
                Мы предлагаем широкий ассортимент товаров и имеем офисы в трех странах. Для вашего удобства мы также
                открыли интернет-магазин, который обеспечивает доставку по всей стране. Это позволит вам полностью
                сосредоточиться на заботе о себе, не отвлекаясь на поиск необходимых вещей и их приобретение.
              </p>
            </div>
            <div
              className='imgWithTxtImg withoutAnimation'
              style={{ backgroundImage: `url(${asiaMap})` }}
            >
              <div className='dot1'>
                <div className='dotChild'>
                  <p>Узбекистан</p>
                </div>
              </div>
              <div className='dot2'>
                <div className='dotChild'>
                  <p>Казахстан</p>
                </div>
              </div>
              <div className='dot3'>
                <div className='dotChild'>
                  <p>Турция</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='contactUsForm'>
          <div className='container'>
            <div className='formWrapper'>
              <div className='contactsWrapper'>
                <h3>Свяжитесь с нами!</h3>
                {/* <h4>Ҳамкорлик бўйича саволларингиз ёки таклифларингиз бўлса, шаклни тўлдиринг</h4> */}
                <div className='contactsItem'>
                  <div className='contactsIcon'>
                    <img
                      src={phoneIcon}
                      alt={phoneIcon}
                    />
                  </div>
                  <div className='contactsItemInfo'>
                    <p>+99899 345 69 89</p>
                  </div>
                </div>
                <div className='contactsItem'>
                  <div className='contactsIcon'>
                    <img
                      src={mailIcon}
                      alt={mailIcon}
                    />
                  </div>
                  <div className='contactsItemInfo'>
                    <p>dkkggglllllll@gmail.com</p>
                  </div>
                </div>
                <div className='contactsItem'>
                  <div className='contactsIcon'>
                    <img
                      src={locationIcon}
                      alt={locationIcon}
                    />
                  </div>
                  <div className='contactsItemInfo'>
                    <p>Узбекистан; Ташкент; Юнусабадский район; улица Ахмада Дониша 78А</p>
                  </div>
                </div>
                <div className='bigRound'></div>
                <div className='smallRound'></div>
              </div>
              <div className='form'>
                <div className='inputWrapper'>
                  <input
                    type='text'
                    placeholder='Имя'
                  />
                  <input
                    type='text'
                    placeholder='Фамилия'
                  />
                </div>
                <div className='inputWrapper'>
                  <input
                    type='email'
                    placeholder='E-mail'
                  />
                  <input
                    type='tel'
                    placeholder='Номер телефона'
                    maxLength={13}
                  />
                </div>
                <textarea
                  placeholder='Ваше сообщение'
                  cols='30'
                  rows='6'
                ></textarea>
                <button>Отправить</button>
              </div>
            </div>
            <div className='mapWrapper'>
              <iframe
                src='https://yandex.ru/map-widget/v1/?um=constructor%3A23fb4fdaca0fcfd3a905559952ff30f9f8afcdee76ea43d1860097db18754e30&amp;source=constructor'
                width='100%'
                height='100%'
                frameBorder='0'
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Outlet />
    </>
  );
}

export default Contacts;