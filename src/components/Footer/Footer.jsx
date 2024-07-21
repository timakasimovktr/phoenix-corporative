import React, { useEffect } from "react";
import { APP_ROUTES } from "../../router/Route";
import { Outlet, Link } from "react-router-dom";

import footerLogo from "../../images/PhoenixLogo.svg";
import instaIcon from "../../images/Instagram-Icon.svg";
import tgIcon from "../../images/Telegram-Icon.svg";
import fbIcon from "../../images/Facebook-Icon.svg";
import euphoriaLogo from "../../images/euphoria 1.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

import "./Footer.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const scrollTo = () => {
    const hash = window.location.hash;
    if (hash) {
      const sectionId = document.getElementById(hash.slice(1));
      if (sectionId) {
        sectionId.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <footer>
        <div className='footer-wrapper container'>
          <div className='footer-row'>
            <div className='footer-logo'>
              <img
                src={euphoriaLogo}
                alt=''
              />
            </div>

            <div
              className='footer-links-row'
              style={{ width: "70%" }}
            >
              <div className='footer-col'>
                <Link
                  to={`${APP_ROUTES.WELCOME}#contactUsSection`}
                  onClick={() => scrollTo()}
                >
                  <b> {t("blocks.footer.text1")}</b>
                </Link>
                <Link
                  to={`${APP_ROUTES.WELCOME}#commentsSection`}
                  onClick={() => scrollTo()}
                >
                  {t("blocks.footer.text2")}
                </Link>
              </div>
              <div className='footer-col'>
                <Link
                  // reloadDocument
                  to={`${APP_ROUTES.CATALOG}`}
                  onClick={() => scrollTo()}
                >
                  {t("blocks.footer.text3")}
                </Link>
                <Link
                  // reloadDocument
                  to={`${APP_ROUTES.CATALOG}`}
                  onClick={() => scrollTo()}
                >
                  {t("blocks.footer.text4")}
                </Link>
                <Link
                  to={`${APP_ROUTES.CONTACTS}`}
                  onClick={() => scrollTo()}
                >
                  {t("timeline.title")}
                </Link>
              </div>
              <div className='footer-col'>
                <Link
                  to={`${APP_ROUTES.WELCOME}#partners`}
                  onClick={() => scrollTo()}
                >
                  {t("blocks.footer.text6")}
                </Link>
                <Link
                  to={`${APP_ROUTES.WELCOME}#marketingSection`}
                  onClick={() => scrollTo()}
                >
                  {t("blocks.footer.text7")}
                </Link>
                <Link
                  // reloadDocument
                  to={`${APP_ROUTES.CONTACTS}`}
                  onClick={() => scrollTo()}
                >
                  FAQ
                </Link>
              </div>
              <div className='footer-col'>
                <Link
                  // reloadDocument
                  to={`${APP_ROUTES.CONTACTS}`}
                  onClick={() => scrollTo()}
                >
                  {t("blocks.footer.text8")}
                </Link>
                <Link
                  // reloadDocument
                  to='tel:+998555036996'
                  // onClick={() => scrollTo()}
                >
                  +998555036996
                </Link>
                <div className='social_media'>
                  <Link to={`${APP_ROUTES.WELCOME}#commentsSection`}>
                    <img
                      src={instaIcon}
                      alt=''
                    />
                  </Link>
                  <Link to={`${APP_ROUTES.WELCOME}#commentsSection`}>
                    {/* <img
                      src={fbIcon}
                      alt=''
                    /> */}
                    <FaFacebookF size={24} />
                  </Link>
                  <Link to={`${APP_ROUTES.WELCOME}#commentsSection`}>
                    {/* <img
                      src={tgIcon}
                      alt=''
                    /> */}
                    <FaTelegramPlane size={24} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='phoenix-prod'>
            <div></div>
            <div>
              <p>powered by: </p>
              <div className='prodImage'>
                <img
                  src={footerLogo}
                  alt=''
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <p>© 2024 - Phoenix</p>
          </div>
        </div>
      </footer>
      <Outlet />
    </>
  );
};

export default Footer;
