import React, { useState, useEffect, useRef } from "react";
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
import { useTranslation } from "react-i18next";
import gsap from "gsap";

function Contacts() {
  const { t, i18n } = useTranslation();
  const [changeLanguage, setChangeLanguage] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.set("svg", { autoAlpha: 1 });

    gsap
      .timeline({ repeat: -1 })
      .fromTo(
        ".text",
        { attr: { startOffset: "120%" }, autoAlpha: 0 },
        {
          attr: { startOffset: "0%" },
          autoAlpha: 1,
          duration: 5,
          ease: "none",
        },
      )
      .to(
        ".text",
        {
          attr: { startOffset: "-120%" },
          autoAlpha: 0,
          duration: 5,
          ease: "none",
        },
        5,
      );
  }, []);
  return (
    <>
      <Header
        changeLanguage={changeLanguage}
        setChangeLanguage={setChangeLanguage}
      />
      <main
        onClick={() => setChangeLanguage(false)}
        style={{ overflow: "hidden" }}
      >
        <section className='imgWithTxt imgWithTxtContacts'>
          <svg
            viewBox='0 50 1000 400' // Increased viewBox dimensions for larger area
            width='100%'
            height='100%'
            preserveAspectRatio='xMidYMid meet' // Ensures the SVG is centered
          >
            <defs>
              <path
                id='infinity-path'
                fill='none'
                // d='M 50 300 Q 100 50 250 200 Q 350 350 450 200 Q 600 50 700 350'
                d='M 400 300
               C 200 100, 200 500, 400 300
               C 600 100, 600 500, 400 300'
              ></path>
            </defs>
            <text>
              <textPath
                className='text'
                href='#infinity-path'
              >
                EUPHORIA GROUP EUPHORIA GROUP
              </textPath>
            </text>
          </svg>
          <div className='container'>
            <div className='imgWithTxtHeading'>
              <h2>{t("headings.contacts")}</h2>
              <p>{t("blocks.contacts.subtitle")}</p>
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
                <h3>{t("blocks.contacts.form.title")}</h3>
                {/* <h4>Ҳамкорлик бўйича саволларингиз ёки таклифларингиз бўлса, шаклни тўлдиринг</h4> */}
                <div className='contactsItem'>
                  <div className='contactsIcon'>
                    <img
                      src={phoneIcon}
                      alt={phoneIcon}
                    />
                  </div>
                  <Link
                    to='tel:+998555036996'
                    className='contactsItemInfo'
                  >
                    <p> +998555036996</p>
                  </Link>
                </div>
                <div className='contactsItem'>
                  <div className='contactsIcon'>
                    <img
                      src={mailIcon}
                      alt={mailIcon}
                    />
                  </div>
                  <Link
                    to='mailto:info@euphoriagroup.uz'
                    className='contactsItemInfo'
                  >
                    <p>info@euphoriagroup.uz</p>
                  </Link>
                </div>
                <div className='contactsItem'>
                  <div className='contactsIcon'>
                    <img
                      src={locationIcon}
                      alt={locationIcon}
                    />
                  </div>
                  <div className='contactsItemInfo'>
                    <p>{t("blocks.contacts.form.location")}</p>
                  </div>
                </div>
                <div className='bigRound'></div>
                <div className='smallRound'></div>
              </div>
              <div className='form'>
                <div className='inputWrapper'>
                  <input
                    type='text'
                    placeholder={`${t("blocks.contacts.form.name")}`}
                  />
                  <input
                    type='text'
                    placeholder={`${t("blocks.contacts.form.lastName")}`}
                  />
                </div>
                <div className='inputWrapper'>
                  <input
                    type='email'
                    placeholder='E-mail'
                  />
                  <input
                    type='tel'
                    placeholder={`${t("blocks.contacts.form.phone")}`}
                    maxLength={13}
                  />
                </div>
                <textarea
                  placeholder={`${t("blocks.contacts.form.massage")}`}
                  cols='30'
                  rows='6'
                ></textarea>
                <button>{t("blocks.contacts.form.buttonText")}</button>
              </div>
            </div>
            <div className='mapWrapper'>
              {/* <iframe
                src='https://yandex.ru/map-widget/v1/?um=constructor%3A23fb4fdaca0fcfd3a905559952ff30f9f8afcdee76ea43d1860097db18754e30&amp;source=constructor'
                width='100%'
                height='100%'
                frameBorder='0'
              ></iframe> */}
              <iframe
                src='https://yandex.com/map-widget/v1/?um=constructor%3Ac2490b93a48effe888bd86ad92a98d13bfa0559b69ee2cc102036398ac26035e&amp;source=constructor'
                width='100%'
                height='100%'
                frameborder='0'
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
