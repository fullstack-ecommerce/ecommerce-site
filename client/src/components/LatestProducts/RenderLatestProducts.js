import React from "react";
import product5 from "../../assets/images/product5.jpg";
import product6 from "../../assets/images/product6.jpg";
import product7 from "../../assets/images/product7.jpg";
import product8 from "../../assets/images/product8.jpg";
import product9 from "../../assets/images/product9.jpg";
import product10 from "../../assets/images/product10.jpg";
import product11 from "../../assets/images/product11.jpg";
import product12 from "../../assets/images/product12.jpg";
import "./latestProducts.css";

const RenderLatestProducts = () => {
  return (
    <div className="small__container">
      <h2 className="featured__title">Latest Products</h2>
      <div className="row__three__container">
        <div className="column__three">
          <img src={product5} alt="product 5" />
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
          <img src={product6} alt="product 6" />
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
          <img src={product7} alt="product 7" />
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
          <img src={product8} alt="product 8" />
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

        <div className="column__three">
          <img src={product9} alt="product 9" />
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
          <img src={product10} alt="product 10" />
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
          <img src={product11} alt="product 11" />
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
          <img src={product12} alt="product 12" />
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

export default RenderLatestProducts;
