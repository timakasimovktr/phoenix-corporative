import React, { useEffect, useRef, useState } from "react";
import { APP_ROUTES } from "../../router/Route";
import { Outlet, Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import callcenter from "../../images/callCenter2.jpg";
import { useTranslation } from "react-i18next";
import gsap from "gsap";

const Callcenter = () => {
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
      <section
        className='imgWithTxt logisticBlock'
        onClick={() => setChangeLanguage(false)}
      >
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
        <div className='imgWithTxtHeading'>
          <h2>{t("headings.callCenter")}</h2>
          <p>{t("blocks.callCenterBlock.subtitle")}</p>
          <Link
            // reloadDocument
            to={APP_ROUTES.WELCOME}
            className='br10'
          >
            {t("blocks.callCenterBlock.btnText")}
          </Link>
        </div>
        <div
          className='imgWithTxtImg'
          style={{ backgroundImage: `url(${callcenter})` }}
        ></div>
      </section>
      <Footer />
      <Outlet />
    </>
  );
};

export default Callcenter;
