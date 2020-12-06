import React from "react";
import category1 from "../assets/images/category1.jpg";
import category2 from "../assets/images/category2.jpg";
import category3 from "../assets/images/category3.jpg";
import "./categories.css";

const Categories = () => {
  return (
    <div className="categories__container">
      <div className="small__container">
        <h2 className="featured__title">Categories</h2>
        <div className="row__container">
          <div className="column__two">
            <img src={category1} alt="image one" />
          </div>
          <div className="column__two">
            <img src={category2} alt="image two" />
          </div>
          <div className="column__two">
            <img src={category3} alt="image three" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
