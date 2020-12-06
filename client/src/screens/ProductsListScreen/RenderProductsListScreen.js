import React from "react";
import { Product } from "../../components/Product";
import "./productsListScreen.css";

const RenderProductsListScreen = () => {
  return (
    <div className="small__container">
      <div className="row__container">
        <h2 className="featured__title">All Products</h2>
        <select name="filter" id="filter">
          <option value="">Default Sorting</option>
          <option value="">Sort by price</option>
          <option value="">Sort by popularity</option>
          <option value="">Sort by rating</option>
          <option value="">Sort by sale</option>
        </select>
      </div>
      <div className="row__container">
        <div className="column__three">
          <Product />
        </div>
        <div className="column__three">
          <Product />
        </div>
        <div className="column__three">
          <Product />
        </div>
        <div className="column__three">
          <Product />
        </div>
      </div>
      {/* pagination button*/}
      <div className="page__btn">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>&#8594;</span>
      </div>
    </div>
  );
};

export default RenderProductsListScreen;
