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
      <section className='imgWithTxt logisticBlock'>
        <div className='imgWithTxtHeading'>
          <h2>Логистика</h2>
          <p>
            Мы гордимся нашими филиалами в трех странах, что позволяет обеспечить быструю и надежную доставку наших
            БАДов по всей стране. Наша логистическая сеть гарантирует, что ваш заказ прибудет в кратчайшие сроки.
            Независимо от вашего местоположения, вы можете быть уверены в качестве и своевременности доставки наших
            продуктов.
          </p>
          <Link
            reloadDocument
            to={APP_ROUTES.WELCOME}
            className='br10'
          >
            Asosiy
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
