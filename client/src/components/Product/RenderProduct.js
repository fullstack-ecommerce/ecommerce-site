import React from "react";
import product1 from "../../assets/images/product1.jpg";
import "./product.css";

const RenderProduct = () => {
  return (
    <div>
      
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
  );
};

export default RenderProduct;
