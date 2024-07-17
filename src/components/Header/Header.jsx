// Header.jsx
import React, { useState } from "react";
import euphoriaLogo from "../../images/euphoria 1.png";
import globalIcon from "../../images/Global-Icon.svg";
import { APP_ROUTES } from "../../router/Route";
import { useNavigate } from "react-router-dom";
import "./Header.scss";
import rusFlag from "../../images/Rus-Flag.svg";
import uzbFlag from "../../images/Uzb-Flag.svg";
import { Outlet, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const flagMap = {
  ru: { flag: rusFlag, label: "Русский" },
  uz: { flag: uzbFlag, label: "Узбекча" },
};
const Header = (props) => {
  const navigation = useNavigate();

  const { t, i18n } = useTranslation();
  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <div className={`loaderWrapper ${props.hiddenLoader ? "" : "hiddenLoader"}`}>
        <div className='loaderHeading'> {t("main.reload")}!</div>
        <div className='loader'></div>
      </div>
      <header>
        <div className='header-wrapper container '>
          <div
            className='header-logo'
            onClick={() => navigation(APP_ROUTES.WELCOME)}
          >
            <img
              src={euphoriaLogo}
              alt=''
            />
          </div>
          <div className='header-menu'>
            <nav>
              <div className='navbar-container'>
                <input
                  id='menu__toggle'
                  type='checkbox'
                />
                <label
                  className='menu__btn'
                  htmlFor='menu__toggle'
                >
                  <span></span>
                </label>
                <ul className='menu__box'>
                  <li>
                    <Link
                      // reloadDocument
                      to={APP_ROUTES.WELCOME}
                    >
                      {t("blocks.header.main")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      // reloadDocument
                      to={APP_ROUTES.CATALOG}
                    >
                      {t("blocks.header.products")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      // reloadDocument
                      to={APP_ROUTES.CALLCENTER}
                    >
                      {t("headings.callCenter")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      // reloadDocument
                      to={APP_ROUTES.MARKETING}
                    >
                      {t("headings.marketing")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      // reloadDocument
                      to={APP_ROUTES.LOGISTICS}
                    >
                      {t("blocks.header.logistic")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      // reloadDocument
                      to={APP_ROUTES.CONTACTS}
                    >
                      {t("blocks.header.contacts")}
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
            <div className='change-language'>
              <img
                onClick={() => props.setChangeLanguage(!props.changeLanguage)}
                src={globalIcon}
                alt=''
              />

              {props.changeLanguage && (
                <>
                  <div className='change-language-block br10'>
                    {Object.keys(flagMap).map((language) => (
                      <a
                        key={language}
                        onClick={() => handleLanguageChange(language)}
                      >
                        <p>{flagMap[language].label}</p>
                        <img
                          src={flagMap[language].flag}
                          alt={language}
                        />
                      </a>
                    ))}
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
