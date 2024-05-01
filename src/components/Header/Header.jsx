// Header.jsx
import React, { useState } from "react";
import euphoriaLogo from "../../images/Euphoria-Logo.svg";
import globalIcon from "../../images/Global-Icon.svg";
import { APP_ROUTES } from "../../router/Route";
import { useNavigate } from "react-router-dom";
import "./Header.scss";
import rusFlag from "../../images/Rus-Flag.svg";
import uzbFlag from "../../images/Uzb-Flag.svg";
import { Outlet, Link } from "react-router-dom";

const Header = (props) => {
  const navigation = useNavigate();
  const [changeLanguage, setChangeLanguage] = useState(false);

  return (
    <>
      <div className={`loaderWrapper ${props.hiddenLoader ? '' : 'hiddenLoader'}`}><div className="loaderHeading">Загрузка!</div><div className="loader"></div></div>
      <header>
        <div className="header-wrapper container ">
          <div
            className="header-logo"
            onClick={() => navigation(APP_ROUTES.WELCOME)}
          >
            <img src={euphoriaLogo} alt="" />
          </div>
          <div className="header-menu">
            <nav>
              <div className="navbar-container">
                <input id="menu__toggle" type="checkbox" />
                <label className="menu__btn" htmlFor="menu__toggle">
                  <span></span>
                </label>
                <ul className="menu__box">
                  <li>
                    <Link reloadDocument to={APP_ROUTES.WELCOME}>Главная</Link>
                  </li>
                  <li>
                    <Link reloadDocument to={APP_ROUTES.CATALOG}>Продукция</Link>
                  </li>
                  <li>
                    <Link reloadDocument to={APP_ROUTES.LOGISTICS}>Логистика</Link>
                  </li>
                  <li>
                    <Link reloadDocument to={APP_ROUTES.CONTACTS}>Контакты</Link>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="change-language">
              <img
                onClick={() => setChangeLanguage(!changeLanguage)}
                src={globalIcon}
                alt=""
              />

              {changeLanguage && (
                <>
                  <div className="change-language-block br10">
                    <a>
                      <p>Русский</p>
                      <img src={rusFlag} alt="rus" />
                    </a>
                    <a>
                      <p>Узбекский</p>
                      <img src={uzbFlag} alt="uzb" />
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
