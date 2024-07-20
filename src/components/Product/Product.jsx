import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCards, FreeMode } from "swiper/modules";
import "swiper/css/bundle";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Product.scss";
import { Outlet, Link } from "react-router-dom";
import { APP_ROUTES } from "../../router/Route";
import successOrder from "../../images/successOrder.svg";
import productDesc12 from "../../images/productDesc12.jpg";
import productDesc2 from "../../images/productDesc2.jpg";
import productDesc3 from "../../images/productDesc3.jpg";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import AOS from "aos";
import "aos/dist/aos.css";
import { IMaskInput } from "react-imask";
import { useTranslation } from "react-i18next";
import Tabs from "../Main/Tabs";

function Product() {
  const { t } = useTranslation();
  const [qty, setQty] = useState(0);
  const [orderInfo, setOrderInfo] = useState({
    name: "",
    surname: "",
    phone: "",
    city: "",
    product_id: +window.location.pathname.split("/")[2],
    count: qty,
  });
  const [orederStep1, setOrderStep1] = useState(true);
  const [orederStep2, setOrderStep2] = useState(false);
  const [isOpenOrder, setIsOpenOrder] = useState(false);
  const [productObj, setProductObj] = useState({});
  const [productCategory, setProductCategory] = useState({});
  const [isLoader, setIsLoader] = useState(true);
  const phoneMask = "+998 (00) 000-00-00";
  const Mask = [
    {
      mask: phoneMask,
    },
  ];

  useEffect(() => {
    AOS.init();
    window.onload = () => {
      if (productObj) {
        setIsLoader(false);
      }
    };
  });

  const closePopup = () => {
    const orderWrapper = document.querySelector(".orderWrapper");
    orderWrapper.style.animation = "riseDown 0.5s ease-in-out 1";

    setTimeout(() => {
      setIsOpenOrder(false);
      setOrderStep1(true);
      setOrderStep2(false);
      orderWrapper.style.animation = "";
    }, 500);
  };

  const getProductCategory = async (id) => {
    const apiUrl = `${APP_ROUTES.URL}/category/${id}`;
    axios
      .get(apiUrl)
      .then((response) => {
        setProductCategory(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const id = window.location.pathname.split("/")[2];
    const apiUrl = `${APP_ROUTES.URL}/products/${id}`;

    axios
      .get(apiUrl)
      .then(async (response) => {
        if (!response.data) window.location.href = "/catalog";
        getProductCategory(response.data.category_id);
        setProductObj(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const sendOrder = () => {
    if (orderInfo.name && orderInfo.surname && orderInfo.phone && orderInfo.city) {
      axios
        .post(`${APP_ROUTES.URL}/orders`, orderInfo)
        .then((response) => {
          setOrderStep2(true);
          setOrderStep1(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      toast.error(`${t("blocks.contacts.form.fillInputs")}`);
    }
  };

  useEffect(() => {
    if (productObj) {
      setIsLoader(false);
    }
  });

  const clickOnOrderBtn = () => {
    if (qty === 0) return toast.error(`${t("blocks.contacts.form.quantityAlert")}`);
    setIsOpenOrder(true);
  };

  const [changeLanguage, setChangeLanguage] = useState(false);
  return (
    <>
      <Header
        hiddenLoader={isLoader}
        changeLanguage={changeLanguage}
        setChangeLanguage={setChangeLanguage}
      ></Header>
      {/* <main className={productObj.color === 2 && "urion"}> */}
      <main onClick={() => setChangeLanguage(false)}>
        <ToastContainer />
        <div
          className={`orderPopup ${isOpenOrder ? "" : "hidden"}`}
          onClick={() => closePopup()}
        >
          <div
            className='orderWrapper'
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className='closePopup'
              onClick={() => closePopup()}
            ></div>
            <div className={`orderStep1 ${orederStep1 ? "" : "hidden"}`}>
              <h3>
                {t("blocks.catalogBlock.order")} "{productObj.title}"
              </h3>
              <input
                type='text'
                onChange={(e) => setOrderInfo({ ...orderInfo, name: e.target.value })}
                placeholder={t("blocks.contacts.form.name")}
                maxLength='30'
              />
              <input
                type='text'
                onChange={(e) => setOrderInfo({ ...orderInfo, surname: e.target.value })}
                placeholder={t("blocks.contacts.form.lastName")}
                maxLength='30'
              />
              {/* <input
                onChange={(e) => setOrderInfo({ ...orderInfo, phone: e.target.value })}
                type='tel'
                placeholder='Номер телефона'
                maxLength='13'
              /> */}
              <IMaskInput
                onChange={(e) => setOrderInfo({ ...orderInfo, phone: e.target.value })}
                type='tel'
                placeholder={t("blocks.contacts.form.phone")}
                name='phone'
                mask={Mask}
                pattern='[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}'
                maxLength={19}
                required
              />
              <select
                name=''
                id=''
                onChange={(e) => setOrderInfo({ ...orderInfo, city: e.target.value })}
              >
                <option
                  value=''
                  hidden
                >
                  {t("blocks.contacts.form.city")}
                </option>
                <option value='Ташкент'>Ташкент</option>
                <option value='Самарканд'>Самарканд</option>
                <option value='Карши'>Карши</option>
                <option value='Бухара'>Бухара</option>
                <option value='Джизах'>Джизах</option>
                <option value='Андижан'>Андижан</option>
                <option value='Наманган'>Наманган</option>
                <option value='Фергана'>Фергана</option>
                <option value='Хорезм'>Хорезм</option>
                <option value='Навои'>Навои</option>
                <option value='Кашкадарья'>Кашкадарья</option>
              </select>
              <h2>
                {" "}
                {t("blocks.contacts.form.price")}: {(productObj?.price * qty).toLocaleString()} сум
              </h2>
              <button
                className='sendOrder'
                onClick={() => sendOrder()}
              >
                {t("blocks.catalogBlock.buy")}
              </button>
            </div>
            <div className={`orderStep2 ${orederStep2 ? "" : "hidden"}`}>
              <img
                src={successOrder}
                alt={successOrder}
              />
              <h3> {t("blocks.contacts.form.accepted")}</h3>
              <p>
                {t("blocks.contacts.form.orderText")}: {productObj.title} <br /> {t("blocks.catalogBlock.quantity")}:{" "}
                {qty} <br />
                {t("blocks.contacts.form.contactYou")}
                <br /> {t("blocks.contacts.form.soon")}
              </p>
            </div>
          </div>
        </div>
        <section className='shopTextWrapper'>
          <div className='container'>
            <h3>{t("blocks.catalogBlock.shop")}</h3>
            <div className='shopline'></div>
            {/* <p>Find the perfect plant for your space</p> */}
          </div>
        </section>
        <section className='productWrapper'>
          <div className='productImages'>
            <Swiper
              modules={[Autoplay, Navigation]}
              loop={true}
              speed={500}
              navigation={true}
              autoplay={{
                delay: 3000,
                pauseOnMouseEnter: true,
              }}
              grabCursor={true}
              slidesPerView={1}
              className='productSwiper'
              data-aos='zoom-in'
              data-aos-duration='1200'
              data-aos-offset='0'
            >
              {productObj?.image?.images.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className='slideWrapper'
                >
                  <img
                    src={item}
                    alt={item}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className='productDescription'>
            <h1
              data-aos='zoom-in'
              data-aos-duration='700'
              data-aos-offset='0'
            >
              {productObj.title}
            </h1>
            <p
              data-aos='zoom-in'
              data-aos-duration='700'
              data-aos-offset='0'
            >
              {productObj.description}
            </p>
            <div
              className='categoryWrapper'
              data-aos='zoom-in'
              data-aos-duration='700'
              data-aos-offset='0'
            >
              <div className='categoryItem'>
                <Link
                  // reloadDocument
                  to={`/collection/${productCategory.id}`}
                >
                  {productCategory.title}
                </Link>
              </div>
            </div>
            <h3
              data-aos='zoom-in'
              data-aos-duration='700'
              data-aos-offset='0'
            >
              {productObj.price?.toLocaleString()} сум
            </h3>
            <div
              className='orderWrapper'
              data-aos='zoom-in'
              data-aos-duration='700'
              data-aos-offset='0'
            >
              <div className='qtyInput'>
                <p>{t("blocks.catalogBlock.quantity")}:</p>
                <div
                  className='minus'
                  // onClick={() => setQty(qty > 0 ? [qty - 1, setOrderInfo({ ...orderInfo, count: qty - 1 })] : 0)}
                  onClick={() => {
                    if (qty > 0) {
                      const newQty = qty - 1;
                      setQty(newQty);
                      setOrderInfo({ ...orderInfo, count: newQty });
                    }
                  }}
                >
                  -
                </div>
                <div className='number'>{qty}</div>
                <div
                  className='plus'
                  onClick={() => [setQty(qty + 1), setOrderInfo({ ...orderInfo, count: qty + 1 })]}
                >
                  +
                </div>
              </div>
              <button onClick={() => clickOnOrderBtn()}>{t("blocks.catalogBlock.buy")}</button>
            </div>
          </div>
        </section>
        <section className='productRules'>
          <div className='container'>
            <div className='productRulesWrapper'>
              <div
                className='rule'
                data-aos='fade-right'
                data-aos-duration='700'
              >
                <h3>{t("blocks.catalogBlock.compaund")}:</h3>
                <p>{productObj.compound}</p>
              </div>
              <div
                className='rule'
                data-aos='fade-right'
                data-aos-duration='700'
              >
                <h3> {t("blocks.catalogBlock.testimony")}: </h3>
                <p>{productObj.action}</p>
              </div>
            </div>
            <div className='productRulesWrapper'>
              <div
                className='rule'
                data-aos='fade-left'
                data-aos-duration='700'
              >
                <h3> {t("blocks.catalogBlock.testimony")}:</h3>
                <p>{productObj.testimony}</p>
              </div>
              <div
                className='rule'
                data-aos='fade-left'
                data-aos-duration='700'
                style={{ marginBottom: "0" }}
              >
                <h3>{t("blocks.catalogBlock.contraction")}:</h3>
                <p>{productObj.contraction}</p>
              </div>
            </div>
          </div>
        </section>
        {productObj?.extra?.info1[0] && (
          <section
            className='imgWithTxt rightTxt'
            style={{ padding: "0" }}
          >
            <div className='imgWithTxtHeading'>
              <h2
                data-aos='fade-left'
                data-aos-duration='700'
              >
                {productObj?.extra?.info1[0]}
              </h2>
              <p
                data-aos='fade-left'
                data-aos-duration='700'
              >
                {productObj?.extra?.info1[1]}
              </p>
            </div>
            <div
              className='imgWithTxtImg'
              // style={{ backgroundImage: `url(${productDesc12})` }}
            >
              <img
                src={productDesc12}
                alt='productDesc12'
              />
            </div>
          </section>
        )}
        {productObj?.extra?.info2[0] && (
          <section
            className='imgWithTxt leftTxt logisticBlock'
            style={{ padding: "0" }}
          >
            <div className='imgWithTxtHeading logisticHeading'>
              <h2
                data-aos='fade-right'
                data-aos-duration='700'
              >
                {productObj?.extra?.info2[0]}
              </h2>
              <p
                data-aos='fade-right'
                data-aos-duration='700'
              >
                {productObj?.extra?.info2[1]}
              </p>
            </div>
            <div
              className='imgWithTxtImg'
              // style={{ backgroundImage: `url(${productDesc2})` }}
            >
              <img
                src={productDesc2}
                alt='productDesc2'
              />
            </div>
          </section>
        )}

        {/* <section className='centeredProduct'>
          <h3
            data-aos='fade-up'
            data-aos-duration='1000'
            style={{ padding: "15px" }}
          >
            {t("blocks.catalogBlock.addMaterial")}
          </h3>
          <div className='container'>
            <div className='centeredProductContainer'>
              <div className='centeredProductWrapper'>
                <div
                  className='centeredTextWrapper'
                  data-aos='zoom-in'
                  data-aos-duration='1000'
                  data-aos-offset='200'
                >
                  <p>{productObj.compound}</p>
                </div>
                <div
                  className='centeredTextWrapper'
                  data-aos='zoom-in'
                  data-aos-duration='1000'
                  data-aos-offset='200'
                >
                  <p>{productObj.action}</p>
                </div>
              </div>
              <div className='centeredProductImage'>
                <img
                  src={productObj?.image?.images[0]}
                  alt='centered product'
                  data-aos='zoom-in'
                  data-aos-duration='1000'
                />
              </div>
              <div className='centeredProductWrapper rotateRightContainer'>
                <div
                  className='centeredTextWrapper'
                  data-aos='zoom-in'
                  data-aos-duration='1000'
                  data-aos-offset='200'
                >
                  <p>{productObj.testimony}</p>
                </div>
                <div
                  className='centeredTextWrapper'
                  data-aos='zoom-in'
                  data-aos-duration='1000'
                  data-aos-offset='200'
                >
                  <p>{productObj.contraction}</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section className='sectionTabs'>
          <h3
            data-aos='fade-up'
            data-aos-duration='1000'
            style={{ padding: "15px", textAlign: "center", padding: "20px" }}
          >
            {t("blocks.catalogBlock.addMaterial")}
          </h3>
          <div className='container'>
            <div className='productTabContainer'>
              <div
                className='centeredProductImage'
                style={{ width: "500px" }}
              >
                <img
                  src={productObj?.image?.images[0]}
                  alt='centered product'
                  data-aos='zoom-in'
                  data-aos-duration='1000'
                />
              </div>
              <Tabs
                tab1={t("blocks.catalogBlock.compaund")}
                subtitle1={productObj.compound}
                tab2={t("blocks.catalogBlock.action")}
                subtitle2={productObj.action}
                tab3={t("blocks.catalogBlock.testimony")}
                subtitle3={productObj.testimony}
                tab4={t("blocks.catalogBlock.contraction")}
                subtitle4={productObj.contraction}
              />
            </div>
          </div>
        </section>

        {productObj?.extra?.info3[0] && (
          <section
            className='imgWithTxt rightTxt'
            style={{ padding: "0" }}
          >
            <div className='imgWithTxtHeading'>
              <h2
                data-aos='fade-left'
                data-aos-duration='700'
              >
                {productObj?.extra?.info3[0]}
              </h2>
              <p
                data-aos='fade-left'
                data-aos-duration='700'
              >
                {productObj?.extra?.info3[1]}
              </p>
              <div
                className='orderWrapper'
                data-aos='zoom-in'
                data-aos-duration='700'
                data-aos-offset='0'
                style={{ marginTop: "50px" }}
              >
                <div className='qtyInput'>
                  <p>{t("blocks.catalogBlock.quantity")}:</p>
                  <div
                    className='minus'
                    // onClick={() => setQty(qty > 0 ? [qty - 1, setOrderInfo({ ...orderInfo, count: qty - 1 })] : 0)}
                    onClick={() => {
                      if (qty > 0) {
                        const newQty = qty - 1;
                        setQty(newQty);
                        setOrderInfo({ ...orderInfo, count: newQty });
                      }
                    }}
                  >
                    -
                  </div>
                  <div className='number'>{qty}</div>
                  <div
                    className='plus'
                    onClick={() => [setQty(qty + 1), setOrderInfo({ ...orderInfo, count: qty + 1 })]}
                  >
                    +
                  </div>
                </div>
                <button onClick={() => clickOnOrderBtn()}>{t("blocks.catalogBlock.buy")}</button>
              </div>
              {/* <div className='btnLink'>
                <button
                  className='sendOrder'
                  onClick={() => sendOrder()}
                >
                  {t("blocks.catalogBlock.buy")}
                </button>
              </div> */}
            </div>
            <div
              className='imgWithTxtImg'
              // style={{ backgroundImage: `url(${productDesc3})` }}
            >
              <img
                src={productDesc3}
                alt='productDesc3'
              />
            </div>
          </section>
        )}
      </main>
      <Footer />
      <Outlet />
    </>
  );
}

export default Product;
