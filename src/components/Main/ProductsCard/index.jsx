import React from "react";
import "./styles.scss";

const ProductsCard = ({ cardImage, imageAlt, title, description }) => {
  return (
    <div className='benefitsCardMobile'>
      <div className='productsCardInner'>
        <div className='flipCardFront'>
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
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
