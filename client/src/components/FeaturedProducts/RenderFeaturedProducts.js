import React from "react";
import product1 from "../../assets/images/product1.jpg";
import product2 from "../../assets/images/product2.jpg";
import product3 from "../../assets/images/product3.jpg";
import product4 from "../../assets/images/product4.jpg";
import "./featuredProducts.css";

const RenderFeaturedProducts = () => {
  return (
    <div className="small__container">
      <h2 className="featured__title">Featured Products</h2>
      <div className="row__three__container">
        <div className="column__three">
          <img src={product1} alt="product 1" />
          <h4>Red Printed T-shirt</h4>
          <div className="rating__stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
          </div>
          <p>$50.00</p>
        </div>

        <div className="column__three">
          <img src={product2} alt="product 2" />
          <h4>Black Shoes</h4>
          <div className="rating__stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
          </div>
          <p>$70.00</p>
        </div>

        <div className="column__three">
          <img src={product3} alt="product 3" />
          <h4>Grey Pants</h4>
          <div className="rating__stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
            <i className="far fa-star"></i>
          </div>
          <p>$60.00</p>
        </div>

        <div className="column__three">
          <img src={product4} alt="product 4" />
          <h4>Blue Printed T-shirt</h4>
          <div className="rating__stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
          </div>
          <p>$50.00</p>
        </div>
      </div>
    </div>
  );
};

export default RenderFeaturedProducts;
