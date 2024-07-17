import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ProductsCard = ({ cardImage, imageAlt, title, description, link }) => {
  const { t } = useTranslation();
  return (
    <div className='benefitsCardMobile'>
      <div className='productsCardInner'>
        <Link
          to={link}
          className='flipCardFront'
        >
          <div className='boxImage'>
            <img
              src={cardImage}
              alt={imageAlt}
            />
          </div>
          <div className='cardTitle'>
            <h4 className='title'>{title}</h4>
          </div>
          <div className='cardText'>
            <p className='text'>{description}</p>
          </div>
          <div className='cardText'>
            <Link
              className='cardLink'
              to={link}
            >
              {t("blocks.referalBlock.buttonText")}
            </Link>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductsCard;
