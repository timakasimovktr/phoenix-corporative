import React, { useState, useEffect } from "react";
import "./Catalog.scss";

import CategorySection from "./CategorySection";
import { Outlet, Link } from "react-router-dom";
import { APP_ROUTES } from "../../router/Route";
import axios from "axios";

//images
import beautifulMan from "../../images/beautiful_man.jpg";
import bottlesOfWater from "../../images/bottles_of_water.jpg";
import bottleOfWater from "../../images/bottle_of_water.jpg";

//sections
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Catalog() {
  const [categories, setCategories] = useState([]);
  const [superCategories, setSuperCategories] = useState([]);
  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(APP_ROUTES.URL + "/category");
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSuperCategories = async () => {
      try {
        const response = await axios.get(APP_ROUTES.URL + "/super-category");
        setSuperCategories(response.data.superCategories);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
    fetchSuperCategories();
  }, []);

  const toggleCategory = () => {
    const categoryBtns = document.querySelectorAll(".categoryBtn");
    categoryBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        categoryBtns.forEach((i) => {
          i.parentElement.classList.add("closeCategory");
        });
        btn.parentElement.classList.remove("closeCategory");
      });
    });
  };

  toggleCategory();

  const toggleCategoryMenu = () => {
    const categoryWrapper = document.querySelector(".catalogContainer");
    categoryWrapper.classList.toggle("openCategoryMenu");
  };

  const getProducts = async (categoryId) => {
    const getProductsUrl = `${APP_ROUTES.URL}/products/category/${categoryId}`;
    try {
      const response = await axios.get(getProductsUrl);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (categories.length > 0 && superCategories.length > 0) {
      setIsLoader(false);
    }
  }, [categories, superCategories]);

  return (
    <>
      <Header hiddenLoader={isLoader} />
      <main>
        <div className="shopTextWrapper">
          <div className="container">
            <h3>SHOP</h3>
            <div className="shopline"></div>
            <p>Find the perfect plant for your space</p>
          </div>
        </div>
        <div className="container catalogContainer">
          <div className="desktopCategories">
            <div className="mainCategoryLink">
              <Link reloadDocument to={APP_ROUTES.CATALOG}>Все Категории</Link>
            </div>
            <div className="mainCategoryLink promo">
              <Link reloadDocument to={APP_ROUTES.CATALOG}>Новинки</Link>
            </div>
            {superCategories.map((superCategory, index) => (
              <div
                className={
                  index === 1
                    ? "categoryWrapper closeCategory"
                    : "categoryWrapper"
                }
                key={superCategory.id}
              >
                <div className="categoryBtn">
                  {superCategory.title}{" "}
                  <div className="categoryDownArrow"></div>
                </div>
                <div className="categoryContent">
                  <div>
                    {superCategory.categories.map((category) => (
                      <Link
                        to={`${APP_ROUTES.WELCOME}collection/${category.id}`}
                        reloadDocument
                        key={category.id}
                      >
                        {category.title} <div>{category.products.length}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mobileCategoriesBtn" onClick={toggleCategoryMenu}>
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Iconly/Light/Filter">
                  <g id="Filter">
                    <path
                      id="Stroke 1"
                      d="M2 5C2 4.44772 2.44772 4 3 4H21C21.5523 4 22 4.44772 22 5C22 5.55228 21.5523 6 21 6H3C2.44772 6 2 5.55228 2 5Z"
                      stroke="#333333"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Stroke 3"
                      d="M2 19C2 18.4477 2.44772 18 3 18H15C15.5523 18 16 18.4477 16 19C16 19.5523 15.5523 20 15 20H3C2.44772 20 2 19.5523 2 19Z"
                      stroke="#333333"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Stroke 5"
                      d="M2 12C2 11.4477 2.44772 11 3 11H18C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H3C2.44772 13 2 12.5523 2 12Z"
                      stroke="#333333"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div className="catalogWrapper">
            <section className="catalogBanner">
              <div className="catalogBigBanner">
                <img src={bottleOfWater} alt={bottleOfWater} />
              </div>
              <div className="catalogSmallBannerWrapper">
                <div className="smallBanner">
                  <img src={beautifulMan} alt={beautifulMan} />
                </div>
                <div className="smallBanner">
                  <img src={bottlesOfWater} alt={bottlesOfWater} />
                </div>
              </div>
            </section>

            {categories.map((category) => (
              <CategorySection
                key={category.id}
                category={category}
                getProducts={getProducts}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <Outlet />
    </>
  );
}

export default Catalog;
