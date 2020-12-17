import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../../components/Product";
import { listProducts } from "../../state/actions/productActions";
import "./productsListScreen.css";

const RenderProductsListScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  console.log(products)

  return (
    <div className="small__container">
      <div className="row__container">
        <h2 className="featured__title">All Products</h2>
        {loading && <h3>Loading...</h3>}
        {error && <h3>{error}</h3>}
        <select name="filter" id="filter">
          <option value="">Default Sorting</option>
          <option value="">Sort by price</option>
          <option value="">Sort by popularity</option>
          <option value="">Sort by rating</option>
          <option value="">Sort by sale</option>
        </select>
      </div>

      <div className="row__container">
        {products.map((product) => {
          return (
           
              <div className="column__three">
                <Product product={product} />
              
              </div>
         
          );
        })}
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
