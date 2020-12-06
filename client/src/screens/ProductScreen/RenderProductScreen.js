import React from "react";
import gallery1 from "../../assets/images/gallery1.jpg";
import gallery2 from "../../assets/images/gallery2.jpg";
import gallery3 from "../../assets/images/gallery3.jpg";
import gallery4 from "../../assets/images/gallery4.jpg";
import product1 from "../../assets/images/product1.jpg";
import product2 from "../../assets/images/product2.jpg";
import product3 from "../../assets/images/product3.jpg";
import product4 from "../../assets/images/product4.jpg";
import "./productScreen.css";

const RenderProductScreen = () => {
  return (
    <>
      <div className="small__container single__product">
        <div className="row__container">
          <div className="column__one">
            <img src={gallery1} alt="one" width="100%" />

            {/* ?model popup to enlarge the smaller images? */}
            <div className="small__img__row">
              <div className="small__img__col">
                <img src={gallery1} alt="one" width="100%" />
              </div>
              <div className="small__img__col">
                <img src={gallery2} alt="one" width="100%" />
              </div>
              <div className="small__img__col">
                <img src={gallery3} alt="one" width="100%" />
              </div>
              <div className="small__img__col">
                <img src={gallery4} alt="one" width="100%" />
              </div>
            </div>
          </div>
          <div className="column__one">
            <p>Home / T-Shirt</p>
            <h1>Red Printed T-Shirt by HRX</h1>
            <h4>$50.00</h4>
            <select>
              <option>Select Size</option>
              <option>XXL</option>
              <option>XL</option>
              <option>Large</option>
              <option>Medium</option>
              <option>Small</option>
            </select>
            <input type="number" />
            <button className="add__button">Add To Cart</button>
            <h3>
              Product Details <i className="fas fa-indent"></i>
            </h3>
            <br />
            <p>
              Give your summer wardrobe a style upgrade with the HRX Men's
              Active T-shirt. Team it with a pair of shorts for your morning
              workout or a denims for an evening out with the guys.
            </p>
          </div>
        </div>
      </div>

      <div className="small__container">
        <div className="row__container row__two">
          <h2>Related Products</h2>
          <p>View More</p>
        </div>
      </div>

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
    </>
  );
};

export default RenderProductScreen;
