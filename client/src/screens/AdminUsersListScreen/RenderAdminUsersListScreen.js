import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { listUsers } from "../../state/actions/userActions";
import "./adminUsersListScreen.css";

const RenderAdminUsersListScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo.role) {
      dispatch(listUsers());
    } else {
      history.push("/login");
    }
  }, [dispatch, userInfo, history]);

  const deleteHandler = (id) => {
    console.log("hello from deletehandler");
    // if (window.confirm("Are you sure")) {
    //   dispatch(deleteProduct(id));
    // }
  };

  return (
    <>
      {loading ? (
        <h3>Loading...</h3>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div className="small__container">
          <div className="row__container">
            <Row className="align-items-center">
              <Col>
                <h1>Admin All Users</h1>
              </Col>
              <Col className="text-right">
                <LinkContainer to="/admin/product/add">
                  <Button className="my-3">
                    <i className="fas fa-plus"></i> Add Product
                  </Button>
                </LinkContainer>
              </Col>
            </Row>
          </div>
          <div className="row__container">
            <Table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>USERNAME</th>
                  <th>EMAIL</th>
                  <th>ROLE</th>
                  <th>EDIT</th>
                  <th>DELETE</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.is_admin}</td>
                    <td>
                      <LinkContainer to={`/admin/edit/${user.id}`}>
                        <Button variant="light" className="btn-sm">
                          <i className="fas fa-edit"></i>
                        </Button>
                      </LinkContainer>
                    </td>
                    <td>
                      <Button
                        variant="danger"
                        className="btn-lg"
                        onClick={() => deleteHandler(user.id)}
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
      )}
    </>
  );
};

export default RenderAdminUsersListScreen;
