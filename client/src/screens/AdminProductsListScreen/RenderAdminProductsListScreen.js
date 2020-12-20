import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {
  listProducts,
  deleteProduct,
} from "../../state/actions/productActions";
import "./adminProductsListScreen.css";

const RenderAdminProductsListScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    success: successDelete,
  } = productDelete;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch, successDelete]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteProduct(id));
    }
  };

  return (
    <div className="small__container">
      <div className="row__container">
        <Row className="align-items-center">
          <Col>
            <h1>Admin All Products</h1>
          </Col>
          <Col className="text-right">
            <LinkContainer to="/admin/product/add">
              <Button className="my-3">
                <i className="fas fa-plus"></i> Add Product
              </Button>
            </LinkContainer>
          </Col>
        </Row>
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
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>DESCRIPTION</th>
              <th>PRICE</th>
              <th>EDIT</th>
              <th>DELETE</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>
                  <LinkContainer to={`/admin/product/edit/${product.id}`}>
                    <Button variant="light" className="btn-sm">
                      <i className="fas fa-edit"></i>
                    </Button>
                  </LinkContainer>
                </td>
                <td>
                  <Button
                    variant="danger"
                    className="btn-lg"
                    onClick={() => deleteHandler(product.id)}
                  >
                    <i className="fas fa-trash"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
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

export default RenderAdminProductsListScreen;
