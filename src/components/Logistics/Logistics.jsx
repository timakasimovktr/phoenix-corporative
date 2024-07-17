import React, { useState } from "react";
import { APP_ROUTES } from "../../router/Route";
import { Outlet, Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import logistics from "../../images/logistic2.jpeg";
import { useTranslation } from "react-i18next";

const Logistics = () => {
  const { t, i18n } = useTranslation();
  const [changeLanguage, setChangeLanguage] = useState(false);
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
        <div className='imgWithTxtHeading'>
          <h2>{t("headings.logistic")}</h2>
          <p>{t("blocks.logisticsBlock.subtitle")}</p>
          <Link
            // reloadDocument
            to={APP_ROUTES.WELCOME}
            className='br10'
          >
            {t("blocks.logisticsBlock.btnText")}
          </Link>
        </div>
        <div
          className='imgWithTxtImg'
          style={{ backgroundImage: `url(${logistics})` }}
        ></div>
      </section>
      <Footer />
      <Outlet />
    </>
  );
};

export default Logistics;
