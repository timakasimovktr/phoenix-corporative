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
          <h2>Qo'ng'iroq markazi</h2>
          <p>
            Биз ҳар куни мижозларимизнинг ҳаётини яхши томонга ўзгартириб,
            уларни фаол ҳаёт тарзи ва соғлиғининг энг яхши ҳолатига
            интилишларида қўллаб-қувватлаётганимиздан фахрланамиз. Бизнинг
            колл-марказларимиз ҳар доим сизга юқори малакали маслаҳат ва ёрдам
            кўрсатишга тайёр бўлиб маркетинг гуруҳи эса "Euphoria Group"
            маҳсулотлари ва хизматларини ҳамма учун хамёнбоп ва тушунарли
            қиладиган инновацион ечимларни ишлаб чиқади.
          </p>
          <Link reloadDocument to={APP_ROUTES.WELCOME} className="br10">
            Asosiy
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
