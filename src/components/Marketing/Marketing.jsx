import React, { useEffect, useRef, useState } from "react";
import { APP_ROUTES } from "../../router/Route";
import { Outlet, Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import marketing from "../../images/marketing2.jpg";
import { useTranslation } from "react-i18next";
import gsap from "gsap";

const Marketing = () => {
  const { t, i18n } = useTranslation();
  const [changeLanguage, setChangeLanguage] = useState(false);

  const textRef = useRef(null);

  useEffect(() => {
    gsap.set("svg", { autoAlpha: 1 });

    gsap
      .timeline({ repeat: -1 })
      .from(".text", {
        attr: { startOffset: "110%" },
        duration: 5,
        ease: "none",
        stagger: 5,
      })
      .to(".text", { autoAlpha: 0, duration: 0.5, stagger: 5 }, 5);
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
        <svg viewBox='0 50 800 600'>
          <defs>
            <path
              id='path-1'
              fill='none'
              d='M 50 300 Q 100 50 250 200 Q 350 350 450 200 Q 600 50 700 350'
            ></path>
          </defs>
          <text>
            <textPath
              className='text'
              href='#path-1'
            >
              {t("headings.marketing")} {t("headings.marketing")}
            </textPath>
          </text>
        </svg>
        <div className='imgWithTxtHeading'>
          <h2>{t("headings.marketing")}</h2>
          <p>{t("blocks.marketingBlock.subtitle")}</p>
          <Link
            // reloadDocument
            to={APP_ROUTES.WELCOME}
            className='br10'
          >
            {t("blocks.marketingBlock.btnText")}
          </Link>
        </div>
        <div
          className='imgWithTxtImg'
          style={{ backgroundImage: `url(${marketing})` }}
        ></div>
      </section>
      <Footer />
      <Outlet />
    </>
  );
};

export default Marketing;
