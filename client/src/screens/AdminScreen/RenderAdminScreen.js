import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { createProduct } from "../../state/actions/productActions";

import image1 from "../../assets/images/image1.png";
import "./adminScreen.css";

const RenderAdminScreen = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [sizes, setSizes] = useState([]);
  const [images, setImages] = useState([]);

  const dispatch = useDispatch();
  const history = useHistory();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {}, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      createProduct({
        name,
        price,
        description,
        sizes: [sizes],
        images: [images],
      })
    );
  };

  return (
    <div className="login__container">
      <div className="row__container">
        <div className="column__one logo__image">
          <img src={image1} alt="logo" />
        </div>

        <div className="column__one">
          <div className="form__container">
            <div className="form__btn">
              <h3>Add New Product</h3>
              <hr id="indicator" />
              {error && <h6>{error}</h6>}
              {loading && <h3>loading...</h3>}
            </div>

            <form onSubmit={submitHandler}>
              <input
                type="name"
                placeholder="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="description"
                placeholder="Product Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

              <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />

              <input
                type="sizes"
                placeholder="Sizes"
                value={sizes}
                onChange={(e) => setSizes(e.target.value)}
              />

              <input
                type="images"
                placeholder="Images"
                value={images}
                onChange={(e) => setImages(e.target.value)}
              />
              <button type="submit" className="login__btn">
                Add Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenderAdminScreen;
