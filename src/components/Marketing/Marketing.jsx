import React from "react";
import { APP_ROUTES } from "../../router/Route";
import { Outlet, Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import marketing from "../../images/marketing2.jpg";
import { useTranslation } from "react-i18next";

const Marketing = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Header />
      <section className='imgWithTxt logisticBlock'>
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
