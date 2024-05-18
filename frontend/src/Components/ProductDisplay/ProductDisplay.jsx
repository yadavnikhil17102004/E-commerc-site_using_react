import React from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";

const ProductDisplay = (props) => {
  const { product } = props;
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-prices-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-prices-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-age">
          Product Age:<span>{product.age} years</span>
        </div>
        <div className="productdisplay-right-discription">
          Explore our collection of delightful cats, each with their own unique
          charm and personality. From adventurous tabbies to elegant companions,
          there's a feline friend waiting to bring warmth and joy to your home.
          Come meet them and find your purrfect match today!
        </div>
        <button>ADD TO BASKET</button>
        <p className="productdisplay-right-category">
          <span>Category:</span>=====
        </p>
        <p className="productdisplay-right-category">
          <span>Tag:</span>=====
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
