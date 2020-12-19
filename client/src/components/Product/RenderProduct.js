import React from "react";
import { Link } from "react-router-dom";
import product1 from "../../assets/images/product1.jpg";
import "./product.css";

const RenderProduct = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`} key={product.id}>
      <img src={product1} alt="product 1" />
      <h4>{product.name}</h4>
      <h4>{product.description}</h4>
      <div className="rating__stars">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="far fa-star"></i>
      </div>
      <p>${product.price}</p>
    </Link>
  );
};

export default RenderProduct;
