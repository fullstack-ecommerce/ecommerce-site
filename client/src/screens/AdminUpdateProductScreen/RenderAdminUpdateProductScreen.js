import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import {
  listProductDetails,
  updateProduct,
} from "../../state/actions/productActions";
import { PRODUCT_UPDATE_RESET } from "../../state/constants/productConstants";

import image1 from "../../assets/images/image1.png";
import "./adminUpdateProductScreen.css";

const RenderAdminUpdateProductScreen = () => {
  const [value, setValue] = useState({
    name: "",
    description: "",
    price: "",
  });

  const { id } = useParams();

  const dispatch = useDispatch();
  const history = useHistory();

  const productDetails = useSelector((state) => state.productDetails);
  const { product } = productDetails;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  useEffect(() => {
    if (product) {
      const { name, description, price } = product;
      setValue({ name, description, price });
    }
  }, [product]);

  useEffect(() => {
    dispatch(listProductDetails(id));

    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      history.push("/admin/products");
    }
  }, [dispatch, history, successUpdate, id]);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(updateProduct(id, value));
  };

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  return (
    <div className="login__container">
      <div className="row__container">
        <div className="column__one logo__image">
          <img src={image1} alt="logo" />
        </div>

        <div className="column__one">
          <Link to="/admin/products">
            <Button>Go Back</Button>
          </Link>
          <div className="form__container">
            <div className="form__btn">
              <h3>Update Product</h3>
              <hr id="indicator" />
              {loadingUpdate && <h3>Loading...</h3>}
              {errorUpdate && <h3>{errorUpdate}</h3>}
            </div>

            <form onSubmit={submitHandler}>
              <input
                type="name"
                placeholder="Product Name"
                value={value.name}
                name="name"
                onChange={handleChange}
              />

              <input
                type="text"
                placeholder="Product Description"
                value={value.description}
                name="description"
                onChange={handleChange}
              />

              <input
                type="number"
                placeholder="Price"
                value={value.price}
                name="price"
                onChange={handleChange}
              />

              <button type="submit" className="login__btn">
                Update Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenderAdminUpdateProductScreen;
