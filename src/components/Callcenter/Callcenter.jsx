import React from "react";
import { APP_ROUTES } from "../../router/Route";
import { Outlet, Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import callcenter from "../../images/callcenter.jpg";
import { useTranslation } from "react-i18next";

const Callcenter = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Header />
      <section className='imgWithTxt logisticBlock'>
        <div className='imgWithTxtHeading'>
          <h2>{t("headings.callCenter")}</h2>
          <p>{t("blocks.callCenterBlock.subtitle")}</p>
          <Link
            reloadDocument
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
