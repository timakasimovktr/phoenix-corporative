import React from "react";
import { APP_ROUTES } from "../../router/Route";
import { Outlet, Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import logistics from "../../images/logistics.jpg";

const Logistics = () => {
  return (
    <>
      <Header />
      <section className="imgWithTxt logisticBlock">
        <div className="imgWithTxtHeading">
          <h2>Логистика</h2>
          <p>
            "Euphoria group"нинг дунёсига хуш келибсиз! Биз битта умумий миссия:
            одамларга соғлом турмуш тарзини олиб боришга ёрдам бериш учун
            бирлаштирилган учта динамик компаниялармиз. Битта бренд остида
            тўпланган колл-марказлар жамоалари, маркетинг ва логистика
            мутахассислари саккиз йилдан ортиқ вақт давомида сизнинг
            фаровонлигингизга ҳисса қўшадиган юқори сифатли маҳсулотлар ва
            хизматларни тақдим этиш учун биргаликда ишламоқда. 
          </p>
          <Link reloadDocument to={APP_ROUTES.WELCOME} className="br10">
            Asosiy
          </Link>
        </div>
        <div
          className="imgWithTxtImg"
          style={{ backgroundImage: `url(${logistics})` }}
        ></div>
      </section>
      <Footer />
      <Outlet />
    </>
  );
};

export default Logistics;
