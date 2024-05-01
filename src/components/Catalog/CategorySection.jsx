import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import productItem from "../../images/productItem.png";
import rightArrow from "../../images/sliderArrow.png";
import { APP_ROUTES } from "../../router/Route";

function CategorySection({ category, getProducts }) {
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts(category.id);
        setCategoryProducts(products);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, [category.id, getProducts]);

  return categoryProducts.length === 0 ? null : (
    <section className="catalogProducts" key={category.id}>
      <div className="catalogHeader">
        <div className="collectionName">{category.title}</div>
        <div className="collectionLine"></div>
        <div className="collectionLink">
          <Link
            reloadDocument
            to={`${APP_ROUTES.WELCOME}collection/${category.id}`}
          >
            посмотреть все
            <img src={rightArrow} alt={rightArrow} />
          </Link>
        </div>
      </div>
      <div className="catalogBody">
        {categoryProducts.map((product) => (
          <div className="productCard" key={product.id}>
            <div className="productCardBg">
              <div className="bg1"></div>
              <div className="bg2"></div>
            </div>
            <img
              src={product.image.images[0]}
              className="imgBefore"
              width="400px"
              height="400px"
              alt={product.image}
            />
            {product.image.images[1] && (
              <img
                src={product.image.images[1]}
                className="imgAfter"
                width="400px"
                height="400px"
                alt={product.image}
              />
            )}
            <div className="price">
              Цена: {product.price?.toLocaleString()} сум
            </div>
            <h3>{product.title}</h3>
            <p>
              {product.description.slice(0, 60)}
              {product.description.length > 60 && "..."}
            </p>
            <Link reloadDocument to={`/product/${product.id}`}>
              Подробнее
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
