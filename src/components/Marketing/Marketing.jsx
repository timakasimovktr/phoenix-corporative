import React from "react";
import { APP_ROUTES } from "../../router/Route";
import { Outlet, Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import marketing from "../../images/marketing.png";

const Marketing = () => {
  return (
    <>
      <Header />
      <section className="imgWithTxt">
        <div className="imgWithTxtHeading">
          <h2>Маркентинг</h2>
          <p>
            Добро пожаловать в мир компании "Euphoria group"! Мы - совокупность
            трех динамичных компаний, объединенных одной общей миссией: помогать
            людям вести здоровый образ жизни. Собравшиеся под одним брендом
            коллективы колл-центров, маркетинговых и логистических специалистов
            работают совместно уже более восьми лет, чтобы обеспечить вас
            высококачественными продуктами и услугами, способствующими вашему
            благополучию.
          </p>
          <Link reloadDocument to={APP_ROUTES.WELCOME} className="br10">
            Главная
          </Link>
        </div>
        <div
          className="imgWithTxtImg"
          style={{ backgroundImage: `url(${marketing})` }}
        ></div>
      </section>
      <Footer />
      <Outlet />
    </>
  );
};

export default Marketing;
