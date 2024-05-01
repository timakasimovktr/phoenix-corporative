import React from "react";
import { APP_ROUTES } from "../../router/Route";
import { Outlet, Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import callcenter from "../../images/callcenter.jpg";

const Callcenter = () => {
  return (
    <>
      <Header />
      <section className="imgWithTxt">
        <div className="imgWithTxtHeading">
          <h2>Колл-центр</h2>
          <p>
            Мы гордимся тем, что с каждым днем удается изменять жизни наших
            клиентов к лучшему, поддерживая их в стремлении к активному образу
            жизни и наилучшему состоянию здоровья. Наши колл-центры всегда
            готовы предоставить вам высококвалифицированную консультацию и
            поддержку, а маркетинговая команда разрабатывает инновационные
            решения, которые делают продукты и услуги "Euphoria group"
            доступными и понятными для каждого.
          </p>
          <Link reloadDocument to={APP_ROUTES.WELCOME} className="br10">
            Главная
          </Link>
        </div>
        <div
          className="imgWithTxtImg"
          style={{ backgroundImage: `url(${callcenter})` }}
        ></div>
      </section>
      <Footer />
      <Outlet />
    </>
  );
};

export default Callcenter;
