import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../state/actions/cartActions";
import gallery1 from "../../assets/images/gallery1.jpg";
import gallery2 from "../../assets/images/gallery2.jpg";
import gallery3 from "../../assets/images/gallery3.jpg";
import gallery4 from "../../assets/images/gallery4.jpg";
import product1 from "../../assets/images/product1.jpg";
import product2 from "../../assets/images/product2.jpg";
import product3 from "../../assets/images/product3.jpg";
import product4 from "../../assets/images/product4.jpg";
import "./productScreen.css";

const initialState = {
  product_name: "",
  price: "",
  //size: "",
};

const RenderProductScreen = () => {
  const [quantity, setQuantity] = useState(0);
  const [size, setSize] = useState("");

  const [productToAdd, setProductToAdd] = useState(initialState);
  const [data, setData] = useState({});

  const dispatch = useDispatch();

  const { id } = useParams();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  console.log(userInfo);
  console.log("id", id);

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    const productData = products.find((product) => product.id === Number(id));
    setData(productData);
    console.log("object");
  }, [data]);

  console.log(data);

  const addToCartHandler = (e) => {
    e.preventDefault();
    // need to work on this
    const newObj = {
      ...initialState,
      user_id: 1,
      product_price: data.price,
      product_name: data.name,
      product_img: data.images[0].img_url,
      quantity,
    };
    console.log("new object", newObj);
    console.log("from addToCart function");

    dispatch(addToCart(newObj));
  };

  return (
    <>
      <>
        <div className="small__container single__product">
          <Link to="/products">
            <button>Go Back</button>
          </Link>
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
              <form onSubmit={addToCartHandler}>
                <h1>{data.name}</h1>
                <h4>${data.price}</h4>
                <select onChange={(e) => setSize(e.target.value)}>
                  <option>Select Size</option>
                  <option value="xxl">XXL</option>
                  <option value="xl">XL</option>
                  <option value="large">Large</option>
                  <option value="medium">Medium</option>
                  <option value="small">Small</option>
                </select>
                <input
                  type="number"
                  value={quantity}
                  name="quantity"
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <button className="add__button" type="submit">
                  Add To Cart
                </button>
                <h3>
                  Product Details <i className="fas fa-indent"></i>
                </h3>
                <br />
                <p>{data.description}</p>
              </form>
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
    </>
  );
};

export default RenderProductScreen;
